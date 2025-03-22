import React from "react";
import { FaWhatsapp, FaPhone, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0d6efd", color: "#fff", padding: "20px", textAlign: "center" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h3>PhysioRehab</h3>
        <p>
          At **PhysioRehab**, we provide expert physiotherapy treatments to help you recover faster and regain mobility. 
          Our team is dedicated to offering personalized care for all our patients.
        </p>
        
        <h4><FaMapMarkerAlt /> Address</h4>
        <p style={{ fontWeight: "bold" }}>
          📍 RTC Complex Backside 3rd Line, Near Urban Primary Center, Srikakulam
        </p>

        <h4>Contact Us</h4>
        <p>
          <a href="tel:+7981415607" style={{ color: "#fff", textDecoration: "none", marginRight: "15px" }}>
            <FaPhone /> +7981415607
          </a>
          <a href="https://wa.me/7981415607" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>
            <FaWhatsapp /> WhatsApp
          </a>
        </p>

        <h4>Follow Us</h4>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", fontSize: "24px", textDecoration: "none" }}>
          <FaInstagram /> Instagram
        </a>

        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          &copy; 2025 <strong>PhysioRehab</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
