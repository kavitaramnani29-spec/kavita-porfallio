import React from 'react';
import './styles.css';

// About Me Section - professional introduction with portrait
const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-title">About Me</div>
      <div className="about-image">
        {/* Portrait placeholder - replace with Kavita's actual portrait */}
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop" alt="Kavita Ramnani portrait" />
      </div>
      <div>
        <p>
          I am Kavita Ramnani, an engineer with a creative interest in fashion, fine art, textile
          design, and traditional block printing. My creative journey brings together artistic
          expression, design exploration, and an appreciation for the patterns, textures, and
          craftsmanship that make every creation distinctive.
        </p>
        <p>
          Through my areas of study, I continue to explore the relationship between visual art,
          textiles, and design, with an emphasis on creativity, detail, and originality.
        </p>
      </div>
    </section>
  );
};

export default About;