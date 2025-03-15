import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import WebsiteLogo from "./WebsiteLogo";

export default function Navbar(){
    const [navbar, setNavbar] = useState(false);

    const handleNavEvent = () => {
        setNavbar(nav => !nav);
        console.log("Navbar state:", navbar);
    }

    return (
        <nav>
            <WebsiteLogo/>
            <div className={navbar ? "big-helper active" : "big-helper"}>
                <ul className="navigation-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/currency">Currency</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className="nav-helper">
                    <div className="cart">
                        <Link to="/cart"><ion-icon name="cart-outline"></ion-icon></Link>
                    </div>
                    <ul className="registration-links">
                        <li>
                            <Link to="/login" className="login-link">Log In</Link>
                        </li>
                        <li>
                            <Link to="/register" className="register-link">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={navbar ? "hamburger active": "hamburger"} id="hamburger" onClick={handleNavEvent}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </div>
        </nav>
    );
}