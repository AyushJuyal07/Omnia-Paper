
import React from 'react';
import './Clients.css';
import logo from '../../assets/logo.png';


const Clients = () => {
  return (
    <section className="clients">
      <h2>Our Clients</h2>
      <p>We have been working with some Fortune 500+ clients</p>
      <div className="client-logos-wrapper">
        <div className="client-logos-track">
          <div className="client-logos">
            <img src={logo} alt="Client 1" />
            <img src={logo} alt="Client 2" />
            <img src={logo} alt="Client 3" />
            <img src={logo} alt="Client 4" />
            <img src={logo} alt="Client 5" />
            <img src={logo} alt="Client 6" />
            <img src={logo} alt="Client 6" />
            <img src={logo} alt="Client 6" />
            <img src={logo} alt="Client 6" />
            <img src={logo} alt="Client 6" />
          </div>
          <div className="client-logos">
            <img src={logo} alt="Client 1" />
            <img src={logo} alt="Client 2" />
            <img src={logo} alt="Client 3" />
            <img src={logo} alt="Client 4" />
            <img src={logo} alt="Client 5" />
            <img src={logo} alt="Client 6" />
            <img src={logo} alt="Client 6" />
            <img src={logo} alt="Client 6" />
            <img src={logo} alt="Client 6" />
            <img src={logo} alt="Client 6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;