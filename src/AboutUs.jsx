import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"; 

const AboutUs = () => {
    const navigate = useNavigate();

    return (
        <div>
            
            <header className="navbar">
                <h1 style={{ color: "darkred" }}><strong>Vanage</strong></h1>
            </header>

            
            <nav className="navbar">
                <ul>
                    <li><a onClick={() => navigate("/")}>Home</a></li>
                    <li><a onClick={() => navigate("/Products")}>Products</a></li>
                    <li><a onClick={() => navigate("/AboutUs")}>About Us</a></li>
                    <li><a onClick={() => navigate("/SignIn")}>Sign In</a></li>
                    <li><a onClick={() => navigate("/SignUp")}>Sign Up</a></li>
                </ul>
            </nav>

           
            <section className="about">
                <div className="about-content">
                    <h2>About Vanage</h2>
                    <p>Welcome to <b>Vanage</b> – a part of the <b>Vanage Group</b>. We are committed to revolutionizing the e-commerce industry with innovation and sustainability.</p>
                </div>
            </section>

            
            <section className="mission">
                <h2>Our Mission</h2>
                <p>To provide a seamless shopping experience with high-quality products, advanced technology, and a sustainable approach.</p>
            </section>

           
            <section className="values">
                <h2>Our Core Values</h2>
                <div className="value-box">
                    <div className="value">
                        <h3>Innovation</h3>
                        <p>We leverage cutting-edge technology to enhance online shopping.</p>
                    </div>
                    <div className="value">
                        <h3>Sustainability</h3>
                        <p>Eco-friendly packaging and responsible sourcing are at our core.</p>
                    </div>
                    <div className="value">
                        <h3>Customer Commitment</h3>
                        <p>Delivering excellence and trust through premium service.</p>
                    </div>
                </div>
            </section>

            
            <section className="features">
                <h2>Why Choose Us?</h2>
                <div className="feature-box">
                    <div className="feature">
                        <h3>Fast Delivery</h3>
                        <p>Reliable and quick delivery across regions.</p>
                    </div>
                    <div className="feature">
                        <h3>Best Prices</h3>
                        <p>Affordable, high-quality products.</p>
                    </div>
                    <div className="feature">
                        <h3>24/7 Support</h3>
                        <p>Dedicated customer service anytime, anywhere.</p>
                    </div>
                </div>
            </section>

            
            <footer>
                <p>© 2025 Vanage Group. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default AboutUs;
