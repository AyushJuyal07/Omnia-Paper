import React from 'react';
import './Features.css';
import { FaRegCheckCircle} from 'react-icons/fa';
import { PiCloudCheckBold } from "react-icons/pi";
import { LiaIndustrySolid } from "react-icons/lia";

const Features = () => {
  return (
    <section className="features">
      <h2>Beyond Paper, Beyond Ordinary</h2>
      <p className="subtitle">What Makes Us Stand Out?</p>
      <div className="feature-cards">
        <div className="card">
          <FaRegCheckCircle className="feature-icon"/>
          <h3>Consistency</h3>
          <p>
            We’ve delivered 4L+ tons of paper, maintaining a 91.26% on-time delivery rate and helping clients reduce losses by 3-17%.
          </p>
        </div>
        <div className="card">
            
          <PiCloudCheckBold className="feature-icon" />
          <h3>Quality</h3>
          <p>
            We ensure top-quality paper through rigorous mill checks, helping us stand out in the market. Each client gets a Dedicated Coordinator for seamless support, making us a one-stop solution for all paper printing and packaging needs.
          </p>
        </div>
        <div className="card">
          <LiaIndustrySolid className="feature-icon" />
          <h3>Industry Penetration</h3>
          <p>
            With over half a century of expertise, we are pioneers in the industry, helping 4,000 clients generate ₹5,000 Cr+ revenue, with an 87.56% repeat client rate across India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;