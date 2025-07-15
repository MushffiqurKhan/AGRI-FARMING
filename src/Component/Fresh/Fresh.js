import React from 'react';
import "./Fresh.css";

export default function Fresh() {
  return (
    <div>
      <div className="container-fresh">
        <div className="left">
          <img src="s4.jpg" alt="Watering can" style={{ width: '100%' }} />
        </div>
        <div className="right">
          <div className="header">FRESH PRODUCTS</div>
          <div className="title">GROWING PRODUCTS</div>
          {/* <div className="title">48 YEARS OF EXPERIENCE</div> */}
          <div className="textfresh">The Economic Survey 2022-2023 mentions that India has 4.43 Mn organic farmers, the highest in the world.</div>
          <div className="title">Agriculture</div>
          <div className="progress">
            <div className="progress-bar" style={{ width: '40%' }}></div>
          </div>
          <div className="percentage">40%</div>
          <div className="title">Organic</div>
          <div className="progress">
            <div className="progress-bar-organic" style={{ width: '75%' }}></div>
          </div>
          <div className="percentage">75%</div>
        </div>
      </div>
    </div>
  );
}
