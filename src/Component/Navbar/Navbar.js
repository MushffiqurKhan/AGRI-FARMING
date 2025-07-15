import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isNavVisible, setNavVisible] = useState(false);

  const handleToggle = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <nav className="navbar">
      <div className="logo">AgriWorld</div>
      <div className="toggle-button" onClick={handleToggle}>
        <div className={`bar ${isNavVisible ? "active" : ""}`}></div>
        <div className={`bar ${isNavVisible ? "active" : ""}`}></div>
        <div className={`bar ${isNavVisible ? "active" : ""}`}></div>
      </div>
      <ul className={`nav ${isNavVisible ? "active" : ""}`}>
        <li>
          {/* ✅ Home link updated to use Link */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Aboutin">About Us</Link>
        </li>
        <li>
          <a href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012" target="_blank" rel="noopener noreferrer">
            Government Facilities
          </a>
        </li>
        <li>
          <Link to="/Crops">Farm-Guidance</Link>
        </li>
        <li>
          <a href="https://www.commodityonline.com/mandiprices" target="_blank" rel="noopener noreferrer">
            Mandi Price
          </a>
        </li>
        <li>
          <Link to="/Machines">Machineries</Link>
        </li>
      </ul>
    </nav>
  );
}
