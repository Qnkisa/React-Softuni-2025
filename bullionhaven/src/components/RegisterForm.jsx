import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        repeatPassword: "",
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
        // Handle form submission (e.g., validate inputs and call an API to register)
        if (formData.password !== formData.repeatPassword) {
            console.log("Passwords do not match!");
        } else {
            console.log("Form Submitted", formData);
        }
    };

    return (
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
            <div className="form-div-helper">
                <label htmlFor="repeat-password">Repeat Password</label>
                <input
                    type="password"
                    name="repeatPassword"
                    value={formData.repeatPassword}
                    onChange={handleChange}
                    placeholder="Repeat Password..."
                    required
                />
            </div>
            <div className="form-bottom-flex">
                <div className="form-link">
                    <Link to="/login">Log In</Link>
                </div>
                <div className="form-submit">
                    <input type="submit" name="register" value="Register" />
                </div>
            </div>
        </form>
    );
}