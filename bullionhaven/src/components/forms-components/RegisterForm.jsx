import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../config/firebase";

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        repeatPassword: "",
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
        
        if (formData.password !== formData.repeatPassword) {
            setError("Passwords do not match!");
            return;
        }
        
        const auth = getAuth(app);
        try {
            await createUserWithEmailAndPassword(auth, formData.email, formData.password);

            localStorage.setItem("showSignInSuccess", "true");

            navigate("/");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setError("Email is already in use!");
            } else if (error.code === "auth/weak-password") {
                setError("Password should be at least 6 characters!");
            } else {
                setError("An error occurred. Please try again.");
            }
        }
    };

    return (
        <section className="register-form">
            <form onSubmit={handleSubmit}>
                <div className="form-div-helper">
                    <label htmlFor="email-register">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email-register"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email..."
                        required
                    />
                </div>
                <div className="form-div-helper">
                    <label htmlFor="password-register">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password-register"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password..."
                        required
                    />
                </div>
                <div className="form-div-helper">
                    <label htmlFor="repeat-password-register">Repeat Password</label>
                    <input
                        type="password"
                        name="repeatPassword"
                        id="repeat-password-register"
                        value={formData.repeatPassword}
                        onChange={handleChange}
                        placeholder="Repeat Password..."
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <div className="form-bottom-flex">
                    <div className="form-link">
                        <Link to="/login">Log In</Link>
                    </div>
                    <div className="form-submit">
                        <input type="submit" name="register" value="Register" />
                    </div>
                </div>
            </form>
        </section>
    );
}