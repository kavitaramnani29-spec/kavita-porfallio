import React, { useState } from 'react';
import './styles.css';

// Creative Portfolio Gallery - filterable with lightbox
const PortfolioGallery = () => {
  // Sample projects - replace with Kavita's real artwork
  const [filter, setFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

  const projects = [
    // Fashion Design projects
    {
      id: 1,
      title: 'Floral Ensemble',
      description: 'Spring collection exploring botanical motifs and flowing silhouettes.',
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1568661208408-754a171889d0?w=800&h=600&fit=crop',
    },
    {
      id: 2,
      title: 'Structured Elegance',
      description: 'Modern silhouette with architectural details and unexpected draping.',
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1531186033418-e6c3be73073d?w=800&h=600&fit=crop',
    },
    // Fine Art projects
    {
      id: 3,
      title: 'Inner Landscape',
      description: 'Mixed media exploration of memory, space, and emotional resonance.',
      category: 'fine-art',
      image: 'https://images.unsplash.com/photo-1541751532004-b906d7e1d0f8?w=800&h=600&fit=crop',
    },
    {
      id: 4,
      title: 'Color Studies',
      description: 'Series exploring color theory and emotional impact through abstract forms.',
      category: 'fine-art',
      image: 'https://images.unsplash.com/photo-1566313692929-5b5b660061b3?w=800&h=600&fit=crop',
    },
    // Textile Design projects
    {
      id: 5,
      title: 'Woven Patterns',
      description: 'Surface design collection featuring geometric and organic repeat patterns.',
      category: 'textile',
      image: 'https://images.unsplash.com/photo-1508755130882-fd2639f191be?w=800&h=600&fit=crop',
    },
    {
      id: 6,
      title: 'Dye Experiments',
      description: 'Natural dye studies investigating plant-based color palettes.',
      category: 'textile',
      image: 'https://images.unsplash.com/photo-1556909134-f2c345b8cb8c?w=800&h=600&fit=crop',
    },
    // Block Printing projects
    {
      id: 7,
      title: 'Heritage Motifs',
      description: 'Traditional block-printed patterns reimagined for contemporary textile applications.',
      category: 'block-printing',
      image: 'https://images.unsplash.com/photo-1558655146-b465f1ac7c31?w=800&h=600&fit=crop',
    },
    {
      id: 8,
      title: 'Repeating Grids',
      description: 'Exploration of geometric repetition and the rhythm of hand-printed motifs.',
      category: 'block-printing',
      image: 'https://images.unsplash.com/photo-1595794271856-a69705bb73a3?w=800&h=600&fit=crop',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const handleFilterChange = (e) => {
    const filterValue = e.target.dataset.filter;
    setFilter(filterValue);
  };

  const handleCloseLightbox = () => setLightboxOpen(false);

  return (
    <section id="portfolio" className="section">
      <div className="section-title">Creative Portfolio Gallery</div>
      <div className="portfolio-filter">
        <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} data-filter="all" onClick={handleFilterChange}>All Projects</button>
        <button className="filter-btn" data-filter="fashion" onClick={handleFilterChange}>Fashion Design</button>
        <button className="filter-btn" data-filter="fine-art" onClick={handleFilterChange}>Fine Art</button>
        <button className="filter-btn" data-filter="textile" onClick={handleFilterChange}>Textile Design</button>
        <button className="filter-btn" data-filter="block-printing" onClick={handleFilterChange}>Block Printing</button>
      </div>
      <div className="portfolio-grid">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="portfolio-item"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setLightboxImage(project.image);
              setLightboxOpen(true);
            }}
          >
            <img
              className="portfolio-image"
              src={project.image}
              alt={project.title}
              loading="lazy"
            />
            <div className="portfolio-info">
              <h3 className="portfolio-title">{project.title}</h3>
              <p className="portfolio-desc">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={handleCloseLightbox}>
          <img
            className="lightbox-image"
            src={lightboxImage}
            alt={lightboxImage}
            loading="lazy"
          />
        </div>
      )}
    </section>
  );
};

export default PortfolioGallery;