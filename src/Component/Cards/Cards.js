import React from 'react'
import "./Cards.css";
export default function Cards() {
  return (
    <div>
          <section className="services">
        {/* <h2 className="sectiontitle">WHAT WE DO</h2> */}
        <h1 className="main-title">Agriculture Minister</h1>
        <div className="service-container">
            <div className="service-item">
                <img src="minister.png" alt="Fresh Vegetables"/>
                <h3>Shivraj Singh chouhan</h3>
                <p>Minister of Agriculture and Farmer's Welfare</p>
                <p><strong>Member of</strong> Cabinet of india</p>
                <a href="https://en.wikipedia.org/wiki/Shivraj_Singh_Chouhan"><div className="arrow">&#x27A4;</div></a> 
            </div>
            <div className="service-item">
                <img src="ram.png" alt="Agriculture Products"/>
                <h3>Shri Ram Nath Thakur</h3>
                <p>Minister of state of india in Minister of Agriculture & Farmers Welfare</p>
                <p><strong>Member of</strong> Parliament, Rajya Sabha</p>
               <a href="https://en.wikipedia.org/wiki/Ram_Nath_Thakur"><div className="arrow">&#x27A4;</div></a> 
            </div>
            <div className="service-item">
                <img src="state minister2.webp" alt="Organic Products"/>
                <h3>Shri Bhagirath Choudhary</h3>
                <p>Minister of state of india in Minister of Agriculture & Farmers Welfare.</p>
                <p><strong>Member of</strong> Parliament, Lok Sabha</p>
                <a href="https://en.wikipedia.org/wiki/Bhagirath_Choudhary"><div className="arrow">&#x27A4;</div></a> 
            </div>
         
        </div>
    </section>

    </div>
  )
}
