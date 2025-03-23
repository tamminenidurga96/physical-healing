import React from "react";
import "./Premium.css";

const Premium = () => {
  const facilities = [
    {
      icon: "🏨",
      title: "Luxury Accommodation",
      description: "Private rooms with premium amenities, ensuring comfort and privacy for every client.",
    },
    {
      icon: "🥗",
      title: "Gourmet Nutrition",
      description: "Custom-designed meal plans prepared by professional chefs to meet individual health needs.",
    },
    {
      icon: "🏋️",
      title: "Fitness & Wellness Programs",
      description: "Personalized fitness routines, yoga sessions, and wellness therapies for holistic recovery.",
    },
    
    {
      icon: "🌿",
      title: "Nature Therapy",
      description: "Healing through nature with serene environments, meditation gardens, and outdoor activities.",
    },
    {
      icon: "📞",
      title: "24/7 Medical Support",
      description: "Round-the-clock medical supervision and support from a team of experienced professionals.",
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Premium Facilities in Our Luxury Rehab</h1>
      <div className="grid-container">
        {facilities.map((facility, index) => (
          <div key={index} className="card">
            <div className="icon">{facility.icon}</div>
            <h2 className="card-title">{facility.title}</h2>
            <p className="card-text">{facility.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Premium;
