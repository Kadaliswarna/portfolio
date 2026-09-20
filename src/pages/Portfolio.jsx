import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Form from '../components/Form';
import {
  personalInfo,
  educationData,
  skillCategories,
  projectsData
} from '../data/portfolioData';

/**
 * Portfolio Page Component
 * Part 1 – Personal Portfolio Website
 * Part 2 – React Components Practice (Integrated Demonstrations)
 *
 * Demonstrates:
 * - Semantic HTML5 tags: <main>, <section>, <article>, <header>, etc.
 * - Dynamic list rendering via .map() (no repeated hardcoded cards)
 * - Props passing to reusable components (Card, Button, Form)
 * - State management (interactive practice counter, contact alerts)
 * - Event handling (onClick, onSubmit, etc.)
 */
const Portfolio = ({ onNavigateToBlog }) => {
  // Practice interactive state demonstrating React useState & Events
  const [demoLikes, setDemoLikes] = useState(12);
  const [activeTab, setActiveTab] = useState('all');

  return (
    <main className="portfolio-main">
      {/* ===================================================
          HERO SECTION (HOME)
         =================================================== */}
      <section id="home" className="hero-section" aria-labelledby="hero-heading">
        <div className="section-container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="status-indicator"></span>
              <span>Available for Summer 2026 Internships</span>
            </div>

            <h1 id="hero-heading" className="hero-title">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <p className="hero-role">
              {personalInfo.degree}
            </p>

            <p className="hero-institution">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
              <span>{personalInfo.university} &bull; {personalInfo.duration}</span>
            </p>

            <p className="hero-tagline">{personalInfo.tagline}</p>

            <div className="hero-actions">
              <Button
                href="#projects"
                variant="primary"
                className="hero-btn-primary"
              >
                <span>View Projects</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </Button>

              <Button
                href="#contact"
                variant="outline"
                className="hero-btn-secondary"
              >
                <span>Contact Me</span>
              </Button>

              <Button
                variant="secondary"
                onClick={onNavigateToBlog}
                className="hero-btn-blog"
              >
                <span>Explore Blog Mini-App</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="hero-metrics">
              <div className="metric-item">
                <span className="metric-number">6+</span>
                <span className="metric-label">Featured Projects</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <span className="metric-number">13+</span>
                <span className="metric-label">Core Tech Skills</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <span className="metric-number">2024–28</span>
                <span className="metric-label">B.Tech Cohort</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="hero-visual">
            <div className="developer-profile-card">
              <div className="profile-badge-header">
                <div className="code-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="profile-file-name">developer_profile.jsx</span>
              </div>
              <div className="profile-code-snippet">
                <pre>
                  <code>{`const developer = {
  name: "${personalInfo.name}",
  degree: "B.Tech AI & ML",
  university: "Aditya University",
  graduation: 2028,
  focus: [
    "Artificial Intelligence",
    "Machine Learning",
    "Frontend Engineering (React)"
  ],
  status: "Full Stack MERN Intern"
};`}</code>
                </pre>
              </div>
              <div className="profile-footer-stats">
                <span className="stat-pill">⚡ HTML5 / CSS3</span>
                <span className="stat-pill">⚛️ React Components</span>
                <span className="stat-pill">🤖 AI/ML Pipelines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          ABOUT SECTION
         =================================================== */}
      <section id="about" className="section about-section" aria-labelledby="about-heading">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Introduction</span>
            <h2 id="about-heading" className="section-title">About Me</h2>
            <div className="section-line"></div>
          </div>

          <div className="about-grid">
            <div className="about-text-column">
              <h3 className="about-subheading">
                Undergraduate Student & Aspiring Software Engineer specializing in Artificial Intelligence & Machine Learning
              </h3>
              <p className="about-paragraph">
                {personalInfo.bio}
              </p>
              <p className="about-paragraph">
                During this <strong>Full Stack Web Development (MERN) Internship</strong>, I am synthesizing fundamental web building blocks—<strong>HTML5 semantic structures, responsive CSS3 Flexbox and Grid layouts, modern ES6+ JavaScript, and reusable React functional components</strong>—with intelligent backend systems to craft modern, accessible digital solutions.
              </p>

              <div className="about-highlights-grid">
                <div className="about-highlight-card">
                  <div className="highlight-icon">🧠</div>
                  <h4>AI & Machine Learning</h4>
                  <p>Pattern recognition, speech synthesis detection, data analysis, and predictive model architectures.</p>
                </div>
                <div className="about-highlight-card">
                  <div className="highlight-icon">💻</div>
                  <h4>Software Development</h4>
                  <p>Strong algorithmic fundamentals in C, C++, Java, and Python with clean OOP and DBMS practices.</p>
                </div>
                <div className="about-highlight-card">
                  <div className="highlight-icon">🎨</div>
                  <h4>Frontend Engineering</h4>
                  <p>Building responsive, accessible interfaces using semantic HTML5, pure CSS3, and component-driven React.</p>
                </div>
              </div>
            </div>

            <div className="about-info-column">
              <div className="quick-bio-card">
                <h4 className="card-mini-title">Profile Snapshot</h4>
                <ul className="info-list">
                  <li>
                    <span className="info-label">Full Name:</span>
                    <span className="info-value">{personalInfo.name}</span>
                  </li>
                  <li>
                    <span className="info-label">Degree:</span>
                    <span className="info-value">{personalInfo.degree}</span>
                  </li>
                  <li>
                    <span className="info-label">Institution:</span>
                    <span className="info-value">{personalInfo.university}</span>
                  </li>
                  <li>
                    <span className="info-label">Academic Tenure:</span>
                    <span className="info-value">{personalInfo.duration}</span>
                  </li>
                  <li>
                    <span className="info-label">Location:</span>
                    <span className="info-value">{personalInfo.location}</span>
                  </li>
                  <li>
                    <span className="info-label">Specialization:</span>
                    <span className="info-value">AI, ML & Frontend Architecture</span>
                  </li>
                </ul>

                <div className="social-links-row">
                  <Button
                    href="https://github.com"
                    variant="outline"
                    className="social-link-btn"
                  >
                    GitHub Profile
                  </Button>
                  <Button
                    href="https://linkedin.com"
                    variant="outline"
                    className="social-link-btn"
                  >
                    LinkedIn Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          EDUCATION SECTION
         =================================================== */}
      <section id="education" className="section education-section" aria-labelledby="education-heading">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Academic Background</span>
            <h2 id="education-heading" className="section-title">Education</h2>
            <div className="section-line"></div>
          </div>

          <div className="education-timeline">
            {educationData.map((edu) => (
              <article key={edu.id} className="education-card">
                <div className="edu-badge-row">
                  <span className="edu-year-badge">{edu.duration}</span>
                  <span className="edu-status-badge">{edu.status}</span>
                </div>

                <h3 className="edu-degree-title">{edu.degree}</h3>
                <h4 className="edu-institution-name">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <span>{edu.institution}</span>
                </h4>

                <div className="edu-highlights">
                  <h5 className="highlights-header">Academic Curriculum & Focus Areas:</h5>
                  <ul className="highlights-list">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="highlight-item">
                        <span className="bullet-point">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          SKILLS SECTION
         =================================================== */}
      <section id="skills" className="section skills-section" aria-labelledby="skills-heading">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Technical Competencies</span>
            <h2 id="skills-heading" className="section-title">Skills & Expertise</h2>
            <p className="section-description">
              A comprehensive toolkit developed through academic studies, competitive programming, and practical software engineering.
            </p>
            <div className="section-line"></div>
          </div>

          <div className="skills-grid">
            {skillCategories.map((group, groupIndex) => (
              <div key={groupIndex} className="skill-category-card">
                <div className="category-header">
                  <h3 className="category-title">{group.category}</h3>
                  <span className="skill-count-badge">{group.skills.length} skills</span>
                </div>

                <div className="skills-pill-container">
                  {group.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">
                      <span className="skill-dot"></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          PROJECTS SECTION
         =================================================== */}
      <section id="projects" className="section projects-section" aria-labelledby="projects-heading">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Featured Work</span>
            <h2 id="projects-heading" className="section-title">Projects</h2>
            <p className="section-description">
              Demonstrating practical application of AI/ML, data structures, algorithm design, and software engineering principles.
            </p>
            <div className="section-line"></div>
          </div>

          {/* Dynamic Rendering of Projects using reusable Card component & .map() */}
          <div className="projects-grid">
            {projectsData.map((project) => (
              <Card
                key={project.id}
                title={project.name}
                subtitle={project.subtitle}
                category={project.category}
                description={project.description}
                technologies={project.technologies}
                actionText="View Project / GitHub"
                actionUrl={project.githubUrl}
                className="project-portfolio-card"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          PART 2 – REACT COMPONENTS PRACTICE SHOWCASE
         =================================================== */}
      <section id="components-practice" className="section practice-section" aria-labelledby="practice-heading">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Part 2 Verification</span>
            <h2 id="practice-heading" className="section-title">React Components Practice</h2>
            <p className="section-description">
              Demonstrating functional components, props passing, local state (useState), and event handling (onClick, onChange, onSubmit).
            </p>
            <div className="section-line"></div>
          </div>

          <div className="practice-grid">
            {/* Practice Card 1: Props Demonstration */}
            <div className="practice-box">
              <div className="practice-header">
                <span className="practice-tag">Props Demo</span>
                <h4>Card Component with Custom Props</h4>
              </div>
              <Card
                title="TrueTone"
                subtitle="Real-time synthetic voice detection"
                category="AI/ML"
                description="This instance demonstrates passing title, category, description, and custom action text via React props directly to the reusable Card component."
                technologies={["Python", "Machine Learning", "Audio Processing"]}
                actionText="Check Repository"
                actionUrl="https://github.com"
              />
            </div>

            {/* Practice Card 2: State & Events Demonstration */}
            <div className="practice-box">
              <div className="practice-header">
                <span className="practice-tag">State & Events</span>
                <h4>Interactive Button & Counter</h4>
              </div>
              <div className="counter-demo-card">
                <p className="counter-explanation">
                  Demonstrating React <code>useState</code> and <code>onClick</code> events with dynamic state updates:
                </p>

                <div className="counter-display">
                  <span className="counter-value">{demoLikes}</span>
                  <span className="counter-label">Portfolio Appreciation Claps</span>
                </div>

                <div className="counter-actions">
                  <Button
                    variant="primary"
                    onClick={() => setDemoLikes((prev) => prev + 1)}
                    className="clap-btn"
                  >
                    👏 Give a Clap (+1)
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setDemoLikes(12)}
                    className="reset-counter-btn"
                  >
                    Reset
                  </Button>
                </div>

                <div className="state-info-snippet">
                  <code>Current State: {`{ count: ${demoLikes} }`}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          CONTACT SECTION
         =================================================== */}
      <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Get In Touch</span>
            <h2 id="contact-heading" className="section-title">Contact</h2>
            <p className="section-description">
              Have an internship opportunity, project idea, or question? Send me a message below.
            </p>
            <div className="section-line"></div>
          </div>

          <div className="contact-grid">
            {/* Contact Info Cards */}
            <div className="contact-details-column">
              <div className="contact-info-card">
                <h3 className="contact-card-title">Contact Information</h3>
                <p className="contact-card-desc">
                  Feel free to reach out directly via email or connect with me through my developer and professional profiles.
                </p>

                <div className="contact-channels">
                  <div className="channel-item">
                    <div className="channel-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div className="channel-text">
                      <span className="channel-title">Email</span>
                      <a href={`mailto:${personalInfo.email}`} className="channel-link">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="channel-item">
                    <div className="channel-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="channel-text">
                      <span className="channel-title">Location</span>
                      <span className="channel-val">{personalInfo.location}</span>
                    </div>
                  </div>

                  <div className="channel-item">
                    <div className="channel-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </svg>
                    </div>
                    <div className="channel-text">
                      <span className="channel-title">University</span>
                      <span className="channel-val">{personalInfo.university} (2024–2028)</span>
                    </div>
                  </div>
                </div>

                <div className="verification-notice">
                  <span className="shield-icon">🛡️</span>
                  <span>Includes client-side form validation verifying non-empty strings and valid email formatting.</span>
                </div>
              </div>
            </div>

            {/* Reusable Form Component */}
            <div className="contact-form-column">
              <Form
                title="Send a Message"
                subtitle="Fill in your details below and I will respond promptly."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
