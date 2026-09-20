import React from 'react';

/**
 * Reusable SearchBar Component
 * Part 3 - React Blog UI Mini Project
 *
 * Demonstrates:
 * - Controlled input handling
 * - Props passing and callback events
 * - Conditional rendering of clear button
 * - Accessibility attributes
 */
const SearchBar = ({
  searchTerm,
  onSearchChange,
  onClear,
  placeholder = 'Search posts by title or description...'
}) => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-icon-box" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>

      <input
        type="search"
        className="search-input"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search articles by title or keyword"
      />

      {searchTerm && (
        <button
          type="button"
          className="search-clear-btn"
          onClick={onClear}
          aria-label="Clear search input"
          title="Clear search"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
