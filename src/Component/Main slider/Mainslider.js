import React, { useState, useEffect } from 'react';
import "./Mainslider.css";
import Cards from '../Cards/Cards';
import Fresh from '../Fresh/Fresh';
import About from '../About/About';

export default function Mainslider() {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => (prev >= 4 ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="slider">
      <div className="slides">
        {/* Radio buttons controlled by state */}
        <input type="radio" name="radio-btn" id="radio1" checked={counter === 1} readOnly />
        <input type="radio" name="radio-btn" id="radio2" checked={counter === 2} readOnly />
        <input type="radio" name="radio-btn" id="radio3" checked={counter === 3} readOnly />
        <input type="radio" name="radio-btn" id="radio4" checked={counter === 4} readOnly />

        {/* Slide images */}
        <div className="slide first">
          <img src="s1.jpg" alt="Image 1"/>
          <div className="text">
            {/* <p>हमारे सरल दिशानिर्देशों के साथ अपनी खेती की यात्रा शुरू करें...</p> */}
          </div>
        </div>
        <div className="slide">
          <img src="s6.jpeg" alt="Image 2"/>
          <div className="text">
            {/* <p>हमारे सरल दिशानिर्देशों के साथ अपनी खेती की यात्रा शुरू करें...</p> */}
          </div>
        </div>
        <div className="slide">
          <img src="s3.jpg" alt="Image 3"/>
          <div className="text">
            {/* <p>हमारे सरल दिशानिर्देशों के साथ अपनी खेती की यात्रा शुरू करें...</p> */}
          </div>
        </div>
        <div className="slide">
          <img src="s4.jpg" alt="Image 4"/>
          <div className="text">
            {/* <p>हमारे सरल दिशानिर्देशों के साथ अपनी खेती की यात्रा शुरू करें...</p> */}
          </div>
        </div>

        {/* Automatic navigation dots */}
        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
        </div>

        {/* Manual navigation dots */}
        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
      </div>
      <About/>
      <Cards/>
      <Fresh/>
    </div>
  );
}
