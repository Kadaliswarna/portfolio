import React, { useState, useEffect } from 'react';
import Button from './Button';

/**
 * Reusable Header Component
 * Part 2 - React Components Practice & Global Navigation
 *
 * Demonstrates:
 * - Semantic HTML5 <header> and <nav>
 * - Functional component with props
 * - React State (mobile menu toggle, scroll detection)
 * - Event handling (onClick, scroll listener)
 * - Array .map() for navigation links
 */
const Header = ({ currentPage, onNavigate, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll position to apply glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', isPage: false },
    { id: 'about', label: 'About', isPage: false },
    { id: 'education', label: 'Education', isPage: false },
    { id: 'skills', label: 'Skills', isPage: false },
    { id: 'projects', label: 'Projects', isPage: false },
    { id: 'blog', label: 'Blog', isPage: true },
    { id: 'contact', label: 'Contact', isPage: false }
  ];

  const handleNavClick = (item) => {
    setIsMobileMenuOpen(false);
    onNavigate(item.id, item.isPage);
  };

  return (
    <header className={`app-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        {/* Brand Logo */}
        <a
          href="#home"
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick({ id: 'home', isPage: false });
          }}
          aria-label="Kadali Swarna Latha Portfolio Home"
        >
          <span className="brand-badge">KSL</span>
          <span className="brand-text">
            Swarna Latha <span className="brand-dot">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive =
                item.id === 'blog'
                  ? currentPage === 'blog'
                  : currentPage === 'portfolio' && activeSection === item.id;

              return (
                <li key={item.id} className="nav-item">
                  <button
                    type="button"
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                    onClick={() => handleNavClick(item)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    {item.id === 'blog' && <span className="blog-pill-badge">Mini-App</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Button & Mobile Hamburger Toggle */}
        <div className="header-actions">
          <Button
            variant="outline"
            className="header-cta-btn"
            onClick={() => handleNavClick({ id: 'contact', isPage: false })}
          >
            Get In Touch
          </Button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <nav
        className={`mobile-nav-drawer ${isMobileMenuOpen ? 'drawer-open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <ul className="mobile-nav-list">
          {navItems.map((item) => {
            const isActive =
              item.id === 'blog'
                ? currentPage === 'blog'
                : currentPage === 'portfolio' && activeSection === item.id;

            return (
              <li key={`mobile-${item.id}`} className="mobile-nav-item">
                <button
                  type="button"
                  className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                  onClick={() => handleNavClick(item)}
                >
                  <span>{item.label}</span>
                  {item.id === 'blog' && <span className="blog-pill-badge">Mini-App</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
