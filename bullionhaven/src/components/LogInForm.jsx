import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function LogInForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., call an API to log in)
        console.log("Form Submitted", formData);
    };

    return (
        <section className="log-in-form">
            <form onSubmit={handleSubmit}>
                <div className="form-div-helper">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email..."
                        required
                    />
                </div>
                <div className="form-div-helper">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password..."
                        required
                    />
                </div>
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