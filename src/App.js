import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ExpertiseCards from './components/ExpertiseCards/ExpertiseCards';
import PortfolioGallery from './components/PortfolioGallery/PortfolioGallery';
import CreativeJourney from './components/CreativeJourney/CreativeJourney';
import Language from './components/Language/Language';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles.css';

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <ExpertiseCards />
      <PortfolioGallery />
      <CreativeJourney />
      <Language />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;