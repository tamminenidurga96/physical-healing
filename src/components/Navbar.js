import React from "react";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src="/images/img.png" alt="Physical Healing" style={styles.logo} />
        <span style={styles.brandName}>Physical Healing</span>
      </div>
      <ul style={styles.navLinks}>
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
    padding: "15px 30px",
    backgroundColor: "#000000",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
    flexWrap: "wrap",
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
    marginLeft: "auto", // Pushes items to the right
    flexWrap: "wrap", // Prevents overlapping
  },
  navLink: {
    textDecoration: "none",
    fontSize: "18px",
    color: "#fff",
    transition: "0.3s",
    fontWeight: "bold",
    padding: "10px", // Adds spacing
  },
};

// Responsive Styles
const mediaQuery = `
  @media (max-width: 768px) {
    .navLinks {
      flex-direction: column;
      gap: 10px;
      align-items: center;
      width: 100%;
      padding-top: 10px;
    }
  }
`;

// Injecting styles dynamically for media queries
const styleSheet = document.createElement("style");
styleSheet.innerText = mediaQuery;
document.head.appendChild(styleSheet);

export default Navbar;
