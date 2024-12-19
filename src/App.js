import "./App.css";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import PikachuEyes from "../components/Pikachu/Pickachu";
import BannerRotate from "../components/BannerRotate/BannerRotate";
import PikachuComponent from "../components/Pikachu/PikachuComponent";
import About from "../components/About/About";

function App() {
  return (
    <div className="app-cover">
      <Navbar />
      <PikachuComponent />
      <Banner />
      <About />
      <BannerRotate />
    </div>
    
  );
}

export default App;
