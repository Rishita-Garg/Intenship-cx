import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import whitelogo from '../assets/cxwlogo.png';
import "./Footer.css";

const Footer = () => {
  return (
   <div className="footy">
    <div className="footer-overlay"></div>
    <footer className="footer">
    <div className="gap"></div>
       <div className="container">
        <div className="footer-content">
          <div className="footer-section-logo">
            <img src={whitelogo} alt="Campus Express Logo" className="footer-logo"/>  
          </div>
          <div className="footer-section">
            <div className="social-icons">
              <a href="https://wa.me/+919945590393" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="https://www.instagram.com/campus__express/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/company/campusexpress/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="Address">
            <p>
              Sriven Skypark, Bengaluru Urban,
            </p>
            <p>
              Karnataka, 560083
            </p>
            </div>
          </div>
          <div className="footer-section-contact">
            <p>Email: support@campusexpress.org.in</p>
            <p className='phone'>Contact us: 9945590393, 9945588363</p>
          </div>
        </div>
        <div className="footer-bottom">
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;