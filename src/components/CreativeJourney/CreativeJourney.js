import React from 'react';
import './styles.css';

// Creative Journey - timeline style section
const CreativeJourney = () => {
  return (
    <section id="journey" className="section">
      <div className="section-title">Creative Journey</div>
      <div className="timeline">
        <div className="timeline-entry">
          <div className="timeline-dot" />
          <div>
            <h4>Engineering Qualification</h4>
            <p>Engineering foundation providing analytical rigor and technical precision to creative practice.</p>
          </div>
        </div>

        <div className="timeline-entry">
          <div className="timeline-dot" />
          <div>
            <h4>Fashion Designing Studies</h4>
            <p>Creative exploration of clothing concepts, fashion illustration, and garment development.</p>
          </div>
        </div>

        <div className="timeline-entry">
          <div className="timeline-dot" />
          <div>
            <h4>Fine Art Studies</h4>
            <p>Artistic expression through composition, drawing, visual storytelling, and creative exploration.</p>
          </div>
        </div>

        <div className="timeline-entry">
          <div className="timeline-dot" />
          <div>
            <h4>Textile Designing Studies</h4>
            <p>Textile patterns, fabric-inspired compositions, print concepts, and surface design.</p>
          </div>
        </div>

        <div className="timeline-entry">
          <div className="timeline-dot" />
          <div>
            <h4>Block Printing Studies</h4>
            <p>Traditional printing techniques, handcrafted patterns, and repeating motifs in textile art.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeJourney;