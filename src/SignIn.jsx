import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"; 

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    
    const handleSignIn = (e) => {
        e.preventDefault(); 

        if (email && password) {
            <h1 style={{ fontSize: "3rem", color: "#2d7a4c" }}>Login Successful!</h1>
            
            alert("Login Successful!");
            navigate("/Home"); 
        } else {
            alert("Invalid login details. Please try again.");
        }
    };

    return (
        <div>
            <nav className="navbar">
                <a href="/Home">← Back to Home</a>
            </nav>

            <div className="form-container">
                <h2>Sign In</h2>
                <form onSubmit={handleSignIn}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Sign In</button>
                </form>
                <p>New here? <a href="/SignUp">Create an account</a></p>
            </div>
        </div>
    );
};

export default SignIn;