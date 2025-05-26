import React from 'react';
import './Footer.css';
import logo from '../../assets/main-logo.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">

      {/* SVG WAVE BACKGROUND */}
      <div className="footer-wave">
        <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path opacity="0.1" d="M0 300C180 400 360 200 540 250C720 300 900 500 1080 480C1260 460 1440 300 1440 300V600H0V300Z" fill="white"/>
          <path opacity="0.05" d="M0 200C180 300 360 100 540 150C720 200 900 400 1080 380C1260 360 1440 200 1440 200" stroke="white" strokeWidth="2"/>
          <path opacity="0.05" d="M0 100C180 200 360 0 540 50C720 100 900 300 1080 280C1260 260 1440 100 1440 100" stroke="white" strokeWidth="2"/>
        </svg>
      </div>

      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img src={logo} alt="Omnia Papers" className="footer-logo" />
          <div className="footer-links">
            <div>
              <h4>Product</h4>
              <ul>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Customer stories</li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li>About us</li>
                <li>Careers</li>
                <li>Media kit</li>
              </ul>
            </div>
          </div>
          <p className="footer-address">
            Omnia Papers LLP, B-37, basement, Gate-2, Damodar papers, Block B, Sector 67, Noida, Uttar Pradesh 201301
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <div className="footer-right">
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" required />
            <textarea placeholder="Message" required></textarea>
            <div className="privacy-check">
              <input type="checkbox" id="privacy" required />
              <label htmlFor="privacy">
                I have read and accept the <a href="/">privacy policy</a>
              </label>
            </div>
            <button type="submit">Submit →</button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 Omnia Papers. All rights reserved.</p>
        <div className="social-icons">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
