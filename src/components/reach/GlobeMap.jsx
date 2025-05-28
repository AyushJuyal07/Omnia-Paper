import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import './GlobeMap.css';

const GlobeMap = () => {
  const globeRef = useRef();
  const [arcsData, setArcsData] = useState([]);
  const [pointsData, setPointsData] = useState([]);

  useEffect(() => {
    const delhi = { lat: 28.6139, lng: 77.2090 };

    const cities = [
      { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
      { name: 'Kolkata', lat: 22.5726, lng: 88.3639 },
      { name: 'Chennai', lat: 13.0827, lng: 80.2707 },
      { name: 'Bangalore', lat: 12.9716, lng: 77.5946 },
      { name: 'Hyderabad', lat: 17.3850, lng: 78.4867 }
    ];

    const arcs = cities.map(city => ({
      startLat: delhi.lat,
      startLng: delhi.lng,
      endLat: city.lat,
      endLng: city.lng,
      color: ['#ffa500', '#ffa500']
    }));

    setArcsData(arcs);
    setPointsData([delhi, ...cities]);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      // Zoom to India on load
      setTimeout(() => {
        globeRef.current.pointOfView({
          lat: 22.5,
          lng: 78.9,
          altitude: 1.5
        }, 2000);
      }, 1000);
    }
  }, [globeRef.current]);

  return (
    <div className="globe-container" id="globe-section">
      <Globe
        ref={globeRef}
        arcsData={arcsData}
        arcColor="color"
        arcStroke={1.5}
        arcAltitude={0.2}
        arcDashLength={0.3}
        arcDashGap={1}
        arcDashInitialGap={() => Math.random() * 2}
        arcDashAnimateTime={4000}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="#000"
        pointsData={pointsData}
        pointLat={d => d.lat}
        pointLng={d => d.lng}
        pointAltitude={0}
        pointColor={() => '#ffa500'}
        pointRadius={0.2}
        labelsData={pointsData}
        labelLat={d => d.lat}
        labelLng={d => d.lng}
        labelText={d => d.name || 'Delhi'}
        labelSize={1.5}
        labelColor={() => 'orange'}
        labelDotRadius={0.3}
        labelResolution={2}
      />
    </div>
  );
};

export default GlobeMap;
