import React from 'react';

/**
 * Reusable CategoryFilter Component
 * Part 3 - React Blog UI Mini Project
 *
 * Demonstrates:
 * - Dynamic list rendering with .map()
 * - Props and event callbacks (onSelectCategory)
 * - Conditional active class application
 * - Semantic button pills
 */
const CategoryFilter = ({ categories = [], selectedCategory = 'All', onSelectCategory }) => {
  return (
    <nav className="category-filter-nav" aria-label="Filter blog posts by category">
      <div className="filter-pills-list">
        {categories.map((category) => {
          const isSelected = selectedCategory.toLowerCase() === category.toLowerCase();

          return (
            <button
              key={category}
              type="button"
              className={`filter-pill-btn ${isSelected ? 'filter-pill-active' : ''}`}
              onClick={() => onSelectCategory(category)}
              aria-pressed={isSelected}
            >
              {category}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default CategoryFilter;
