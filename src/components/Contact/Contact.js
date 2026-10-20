import React, { useState } from 'react';
import './styles.css';

// Contact Section - "Let's Create Something Beautiful."
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({ show: false, type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // Simple validation
    if (!name || !email || !subject || !message) {
      setFormStatus({ show: true, type: 'error', text: 'Please fill in all fields.' });
      return;
    }

    // In a real application, this would send to a form service
    // For now, we simulate success
    setFormStatus({ show: true, type: 'success', text: 'Message sent successfully!' });

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormStatus({ show: false, type: '', text: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div>
        <h2>Let's Create Something Beautiful.</h2>
        <p>I'd love to connect and discuss creative collaborations, projects, or simply share ideas.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Project inquiry or collaboration"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or thoughts..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      {formStatus.show && (
        <div style={{ marginTop: 1rem, padding: 0.8rem, borderRadius: 4px, color: formStatus.type === 'success' ? 'var(--accent-burgundy)' : 'var(--accent-terracotta)' }}>
          {formStatus.text}
        </div>
      )}
    </section>
  );
};

export default Contact;