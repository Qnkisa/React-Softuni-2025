import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import WebsiteLogo from "./WebsiteLogo";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setNavbar(false);
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <nav>
            <WebsiteLogo />
            <div className={navbar ? "big-helper active" : "big-helper"}>
                <ul className="navigation-links">
                    <li>
                        <Link to="/" onClick={() => setNavbar(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/products" onClick={() => setNavbar(false)}>Products</Link>
                    </li>
                    <li>
                        <Link to="/currency" onClick={() => setNavbar(false)}>Currency</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setNavbar(false)}>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => setNavbar(false)}>Contact</Link>
                    </li>
                </ul>
                <div className="nav-helper">
                    <div className="cart">
                        <Link to="/cart" onClick={() => setNavbar(false)}>
                            <ion-icon name="cart-outline"></ion-icon>
                        </Link>
                    </div>
                    <ul className="registration-links">
                        <li>
                            <Link to="/login" className="login-link" onClick={() => setNavbar(false)}>Log In</Link>
                        </li>
                        <li>
                            <Link to="/register" className="register-link" onClick={() => setNavbar(false)}>Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={navbar ? "hamburger active" : "hamburger"} id="hamburger" onClick={() => setNavbar(!navbar)}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </div>
        </nav>
    );
}