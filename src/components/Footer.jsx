import React from 'react';

/**
 * Reusable Footer Component
 * Part 2 - React Components Practice
 *
 * Demonstrates:
 * - Semantic HTML5 <footer>
 * - Functional component with props
 * - Dynamic rendering of links and tags
 * - Modern ES6 template literals
 */
const Footer = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { id: 'home', label: 'Home', isPage: false },
    { id: 'about', label: 'About', isPage: false },
    { id: 'education', label: 'Education', isPage: false },
    { id: 'skills', label: 'Skills', isPage: false },
    { id: 'projects', label: 'Projects', isPage: false },
    { id: 'blog', label: 'Blog UI', isPage: true },
    { id: 'contact', label: 'Contact', isPage: false }
  ];

  const techBadges = ['HTML5', 'CSS3 Flexbox & Grid', 'JavaScript ES6+', 'React.js', 'Vite'];

  return (
    <footer className="app-footer">
      <div className="footer-container">
        {/* Top Footer Grid */}
        <div className="footer-grid">
          {/* Col 1: Bio / Brand */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <span className="brand-badge">KSL</span>
              <span className="footer-title">Kadali Swarna Latha</span>
            </div>
            <p className="footer-bio">
              Undergraduate in B.Tech Artificial Intelligence & Machine Learning at Aditya University (2024–2028). Passionate about full-stack engineering, AI systems, and responsive web design.
            </p>
            <div className="footer-social-links">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links-list">
              {footerLinks.map((link) => (
                <li key={`footer-${link.id}`}>
                  <button
                    type="button"
                    className="footer-nav-btn"
                    onClick={() => onNavigate && onNavigate(link.id, link.isPage)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Internship Specs & Stack */}
          <div className="footer-tech-col">
            <h4 className="footer-heading">Assignment Context</h4>
            <p className="footer-subtitle">
              Full Stack Web Development (MERN) Internship — <strong>Week 1: Frontend Fundamentals</strong>
            </p>
            <div className="footer-tags">
              {techBadges.map((badge, idx) => (
                <span key={idx} className="footer-badge">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} <strong>Kadali Swarna Latha</strong>. All rights reserved. Aditya University (2024–2028).
          </p>
          <p className="built-with-text">
            Built strictly with Semantic HTML5, CSS3, JavaScript ES6+, and React.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
