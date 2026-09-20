import React, { useState } from 'react';
import Button from './Button';

/**
 * Reusable Form Component
 * Part 2 - React Components Practice & Part 1 Contact Section
 *
 * Demonstrates:
 * - Functional component
 * - React State (useState for form fields, validation errors, and submission status)
 * - React Events (onChange for inputs, onSubmit for form handling)
 * - Modern ES6+ features (computed property names, object destructuring, spread operator, arrow functions)
 * - Controlled form inputs
 * - Client-side validation
 */
const Form = ({ title = 'Send a Message', subtitle = "I'd love to hear from you. Let's discuss AI/ML, frontend projects, or collaboration.", onSubmitSuccess }) => {
  // Form input state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Validation error state
  const [errors, setErrors] = useState({});

  // Submission status state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate form fields using ES6 arrow function
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    // Email validation using standard email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g., name@example.com).';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    // Returns true if no keys in newErrors
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes using ES6 computed property names and spread operator
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate a brief submission response
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        if (onSubmitSuccess) {
          onSubmitSuccess(formData);
        }
      }, 400);
    }
  };

  // Reset form to send another message
  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="form-container success-card" role="status" aria-live="polite">
        <div className="success-icon-wrapper">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h3 className="success-title">Message Sent Successfully!</h3>
        <p className="success-description">
          Thank you, <strong>{formData.name}</strong>. Your message has been received. I will get back to you at <strong>{formData.email}</strong> shortly.
        </p>
        <Button variant="primary" onClick={handleReset} className="reset-btn">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="form-container">
      {title && <h3 className="form-title">{title}</h3>}
      {subtitle && <p className="form-subtitle">{subtitle}</p>}

      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="contact-name" className="form-label">
            Full Name <span className="required-star">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Kadali Swarna Latha"
            className={`form-input ${errors.name ? 'input-error' : ''}`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="error-message" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="contact-email" className="form-label">
            Email Address <span className="required-star">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g., student@aditya.edu.in"
            className={`form-input ${errors.email ? 'input-error' : ''}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="error-message" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="form-group">
          <label htmlFor="contact-message" className="form-label">
            Message <span className="required-star">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Share your feedback, inquiries, or collaboration opportunities..."
            className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          ></textarea>
          {errors.message && (
            <p id="message-error" className="error-message" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="form-submit-btn"
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Send Message</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default Form;
