import React from 'react';
import Button from './Button';

/**
 * Reusable Card Component
 * Part 2 - React Components Practice
 *
 * Demonstrates:
 * - Functional component
 * - Props destructuring & default values
 * - Dynamic rendering of tags/technologies via .map()
 * - Composition (nesting Button component inside Card)
 * - Semantic HTML5 <article> tag
 */
const Card = ({
  title,
  description,
  category,
  subtitle,
  technologies = [],
  actionText = 'View Project / GitHub',
  actionUrl = 'https://github.com',
  onAction,
  badge,
  children,
  className = ''
}) => {
  return (
    <article className={`card ${className}`.trim()}>
      <div className="card-header">
        {(category || badge) && (
          <div className="card-badges">
            {category && <span className="badge badge-category">{category}</span>}
            {badge && <span className="badge badge-accent">{badge}</span>}
          </div>
        )}
        <h3 className="card-title">{title}</h3>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>

      <div className="card-body">
        <p className="card-description">{description}</p>

        {technologies && technologies.length > 0 && (
          <div className="card-tech-stack" aria-label="Technologies used">
            {technologies.map((tech, index) => (
              <span key={`${tech}-${index}`} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        )}

        {children}
      </div>

      {(actionText || onAction) && (
        <div className="card-footer">
          {actionUrl ? (
            <Button
              href={actionUrl}
              variant="outline"
              className="card-action-btn"
              onClick={onAction}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>{actionText}</span>
            </Button>
          ) : (
            <Button
              variant="primary"
              className="card-action-btn"
              onClick={onAction}
            >
              {actionText}
            </Button>
          )}
        </div>
      )}
    </article>
  );
};

export default Card;
