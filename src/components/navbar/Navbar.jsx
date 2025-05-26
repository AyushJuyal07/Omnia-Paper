import React, { useState } from 'react';
import './Navbar.css';
import mainLogo from '../../assets/main-logo.png';
import { FaChevronDown, FaArrowRight } from 'react-icons/fa';
import { products } from '../productData';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={mainLogo} alt="Omnia Papers" className="main-logo" />
      </div>
      <div className="nav-actions">
        <ul className="nav-links">
          <li className="active">Home</li>

          <li
            className="dropdown-container"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            Our Products <FaChevronDown className="dropdown-icon" />
            {showDropdown && (
              <div className="product-dropdown">
                {products.map((product) => (
                  <div className="dropdown-item" key={product.name}>
                    <img src={product.image} alt={product.name} />
                    <span>{product.name}</span>
                  </div>
                ))}
              </div>
            )}
          </li>

          <li>About us</li>
          <li>Why Omnia ?</li>
          <li>
            More <FaChevronDown className="dropdown-icon" />
          </li>
        </ul>
        <button className="btn-primary connect-btn">
          Connect <FaArrowRight />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
