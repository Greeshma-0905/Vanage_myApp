import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AboutUs from "./AboutUs";
import "./style.css"; // Import CSS globally

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Default route */}
                <Route path="/Home" element={<Home />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/AboutUs" element={<AboutUs />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

