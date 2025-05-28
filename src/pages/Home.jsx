import React from 'react';
import Navbar from '../components/navbar/Navbar';
import MainPage from '../components/mainPage/MainPage';
import Clients from '../components/clients/Clients';
import Stats from '../components/stats/Stats';
import Features from '../components/features/Features';
import Services from '../components/services/Services';
import Reach from '../components/reach/Reach';
import Results from '../components/results/Results'
import Products from '../components/products/Products'
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <MainPage />
      <Clients />
      <Stats />
      <Features />
      <Services />
      <Reach />
      <Results />
      <Products />
      <Footer />
    </>
  );
};

export default Home;