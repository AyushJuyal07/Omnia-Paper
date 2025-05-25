import React from 'react';
import './Navbar.css';
import mainLogo from '../../assets/main-logo.png';
import { FaChevronDown, FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={mainLogo} alt="Omnia Papers" className="main-logo" />
      <div className="nav-actions">
        <ul className="nav-links">
          <li><strong>Home</strong></li>
          <li>Our Products <FaChevronDown className="dropdown-icon" /></li>
          <li>About us</li>
          <li>Why Omnia ?</li>
          <li>More <FaChevronDown className="dropdown-icon" /></li>
        </ul>
        <button className="btn-primary connect-btn">Connect <FaArrowRight /></button>
      </div>
    </nav>
  );
};

export default Navbar;