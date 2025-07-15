import React from "react";
import "./Cultivation.css";
import items from "../Json/Cultivation.json";

export default function Cultivation() {
  return (
    <div className="cultivation">
      <div className="cultivation-contain">
        <div className="cultivation_pic">
          <img src="cultivation.jpg" alt="Cultivation Field" />
        </div>
        <div className="cultivation_info">
          <h1>खेती का क्षेत्र</h1>
          <p>
            खेती के क्षेत्र विशेष रूप से फसलों की खेती के लिए तैयार और प्रबंधित की गई भूमि के क्षेत्र होते हैं।
            इस प्रक्रिया में मिट्टी की जुताई, समतलीकरण, उर्वरक डालना और सिंचाई करना शामिल है, ताकि पौधों की वृद्धि के लिए सर्वोत्तम परिस्थितियाँ बनाई जा सकें।
            उचित खेती मिट्टी की उर्वरता बढ़ाने, खरपतवार की वृद्धि को कम करने और फसल की पैदावार बढ़ाने में मदद करती है।
            किसान अक्सर आधुनिक मशीनरी और टिकाऊ तकनीकों का उपयोग करते हैं ताकि खेती को अधिक कुशल और पर्यावरण के अनुकूल बनाया जा सके।
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
