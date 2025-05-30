// AuthContext.tsx
import React, { createContext, useEffect, useState, useContext } from "react";

interface User {
    email: string;
}

interface AuthContextType {
    user: User | null;
    authorized: boolean;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    authorized: false,
    loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [authorized, setAuthorized] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let retryCount = 0;
        const maxRetries = 10;
        const delay = 1000;

        const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

        const fetchWithRetry = async (): Promise<void> => {
            try {
                const response = await fetch("/pingauth", { method: "GET" });

                if (response.status === 200) {
                    const data: User = await response.json();
                    setUser(data);
                    setAuthorized(true);
                } else if (response.status === 401) {
                    setUser(null);
                    setAuthorized(false);
                } else {
                    throw new Error(`Unexpected status: ${response.status}`);
                }
            } catch (error) {
                if (retryCount++ < maxRetries) {
                    await wait(delay);
                    return fetchWithRetry();
                } else {
                    console.error("Auth check failed:", error);
                    setAuthorized(false);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchWithRetry();
    }, []);

    return (
        <AuthContext.Provider value={{ user, authorized, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
