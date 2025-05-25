/* === FILE: src/components/IndustriesWeServe/IndustriesWeServe.jsx === */
import React from 'react';
import './Products.css';

const industries = [
  { title: 'Carry Bags', image: 'carry-bag.png', desc: 'We deliver best-in-class construction with ultra-modern solutions driven by paper and hygiene tech.' },
  { title: 'Food Containers', image: 'food-container.png', desc: 'We deliver best-in-class construction with ultra-modern solutions driven by paper and hygiene tech.' },
  { title: 'Pouches', image: 'pouch.png', desc: 'We deliver best-in-class construction with ultra-modern solutions driven by paper and hygiene tech.' },
  { title: 'Stationary', image: 'stationary.png', desc: 'We deliver best-in-class construction with ultra-modern solutions driven by paper and hygiene tech.' },
  { title: 'Box', image: 'box.png', desc: 'We deliver best-in-class construction with ultra-modern solutions driven by paper and hygiene tech.' },
  { title: 'Paper Packaging', image: 'paper-packaging.png', desc: 'We deliver best-in-class construction with ultra-modern solutions driven by paper and hygiene tech.' },
  { title: 'Tissue', image: 'tissue.png', desc: 'We deliver best-in-class construction with ultra-modern solutions driven by paper and hygiene tech.' },
  { title: 'Paper Envelope', image: 'paper-envelope.png', desc: 'We deliver best-in-class construction with ultra-modern solutions driven by paper and hygiene tech.' },
  { title: 'Kraft Paper Roll', image: 'kraft-paper-roll.png', desc: 'We deliver best-in-class construction with ultra-modern solutions driven by paper and hygiene tech.' },
  { title: 'Tape', image: 'Tape.png', desc: 'We deliver best-in-class construction with ultra-modern solutions driven by paper and hygiene tech.' },
  { title: 'Paper Bag', image: 'Paper-Bag.png', desc: 'We deliver best-in-class construction with ultra-modern solutions driven by paper and hygiene tech.' },
  { title: 'Paper Kite', image: 'Paper-Kite.png', desc: 'We deliver best-in-class construction with ultra-modern solutions driven by paper and hygiene tech.' },
];

const Products = () => {
  return (
    <section className="industries-section">
      <div className="industries-header">
        <h2>Powering Industries,<br />Delivering Excellence</h2>
        <p>Industries We Serve</p>
      </div>
      <div className="industries-grid">
        {industries.map((item, index) => (
          <div key={index} className="industry-card">
            <img src={require(`../../assets/industries/${item.image}`)} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
