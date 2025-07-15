import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div>
      
      <div className="big-container">
        <div className="box-contain">
          <div className="container1">
            <img src="crop1.jpg" />
            <div className="container1-2">
              <img src="crop8.jpg" />
            </div>
          </div>
        </div>
        <div className="container2">
          <h1>ABOUT AGRICULTURE</h1>
          <h2>WE’RE LEADER IN AGRICULTURE MARKET</h2>
          <p>
            Growing Fruits and Vegetable,Tips for Ripening your Fruits Tips for
            Ripening your Fruits, or randomised words which don’t look even
            slightly believable.
          </p>
          <h3>Growing Fruits and Vegetables</h3>
          <h3>Tips for Ripening your Fruits</h3>
          <Link to="Aboutin"><button className="btn-box">Read More</button></Link>
        </div>
      </div>
      
    </div>
  );
}
