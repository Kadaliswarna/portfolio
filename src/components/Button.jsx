import React from 'react';

/**
 * Reusable Button Component
 * Part 2 - React Components Practice
 *
 * Demonstrates:
 * - Functional component
 * - Props with defaults and destructuring
 * - Conditional rendering (button vs anchor link)
 * - Event handling (onClick)
 */
const Button = ({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  className = '',
  href = null,
  target = null,
  rel = null,
  ariaLabel
}) => {
  const combinedClassName = `btn btn-${variant} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
