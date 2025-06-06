import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar.tsx";
import Footer from "../Components/Footer.tsx";


function Register() {
    // state variables for email and passwords
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Firstname, setFirstName] = useState("");
    const [Surname, setSurname] = useState("");
    const [DateOfBirth, setDob] = useState("");
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
        if (name === "Firstname") setFirstName(value);
        if (name === "Surname") setSurname(value);
        if (name === "DateOfBirth") setDob(value);
        if (name === "username") setUsername(value);
        if (name === "confirmPassword") setConfirmPassword(value);
    };

    // handle submit event for the form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // validate email and passwords

        if (!email || !password || !confirmPassword || !username || !Firstname || !Surname ) { 
            setError("Please fill in all fields.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
        } else if (password !== confirmPassword) {
            setError("Passwords do not match.");

        } else {
            // clear error message
            setError("");
            console.log(typeof DateOfBirth, DateOfBirth);
            // post data to the /register api
            fetch("api/Account/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Email: email,
                    Password: password,
                    Username: username,
                    FirstName: Firstname,
                    Surname: Surname,
                    DateOfBirth: DateOfBirth, 

                }),
            })
                .then(async (response) => {
                    const text = await response.text(); // read raw response text
                    console.log("Response status:", response.status);
                    console.log("Raw response text:", text);

                    let data;
                    try {
                        data = JSON.parse(text); // try parse JSON
                    } catch {
                        data = null;
                    }

                    if (response.ok) {
                        setError("Successful register.");
                    } else {
                        setError(`Error registering: ${data?.message || text || "Unknown error"}`);
                    }
                    if (!Firstname.trim()) {
                        setError("First name is required.");
                        return;
                    }
                    if (!Surname.trim()) {
                        setError("Surname is required.");
                        return;
                    }
                })
                .catch((error) => {
                    console.error("Network error:", error);
                    setError("Error registering.");
                });
        }
    };

    return (
        <>
            <NavBar />

            <div className="register-container">

                <div className="form-outline mb-4">
                    <h1 className="text-register"> Register</h1>

                    <form onSubmit={handleSubmit}>

                        <div>
                            <label className="form-label" htmlFor="Firstname">First Name </label>

                            <input className="form-control"
                                type="text"
                                id="Firstname"
                                name="Firstname"
                                value={Firstname}
                                onChange={handleChange}
                            />
                        </div>



                        <div>
                            <label className="form-label" htmlFor="Surname">Surname</label>

                            <input className="form-control"
                                type="text"
                                id="Surname"
                                name="Surname"
                                value={Surname}
                                onChange={handleChange}
                            />
                        </div>



                        <div>
                            <label className="form-label" htmlFor="DateOfBirth">Date of Birth</label>

                            <input className="form-control"
                                type="date"
                                id="DateOfBirth"
                                name="DateOfBirth"
                                value={DateOfBirth}
                                onChange={handleChange}
                            />
                        </div>



                        <div>

                            <label className="form-label" htmlFor="username">Username </label>

                            <input className="form-control"
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={handleChange}
                            />
                        </div>

                        <div >

                            <label className="form-label" htmlFor="email">Email </label>

                            <input className="form-control"
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="form-label" htmlFor="password">Password </label>

                            <input className="form-control"
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="form-label" htmlFor="confirmPassword">Confirm Password</label></div><div>

                            <input className="form-control"
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={handleChange}
                            />
                        </div>



                        <div>
                            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn-register btn btn-dark btn-block mb-4 w-100">Register</button>

                        </div>

                        <div>
                            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-block mb-4 w-100" onClick={handleLoginClick}>Go to Login</button>
                        </div>
                    </form>

                    {error && <p className="error">{error}</p>}
                </div>

            </div>

            <Footer />
        </>
    );
}

export default Register;

