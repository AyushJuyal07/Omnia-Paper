import React from 'react';
import './Stats.css';
// import backgroundImg from '../../assets/a5c8ed9e-523e-4c2f-9c4b-6c17aef8e8f3.png';

const Stats = () => {
  return (
    <section className="stats-section">
      {/* <div className="stats-background">
        <img src={backgroundImg} alt="background decoration" />
      </div> */}
      <div className="stats-content">
        <div className="stat">400K<br /><span>Tons of Paper Sold</span></div>
        <div className="stat">91.26%<br /><span>On-Time Delivery Rate</span></div>
        <div className="stat">87.56%<br /><span>Repeat Client Across India</span></div>
      </div>
    </section>
  );
};

export default Stats;