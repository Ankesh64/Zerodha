// import React from 'react';

// function Signup() {
//     return ( 
//         <h1>Signup</h1>
//      );
// }

// export default Signup;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Signup.css"

const Signup = () => {
    
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });

    const { email, password, username } = inputValue;

    // Updates state when user types in any input field
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    };

    const handleError = (err) => toast.error(err, { position: "top-center" });
    const handleSuccess = (msg) => toast.success(msg, { position: "top-center" });

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page refresh on form submit
        try {
            const { data } = await axios.post(
                "https://zerodha-backend-ajq9.onrender.com/signup",
                { ...inputValue },
                { withCredentials: true } // sends/receives cookies
            );
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                // setTimeout(() => navigate("/"), 1000); // redirect to home after 1s
                setTimeout(() => {
                    window.location.href = "http://localhost:3000";
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }
        // Clear form after submit
        setInputValue({ email: "", password: "", username: "" });
    };

    //   return (
    //     <div className="form_container">
    //       <h2>Signup Account</h2>
    //       <form onSubmit={handleSubmit}>
    //         <div>
    //           <label>Email</label>
    //           <input type="email" name="email" value={email}
    //             placeholder="Enter your email" onChange={handleOnChange} />
    //         </div>
    //         <div>
    //           <label>Username</label>
    //           <input type="text" name="username" value={username}
    //             placeholder="Enter your username" onChange={handleOnChange} />
    //         </div>
    //         <div>
    //           <label>Password</label>
    //           <input type="password" name="password" value={password}
    //             placeholder="Enter your password" onChange={handleOnChange} />
    //         </div>
    //         <button type="submit">Submit</button>
    //         <span>Already have an account? <Link to="/login">Login</Link></span>
    //       </form>
    //       <ToastContainer />
    //     </div>
    //   );
    // };



    return (
        <div className="z-page">
            <div className="z-left">
                <img
                    src="https://zerodha.com/static/images/logo.svg"
                    alt="Zerodha"
                    className="z-logo"
                />
                <h1>Open a free demat &amp; trading account online</h1>
                <ul>
                    <li>Free equity investments</li>
                    <li>₹20 per order for F&amp;O, Currency &amp; Commodity</li>
                    <li>Free direct mutual funds</li>
                    <li>Instant paperless online account opening</li>
                </ul>
                <p className="z-trust">Trusted by 1.5 crore+ investors</p>
            </div>

            <div className="z-right">
                <div className="z-card">
                    <h2>Create your account</h2>
                    <p className="z-sub">
                        Already have an account? <Link to="/login">Login here</Link>
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="z-field">
                            <label>Email address</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="yourname@email.com"
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className="z-field">
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                placeholder="Choose a username"
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className="z-field">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Create a strong password"
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <button type="submit" className="z-btn">
                            Create account
                        </button>
                    </form>
                    <p className="z-terms">
                        By continuing, you agree to Zerodha's{" "}
                        <a href="/">Terms &amp; Conditions</a> and{" "}
                        <a href="/">Privacy Policy</a>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};
export default Signup;