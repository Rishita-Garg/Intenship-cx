import React, { useState, useEffect } from 'react';
import './Navbarstyles.css'; // Import your CSS file
import group1 from './CX_logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <div className="logo"><img src={group1} alt="Description" /></div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <a className="nav-link" href="/Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Media">Media</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Contact">Contact</a>
        </li>
        
      </ul>
      <div className="buttons">
        <button className="orange-button" onClick={() => window.location.href = '/Tracking'}>Tracking</button>
        <button className="purple-button" onClick={() => window.location.href = '/Otp'}>Book Now</button>
      </div>
    </nav>
  );
};

export default Navbar;

