import React from "react";
import './App.css'; 
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OP from "./components/OP"
import Services from "./components/Services";
import Rehab from "./components/Rehab";
import Premium from "./components/Premium";
import Doctors from "./components/Doctors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Hero />
      <Navbar />
      <Services />
      <OP />
      <Rehab />
      <Premium />
      <Doctors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
