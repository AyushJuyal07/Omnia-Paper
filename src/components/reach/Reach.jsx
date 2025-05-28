// import React from 'react';
// import './Reach.css';
// import worldImage from '../../assets/servicess.jpg'; // Adjust the path based on your project

// const GlobalReach = () => {
//   return (
//     <section className="global-reach">
//       <div className="image-container">
//         <<img src={worldImage} alt="Global Reach" />>
//       </div>
//       <div className="text-container">
//         <h2>
//           From India,<br />
//           Connecting the <span className="highlight">World.</span>
//         </h2>
//         <p>
//           We source the finest products and deliver them worldwide, expanding opportunities and building strong global partnerships
//         </p>
//         <button className="read-more">
//           Read More →
//         </button>
//       </div>
//     </section>
//   );
// };

// export default GlobalReach;


import React from 'react';
import './GlobalReach.css';
import AnimatedMap from './AnimatedMap'; // Import the animated map component
// import GlobeMap from './GlobeMap';
const GlobalReach = () => {
  return (
    <section className="global-reach">
      <div className="image-container">
        <AnimatedMap /> {/* Replaced the image with animated map */}
      </div>
      <div className="text-container">
        <h2>
          From India,<br />
          Connecting the <span className="highlight">World.</span>
        </h2>
        <p>
          We source the finest products and deliver them worldwide, expanding opportunities and building strong global partnerships
        </p>
        <button className="read-more">
          Read More →
        </button>
      </div>
    </section>
  );
};

export default GlobalReach;
