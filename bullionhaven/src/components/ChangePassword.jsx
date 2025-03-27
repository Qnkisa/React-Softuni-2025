import React, { useState, useEffect } from "react";
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { app } from "../config/firebase";

export default function ChangePassword() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [error, setError] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState("");

  useEffect(() => {
    const auth = getAuth(app);
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      setEmail(currentUser.email);
    } else {
      setError("No user found. Please log in.");
    }
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setError("");
    setShowSuccessMessage("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      const auth = getAuth(app);
      const user = auth.currentUser;

      const credential = EmailAuthProvider.credential(user.email, oldPassword);
      await reauthenticateWithCredential(user, credential);
      
      await updatePassword(user, password);
      
      setShowSuccessMessage("Password updated successfully.");
      setPassword("");
      setConfirmPassword("");
      setOldPassword("");
    } catch (error) {
      setError("Invalid old password.");
    }
  };

  return (
    <section className="change-password">
      <div className="change-password-heading">
        <h2>Change Password</h2>
      </div>
      <form onSubmit={handlePasswordChange}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            disabled
            className="disabled-input"
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="old-password">Old Password</label>
          <input
            type="password"
            id="old-password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Enter your current password..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password..."
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {showSuccessMessage && <p className="success-message">{showSuccessMessage}</p>}
        <div className="form-group">
          <button type="submit">Change Password</button>
        </div>
      </form>
    </section>
  );
}