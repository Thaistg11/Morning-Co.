import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register() {
    // state variables for email and passwords
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [dob, setDob] = useState("");
    const [username, setUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    // state variable for error messages
    const [error, setError] = useState("");

    const handleLoginClick = () => {
        navigate("/login");
    }


    // handle change events for input fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
        if (name === "name") setName(value);
        if (name === "surname") setSurname(value);
        if (name === "dob") setDob(value);
        if (name === "username") setUsername(value);
        if (name === "confirmPassword") setConfirmPassword(value);
    };

    // handle submit event for the form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // validate email and passwords
        if (!email || !password || !confirmPassword) {
            setError("Please fill in all fields.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
        } else if (password !== confirmPassword) {
            setError("Passwords do not match.");
        } else {
            // clear error message
            setError("");
            // post data to the /register api
            fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            })
                //.then((response) => response.json())
                .then((data) => {
                    // handle success or error from the server
                    console.log(data);
                    if (data.ok)
                        setError("Successful register.");
                    else
                        setError("Error registering.");

                })
                .catch((error) => {
                    // handle network error
                    console.error(error);
                    setError("Error registering.");
                });
        }
    };

    return (
        <div className="containerbox">
            <h3>Register</h3>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                </div><div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label></div><div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="name">First Name:</label>
                </div>
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="surname">Surname:</label>
                </div>
                <div>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        value={surname}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="dob">Date of Birth:</label>
                </div>
                <div>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={dob}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="username">Username:</label>
                </div>
                <div>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label></div><div>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Register</button>

                </div>
                <div>
                    <button onClick={handleLoginClick}>Go to Login</button>
                </div>
            </form>

            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default Register;

