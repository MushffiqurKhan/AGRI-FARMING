
// // import React, { useState } from "react";
// // import "./Rice.css";
// // import items from "./Ricedata.js";

// // export default function Rice() {
// //   const [selectedItem, setSelectedItem] = useState(null);
// //   const [showPopup, setShowPopup] = useState(false);

// //   const openPopup = (item) => {
// //     setSelectedItem(item);
// //     setShowPopup(true);
// //   };

// //   const closePopup = () => {
// //     setShowPopup(false);
// //     setSelectedItem(null);
// //   };

// //   return (
// //     <div className="card-container">
// //       {items.map((item) => (
// //         <div key={item.id} className="Crop-box">
// //           <div className="box1" onClick={() => openPopup(item)}>
// //             <img src={item.imageUrl} alt={item.name} />
// //             <div className="Wheat">
// //               {item.name} <button className="btn-1">Read More</button>
// //             </div>
// //           </div>
// //         </div>
// //       ))}

// //       {showPopup && selectedItem && (
// //         <div className="popup-overlay" onClick={closePopup}>
// //           <div className="popup" onClick={(e) => e.stopPropagation()}>
// //             <div className="popup-header">
// //               <h2>{selectedItem.name} </h2>
// //               <button className="popup-close" onClick={closePopup}>
// //                 &times;
// //               </button>
// //             </div>
// //             <div className="popup-body">
// //               <p>{selectedItem.details}</p>
// //               <div className="vegetable-box">
// //                 <div className="vegetable-info">
// //                   <p>
// //                     Vegetable cultivation is a key aspect of agriculture,
// //                     involving the growing of vegetables for human consumption.
// //                   </p>
// //                 </div>
// //                 <table>
// //   <tr>
// //     <th>Vegetable</th>
// //     <th>Youtube</th>
    
// //   </tr>
// //   <tr>
// //     <td>Mushrooms</td>
// //     <td></td>
    
// //   </tr>
// //   <tr>
// //     <td>Potatoes</td>
// //     <td></td>
  
// //   </tr>
// //   <tr>
// //     <td>Broccoli</td>
// //     <td></td>
    
// //   </tr>
// //   <tr>
// //     <td>Cauliflower</td>
// //     <td></td>
    
// //   </tr>
// //   <tr>
// //     <td>Cabbage</td>
// //     <td>{showPopup.youtube  && (
// //       <div>
// //         {showPopup.youtube.link1 && <a href="{showPopup.youtube.link1 }"></a>}
// //       </div>
// //     )}</td>
    
// //   </tr>
// //   </table>

// // {/* 
// //                 <div className="vegetable-pic">
// //                   <img src="cultivation.jpg" />
// //                 </div> */}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// import React, { useState } from "react";
// import "./Rice.css";
// import items from "./Ricedata.js";

// export default function Rice() {
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);

//   const openPopup = (item) => {
//     setSelectedItem(item);
//     setShowPopup(true);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//     setSelectedItem(null);
//   };

//   return (
//     <div className="card-container">
//       {items.map((item) => (
//         <div key={item.id} className="Crop-box">
//           <div className="box1" onClick={() => openPopup(item)}>
//             <img src={item.imageUrl} alt={item.name} />
//             <div className="Wheat">
//               {item.name} <button className="btn-1">Read More</button>
//             </div>
//           </div>
//         </div>
//       ))}

//       {showPopup && selectedItem && (
//         <div className="popup-overlay" onClick={closePopup}>
//           <div className="popup" onClick={(e) => e.stopPropagation()}>
//             <div className="popup-header">
//               <h2>{selectedItem.name} </h2>
//               <button className="popup-close" onClick={closePopup}>
//                 &times;
//               </button>
//             </div>
//             <div className="popup-body">
//               <p>{selectedItem.details}</p>
//               <div className="vegetable-box">
//                 <div className="vegetable-info">
//                   <p>
//                    {selectedItem.description}
//                   </p>
//                 </div>
//                 <table>
//                   <tr>
//                     <th>Vegetable</th>
//                     <th>Youtube</th>
//                   </tr>
//                   <tr>
//                     <td>Mushrooms</td>
//                     <td>{selectedItem.youtube && selectedItem.youtube.link1 && (
//                         <a href={selectedItem.youtube.link1} target="_blank" rel="noopener noreferrer">
//                          More Information
//                         </a>
//                       )}</td>
//                   </tr>
//                   <tr>
//                     <td>Potatoes</td>
//                     <td>{selectedItem.youtube && selectedItem.youtube.link2 && (
//                         <a href={selectedItem.youtube.link2} target="_blank" rel="noopener noreferrer">
//                           More Information
//                         </a>)}
//                         </td>
//                   </tr>
//                   <tr>
//                     <td>Broccoli</td>
//                     <td>{selectedItem.youtube && selectedItem.youtube.link3 && (
//                         <a href={selectedItem.youtube.link3} target="_blank" rel="noopener noreferrer">
//                            More Information
//                         </a>)}</td>
//                   </tr>
//                   <tr>
//                     <td>Cauliflower</td>
//                     <td>{selectedItem.youtube && selectedItem.youtube.link4 && (
//                         <a href={selectedItem.youtube.link4} target="_blank" rel="noopener noreferrer">
//                           More Information
//                         </a>)}</td>
//                   </tr>
//                   <tr>
//                     <td>Cabbage</td>
//                     <td>{selectedItem.youtube && selectedItem.youtube.link5 && (
//                         <a href={selectedItem.youtube.link5} target="_blank" rel="noopener noreferrer">
//                            More Information
//                         </a>)}
                      
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>Pumpkin</td>
//                     <td>{selectedItem.youtube && selectedItem.youtube.link6 && (
//                         <a href={selectedItem.youtube.link6} target="_blank" rel="noopener noreferrer">
//                           More Information
//                         </a>)}
                      
//                     </td>
//                   </tr>
//                 </table>

//                 {/* 
//                 <div className="vegetable-pic">
//                   <img src="cultivation.jpg" />
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
