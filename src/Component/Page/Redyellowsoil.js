import React from "react";
import "./Redyellowsoil.css";
import items from "../Json/Redyellowsoil.json";

export default function RedYellowSoil() {
  return (
    <div className="redyellowsoil">
      <div className="redyellowsoil-contain">
        <div className="redyellowsoil_pic">
          <img src="Redyellowsoil.jpg" alt="रेड/येलो मिट्टी" />
        </div>
        <div className="redyellowsoil_info">
          <h1>रेड/येलो मिट्टी</h1>
          <p>
            रेड और येलो मिट्टी मुख्य रूप से भारत के दक्षिणी और पूर्वी क्षेत्रों में पाई जाती है। 
            ये मिट्टियाँ लोहे की उपस्थिति के कारण लाल और पीली रंग की होती हैं। 
            यह मिट्टी जलधारण क्षमता में मध्यम होती है और इसमें जैविक पदार्थ की मात्रा कम होती है। 
            लाल और पीली मिट्टी में दालें, मूँगफली, कपास, ज्वार, बाजरा आदि की खेती की जाती है।
          </p>
        </div>
      </div>
      <div className="item_1">
        {items.map((item) => (
          <div className="card_box" key={item.id}>
            <div className="Crop-box">
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
