import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"; 

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
          
            <nav className="navbar">
                <div className="logo">Vanage</div>
                <ul>
                    <li><a onClick={() => navigate("/SignIn")}>Sign In</a></li>
                    <li><a onClick={() => navigate("/SignUp")}>Sign Up</a></li>
                    <li><a onClick={() => navigate("/")}>Home</a></li>
                    <li><a onClick={() => navigate("/Products")}>Products</a></li>
                    <li><a onClick={() => navigate("/AboutUs")}>About Us</a></li>
                </ul>
            </nav>

            
            <section className="brand">
                <h1>VANAGE</h1>
            </section>

            
            <section className="welcome">
                <h2>Welcome to Vanage</h2>
                <p>Your one-stop destination for the best online shopping experience.</p>
                <button className="btn" onClick={() => navigate("/Products")}>Shop Now</button>
            </section>
        </div>
    );
};

export default Home;
