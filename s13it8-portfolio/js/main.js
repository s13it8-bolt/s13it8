/* ===================================
   S13IT8 Portfolio - Main JavaScript
   Handles navigation, interactions, and dynamic content
   =================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Navigation Active State
    // ===================================
    
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section[id]');
    
    // Update active nav item on scroll
    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }
    
    // Add scroll event listener with throttle
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(function() {
            updateActiveNav();
        });
    });
    
    // Smooth scroll for navigation links
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 20;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    // ===================================
    // Project Cards Interaction
    // ===================================
    
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add click handler (you can link to project pages later)
        card.addEventListener('click', function() {
            // Placeholder - Add your project link logic here
            console.log('Project clicked:', this.querySelector('.project-title').textContent);
            
            // Example: You can add project URLs as data attributes and open them
            // const projectUrl = this.getAttribute('data-project-url');
            // if (projectUrl) window.open(projectUrl, '_blank');
        });
        
        // Add keyboard accessibility
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                this.click();
            }
        });
    });
    
    
    // ===================================
    // Writing Items Interaction
    // ===================================
    
    const writingItems = document.querySelectorAll('.writing-item');
    
    writingItems.forEach(item => {
        // Add click handler (you can link to blog posts later)
        item.addEventListener('click', function() {
            // Placeholder - Add your blog post link logic here
            console.log('Article clicked:', this.querySelector('.writing-title').textContent);
            
            // Example: You can add article URLs as data attributes
            // const articleUrl = this.getAttribute('data-article-url');
            // if (articleUrl) window.open(articleUrl, '_blank');
        });
        
        // Add keyboard accessibility
        item.setAttribute('tabindex', '0');
        item.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                this.click();
            }
        });
    });
    
    
    // ===================================
    // Fade In Animation on Scroll
    // ===================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const observeElements = document.querySelectorAll(
        '.stat-card, .project-card, .writing-item, .contact-card, .stack-category'
    );
    
    observeElements.forEach(element => {
        observer.observe(element);
    });
    
    
    // ===================================
    // Stats Counter Animation
    // ===================================
    
    function animateCounter(element, target, duration = 1000) {
        let start = 0;
        const increment = target / (duration / 16); // 60fps
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }
    
    // Animate stats when they come into view
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent);
                animateCounter(entry.target, target, 1500);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    
    // ===================================
    // Theme Toggle (Optional - for future use)
    // ===================================
    
    // Uncomment this section if you want to add a light/dark theme toggle
    /*
    function toggleTheme() {
        document.body.classList.toggle('light-theme');
        const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
    }
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
    */
    
    
    // ===================================
    // Mobile Menu Toggle (for smaller screens)
    // ===================================
    
    function createMobileMenu() {
        if (window.innerWidth <= 768) {
            const sidebar = document.querySelector('.sidebar');
            const navMenu = document.querySelector('.nav-menu');
            
            // Add mobile menu toggle button if it doesn't exist
            if (!document.querySelector('.mobile-menu-toggle')) {
                const toggleBtn = document.createElement('button');
                toggleBtn.classList.add('mobile-menu-toggle');
                toggleBtn.innerHTML = '☰';
                toggleBtn.setAttribute('aria-label', 'Toggle menu');
                
                sidebar.insertBefore(toggleBtn, navMenu);
                
                toggleBtn.addEventListener('click', function() {
                    navMenu.classList.toggle('nav-open');
                    this.innerHTML = navMenu.classList.contains('nav-open') ? '✕' : '☰';
                });
            }
        }
    }
    
    // Initialize mobile menu
    createMobileMenu();
    
    // Reinitialize on resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            createMobileMenu();
        }, 250);
    });
    
    
    // ===================================
    // Console Message
    // ===================================
    
    console.log('%c👋 Welcome to S13IT8!', 'font-size: 20px; font-weight: bold; color: #14b8a6;');
    console.log('%cBuilding a better future through innovation', 'font-size: 14px; color: #9ca3af;');
    console.log('%cWebsite: s13it8.com', 'font-size: 12px; color: #6b7280;');
    
});


// ===================================
// Utility Functions
// ===================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}


// ===================================
// Export for React Migration (Optional)
// ===================================

// When you migrate to React, you can convert these functions
// to React hooks and components. Keep this structure for reference:
/*
const PortfolioUtils = {
    animateCounter,
    debounce,
    throttle,
    // Add other utilities here
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioUtils;
}
*/
