import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"; 

const SignUp = () => {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const navigate = useNavigate(); 

    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.username && formData.email && formData.password) {
            alert(`Sign-up Successful! Welcome, ${formData.username}`);
            navigate("/Home"); 
        } else {
            alert("Please fill all fields.");
        }
    };

    return (
        <div>
            <nav className="navbar">
                <a href="/Home">← Back to Home</a>
            </nav>

            <div className="form-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <label style={{ width: "80px" }}>Username:</label>
        <input type="text" name="username" placeholder="Full Name" value={formData.username} onChange={handleChange} required />
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <label style={{ width: "80px" }}>Email:</label>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <label style={{ width: "80px" }}>Password:</label>
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
    </div>
    <button type="submit">Sign Up</button>
</form>
                <p>Already have an account? <a href="/SignIn">Sign In</a></p>
            </div>
        </div>
    );
};

export default SignUp;
