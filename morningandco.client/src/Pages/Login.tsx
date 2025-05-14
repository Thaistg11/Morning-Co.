import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar.tsx";
import Footer from "../Components/Footer.tsx";


function Login() {
    // state variables for email and passwords
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberme, setRememberme] = useState<boolean>(false);
    // state variable for error messages
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    // handle change events for input fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
        if (name === "rememberme") setRememberme(e.target.checked);
    };

    const handleRegisterClick = () => {
        navigate("/register");
    }

    // handle submit event for the form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // validate email and passwords
        if (!email || !password) {
            setError("Please fill in all fields.");
        } else {
            // clear error message
            setError("");
            // post data to the /register api

            let loginurl = "";
            if (rememberme == true)
                loginurl = "/login?useCookies=true";
            else
                loginurl = "/login?useSessionCookies=true";

            fetch(loginurl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            })

                .then((data) => {
                    // handle success or error from the server
                    console.log(data);
                    if (data.ok) {
                        setError("Successful Login.");
                        window.location.href = '/';
                    }
                    else
                        setError("Error Logging In.");

                })
                .catch((error) => {
                    // handle network error
                    console.error(error);
                    setError("Error Logging in.");
                });
        }
    };

    return (
        <>
            <NavBar />
            <div className="login-container">
  
                 
               
                <form onSubmit={handleSubmit}>

                    <div className="form-outline mb-4">
                        <h1 className="text-login"> Log in</h1>

                        <label className="form-label" htmlFor="email">Email</label>
                        
                        <input className="form-control"
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>

               
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">Password</label>
                    
                        <input className="form-control"
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                            <div className="form-check">
                                <input className="form-check-input"
                                    type="checkbox"
                                    id="rememberme"
                                    name="rememberme"
                                    checked={rememberme}
                                    onChange={handleChange} /><span>Remember Me</span>
                            </div>
                        </div>
                    </div>


                    <div>
                           
                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-block mb-4 w-100">Login</button> 
                        
                    </div>

                    <div className="text-center">
                        <p>Not a member? <a onClick={handleRegisterClick}>Register</a></p>
                        
                    </div>


                </form>
                {error && <p className="error">{error}</p>}
                    </div>


            <Footer />
        </>
         
    );
}

export default Login;