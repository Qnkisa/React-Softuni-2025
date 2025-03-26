import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../config/firebase";

export default function LogInForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        
        const auth = getAuth(app);
        try {
            await signInWithEmailAndPassword(auth, formData.email, formData.password);
           
            localStorage.setItem("showSignInSuccess", "true");

            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <section className="log-in-form">
            <form onSubmit={handleSubmit}>
                <div className="form-div-helper">
                    <label htmlFor="email-login">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email-login"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email..."
                        required
                    />
                </div>
                <div className="form-div-helper">
                    <label htmlFor="password-login">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password-login"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password..."
                        required
                    />
                </div>
                {error && <p className="error-message">Invalid password or email!</p>}
                <div className="form-bottom-flex">
                    <div className="form-link">
                        <Link to="/register">Register</Link>
                    </div>
                    <div className="form-submit">
                        <input type="submit" name="log-in" value="Log In" />
                    </div>
                </div>
            </form>
        </section>
    );
}