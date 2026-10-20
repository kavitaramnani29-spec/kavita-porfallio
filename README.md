# Engineer Kavita Ramnani - Premium Portfolio Website

## Overview

This is a premium, elegant, visually immersive personal portfolio website for Engineer Kavita Ramnani, designed with a luxury editorial aesthetic inspired by high-end fashion magazines, contemporary art galleries, and traditional textile craftsmanship.

## Design Direction

- **Color Palette**: Warm ivory (#FAF7F2) and cream (#F5F0E8) backgrounds, deep burgundy (#6B2C2F) and earthy terracotta (#A04533) accents, muted sage green (#8C9F85), elegant charcoal (#2D2D2D) typography, and subtle antique-gold (#D4A843) details
- **Typography**: Playfair Display serif font for headings, Inter sans-serif for body text
- **Visual Style**: Editorial grid layouts, subtle shadows, refined borders, high-quality imagery, balanced whitespace

## Website Structure

The website consists of the following sections:

1. **Navigation** - Sticky navbar with wordmark "Kavita Ramnani" and links to all sections
2. **Hero** - Striking opening with artistic image and headline: "Where Art Meets Design, and Tradition Meets Innovation."
3. **About Me** - Professional introduction with portrait space
4. **Expertise Cards** - Four cards covering Fashion Designing, Fine Art, Textile Designing, and Block Printing
5. **Creative Portfolio Gallery** - Filterable gallery with categories: All Projects, Fashion Design, Fine Art, Textile Design, Block Printing
6. **Creative Journey** - Timeline-style section highlighting areas of learning
7. **Language** - Minimal display of spoken language (English)
8. **Contact** - Contact form and information section

## Available Sections

| Section | ID | Description |
|---------|-----|-------------|
| Navigation | N/A | Sticky navbar at top |
| Home | `#home` | Hero section (implicit) |
| About | `#about` | Professional introduction |
| Expertise | `#expertise` | Four expertise cards |
| Portfolio | `#portfolio` | Filterable gallery |
| Journey | `#journey` | Creative timeline |
| Language | `#language` | English spoken language |
| Contact | `#contact` | Contact form and information |

## File Structure

```
kavita-portfolio/
├── package.json          - Project dependencies and scripts
├── public/
│   └── index.html        - HTML entry point
└── src/
    ├── styles.css        - Main stylesheet with all styling
    ├── index.js          - React entry point
    └── components/
        ├── Navigation/   - Navigation bar
        ├── Hero/         - Hero section
        ├── About/        - About me section
        ├── ExpertiseCards/ - Four expertise cards
        ├── PortfolioGallery/ - Filterable gallery with lightbox
        ├── CreativeJourney/ - Timeline section
        ├── Language/   - Language section
        └── Contact/    - Contact form section
        └── Footer/     - Footer component
```

## Running the Project

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. The website will be available at `http://localhost:3000`

### Building for Production

```
npm run build
```

The built files will be in the `build/` directory.

## Customizing the Website

### Personal Information

**Name and Branding**: 
- Update the navigation wordmark in `src/components/Navigation/Navigation.js`
- Modify the page title and meta description in `public/index.html`

**Introduction**:
- Edit the About section text in `src/components/About/About.js`
- Replace the portrait image with Kavita's actual portrait

**Expertise Descriptions**:
- Modify the four expertise card descriptions in `src/components/ExpertiseCards/ExpertiseCards.js`
- Replace placeholder images with actual artwork/textile samples

### Portfolio Gallery

1. Replace sample Unsplash images with Kavita's real artwork:
   - Edit the `image` property in each project object in `src/components/PortfolioGallery/PortfolioGallery.js`
   - Update the `title` and `description` for each project
   - Re-categorize projects by modifying the `category` field ('fashion', 'fine-art', 'textile', 'block-printing')

2. Filter categories are automatically generated from the project categories.

### Creative Journey

1. Update timeline entries in `src/components/CreativeJourney/CreativeJourney.js`
2. Add actual dates and sequences as they become available
3. The timeline structure remains: Engineering → Fashion Designing → Fine Art → Textile Designing → Block Printing

### Contact Section

1. **Email/Phone**: Not hardcoded - add your contact details to the form or section as needed
2. **Form Integration**: The contact form currently provides client-side validation and success/error feedback. To integrate with a real email service:
   - Use a service like Formspree, EmailJS, or similar
   - Replace the `handleSubmit` function in `src/components/Contact/Contact.js` with your form submission logic
   - The current implementation shows success/error messages without sending actual emails

### Visual Customization

- **Color palette**: Modify CSS variables in `src/styles.css`
- **Typography**: Font families can be changed in `src/styles.css` 
- **Background images**: Update the hero and contact section background URLs
- **Image replacements**: Replace all Unsplash placeholder images with Kavita's actual work

### Sample vs. Real Content

**Sample/Placeholder content is clearly marked throughout and indicated by:**
- Unsplash-sourced stock images in the hero and portfolio sections
- Placeholder portrait in the About section
- Descriptive text noting "replace with actual artwork"
- Timeline entries without specific dates (as dates were not provided)

All sample content should be replaced with Kavita's actual work, sketches, textile samples, and completed projects before presenting the portfolio professionally.

## Accessibility

- Reduced-motion support: `@media (prefers-reduced-motion: reduce)` disables all animations
- Keyboard-navigable interface
- Semantic HTML structure
- Form labels associated with input elements
- Color contrast designed to meet WCAG AA standards
- Focus states on interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Design Notes

- All animations are lightweight and respect user preferences
- Image loading is optimized with `loading="lazy"` for below-the-fold images
- The layout is fully responsive from 320px to 1400px+
- No external dependencies beyond React and React DOM
- Clean, maintainable code structure with reusable components