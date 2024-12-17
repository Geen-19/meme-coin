import "./App.css";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import PikachuEyes from "../components/Pikachu/Pickachu";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <PikachuEyes />
    </>
  );
}

export default App;