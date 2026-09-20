import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';

/**
 * Root Application Component
 *
 * Coordinates:
 * - Top-level page view state (Portfolio vs Blog)
 * - Active scroll section tracking for navbar highlighting
 * - Smooth navigation between pages and sections
 */
function App() {
  const [currentPage, setCurrentPage] = useState('portfolio');
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll when viewing Portfolio
  useEffect(() => {
    if (currentPage !== 'portfolio') return;

    const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // Master navigation handler
  const handleNavigate = (targetId, isPage = false) => {
    if (isPage || targetId === 'blog') {
      setCurrentPage('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentPage !== 'portfolio') {
        setCurrentPage('portfolio');
        // Allow Portfolio DOM to mount before scrolling
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(targetId);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 80);
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(targetId);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className="app-layout">
      {/* Global Header & Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Dynamic Page Views */}
      {currentPage === 'portfolio' ? (
        <Portfolio onNavigateToBlog={() => handleNavigate('blog', true)} />
      ) : (
        <Blog onBackToPortfolio={() => handleNavigate('home', false)} />
      )}

      {/* Global Semantic Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
