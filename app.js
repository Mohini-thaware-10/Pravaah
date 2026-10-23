// PRAVAAH Landing Page JavaScript
// Handles navigation, smooth scrolling, and mobile menu

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav__link, .nav__cta');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Handle Sign In links
    const signInLinks = document.querySelectorAll('#navSignIn, #btnSignIn');
    signInLinks.forEach(link => {
        // Let them navigate to app.html (already set in HTML)
    });
    
    // Ensure "Explore PRAVAAH" scrolls to capabilities section
    const exploreBtn = document.getElementById('btnExplore');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function(e) {
            // Let default scroll behavior work (href="#capabilities")
        });
    }
    
    // Smooth scroll offset for sticky header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#signin') {
                e.preventDefault();
                // Already handled above
                return;
            }
            if (targetId === '#') {
                e.preventDefault();
                return;
            }
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
