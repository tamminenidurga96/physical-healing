import React from "react";
import "./Rehab.css"; // Import the CSS file

const Rehab = () => {
  return (
    <div className="container">
      <h1 className="title">The Best Luxury Rehab in Srikakulam</h1>

      <div className="grid-container">
        <div className="card">
          <h2 className="card-title">🌱 Preventive Rehabilitation</h2>
          <p className="card-text">
            Helps prevent further complications and maintain optimal health after an initial diagnosis.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">🌟 Restorative Rehabilitation</h2>
          <p className="card-text">
            Aims to regain physical strength, mobility, and independence through customized therapies.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">🤝 Supportive Rehabilitation</h2>
          <p className="card-text">
            Assists individuals in enhancing daily living skills and improving physical function.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">🌺 Palliative Rehabilitation</h2>
          <p className="card-text">
            Focuses on comfort, symptom management, and maximizing quality of life for chronic or terminal conditions.
          </p>
        </div>
        <div className="card">
  <h2 className="card-title">🩸 Diabetic Rehabilitation</h2>
  <p className="card-text">
    Helps manage diabetes through lifestyle changes, exercise, nutrition, and medical support to prevent complications.
  </p>
</div>
      </div>
    </div>
  );
};

export default Rehab;
