import React from "react";
import "./Plantation.css";
import items from "../Json/Plantation.json";

export default function Plantation() {
  return (
    <div className="plantation">
      {/* <h1 className="plantation_head">plantation crop </h1> */}

      <div className="plantation-contain">
        <div className="plantation_pic">
          <img src="plantaion.jpg" />
        </div>
        <div className="plantation_info">
          <h1>प्लांटेशन फसलें</h1>
          <p>
            प्लांटेशन फसलें आमतौर पर बड़े खेतों पर उगाई जाती हैं, जिनमें चाय,
            कॉफी, रबर, कोको, ऑयल पाम, नारियल और विभिन्न मसालों जैसी बहुवर्षीय
            फसलें शामिल होती हैं। ये फसलें मुख्य रूप से व्यावसायिक उद्देश्यों के
            लिए उगाई जाती हैं और कई उष्णकटिबंधीय और उपोष्णकटिबंधीय क्षेत्रों की
            अर्थव्यवस्था में महत्वपूर्ण भूमिका निभाती हैं। प्लांटेशन खेती में इन
            फसलों की बड़े पैमाने पर गहन खेती शामिल होती है, जो अक्सर उन्नत कृषि
            तकनीकों, विशेष मशीनरी और बड़ी संख्या में मजदूरों के उपयोग की विशेषता
            होती है। प्लांटेशन फसलों का प्रबंधन उच्च उत्पादकता और गुणवत्ता सुनिश्चित
            करने के लिए सावधानीपूर्वक योजना और निगरानी की मांग करता है।
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
