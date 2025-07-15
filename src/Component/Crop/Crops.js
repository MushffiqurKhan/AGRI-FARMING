
import React, { useState, useEffect } from 'react';
import "./Crops.css";
import { Link } from 'react-router-dom';

export default function Crops() {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const btns = document.querySelectorAll(".tabs button");
        const active = document.querySelector(".active");

        btns.forEach((btn, i) => {
            btn.onclick = function () {
                setActiveTab(i);
                let move = (100 / btns.length) * i;
                active.style.left = move + "%";
            };
        });
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 0:
                return (
                    <>
                        <div className="box1">
                            <img src="rabi.jpeg" alt="crop1" />
                            <div className="Wheat">Rabi <Link to ='/Rabi'> <button className="btn-1"  >Read More</button></Link></div>
                        </div>
                        <div className="box1">
                            <img src="kharif.jpeg" alt="crop1" />
                            <div className="Wheat">Kharif<Link to ='/Kharif'><button className="btn-1">Read More</button></Link> </div>
                        </div>
                        <div className="box1">
                            <img src="zaid.jpg" alt="crop1" />
                            <div className="Wheat">Zaid<Link to ='/Zaid'><button className="btn-1">Read More</button></Link></div>
                        </div>
                        {/* Add more season-related cards here */}
                    </>
                );
            case 1:
                return (
                    <>
                        <div className="box1">
                            <img src="plantaion.jpg" alt="crop2" />
                            <div className="type">Plantation Crop<Link to ='/Plantation'> <button className="btn-1">Read More</button></Link></div>
                        </div>
                        <div className="box1">
                            <img src="horticulture.webp" alt="crop2" />
                            <div className="type">Horiculture Crop<Link to ='/Horiculture'> <button className="btn-1">Read More</button></Link></div>
                        </div>
                        <div className="box1">
                            <img src="field.jfif" alt="crop2" />
                            <div className="Wheat">Field Crop<Link to ='/Field'><button className="btn-2">Read More</button></Link></div>
                        </div>
                       
                        {/* Add more type-related cards here */}
                    </>
                );
            case 2:
                return (
                    <>
                        <div className="box1">
                            <img src="cultivation.jpg" alt="crop3" />
                            <div className="black"><Link to ='/Cultivation'>Cultivation Practice <button className="btn-1">Read More</button></Link></div>
                        </div>
                        
                    
                    </>
                );
            case 3:
                return (
                    <>

                        <div className="box1">
                            <img src="alluvialsoil.jpg" alt="crop4" />
                            <div className="alluvial" id="alluvialsoil"><Link to ='/Alluvialclay'>Alluvial Clay <button className="btn-1" id="alluvial">Read More</button></Link></div>
                        </div>
                        <div className="box1">
                            <img src="blacksoil.jpg" alt="crop4" />
                            <div className="black"><Link to ="/BlackSoil">Black Soil<button className="btn-1"  id="alluvial">Read More</button></Link></div>
                        </div>
                        <div className="box1">
                            <img src="Redyellowsoil.jpg" alt="crop4" />
                            <div className="red"><Link to="/Redyellowsoil">Red/Yellow Soil <button className="btn-4">Read More</button></Link></div>
                        </div>
                      
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <a name='crop.js'>
                <div className="tabs">
                    <div className="active"></div>
                    <button>Season</button>
                    <button>Type</button>
                    <button>Management</button>
                    <button>Lands</button>
                </div>
                <div className="Crop-box">
                    {renderContent()}
                </div>
            </a>
        </div>
    );
}
