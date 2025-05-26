import React from 'react';
import './ProductGrid.css';
import { products } from '../productData';

const ProductGrid = () => {
  return (
    <section className="product-section">
      <div className="svg-background">
        <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.05" d="M0 300C180 400 360 200 540 250C720 300 900 500 1080 480C1260 460 1440 300 1440 300V600H0V300Z" fill="white"/>
          <path opacity="0.05" d="M0 200C180 300 360 100 540 150C720 200 900 400 1080 380C1260 360 1440 200 1440 200" stroke="white" strokeWidth="2"/>
          <path opacity="0.05" d="M0 100C180 200 360 0 540 50C720 100 900 300 1080 280C1260 260 1440 100 1440 100" stroke="white" strokeWidth="2"/>
        </svg>
      </div>

      <div className="product-header">
        <h1>Powering Industries,<br />Delivering Excellence</h1>
        <p className="sub-title">Industries We Serve</p>
      </div>

      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={product.name}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="product-tag">&lt;product-{index + 1} /&gt;</div>
            </div>
            <h3>{product.name}</h3>
            <p>
              Use audio to have live conversations with other collaborators
              directly in your Figma and FigJam files.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
