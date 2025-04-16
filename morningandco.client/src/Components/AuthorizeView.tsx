import React, { useState, useEffect, createContext } from 'react';
import { Navigate } from 'react-router-dom';

interface User {
    email: string;
}

const emptyUser: User = { email: "" };
const UserContext = createContext<User>(emptyUser);

function AuthorizeView(props: { children: React.ReactNode }) {
    const [authorized, setAuthorized] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<User>(emptyUser);

    useEffect(() => {
        let retryCount = 0;
        const maxRetries = 10;
        const delay: number = 1000;

        const wait = (delay: number) =>
            new Promise((resolve) => setTimeout(resolve, delay));

        const fetchWithRetry = async (url: string, options: RequestInit): Promise<Response> => {
            try {
                const response = await fetch(url, options);

                if (response.status === 200) {
                    console.log("Authorized");
                    const data: User = await response.json(); // <-- typed as User
                    setUser({ email: data.email });
                    setAuthorized(true);
                    return response;
                } else if (response.status === 401) {
                    console.log("Unauthorized");
                    return response;
                } else {
                    throw new Error("" + response.status);
                }
            } catch (error) {
                retryCount++;
                if (retryCount > maxRetries) {
                    throw error;
                } else {
                    await wait(delay);
                    return fetchWithRetry(url, options);
                }
            }
        };

        fetchWithRetry("/pingauth", {
            method: "GET",
        })
            .catch((error) => {
                console.error(error instanceof Error ? error.message : error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (authorized) {
        return (
            <UserContext.Provider value={user}>
                {props.children}
            </UserContext.Provider>
        );
    } else {
        return <Navigate to="/login" />;
    }
}

export function AuthorizedUser(props: { value: string }) {
    const user = React.useContext(UserContext);

    if (props.value === "email") {
        return <>{user.email}</>;
    }

    return null;
}

export default AuthorizeView;
