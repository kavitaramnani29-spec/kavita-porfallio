import React from 'react';
import './styles.css';

// Hero Section - striking opening with artistic imagery
const Hero = () => {
  return (
    <section className="hero">
      <div>
        <h1>Where Art Meets Design, and Tradition Meets Innovation.</h1>
        <p>
          Welcome to the creative portfolio of Engineer Kavita Ramnani, showcasing an artistic
          journey through fashion designing, fine art, textile design, and the timeless craft of
          block printing.
        </p>
        <div className="cta-buttons">
          <a href="#expertise" className="cta-button cta-button-explore">Explore My Work</a>
          <a href="#contact" className="cta-button cta-button-touch">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;