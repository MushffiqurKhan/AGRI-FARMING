import React from "react";
import "./kharif.css";
import items from "../Json/kharif.json";
export default function Kharif() {
  /*  const renderYoutubeLinks = (youtube) => {
    return youtube && youtube.link1 ? <p><a href={youtube.link1}>Watch here</a></p> : null;
  } */
  // const renderYoutubeLinks = (youtube) => {
  //   return youtube.map((link, index) => (
  //     <p key={index}><a href={link} >Watch here</a></p>
  //   ));
  // }
  return (

      <div className="kharif">
        {/* <h1 className="kharif_head">kharif crop </h1> */}

        <div className="kharif-contain">
          <div className="kharif_pic">
            <img src="kharif.jpeg" />
          </div>
          <div className="kharif_info">
            <h1>ख़रीफ़ फसल</h1>
            <p>
            खरगोन, मध्य प्रदेश, एक कृषि प्रधान क्षेत्र है जहां खरीफ फसल की भी खेती विशेष रूप से की जाती है। ख़रीफ़ फ़सल वो फ़सल हैं जो वर्षा ऋतु (मानसून) के दौरन बोयी जाती हैं और शरद ऋतु (शरद ऋतु) में कटती हैं।{" "}
            </p>
          </div>
        </div>
        <div className="item_1">
          {items.map((item) => (
            <div className="card_box1">
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
                          <a href={item.youtube.link2}>
                            Disease and protection
                          </a>
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
