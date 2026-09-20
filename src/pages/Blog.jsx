import React, { useState, useMemo } from 'react';
import BlogCard from '../components/BlogCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import Button from '../components/Button';
import postsData from '../data/posts.json';

/**
 * Blog Page Component
 * Part 3 – React Blog UI Mini Project
 *
 * Demonstrates:
 * - Dynamic data fetching/import from JSON (posts.json)
 * - Controlled search bar (filtering by title and description)
 * - Category filter pills with active state
 * - Simultaneous search & category filtering using ES6 .filter()
 * - Dynamic rendering of post cards with .map()
 * - Empty state with fallback UI and reset button
 * - Semantic HTML5 (<section>, <header>, <article>)
 */
const Blog = ({ onBackToPortfolio }) => {
  // Search and filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories dynamically using ES6 Set and spread operator
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(postsData.map((post) => post.category)));
    return ['All', ...uniqueCategories];
  }, []);

  // Filter posts based on BOTH search query and selected category simultaneously
  const filteredPosts = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase();

    return postsData.filter((post) => {
      // Check if post matches the category
      const matchesCategory =
        selectedCategory === 'All' ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      // Check if title or description matches the search term
      const matchesSearch =
        normalizedQuery === '' ||
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.description.toLowerCase().includes(normalizedQuery);

      // Both conditions must be true simultaneously
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  // Reset filters handler
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };

  return (
    <main className="blog-page-main">
      {/* Blog Hero Header */}
      <section className="blog-hero-section" aria-labelledby="blog-hero-title">
        <div className="section-container">
          <div className="blog-back-wrapper">
            <Button
              variant="outline"
              onClick={onBackToPortfolio}
              className="back-to-portfolio-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to Portfolio</span>
            </Button>
          </div>

          <div className="blog-header-content">
            <span className="section-eyebrow">Mini Project • Part 3</span>
            <h1 id="blog-hero-title" className="blog-page-title">
              Frontend & Engineering <span className="gradient-text">Insights</span>
            </h1>
            <p className="blog-page-subtitle">
              Explore essential concepts across HTML5, modern CSS3 layouts, JavaScript ES6+, and React component architecture. Built with live search and category filtering.
            </p>
          </div>

          {/* Controls Bar: Search + Category Filter */}
          <div className="blog-controls-container">
            <div className="search-control-col">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                onClear={() => setSearchTerm('')}
                placeholder="Search articles by title or keyword..."
              />
            </div>

            <div className="filter-control-col">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>
          </div>

          {/* Search/Filter Status Bar */}
          <div className="filter-status-bar">
            <span className="results-count-text">
              Showing <strong>{filteredPosts.length}</strong> of {postsData.length} articles
            </span>

            {(searchTerm || selectedCategory !== 'All') && (
              <div className="active-filter-chips">
                {selectedCategory !== 'All' && (
                  <span className="filter-chip">
                    Category: <em>{selectedCategory}</em>
                    <button
                      type="button"
                      onClick={() => setSelectedCategory('All')}
                      aria-label="Remove category filter"
                    >
                      ×
                    </button>
                  </span>
                )}
                {searchTerm && (
                  <span className="filter-chip">
                    Search: <em>"{searchTerm}"</em>
                    <button
                      type="button"
                      onClick={() => setSearchTerm('')}
                      aria-label="Remove search term"
                    >
                      ×
                    </button>
                  </span>
                )}
                <button
                  type="button"
                  className="reset-all-link"
                  onClick={handleResetFilters}
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Cards Grid Section */}
      <section className="blog-grid-section" aria-label="Blog posts list">
        <div className="section-container">
          {filteredPosts.length > 0 ? (
            <div className="blog-cards-grid">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            /* Requirement 7: Display a message when no posts match */
            <div className="no-posts-container" role="status">
              <div className="no-posts-icon" aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
              <h3 className="no-posts-title">No Matching Posts Found</h3>
              <p className="no-posts-description">
                We couldn't find any articles matching your search query{' '}
                {searchTerm && <strong>"{searchTerm}"</strong>}{' '}
                {selectedCategory !== 'All' && (
                  <span>
                    in category <strong>{selectedCategory}</strong>
                  </span>
                )}
                . Try adjusting your keywords or clearing the category filter.
              </p>
              <Button
                variant="primary"
                onClick={handleResetFilters}
                className="clear-filter-btn"
              >
                Clear Search & Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Blog;
