# Week 1 – Frontend Fundamentals

> **Full Stack Web Development (MERN) Internship — Assignment Submission**  
> **Student:** Kadali Swarna Latha  
> **Degree:** B.Tech in Artificial Intelligence & Machine Learning  
> **University:** Aditya University (2024–2028)  

---

## Overview

This project represents the complete, production-ready submission for **Week 1 – Frontend Fundamentals** of the Full Stack Web Development (MERN) Internship. It focuses strictly on the foundational building blocks of modern web applications: **Semantic HTML5**, **Modern CSS3 (Flexbox, Grid, Responsive Design, CSS Custom Properties)**, **JavaScript ES6+**, and **React.js core fundamentals (Components, Props, State, Events, Dynamic Rendering)**.

The application brings together three key milestones in an integrated, responsive architecture:
1. **Part 1 – Personal Portfolio Website**: A modern, high-performance portfolio showcasing academic background, technical skills, 6 featured projects, and a validated contact form.
2. **Part 2 – React Components Practice**: A suite of reusable functional components demonstrating props, state, event handling, and dynamic `.map()` rendering.
3. **Part 3 – React Blog UI Mini Project**: A blog application powered by static JSON data, featuring real-time keyword search (title + description) and category filtering that work simultaneously, complete with zero-result empty-state handling.

---

## Week 1 Objectives

- [x] Structure web pages using semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- [x] Implement modern CSS3 layouts using Flexbox and CSS Grid without external CSS utility frameworks.
- [x] Create fully responsive layouts supporting Desktop, Tablet, and Mobile viewports with zero horizontal scrolling.
- [x] Apply modern JavaScript ES6+ features naturally (`let`/`const`, arrow functions, template literals, destructuring, spread operator, array methods like `.map()` and `.filter()`).
- [x] Build modular and reusable React functional components.
- [x] Utilize unidirectional data flow via React Props.
- [x] Manage local component state using React `useState`.
- [x] Handle interactive user events (`onClick`, `onChange`, `onSubmit`).
- [x] Dynamically render lists of data from structured objects and JSON files without hardcoded markup.

---

## Technologies Used

- **HTML5**: Semantic tags, accessible landmarks, form elements, meta tags, and responsive viewports.
- **CSS3**: Vanilla CSS design tokens (custom properties), Flexbox, CSS Grid, media queries, smooth transitions, and subtle hover interactions.
- **JavaScript ES6+**: Block scoping (`let`, `const`), arrow functions, template literals, object/array destructuring, spread operator (`...`), and array methods (`.map()`, `.filter()`).
- **React.js (v19)**: Functional components, React Hooks (`useState`, `useMemo`, `useEffect`), synthetic event handling, and conditional rendering.
- **Vite (v8)**: Ultra-fast modern frontend build tool and local development server.

---

## Features

- **Semantic Document Architecture**: Built with semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) to ensure accessibility and SEO compliance.
- **Responsive Navigation Bar**:
  - Sticky glassmorphic header with scroll detection.
  - Desktop nav links and a mobile hamburger drawer navigation.
  - Active section highlight and seamless switching between Portfolio and Blog UI views.
- **Hero Section**:
  - Personal greeting, academic credentials at Aditya University (B.Tech AI & ML, 2024–2028).
  - Quick calls-to-action ("View Projects", "Contact Me", "Explore Blog Mini-App").
  - Live metric badges and an interactive developer profile code preview card.
- **About Section**:
  - Student-developer narrative connecting Artificial Intelligence, Machine Learning, and frontend software engineering.
  - Specialization highlight cards and quick profile snapshot.
- **Education Section**:
  - Timeline card detailing B.Tech in AI & ML at Aditya University (2024–2028), enrollment status, and curriculum highlights.
- **Categorized Skills Section**:
  - Dynamic display of all 13 required competencies grouped into:
    - *Programming Languages*: C, C++, Python, Java, SQL
    - *Core Computer Science*: DSA, OOP, DBMS, Operating Systems
    - *AI & Data Science*: Machine Learning, Data Analysis
    - *DevOps & Environment*: Linux/RHEL, Git/GitHub
- **Featured Projects Section**:
  - Reusable card grid rendering the 6 required projects:
    1. **TrueTone** – Real-Time Synthetic Voice Detection
    2. **BizReady** – AI-Powered Application Readiness Checker
    3. **Interior Design Recommendation System**
    4. **Study & Contest Assistant**
    5. **MediSearch**
    6. **Online Voting System**
  - Includes badges, descriptions, tech stack pills, and GitHub repository links.
- **React Components Practice Section**:
  - Live interactive demonstration of React functional components, prop customizability, state management, and an interactive appreciation clap counter (`useState` + `onClick`).
- **Client-Side Validated Contact Form**:
  - Controlled inputs for Name, Email, and Message.
  - Validation rules: Name (required, min 2 chars), Email (regex pattern matching), Message (required, min 10 chars).
  - Inline error alerts and a glowing confirmation success card upon submission.
- **React Blog Mini-App**:
  - Interactive search bar with instant clear button.
  - Dynamic category selector pills (All, React, CSS, JavaScript, HTML).
  - Simultaneous search and filtering across post titles and descriptions.
  - Interactive article expansion toggle ("Read Article" / "Show Less").
  - Friendly empty-state with a "Clear Search & Filters" reset action.

---

## React Components

All components are organized under `src/components/` as modular, single-responsibility functional components:

### 1. `Header.jsx`
- **Purpose**: Global application header containing semantic `<header>` and `<nav>`.
- **Key Props**: `currentPage`, `onNavigate`, `activeSection`.
- **Functionality**: Manages sticky scroll state, mobile menu toggle, active section highlighting, and smooth routing between the Portfolio and Blog Mini-App.

### 2. `Footer.jsx`
- **Purpose**: Semantic `<footer>` providing personal bio, quick jump links, social channels, and assignment attribution.
- **Key Props**: `onNavigate`.
- **Functionality**: Dynamically renders links and technology badges, maintaining the dark theme aesthetic.

### 3. `Card.jsx`
- **Purpose**: Primary reusable container component rendering semantic `<article>` cards.
- **Key Props**: `title`, `subtitle`, `category`, `description`, `technologies` (array), `actionText`, `actionUrl`, `onAction`, `badge`, `children`.
- **Functionality**: Renders titles, descriptions, category pills, and dynamic tech pills using `.map()`, composing the `Button` component for primary actions.

### 4. `Button.jsx`
- **Purpose**: Highly reusable button and anchor element.
- **Key Props**: `children`, `onClick`, `variant` (`'primary'`, `'secondary'`, `'outline'`), `type` (`'button'`, `'submit'`), `disabled`, `href`, `ariaLabel`.
- **Functionality**: Conditionally renders either a styled `<button>` or `<a>` tag with accessible ARIA attributes and smooth hover transitions.

### 5. `Form.jsx`
- **Purpose**: Controlled form component powering the Contact section.
- **Key Props**: `title`, `subtitle`, `onSubmitSuccess`.
- **Functionality**: Manages form field values, real-time input validation, inline error messaging, and animated success confirmation with a form reset option.

### 6. `BlogCard.jsx`
- **Purpose**: Reusable card component designed specifically for blog post items.
- **Key Props**: `post` (`{ id, title, description, category, date, readTime }`).
- **Functionality**: Features category-coded tag pills, publication metadata, and an interactive expandable section for key takeaways.

### 7. `SearchBar.jsx`
- **Purpose**: Controlled input field for live post filtering.
- **Key Props**: `searchTerm`, `onSearchChange`, `onClear`, `placeholder`.
- **Functionality**: Displays a search icon, responsive text input, and a quick-clear (X) button when a query is active.

### 8. `CategoryFilter.jsx`
- **Purpose**: Interactive pill navigation for filtering posts by topic.
- **Key Props**: `categories` (array), `selectedCategory`, `onSelectCategory`.
- **Functionality**: Maps dynamically over unique category keys, applying active class styles and updating the parent filter state.

---

## React Concepts Demonstrated

### Components
Functional components are used across the entire application. Each component is self-contained, clean, and organized under `src/components/` and `src/pages/`.

### Props
Props enable parent components to pass data and callbacks to children:
```jsx
// Passing custom data and handlers to reusable Card component
<Card
  title="TrueTone"
  subtitle="Real-Time Synthetic Voice Detection"
  category="AI/ML"
  description="An AI-powered audio analysis framework designed to detect deepfake and synthetic human voices..."
  technologies={["Python", "Machine Learning", "Audio Processing"]}
  actionText="View Project / GitHub"
  actionUrl="https://github.com"
/>
```

### State
Component state is managed with the `useState` hook:
- `formData` & `errors` in `Form.jsx` for controlled input handling and validation.
- `searchTerm` & `selectedCategory` in `Blog.jsx` for live filtering.
- `demoLikes` in `Portfolio.jsx` for interactive button click tracking.
- `isMobileMenuOpen` & `isScrolled` in `Header.jsx` for responsive drawer toggles and scroll styling.

### Events
User interactions are captured and handled declaratively:
- `onClick`: Triggers category filters, counter claps, mobile menu toggles, and section scrolls.
- `onChange`: Captures input keystrokes in search fields and contact forms.
- `onSubmit`: Intercepts form submissions using `e.preventDefault()`, validates data integrity, and triggers submission states.

### Dynamic Rendering
All repeated data structures (projects, skills, education highlights, blog posts, and category pills) are rendered dynamically using JavaScript's `.map()` method with unique keys:
```jsx
// Dynamic project cards rendering
{projectsData.map((project) => (
  <Card
    key={project.id}
    title={project.name}
    subtitle={project.subtitle}
    category={project.category}
    description={project.description}
    technologies={project.technologies}
    actionUrl={project.githubUrl}
  />
))}
```

---

## Blog Features

- **JSON Data Source (`src/data/posts.json`)**:
  - Contains structured blog posts covering React, CSS, JavaScript, and HTML, strictly including the required sample posts:
    1. *Introduction to React* (React)
    2. *Understanding CSS Flexbox* (CSS)
    3. *JavaScript ES6 Fundamentals* (JavaScript)
    4. *Responsive Web Design* (CSS)
    5. *Semantic HTML5 Architecture* (HTML)
    6. *Mastering React Props and Events* (React)
- **Real-Time Live Search**:
  - Controlled via `SearchBar.jsx`.
  - Searches case-insensitively across both `post.title` and `post.description`.
- **Category Filter**:
  - Controlled via `CategoryFilter.jsx`.
  - Categories are extracted dynamically using ES6 `Set`: `['All', ...new Set(posts.map(p => p.category))]`.
- **Simultaneous Search & Filter**:
  - Articles must satisfy *both* the active search query and selected category simultaneously:
  ```javascript
  const filteredPosts = postsData.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = normalizedQuery === '' || post.title.toLowerCase().includes(normalizedQuery) || post.description.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesSearch;
  });
  ```
- **Empty State Feedback**:
  - When no articles match the combined query, an informative empty state is rendered with a "Clear Search & Filters" button that resets all filters.

---

## Project Structure

```
assignment1/
│
├── public/
│   └── favicon.svg               # Modern SVG developer emblem favicon
│
├── src/
│   ├── components/
│   │   ├── Header.jsx            # Semantic <header> & <nav>, mobile drawer
│   │   ├── Footer.jsx            # Semantic <footer>, links & credentials
│   │   ├── Card.jsx              # Reusable card component
│   │   ├── Button.jsx            # Reusable button & link component
│   │   ├── Form.jsx              # Controlled form with client-side validation
│   │   ├── BlogCard.jsx          # Reusable blog article card
│   │   ├── SearchBar.jsx         # Controlled search input with clear button
│   │   └── CategoryFilter.jsx    # Category pill filter navigation
│   │
│   ├── data/
│   │   ├── portfolioData.js      # Structured data for info, skills, education, & projects
│   │   └── posts.json            # Blog articles JSON data file
│   │
│   ├── pages/
│   │   ├── Portfolio.jsx         # Full Portfolio page (Hero, About, Edu, Skills, Projects, Practice, Contact)
│   │   └── Blog.jsx              # Full Blog UI page (Search, Filter, Cards, Empty state)
│   │
│   ├── App.jsx                   # Master root layout & navigation manager
│   ├── main.jsx                  # React DOM root entrypoint
│   └── index.css                 # Vanilla CSS design system (Tokens, Flexbox, Grid, Media Queries)
│
├── index.html                    # HTML5 entry with meta description and Google Fonts
├── package.json                  # Vite & React scripts and dependencies
└── README.md                     # Comprehensive documentation and verification guide
```

---

## Installation

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) installed.

Clone or open the project folder in your terminal and install dependencies:

```bash
npm install
```

---

## Run

To launch the local development server with Vite hot module replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173/`.

---

## Build

To create an optimized production build:

```bash
npm run build
```

To preview the built production bundle locally:

```bash
npm run preview
```

---

## Final Verification Checklist

- [x] **HTML5 Semantic Structure**: Valid `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` elements.
- [x] **CSS3**: Flexbox and Grid layouts, CSS variables, smooth scrolling, and hover transitions.
- [x] **Responsive Design**: Verified on Desktop, Tablet, and Mobile screens with no horizontal overflow.
- [x] **JavaScript ES6+**: Block scoping, arrow functions, template literals, destructuring, spread syntax, and array methods.
- [x] **React Fundamentals**: Functional components, props, `useState`, event handlers (`onClick`, `onChange`, `onSubmit`).
- [x] **Dynamic Rendering**: All 6 projects, skills, education items, and blog posts rendered using `.map()`.
- [x] **Reusable Components**: `Header`, `Footer`, `Card`, `Button`, `Form`, `BlogCard`, `SearchBar`, `CategoryFilter`.
- [x] **Blog Features**: JSON data loading, real-time search, category filtering, combined filtering, and empty-state messaging.
- [x] **Zero Build/Runtime Errors**: Clean console, 0 ESLint/Vite bundling errors.
