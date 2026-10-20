import React from 'react';
import './styles.css';

// Navigation Bar - sticky, premium aesthetic
const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-wordmark">Kavita Ramnani</a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#expertise">Expertise</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#journey">Creative Journey</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;