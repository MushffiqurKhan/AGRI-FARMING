import React from "react";
import "./Zaid.css";
import items from "../Json/Zaid.json";
export default function Zaid() {
  return (
    <div className="zaid">
      {/* <h1 className="zaid_head">zaid crop </h1> */}

      <div className="zaid-contain">
        <div className="zaid_pic">
          <img src="zaid.jpg" />
        </div>
        <div className="zaid_info">
          <h1>जायद फसल </h1>
          <p>
          ज़ैद फ़सल वो फ़सल हैं जो रबी और ख़रीफ़ के बीच के समय में, यानि गर्मियों में बोयी जाती हैं और लगभाग 3-4 महीने में तैयार हो जाती हैं। खरगोन, मध्य प्रदेश में भी जायद फसल की खेती की जाती है।
{" "}
          </p>
        </div>
      </div>
      <div className="item_1">
        {items.map((item) => (
          <div className="card_box3">
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
