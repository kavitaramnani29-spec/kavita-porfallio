import React from 'react';
import './styles.css';

// Areas of Expertise - four visually appealing cards
const ExpertiseCards = () => {
  return (
    <section id="expertise" className="section">
      <div className="section-title">Areas of Expertise</div>
      <div className="expertise-grid">
        <div className="expertise-card">
          <div className="expertise-card-image">Fashion Designing</div>
          <h3>Fashion Designing</h3>
          <p>
            Showcase creativity in clothing concepts, fashion illustration, color coordination,
            garment inspiration, and design development. Exploring the intersection of style,
            function, and personal expression through fabric and form.
          </p>
        </div>

        <div className="expertise-card">
          <div className="expertise-card-image">Fine Art</div>
          <h3>Fine Art</h3>
          <p>
            Highlight artistic expression through composition, drawing, visual storytelling,
            colors, and creative exploration. A journey into the depths of visual communication
            and the power of the creative mark.
          </p>
        </div>

        <div className="expertise-card">
          <div className="expertise-card-image">Textile Designing</div>
          <h3>Textile Designing</h3>
          <p>
            Present textile patterns, fabric-inspired compositions, print concepts, surface
            design, and color experimentation. Where threads become stories and patterns
            transform spaces.
          </p>
        </div>

        <div className="expertise-card">
          <div className="expertise-card-image">Block Printing</div>
          <h3>Block Printing</h3>
          <p>
            Celebrate traditional printing techniques, handcrafted patterns, repeating motifs,
            and the artistic beauty of printed textiles. Honoring the timeless craft that
            transforms simple cloth into works of art.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseCards;