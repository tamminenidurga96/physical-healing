import React from "react";
import "./Doctors.css"; // Import external CSS

function Doctors() {
  return (
    <section id="doctors" className="doctors-section">
      <h2 className="doctors-heading">Meet Our Doctors</h2>
      <div className="doctors-container">
        <div className="doctor-card">
          <img src="images/doctor.png" alt="Doctor" className="doctor-image" />
          <h3 className="doctor-name">Dr. Durga Prasad</h3>
          <p className="doctor-specialty">Physiotherapist</p>
        </div>
      </div>
    </section>
  );
}

export default Doctors;
