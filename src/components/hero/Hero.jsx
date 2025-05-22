// import React from 'react';
// import './Hero.css';

// const Hero = () => {
//   return (
//     <section className="hero">
//       <h1>Your Paper<br />Our Promise</h1>
//       <p>Largest paper exporter from India since 1982</p>
//       <button className="btn-primary">Connect With Us</button>
//     </section>
//   );
// };

// export default Hero;

'use client';

import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'motion';
import { splitText } from 'motion-plus';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      containerRef.current.style.visibility = 'visible';

      // Get both lines separately
      const line1 = containerRef.current.querySelector('.line1');
      const line2 = containerRef.current.querySelector('.line2');

      // Split text for each line
      const { words: words1 } = splitText(line1);
      const { words: words2 } = splitText(line2);

      // Animate first line
      animate(
        words1,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: 'spring',
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );

      // Animate second line with a slight delay
      animate(
        words2,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: 'spring',
          duration: 2,
          bounce: 0,
          delay: stagger(0.05, { from: words1.length * 0.05 }),
        }
      );
    });
  }, []);

  return (
    <section className="hero" ref={containerRef}>
      <h1>
        <span className="line1">Your Paper</span>
        <br />
        <span className="line2">Our Promise</span>
      </h1>
      <p>Largest paper exporter from India since 1982</p>
      <button className="btn-primary">Connect With Us</button>
    </section>
  );
};

export default Hero;

