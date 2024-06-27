import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import group10 from './Group 46.png';

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [trackingNumber, setTrackingNumber] = useState('');
  const texts = ["SEAMLESS", "RELIABLE", "EFFICIENT"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((textIndex + 1) % texts.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [textIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the Tracking component with the tracking number as a query parameter
    window.location.href = `/Tracking?trackingNumber=${trackingNumber}`;
  };

  return (
    <section className="hero">
      <div className="hero-section2">
        <div className="image-container">
          <img src={group10} alt="Description" className="hero-image" />
        </div>
      </div>
      <div className="hero-section">
        <div className="text">
          <h2 className="hero-heading1">EXPERIENCE</h2>
          <h2 className="changing-text">{texts[textIndex]}</h2>
          <h2 className="hero-heading2">LOGISTICS</h2>
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter LRN Number"
              className="search-input"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            <button type="submit" className="search-button">
              Track
            </button>
          </form>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
