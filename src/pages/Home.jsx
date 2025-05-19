import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Clients from '../components/clients/Clients';
import Stats from '../components/stats/Stats';
// import Features from '../components/Features/Features';
// import Services from '../components/Services/Services';
// import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Stats />
      {/* <Features /> */}
      {/* <Services /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;