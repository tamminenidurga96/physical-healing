import React from "react";
import { FaWhatsapp, FaPhone, FaInstagram } from "react-icons/fa";

function Footer() {
  const footerStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "20px",
    textAlign: "center",
    marginTop: "30px",
  };

  const iconStyle = {
    margin: "0 10px",
    color: "white",
    fontSize: "20px",
  };

  return (
    <footer style={footerStyle}>
      <p>© 2025 DoctorCare. All rights reserved.</p>
      
      {/* Address */}
      <p style={{ marginTop: "10px" }}>
        📍 RTC COMPLEX BACKSIDE 3RD LINE, NEAR URBAN PRIMARY CENTER, SRIKAKULAM
      </p>

      {/* Contact Details */}
      <p>
        <FaWhatsapp style={iconStyle} /> +7981415607
        <FaPhone style={iconStyle} /> +7981415607
      </p>

      {/* Instagram Link */}
      <p>
        <a
          href="https://www.instagram.com/physicalhealing86/ "
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          <FaInstagram style={iconStyle} /> Follow us on Instagram
        </a>
      </p>

      {/* Explore Physiotherapy & Rehab */}
      <p style={{ marginTop: "15px", fontWeight: "bold" }}>
        Explore <span style={{ color: "#00BFFF" }}>PhysioRehab</span>
      </p>
    </footer>
  );
}

export default Footer;
