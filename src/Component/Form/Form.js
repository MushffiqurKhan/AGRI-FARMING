import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Form.css";

const FormPopup = ({ onComplete }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  useEffect(() => {
    const timer = setTimeout(() => setShowForm(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/form", formData);
      onComplete();
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  if (!showForm) return null;

  return (
    <div className="form-popup-overlay">
      <form className="form-popup-container" onSubmit={handleSubmit}>
        <h2 className="form-popup-title">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="form-popup-input"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="form-popup-input"
          onChange={handleChange}
        />
        <button type="submit" className="form-popup-button">Login</button>
        <div className="form-popup-footer">
          <a href="#">Forgot <span>Password?</span></a><br />
          <span>Don’t have an account? <a href="#">Sign up</a></span>
        </div>
      </form>
    </div>
  );
};

export default FormPopup;
