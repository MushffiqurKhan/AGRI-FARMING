import React from "react";
import "./Rabi.css";
import items from "../Json/firsr.json";
export default function Rabi() {

  return (
       <div className="rabi">
      {/* <h1 className="Rabi_head">Rabi crop </h1> */}

      <div className="rabi-contain">
        <div className="rabi_pic">
          <img src="rabi.jpeg" />
        </div>
        <div className="rabi_info">
          <h1>रबी की फसल</h1>
          <p>
          खरगोन, मध्य प्रदेश का एक महत्वपूर्ण कृषि प्रधान क्षेत्र है, जहां रबी फसल की खेती विशेष रूप से की जाती है। रबी फसल वो फसल हैं जो ठंडी मौसम (शरद ऋतु) में बोयी जाति हैं और गरम मौसम (बसंत ऋतु) में कटी जाति हैं।
          {" "}
          </p>
        </div>
      </div>
      <div className="item_1">
        {items.map((item) => (
          <div className="card_box2">
            <div key={item.id} className="Crop-box">
              <div className="box2">
                <img src={item.imageUrl} alt={item.name} />
              </div>
            </div>
            <div className="contain_info">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <div className="contain_info_links">
              {item.youtube && (
                <>
                  {item.youtube.link1 && (
                    <p>
                      <a href={item.youtube.link1}>प्रक्रिया</a>
                    </p>
                  )}
                  {item.youtube.link2 && (
                    <p>
                      <a href={item.youtube.link2}>रोग एवं सुरक्षा</a>
                    </p>
                  )}
                </>
              )}
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  
  );
}
