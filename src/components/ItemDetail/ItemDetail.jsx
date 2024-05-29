import React from "react";
import { useParams } from "react-router-dom";

function ItemDetail() {
  const { data } = useParams();

  return (
    <div className="bg-green-400 h-2/3 w-2/3">
      <img
        className="h-2/3 w-2/3"
        src="/src/assets/items/chair/rounded_back_chair/2.jpg"
        alt="saddam"
      />
    </div>
  );
}

export default ItemDetail;

// import React, { useState } from 'react';

// function PopUpScreen() {
//   return (
//     <div className="popup">
//       <div className="popup-content">
//         <h2>This is a Pop-up Screen</h2>
//         <button>Close</button>
//       </div>
//     </div>
//   );
// }

// function ItemDetail() {
//   const [showPopUp, setShowPopUp] = useState(false);

//   const togglePopUp = () => {
//     setShowPopUp(!showPopUp);
//   };

//   return (
//     <div className="app">
//       <h1>Hello, React!</h1>
//       <button onClick={togglePopUp}>Open Pop-up</button>
//       {showPopUp && <PopUpScreen />}
//     </div>
//   );
// }

// export default ItemDetail;
