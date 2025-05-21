import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Clients from '../components/clients/Clients';
import Stats from '../components/stats/Stats';
import Features from '../components/features/Features';
import Services from '../components/services/Services';
// import Results from '../components/results/Results'
// import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Stats />
      <Features />
      <Services />
      {/* <Results /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;