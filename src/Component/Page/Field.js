import React from "react";
import "./field.css";
import items from "../Json/field.json";
export default function Field() {
  return (
    <div className="field">
      {/* <h1 className="field_head">field crop </h1> */}

      <div className="field-contain">
        <div className="field_pic">
          <img src="field.jfif" />
        </div>
        <div className="field_info">
          <h1>मैदान फसल
          </h1>
          <p>
          खेत की फसलें कृषि उत्पाद हैं जिनकी खेती मुख्य रूप से भूमि के बड़े भूखंडों पर व्यावसायिक उद्देश्यों के लिए की जाती है। इन फसलों में अनाज, फलियां और कंद जैसे गेहूं, मक्का, चावल, सोयाबीन और आलू शामिल हैं। वे वैश्विक खाद्य आपूर्ति में महत्वपूर्ण भूमिका निभाते हैं और मानव आबादी और पशुधन दोनों को खिलाने के लिए आवश्यक हैं।
          {" "}
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
