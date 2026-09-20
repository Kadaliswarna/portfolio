import React, { useState } from 'react';
import Button from './Button';

/**
 * Reusable BlogCard Component
 * Part 3 - React Blog UI Mini Project
 *
 * Demonstrates:
 * - Semantic HTML5 <article>
 * - Props destructuring (post object)
 * - Category-specific badge styling
 * - Local component state (interactive expanded read mode)
 */
const BlogCard = ({ post }) => {
  const { id, title, description, category, date, readTime } = post;
  const [isExpanded, setIsExpanded] = useState(false);

  // Return category color class
  const getCategoryClass = (cat) => {
    switch (cat.toLowerCase()) {
      case 'react':
        return 'badge-react';
      case 'css':
        return 'badge-css';
      case 'javascript':
        return 'badge-js';
      case 'html':
        return 'badge-html';
      default:
        return 'badge-default';
    }
  };

  return (
    <article className="blog-card" id={`post-${id}`}>
      <div className="blog-card-meta">
        <span className={`category-tag ${getCategoryClass(category)}`}>
          {category}
        </span>
        {readTime && <span className="read-time-tag">{readTime}</span>}
      </div>

      <h3 className="blog-card-title">{title}</h3>
      <p className="blog-card-description">{description}</p>

      {isExpanded && (
        <div className="blog-expanded-content" role="region" aria-label="Article Details">
          <p className="blog-expanded-text">
            💡 <strong>Key Takeaway:</strong> In modern web engineering, understanding <em>{title}</em> is crucial for creating maintainable, high-performance web applications. Practice applying these concepts in your code assignments!
          </p>
        </div>
      )}

      <div className="blog-card-footer">
        {date && <span className="blog-card-date">{date}</span>}
        <Button
          variant="outline"
          className="blog-read-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          ariaLabel={`${isExpanded ? 'Collapse' : 'Read more about'} ${title}`}
        >
          {isExpanded ? 'Show Less' : 'Read Article'}
        </Button>
      </div>
    </article>
  );
};

export default BlogCard;
