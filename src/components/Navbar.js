import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src="/images/img.png" alt="Physical Healing" style={styles.logo} />
        <span style={styles.brandName}>Physical Healing</span>
      </div>
      
      {/* Hamburger Menu for Mobile */}
      <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul style={{ ...styles.navLinks, display: menuOpen ? "flex" : "none" }}>
        <li><a href="#home" style={styles.navLink}>Home</a></li>
        <li><a href="#services" style={styles.navLink}>Services</a></li>
        <li><a href="#doctors" style={styles.navLink}>Doctors</a></li>
        <li><a href="#about" style={styles.navLink}>About</a></li>
        <li><a href="#contact" style={styles.navLink}>Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    backgroundColor: "#000000",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "50px",
    marginRight: "10px",
  },
  brandName: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#fff",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    marginLeft: "auto",
  },
  navLink: {
    textDecoration: "none",
    fontSize: "18px",
    color: "#fff",
    transition: "0.3s",
    fontWeight: "bold",
    padding: "10px",
  },
  hamburger: {
    fontSize: "30px",
    color: "#fff",
    cursor: "pointer",
    display: "none", // Hidden by default on larger screens
  },

  /* Mobile Styles */
  '@media (max-width: 768px)': {
    navLinks: {
      flexDirection: "column",
      alignItems: "center",
      position: "absolute",
      top: "60px",
      left: 0,
      width: "100%",
      backgroundColor: "#000",
      padding: "10px 0",
      display: "none", // Hidden by default
    },
    hamburger: {
      display: "block",
    }
  }
};

export default Navbar;
