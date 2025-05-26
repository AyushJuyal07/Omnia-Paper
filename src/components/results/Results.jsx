// Results.jsx
import React from 'react';
import './Results.css';
import { FaUsers, FaGlobe, FaCalendarAlt, FaWarehouse, FaTags, FaChartLine } from 'react-icons/fa';

const Results = () => {
  return (
    <section className="proven-results">
      <WaveBackground />
      <div className="results-left">
        <h2>
          Driving Growth<br />
          with <strong>Proven</strong><br />
          Results
        </h2>
        <p>We reached here with our hard work and dedication</p>
      </div>

      <div className="results-right">
        <div className="result-box">
          <FaUsers className="icon" />
          <div className="stat">2000+</div>
          <div className="label">Satisfied Customers</div>
        </div>
        <div className="result-box">
          <FaGlobe className="icon" />
          <div className="stat">10+</div>
          <div className="label">Countries Network</div>
        </div>
        <div className="result-box">
          <FaCalendarAlt className="icon" />
          <div className="stat">40+</div>
          <div className="label">Years of Service</div>
        </div>
        <div className="result-box">
          <FaWarehouse className="icon" />
          <div className="stat">500,000+</div>
          <div className="label">MT Per Annum Supply Capacity</div>
        </div>
        <div className="result-box">
          <FaTags className="icon" />
          <div className="stat">20+</div>
          <div className="label">Categories of Premium Paper</div>
        </div>
        <div className="result-box">
          <FaChartLine className="icon" />
          <div className="stat">15%+</div>
          <div className="label">Increase in Profits of Our Clients</div>
        </div>
      </div>
    </section>
  );
};

const WaveBackground = () => (
  <svg className="wave-svg" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path opacity="0.05" d="M0 300C180 400 360 200 540 250C720 300 900 500 1080 480C1260 460 1440 300 1440 300V600H0V300Z" fill="white" />
    <path opacity="0.05" d="M0 200C180 300 360 100 540 150C720 200 900 400 1080 380C1260 360 1440 200 1440 200" stroke="white" strokeWidth="2" />
    <path opacity="0.05" d="M0 100C180 200 360 0 540 50C720 100 900 300 1080 280C1260 260 1440 100 1440 100" stroke="white" strokeWidth="2" />
  </svg>
);

export default Results;
