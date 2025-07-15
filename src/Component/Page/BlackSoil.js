import React from "react";
import "./BlackSoil.css";
import items from "../Json/blacksoil.json";

export default function BlackSoil() {
  return (
    <div className="blacksoil">
      <div className="blacksoil-contain">
        <div className="blacksoil_pic">
          <img src="blacksoil.jpg" alt="काली मिट्टी" />
        </div>
        <div className="blacksoil_info">
          <h1>काली मिट्टी</h1>
          <p>
            काली मिट्टी को रेगुर मिट्टी भी कहा जाता है। यह मिट्टी कपास की खेती के लिए विशेष रूप से प्रसिद्ध है।
            इसमें नमी को लंबे समय तक बनाए रखने की क्षमता होती है, जो सूखे क्षेत्रों में भी फसलों की अच्छी वृद्धि में सहायक है।
            काली मिट्टी में चूना, लोहा, मैग्नीशियम जैसे खनिज प्रचुर मात्रा में पाए जाते हैं, जो फसलों के लिए लाभकारी होते हैं।
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
