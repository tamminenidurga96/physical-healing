import React, { useEffect, useState } from "react";
import "./services.css" ;

const rehabServices = [
  { name: "Onco Rehab", image: "/images/onco-rehab.jpg", description: "Rehabilitation support for cancer patients." },
  { name: "Ortho Rehab", image: "/images/ortho-rehab.jpg", description: "Recovery and therapy for orthopedic conditions." },
  { name: "Cardio Rehab", image: "/images/cardio-rehab.jpg", description: "Post-cardiac event recovery and fitness." },
  { name: "Neuro Rehab", image: "/images/neuro-rehab.jpg", description: "Rehabilitation for neurological disorders." },
  { name: "Pulmonary Rehab", image: "/images/pulmonary-rehab.jpg", description: "Respiratory therapy and lung recovery support." },
  { name: "Geriatric Rehab", image: "/images/geriatric-rehab.jpg", description: "Therapy and care for elderly patients." },
  { name: "Sports Rehab", image: "/images/sports-rehab.jpg", description: "Injury recovery and performance training for athletes." },
  { name: "Speech Rehab", image: "/images/speech-rehab.jpg", description: "Helps individuals improve communication skills through therapy and exercises." }
];

function RehabServices() {
  const [direction, setDirection] = useState("left");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => (prev === "left" ? "right" : "left"));
    }, 4000); // Change direction every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Rehabilitation Services</h2>
      <div className={`slider-container ${direction}`}>
        <div className="slider">
          {rehabServices.map((service, index) => (
            <div key={index} className="slide" style={styles.card}>
              <img src={service.image} alt={service.name} style={styles.image} />
              <h3 style={styles.title}>{service.name}</h3>
              <p style={styles.description}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "50px 20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    overflow: "hidden"
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "250px",
    margin: "10px",
    textAlign: "center",
    flexShrink: 0
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    height: "160px",
    objectFit: "cover"
  },
  title: {
    marginTop: "10px",
    fontSize: "18px",
    color: "#444"
  },
  description: {
    fontSize: "14px",
    color: "#666"
  }
};

export default RehabServices;
