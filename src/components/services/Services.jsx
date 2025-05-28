
import React from 'react';
import './Services.css';
import servicess from '../../assets/servicess.jpg'

const Services = () => {
  return (
    <section className="services">
      <div className="services-text">
        <h2>Tailored Services for Your Needs</h2>
        <p align="justify">
          We provide expert consultation to help you choose the right paper while ensuring seamless ordering and dedicated support. Enjoy exclusive discounts on bulk and regular purchases, along with smart inventory management through staggered delivery and OWS. For urgent needs, our emergency order service keeps your operations running smoothly.
        </p>

        
        <button className="button-primary">Try Omnia</button>
      </div>
      <div className="services-img">
        <img src={servicess}  alt="Image of Paper Roll" className="placeholder-img" />
      </div>
    </section>
  );
};

export default Services;