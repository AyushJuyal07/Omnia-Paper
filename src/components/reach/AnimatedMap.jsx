// import React from 'react';
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker,
//   Line
// } from 'react-simple-maps';
// import './AnimatedMap.css';

// const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// const markers = [
//   { name: "Toronto", coordinates: [-79.3832, 43.6532] },
//   { name: "London", coordinates: [-0.1276, 51.5072] },
//   { name: "Istanbul", coordinates: [28.9784, 41.0082] },
//   { name: "Riyadh", coordinates: [46.6753, 24.7136] },
//   { name: "Colombo", coordinates: [79.8612, 6.9271] },
//   { name: "Seoul", coordinates: [126.978, 37.5665] },
//   { name: "Tokyo", coordinates: [139.6917, 35.6895] },
// ];

// const lines = [
//   { from: [-79.3832, 43.6532], to: [46.6753, 24.7136] },
//   { from: [-0.1276, 51.5072], to: [46.6753, 24.7136] },
//   { from: [28.9784, 41.0082], to: [46.6753, 24.7136] },
//   { from: [139.6917, 35.6895], to: [46.6753, 24.7136] },
//   { from: [126.978, 37.5665], to: [46.6753, 24.7136] },
//   { from: [79.8612, 6.9271], to: [46.6753, 24.7136] },
// ];

// const AnimatedMap = () => (
//   <div className="map-wrapper">
//     <ComposableMap projectionConfig={{ scale: 160 }}>
//       <Geographies geography={geoUrl}>
//         {({ geographies }) =>
//           geographies.map((geo) => (
//             <Geography
//               key={geo.rsmKey}
//               geography={geo}
//               style={{
//                 default: { fill: "#111", stroke: "#333", strokeWidth: 0.5 },
//                 hover: { fill: "#222" },
//               }}
//             />
//           ))
//         }
//       </Geographies>

//       {markers.map(({ name, coordinates }) => (
//         <Marker key={name} coordinates={coordinates}>
//           <circle r={3.5} fill="#fff" />
//           <text
//             textAnchor="middle"
//             y={-10}
//             style={{ fontFamily: "Arial", fontSize: 10, fill: "#FFA500" }}
//           >
//             {name}
//           </text>
//         </Marker>
//       ))}

//       {lines.map(({ from, to }, idx) => (
//         <Line
//           key={idx}
//           from={from}
//           to={to}
//           stroke="#fff"
//           strokeWidth={1}
//           strokeLinecap="round"
//           style={{ animation: "dash 2s linear infinite" }}
//         />
//       ))}
//     </ComposableMap>
//   </div>
// );

// export default AnimatedMap;

import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";
import "./AnimatedMap.css";

// India-centered TopoJSON or use full world
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";


// Delhi as the only origin
const origin = {
  city: "Delhi",
  coordinates: [77.1025, 28.7041],
};

// Destinations (Indian states/cities)
const destinations = [
  { name: "Mumbai", coordinates: [72.8777, 19.0760] },
  { name: "Chennai", coordinates: [80.2707, 13.0827] },
  { name: "Kolkata", coordinates: [88.3639, 22.5726] },
  { name: "Bangalore", coordinates: [77.5946, 12.9716] },
  { name: "Hyderabad", coordinates: [78.4867, 17.3850] },
  { name: "Ahmedabad", coordinates: [72.5714, 23.0225] },
  { name: "Jaipur", coordinates: [75.7873, 26.9124] },
  { name: "Lucknow", coordinates: [80.9462, 26.8467] },
];

const AnimatedMap = () => {
  return (
    <div className="map-wrapper">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [80.0, 22.0], // Center on India
        }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#111827"
                stroke="#374151"
                strokeWidth={0.5}
              />
            ))
          }
        </Geographies>

        {/* Origin marker */}
        <Marker coordinates={origin.coordinates}>
          <circle r={4} fill="#00ffcc" />
          <text
            textAnchor="middle"
            y={-10}
            style={{ fontFamily: "Arial", fontSize: 10, fill: "#00ffcc" }}
          >
            {origin.city}
          </text>
        </Marker>

        {/* Destination markers and animated lines */}
        {destinations.map(({ name, coordinates }, idx) => (
          <React.Fragment key={idx}>
            <Marker coordinates={coordinates}>
              <circle r={3} fill="#FFA500" />
              <text
                textAnchor="middle"
                y={-10}
                style={{ fontFamily: "Arial", fontSize: 10, fill: "#FFA500" }}
              >
                {name}
              </text>
            </Marker>

            <Line
              from={origin.coordinates}
              to={coordinates}
              stroke="#ffffff"
              strokeWidth={1.5}
              strokeLinecap="round"
              style={{
                strokeDasharray: "4,4",
                animation: "dash 4s linear infinite",
              }}
            />
          </React.Fragment>
        ))}
      </ComposableMap>
    </div>
  );
};

export default AnimatedMap;
