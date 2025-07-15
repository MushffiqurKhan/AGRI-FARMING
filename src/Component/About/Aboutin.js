import React from 'react';
import './Aboutin.css';

export default function Aboutin() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to AgriGoal Farm, your trusted partner in agriculture. At AgriGoal Farm, we are dedicated to providing the highest quality agricultural products and services. Our mission is to support farmers and the agriculture community by offering expert guidance, innovative solutions, and sustainable practices.
        </p>
        <p>
          Agriculture is the backbone of our economy and plays a crucial role in sustaining life. It involves the cultivation of crops and the rearing of animals to provide food, fiber, medicinal plants, and other products used to sustain and enhance human life. With advancements in technology and sustainable practices, modern agriculture has the potential to meet the growing demands of the global population while preserving natural resources for future generations.
        </p>
        <p>
          At AgriGoal Farm, we are committed to promoting sustainable farming practices, enhancing productivity, and ensuring food security. Our team of experts is here to provide you with the latest information, tools, and support you need to succeed in your agricultural endeavors.
        </p>
      </div>
      <div className="about-image">
        <img src="cultivation.jpg" alt="Agriculture" />
      </div>
    </div>
  );
}
