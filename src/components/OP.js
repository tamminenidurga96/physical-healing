import React from "react";
import "./OP.css";

const painData = [
    { image: "/images/neck_pain.png", title: "Neck Pain", description: "Pain and stiffness in the neck, often due to poor posture or strain." },
    { image: "/images/back_pain.png", title: "Back Pain", description: "Pain in the back due to various causes such as muscle strain or poor posture." },
    { image: "/images/shoulder_pain.png", title: "Shoulder Pain", description: "Discomfort in the shoulder joint, possibly caused by injury or arthritis." },
    { image: "/images/lower_back_pain.png", title: "Lower Back Pain", description: "Pain in the lower back, commonly caused by strain, injury, or spinal conditions." },
    { image: "/images/hip_pain.png", title: "Hip Pain", description: "Pain around the hip joint, which can be caused by arthritis or injury." },
    { image: "/images/knee_pain.png", title: "Knee Pain", description: "Pain in the knee, often due to overuse, injury, or joint conditions like arthritis." }
  ];
  


  const OP = () => {
    return (
      <>
        <h2>Out Patient</h2>
        <div className="op-container">
          {painData.map((pain, index) => (
            <div key={index} className="op-item">
              <img src={pain.image} alt={pain.title} className="op-image" />
              <div className="op-text">
                <h3>{pain.title}</h3>
                <p>{pain.description}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  

export default OP;
