import React, { useState } from 'react';
import './Navbar.css';
import { FaTwitter, FaTelegram, FaDiscord, FaBars, FaTimes } from 'react-icons/fa';
import Pikachu  from "../../assets/Niggachu.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="nav-logo">
        <img src= {Pikachu} alt="Logo" className="logo-img" />
      <span className="logo-text">$NIGGACHU</span>
      </div>

      {/* Hamburger Icon */}
      <div className="nav-hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#about">About</a>
        <a href="#how-to-buy">How to Buy</a>
        <a href="#tokenomics">Tokenomics</a>
      </div>

      {/* Social Links */}
      <div className="nav-socials">
        <a href="#twitter" className="social-icon">
          <FaTwitter />
        </a>
        <a href="#telegram" className="social-icon">
          <FaTelegram />
        </a>
        <a href="#discord" className="social-icon">
          <FaDiscord />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;