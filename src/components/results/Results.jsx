import React from 'react';
import './Results.css';
import { FaUsers, FaGlobe, FaCalendarAlt, FaWarehouse, FaTags, FaChartLine } from 'react-icons/fa';

const Results = () => {
  return (
    <section className="proven-results">
      <div className="text-section">
        <h2>Driving Growth with Proven Results</h2>
        <p>We reached here with our hard work and dedication</p>
      </div>
      <div className="stats-grid">
        <div className="stat-item">
          <FaUsers className="icon" />
          <p><strong>2000+</strong><br />Satisfied Customers</p>
        </div>
        <div className="stat-item">
          <FaGlobe className="icon" />
          <p><strong>10+</strong><br />Countries Network</p>
        </div>
        <div className="stat-item">
          <FaCalendarAlt className="icon" />
          <p><strong>40+</strong><br />Years of Service</p>
        </div>
        <div className="stat-item">
          <FaWarehouse className="icon" />
          <p><strong>500,000+</strong><br />MT Per Annum Supply Capacity</p>
        </div>
        <div className="stat-item">
          <FaTags className="icon" />
          <p><strong>20+</strong><br />Categories of Premium Paper</p>
        </div>
        <div className="stat-item">
          <FaChartLine className="icon" />
          <p><strong>15%+</strong><br />Increase in Profits of Our Clients</p>
        </div>
      </div>
    </section>
  );
};

export default Results;