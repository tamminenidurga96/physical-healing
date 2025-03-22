import React, { useState } from "react";
import "./Hero.css"; // Import external CSS for styling

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    date: "",
    time: "",
    address: "",
  });

  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await fetch("https://inno-tuitions-backend-production-05e1.up.railway.app/appointments", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to book appointment");
      }

      const data = await response.json();
      setMessage(data.message);

      setTimeout(() => {
        setIsOpen(false);
        setMessage("");
        setFormData({
          name: "",
          age: "",
          gender: "",
          mobile: "",
          email: "",
          date: "",
          time: "",
          address: "",
        });
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error booking appointment");
    }
  };

  return (
    <div className="hero-container">
      <h1 className="hero-heading">
        Your Wellness, Our Priority! <br /> Book a Physiotherapy Session Today
      </h1>
      <button className="open-form-button" onClick={() => setIsOpen(true)}>
        Book Appointment
      </button>
      {isOpen && (
        <div className="form-popup">
          <h2>Book an Appointment</h2>
          <form onSubmit={handleSubmit} className="appointment-form">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input type="text" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            <input type="time" name="time" value={formData.time} onChange={handleChange} required />
            <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} required></textarea>
            <button type="submit">Book Now</button>
            <button type="button" onClick={() => setIsOpen(false)}>Cancel</button>
          </form>
          {message && <p className="success-message">{message}</p>}
        </div>
      )}
    </div>
  );
};

export default Hero;
