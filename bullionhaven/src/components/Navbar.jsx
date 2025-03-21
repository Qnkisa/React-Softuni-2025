// import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import WebsiteLogo from "./WebsiteLogo";

// export default function Navbar() {
//     const [navbar, setNavbar] = useState(false);
//     const location = useLocation();

//     useEffect(() => {
//         setNavbar(false);
//         window.scrollTo(0, 0);
//     }, [location]);

//     return (
//         <nav>
//             <WebsiteLogo />
//             <div className={navbar ? "big-helper active" : "big-helper"}>
//                 <ul className="navigation-links">
//                     <li>
//                         <Link to="/" onClick={() => setNavbar(false)}>Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/products" onClick={() => setNavbar(false)}>Products</Link>
//                     </li>
//                     <li>
//                         <Link to="/currency" onClick={() => setNavbar(false)}>Currency</Link>
//                     </li>
//                     <li>
//                         <Link to="/about" onClick={() => setNavbar(false)}>About</Link>
//                     </li>
//                     <li>
//                         <Link to="/contact" onClick={() => setNavbar(false)}>Contact</Link>
//                     </li>
//                 </ul>
//                 <div className="nav-helper">
//                     <div className="cart">
//                         <Link to="/cart" onClick={() => setNavbar(false)}>
//                             <ion-icon name="cart-outline"></ion-icon>
//                         </Link>
//                     </div>
//                     <ul className="registration-links">
//                         <li>
//                             <Link to="/login" className="login-link" onClick={() => setNavbar(false)}>Log In</Link>
//                         </li>
//                         <li>
//                             <Link to="/register" className="register-link" onClick={() => setNavbar(false)}>Register</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             <div className={navbar ? "hamburger active" : "hamburger"} id="hamburger" onClick={() => setNavbar(!navbar)}>
//                 <span className="hamburger-line"></span>
//                 <span className="hamburger-line"></span>
//                 <span className="hamburger-line"></span>
//             </div>
//         </nav>
//     );
// }

import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import WebsiteLogo from "./WebsiteLogo";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [user, setUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const adminUID = import.meta.env.VITE_ADMIN_UID;

    useEffect(() => {
        setNavbar(false);
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleSignOut = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            
            navigate("/");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

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
                        {user ? (
                            <>
                                <li className="user-profile-link">
                                    <Link to="profile">User Profile</Link>
                                </li>
                                {user.uid === adminUID && (
                                    <li className="user-profile-link">
                                        <Link to="/admin">Admin Panel</Link>
                                    </li>
                                )}
                                <li className="sign-out-button">
                                    <button onClick={handleSignOut} className="signout-button">Sign Out</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login" className="login-link" onClick={() => setNavbar(false)}>Log In</Link>
                                </li>
                                <li>
                                    <Link to="/register" className="register-link" onClick={() => setNavbar(false)}>Register</Link>
                                </li>
                            </>
                        )}
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