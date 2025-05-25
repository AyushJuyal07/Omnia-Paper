import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import mainLogo2 from '../../assets/main-logo2.png';
import './Footer.css'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptedPrivacy) {
      alert('Please accept the privacy policy');
      return;
    }
    console.log('Form submitted:', formData);
  };

  return (
    <>

      <footer className="footer-container">
        {/* Background Pattern */}
        <div className="background-pattern">
          <div className="circle-pattern circle-1"></div>
          <div className="circle-pattern circle-2"></div>
          <div className="circle-pattern circle-3"></div>
          <div className="circle-pattern circle-4"></div>
          <div className="circle-pattern circle-5"></div>
          <div className="circle-pattern circle-6"></div>
          
          <svg className="curved-lines" viewBox="0 0 1200 600">
            <path
              d="M0,300 Q300,100 600,300 T1200,300"
              stroke="rgba(147, 197, 253, 0.3)"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0,250 Q300,50 600,250 T1200,250"
              stroke="rgba(147, 197, 253, 0.2)"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0,350 Q300,150 600,350 T1200,350"
              stroke="rgba(147, 197, 253, 0.2)"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>

        <div className="main-content">
          <div className="content-wrapper">
            
            {/* Left side - Company Info */}
            <div className="left-section">
              <div className="logo-section">
                <div className="logo-icon"><img src={mainLogo2} alt="Omnia Papers" className="main-logo" /></div>
                <span className="logo-text">Omnia Papers</span>
                
              </div>
              
              <nav className="navigation">
                <div className="nav-section">
                  <h3 className="nav-title">Product</h3>
                  <ul className="nav-list">
                    <li className="nav-item">
                      <a href="#" className="nav-link">Overview</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Customer stories</a>
                    </li>
                  </ul>
                </div>
                
                <div className="nav-section">
                  <h3 className="nav-title">Company</h3>
                  <ul className="nav-list">
                    <li className="nav-item">
                      <a href="#" className="nav-link">About us</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Careers</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Media kit</a>
                    </li>
                  </ul>
                </div>
              </nav>
              
              <div className="address">
                <p>Omnia Papers LLP, B-37, basement, Gate-2,</p>
                <p>Damodar papers, Block B, Sector 67, Noida, Uttar</p>
                <p>Pradesh 201301</p>
              </div>
            </div>

            {/* Right side - Laptop with Contact Form */}
            <div className="right-section">
              <div className="laptop-container">
                {/* Laptop Base */}
                {/* <div className="laptop-base"></div> */}
                
                {/* Laptop Screen */}
                <div className="laptop-screen">
                  <div className="screen-content">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                    
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                    
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                    
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-input form-textarea"
                      ></textarea>
                    </div>
                    
                    <div className="checkbox-container">
                      <input
                        type="checkbox"
                        id="privacy"
                        checked={acceptedPrivacy}
                        onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                        className="checkbox"
                      />
                      <label htmlFor="privacy" className="checkbox-label">
                        I have read and accept the{' '}
                        <a href="#" className="privacy-link">
                          privacy policy
                        </a>
                      </label>
                    </div>
                    
                    <button
                      onClick={handleSubmit}
                      className="submit-button"
                    >
                      Submit
                      <svg className="submit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="bottom-section">
            <div className="copyright">
              © 2025 Omnia Papers. All rights reserved.
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link">
                <FaFacebookF className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <FaInstagram className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <FaTwitter className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;