import React, { useState, useEffect } from "react";
import imageForScreen from "../assets/flow.png";

function Flowchart() {
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  

  const gradientStyle = {
    background: isSmallerScreen
      ? "linear-gradient(to right, #e1c2e5, #e7ceeb)"
      : "linear-gradient(to bottom, #e1c2e5, #e7ceeb)",
    // Adjust the gradient direction based on screen size and image rotation
    // You can modify the gradient colors and direction as needed
  };

  return (
    <div className="centered-image-container" style={gradientStyle}>
      <img
        src={imageForScreen}
        alt="Centered Image"
        style={{
          marginTop: "6%",
          width: "auto",
          height: "auto",
          maxWidth: "100%",
          maxHeight: "100%",
          transform: isSmallerScreen ? "rotate(90deg)" : "none",
        }}
      />
    </div>
  );
}

export default Flowchart;
