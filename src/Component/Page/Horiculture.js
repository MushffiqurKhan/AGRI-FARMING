import React from "react";
import "./Horiculture.css";
import items from "../Json/Horiculture.json";
export default function Horiculture() {
  return (
    <div className="horiculture">
      {/* <h1 className="horiculture_head">horiculture crop </h1> */}

      <div className="horiculture-contain">
        <div className="horiculture_pic">
          <img src="horticulture.webp" />
        </div>
        <div className="horiculture_info">
          <h1>बागवानी फसल
          </h1>
          <p>
          बागवानी फसलों में फल, सब्जियाँ, मेवे, बीज, जड़ी-बूटियाँ, अंकुरित अनाज, मशरूम, शैवाल, फूल, समुद्री शैवाल और गैर-खाद्य फसलें जैसे घास और सजावटी पेड़ और पौधे शामिल हैं। ये फसलें मानव पोषण के लिए महत्वपूर्ण हैं, आवश्यक विटामिन, खनिज और एंटीऑक्सीडेंट प्रदान करती हैं। बागवानी में सौंदर्य प्रयोजनों, पर्यावरण की सुंदरता और पारिस्थितिक संतुलन को बढ़ाने के लिए पौधों की खेती भी शामिल है।{" "}
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
                        <a href={item.youtube.link1}>Procedure</a>
                      </p>
                    )}
                    {item.youtube.link2 && (
                      <p>
                        <a href={item.youtube.link2}>Disease and protection</a>
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
