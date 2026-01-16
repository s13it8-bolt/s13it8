# S13IT8 Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript, featuring a dark theme with teal accents.

## 🚀 Quick Start

1. Download all files to your local machine
2. Open `index.html` in your web browser
3. Edit content directly in the HTML file (see Content Editing Guide below)

## 📁 Project Structure

```
s13it8-portfolio/
├── index.html           # Main HTML file with all content
├── css/
│   ├── main.css        # Core styles, layout, and theme
│   └── components.css  # Additional component styles and utilities
├── js/
│   └── main.js         # Interactive features and animations
├── assets/
│   └── images/         # Place your images here (logo, project images, etc.)
└── README.md           # This file
```

## ✏️ Content Editing Guide

All content can be edited directly in `index.html`. Look for `<!-- EDIT: -->` comments to find sections you can customize:

### 1. Personal Information (Lines 18-25)
```html
<h1 class="profile-name">Matthew Smith</h1>
<p class="profile-handle">@s13it8</p>
<p class="profile-bio">Your bio here...</p>
```

### 2. Activity Stats (Lines 60-75)
Update the numbers to reflect your actual statistics:
```html
<div class="stat-number">247</div>
<div class="stat-change">+32 this week</div>
```

### 3. Featured Projects (Lines 80-150)
Replace project titles, descriptions, stats, and technologies:
```html
<h3 class="project-title">Your Project Name</h3>
<p class="project-description">Your project description...</p>
<span class="project-tech">Technology</span>
```

To add a new project, copy an entire `<div class="project-card">...</div>` block and paste it within the `projects-grid`.

### 4. Writing/Blog Posts (Lines 160-190)
Update article titles, excerpts, dates, and read times:
```html
<h3 class="writing-title">Your Article Title</h3>
<p class="writing-excerpt">Article summary...</p>
<span class="writing-date">Date</span>
```

### 5. Tech Stack (Lines 195-230)
Add or remove technologies:
```html
<span class="stack-tag">Technology Name</span>
```

### 6. Contact Information (Lines 240-270)
Update your contact links and information:
```html
<a href="mailto:your-email@s13it8.com" class="contact-card">
```

## 🎨 Theme Customization

Edit color variables in `css/main.css` (Lines 8-30):

```css
:root {
    --color-bg-primary: #0a0a0a;      /* Main background */
    --color-teal-primary: #14b8a6;     /* Primary accent color */
    --color-text-primary: #f8f9fa;     /* Main text color */
    /* ... more variables */
}
```

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## 🌐 Deployment to Hostinger

### Method 1: File Manager (Easiest)

1. Log in to your Hostinger account
2. Go to **Hosting** → **File Manager**
3. Navigate to `public_html` folder
4. Delete default files (if any)
5. Upload all portfolio files:
   - `index.html`
   - `css/` folder
   - `js/` folder
   - `assets/` folder (if you have images)
6. Set proper permissions:
   - Files: 644
   - Folders: 755
7. Visit your domain: `https://s13it8.com`

### Method 2: FTP (Recommended)

1. Get FTP credentials from Hostinger dashboard
2. Use an FTP client (FileZilla, Cyberduck, etc.)
3. Connect using your FTP credentials:
   - Host: Your Hostinger FTP hostname
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21
4. Navigate to `public_html`
5. Upload all files and folders
6. Visit your domain

### Method 3: Git Deployment (Advanced)

1. Initialize git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   ```

2. Connect to Hostinger via SSH (if enabled)
3. Clone your repository to `public_html`

## 🔄 React Migration Path

When you're ready to migrate to React, follow these steps:

### Step 1: Set Up React Project

```bash
npx create-react-app s13it8-portfolio-react
cd s13it8-portfolio-react
```

### Step 2: Convert Structure

1. **Components to Create:**
   - `Header.jsx` (Sidebar/Profile)
   - `Navigation.jsx` (Nav menu)
   - `ActivityOverview.jsx` (Stats section)
   - `ProjectCard.jsx` (Individual project)
   - `Projects.jsx` (Projects grid)
   - `Writing.jsx` (Blog posts section)
   - `Stack.jsx` (Tech stack section)
   - `Contact.jsx` (Contact section)

2. **Move Styles:**
   - Copy CSS variables to a `theme.js` file
   - Convert CSS to CSS Modules or Styled Components
   - Or keep as global CSS initially

3. **Data Structure:**
   Create a `data.js` file:
   ```javascript
   export const projects = [
     {
       id: 1,
       title: "Project Name",
       description: "Description...",
       tech: "Technology",
       stats: { stars: 234, forks: 42 }
     },
     // ... more projects
   ];
   ```

### Step 3: Example Component

```jsx
// ProjectCard.jsx
import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-footer">
        <span className="project-tech">{project.tech}</span>
      </div>
    </div>
  );
}

export default ProjectCard;
```

### Step 4: Benefits of React Migration

- **Component Reusability**: Easier to maintain and update
- **State Management**: Dynamic content updates
- **Routing**: Add multiple pages (About, Projects, Blog)
- **API Integration**: Fetch projects from GitHub API, blog from CMS
- **Performance**: Code splitting and lazy loading
- **SEO**: Use Next.js for server-side rendering

## 🛠️ Adding New Features

### Adding a New Section

1. Add section HTML in `index.html`:
```html
<section id="new-section" class="new-section">
    <h2 class="section-title">Section Title</h2>
    <!-- Content here -->
</section>
```

2. Add navigation link:
```html
<a href="#new-section" class="nav-item">
    <span class="nav-icon">🎯</span>
    <span>New Section</span>
</a>
```

3. Add styles in `css/main.css` or `css/components.css`

### Adding Images

1. Place images in `assets/images/`
2. Reference in HTML:
```html
<img src="assets/images/your-image.jpg" alt="Description">
```

### Adding Project Links

Add `data-project-url` attribute to project cards:
```html
<div class="project-card" data-project-url="https://github.com/s13it8/project">
```

Then uncomment the link logic in `js/main.js` (Line 76-77)

## 📝 Content Update Checklist

Before deploying, update these items:

- [ ] Profile name and bio
- [ ] Email address in contact section
- [ ] Social media links (GitHub, LinkedIn, Twitter)
- [ ] Activity statistics
- [ ] Project titles and descriptions
- [ ] Blog post titles and dates
- [ ] Tech stack technologies
- [ ] Remove placeholder content
- [ ] Add your actual profile image (optional)
- [ ] Test all links
- [ ] Check responsive design on mobile

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This portfolio template is free to use and modify for personal or commercial projects.

## 🆘 Troubleshooting

### Site Not Loading
- Check that `index.html` is in the `public_html` root directory
- Verify file permissions (644 for files, 755 for folders)
- Clear browser cache

### Styles Not Working
- Ensure CSS files are in `public_html/css/` folder
- Check file paths in `index.html` are relative
- Verify no syntax errors in CSS files

### JavaScript Not Working
- Check browser console for errors (F12 → Console)
- Ensure `js/main.js` path is correct in `index.html`
- Verify JavaScript is enabled in browser

## 📞 Support

For questions or issues:
- Check Hostinger documentation: https://support.hostinger.com
- Review this README thoroughly
- Test locally before deploying

---

**Version:** 1.0.0  
**Last Updated:** January 2025  
**Author:** Matthew Smith | S13IT8
