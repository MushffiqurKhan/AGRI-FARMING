import React from "react";
import "./Alluvialclay.css";
import items from "../Json/Alluvialclay.json";

export default function AlluvialClay() {
  return (
    <div className="alluvial">
      <div className="alluvial-contain">
        <div className="alluvial_pic">
          <img src="alluvialsoil.jpg" alt="जलोढ़ मिट्टी का क्षेत्र" />
        </div>
        <div className="alluvial_info">
          <h1>जलोढ़ मिट्टी का क्षेत्र</h1>
          <p>
            जलोढ़ मिट्टी, नदियों द्वारा लायी गई उपजाऊ मिट्टी होती है जो खेती के लिए बेहद उपयुक्त मानी जाती है।
            यह मिट्टी पोषक तत्वों से भरपूर होती है और फसलों की अच्छी पैदावार सुनिश्चित करती है।
            जलोढ़ मिट्टी के क्षेत्रों में चावल, गेहूं, गन्ना और विभिन्न प्रकार की सब्जियाँ आसानी से उगाई जाती हैं।
            किसान इस मिट्टी में आधुनिक कृषि तकनीकों और उचित सिंचाई प्रणालियों का उपयोग कर उपज को बढ़ाते हैं।
          </p>
        </div>
      </div>
      <div className="item_1">
        {items.map((item) => (
          <div className="card_box">
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
