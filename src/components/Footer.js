import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "20px",
    textAlign: "center",
    marginTop: "30px",
  };

  return (
    <footer style={footerStyle}>
      <p>© 2025 DoctorCare. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
