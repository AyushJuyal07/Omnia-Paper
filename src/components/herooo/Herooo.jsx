import img1 from '../../assets/producs/img1.png';
import img2 from '../../assets/producs/img2.png';
import img3 from '../../assets/producs/img3.png';

import React, { useState, useEffect, useRef } from 'react';
import './Herooo.css';

const NikeCarousel = () => {
  const [active, setActive] = useState(0);
  const [calculation, setCalculation] = useState(1);
  const autoPlayRef = useRef(null);
  
  const slides = [
{
      id: 1,
      category: "",
      title: "CARRY BAG",
      description: "Use audio to have live conversations with other collaborators directly in your Figma and FigJam files.",
      image: img1
    },
    {
      id: 2,
      category: "", 
      title: "FOOD CONTAINER",
      description: "Use audio to have live conversations with other collaborators directly in your Figma and FigJam files.",
      image: img2
    },
    {
      id: 3,
      category: "",
      title: "CARRY BAG", 
      description: "Use audio to have live conversations with other collaborators directly in your Figma and FigJam files.",
      image: img3
    }
  ];

  const startAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const handleNext = () => {
    setActive(prevActive => prevActive + 1 > slides.length - 1 ? 0 : prevActive + 1);
    setCalculation(1);
    startAutoPlay();
  };

  const handlePrev = () => {
    setActive(prevActive => prevActive - 1 < 0 ? slides.length - 1 : prevActive - 1);
    setCalculation(-1);
    startAutoPlay();
  };

  const handleDotClick = (index) => {
    setActive(index);
    startAutoPlay();
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="nike-carousel-wrapper"
      style={{ '--calculation': calculation }}
    >
      
      <section className="carousel-container">
        <div className="carousel-list">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`carousel-item ${index === active ? 'active' : ''}`}
            >
              <figure className="item-figure">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="item-image"
                />
              </figure>
              <div className="item-content">
                <p className="item-category">
                  {slide.category}
                </p>
                <h2 className="item-title">
                  {slide.title}
                </h2>
                <p className="item-description">
                  {slide.description}
                </p>
                <div className="item-buttons">
                  <button className="btn-add-cart">
                    Add To Cart
                  </button>
                  <button className="btn-see-more">
                    <i className="fa-solid fa-play" style={{ marginRight: '10px' }}></i> 
                    See More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="carousel-arrows">
          <button className="arrow-btn" onClick={handlePrev}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="arrow-btn" onClick={handleNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="carousel-indicators">
          <div className="indicator-number">
            {/* {String(active + 1).padStart(2, '0')} */}
          </div>
          <ul className="indicator-dots">
            {slides.map((_, index) => (
              <li 
                key={index}
                className={`indicator-dot ${index === active ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NikeCarousel;