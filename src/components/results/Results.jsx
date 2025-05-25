/* === FILE: src/components/ProvenResults/ProvenResults.jsx === */
import React from 'react';
import './Results.css';
import { FaUsers, FaGlobe, FaCalendarAlt, FaWarehouse, FaTags, FaChartLine } from 'react-icons/fa';

const ProvenResults = () => {
  return (
    <section className="proven-results">
      <div className="text-section">
        <h2>Driving Growth with Proven Results</h2>
        <p>We reached here with our hard work and dedication</p>
      </div>
      <div className="stats-grid">
        <div className="stat-item">
          <FaUsers className="icon" />
          <p><strong>2000+</strong><br />Satisfied Customers</p>
        </div>
        <div className="stat-item">
          <FaGlobe className="icon" />
          <p><strong>10+</strong><br />Countries Network</p>
        </div>
        <div className="stat-item">
          <FaCalendarAlt className="icon" />
          <p><strong>40+</strong><br />Years of Service</p>
        </div>
        <div className="stat-item">
          <FaWarehouse className="icon" />
          <p><strong>500,000+</strong><br />MT Per Annum Supply Capacity</p>
        </div>
        <div className="stat-item">
          <FaTags className="icon" />
          <p><strong>20+</strong><br />Categories of Premium Paper</p>
        </div>
        <div className="stat-item">
          <FaChartLine className="icon" />
          <p><strong>15%+</strong><br />Increase in Profits of Our Clients</p>
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;


// import React from 'react';
// import { Users, Globe, Calendar, ThumbsUp, Award, CreditCard } from 'lucide-react';
// import './Result.css';

// const Results = () => {
//   const stats = [
//     {
//       icon: <Users size={24} />,
//       number: "2000+",
//       label: "Satisfied Customers"
//     },
//     {
//       icon: <Globe size={24} />,
//       number: "10+",
//       label: "Countries Network"
//     },
//     {
//       icon: <Calendar size={24} />,
//       number: "40+",
//       label: "Years of Service"
//     },
//     {
//       icon: <ThumbsUp size={24} />,
//       number: "500,000+",
//       label: "MT Per Annum Supply Capacity"
//     },
//     {
//       icon: <Award size={24} />,
//       number: "20+",
//       label: "Categories of Premium Paper"
//     },
//     {
//       icon: <CreditCard size={24} />,
//       number: "15%+",
//       label: "Increase in Profits of Our Clients"
//     }
//   ];

//   return (
//     <div className="growth-banner">
//       {/* Background Pattern */}
//       <div className="background-pattern">
//         <div className="circle circle-1"></div>
//         <div className="circle circle-2"></div>
//         <div className="circle circle-3"></div>
//         <div className="circle circle-4"></div>
//       </div>

//       <div className="content-wrapper">
//         <div className="main-grid">
//           {/* Left Content */}
//           <div className="left-content">
//             <h1 className="main-heading">
//               Driving Growth
//               <br />
//               <span className="sub-heading">with Proven</span>
//               <br />
//               <span className="sub-heading">Results</span>
//             </h1>
//             <p className="description">
//               We reached here with our hard work and dedication
//             </p>
//           </div>

//           {/* Right Stats Grid */}
//           <div className="stats-grid">
//             {stats.map((stat, index) => (
//               <div key={index} className="stat-item">
//                 <div className="stat-icon">
//                   {stat.icon}
//                 </div>
//                 <div className="stat-number">
//                   {stat.number}
//                 </div>
//                 <div className="stat-label">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Results;