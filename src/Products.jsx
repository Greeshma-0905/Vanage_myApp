import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"; 
import alienwareImg from "./Assets/AL.png";
import mclarenImg from "./Assets/Mcl.webp";
import zaraImg from "./Assets/Clt.jpg";


const products = [
    {
        id: 1,
        name: "AlienWare Laptop",
        price: "₹4,99,999",
        description: "Alienware laptops feature vibrant displays with high refresh rates, fast response times, and NVIDIA G-SYNC or AMD FreeSync technology for tear-free gaming.",
        image: alienwareImg,
    },
    {
        id: 2,
        name: "Peter England",
        price: "₹9,999",
        description: "A stylish and modern men's outfit including a black long-sleeve button-up shirt with slim-fit trousers, a leather belt, and classic white sneakers.",
        image: mclarenImg,
    },
    {
        id: 3,
        name: "Zara Combo",
        price: "₹6,999",
        description: "A stylish summer outfit with a black sleeveless dress, ruffled straps, brown sandals, and a wide-brimmed straw hat for a chic summer look.",
        image: zaraImg,
    },
];

const Products = () => {
    const navigate = useNavigate();

    return (
        <div>
           
            <nav className="navbar">
                <ul>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Products">Products</a></li>
                    <li><a href="/AboutUs">About Us</a></li>
                    <li><a href="/SignIn">Sign In</a></li>
                    <li><a href="/SignUp">Sign Up</a></li>
                </ul>
            </nav>

         
            <div className="products-container">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-details">
                            <h2 className="product-name">{product.name}</h2>
                            <p className="product-price">{product.price}</p>
                            <p className="product-description">{product.description}</p>
                            <button className="add-to-cart-button">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
