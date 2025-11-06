// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Form submission animation
document.querySelectorAll('form[action*="formsubmit"]').forEach(form => {
    form.addEventListener('submit', function(e) {
        const button = this.querySelector('button[type="submit"]');
        if (!button) return;

        const originalText = button.innerHTML;

        // Add loading state
        button.disabled = true;
        button.innerHTML = `
            <span style="display: inline-flex; align-items: center; gap: 0.5rem; justify-content: center;">
                <span class="spinner"></span>
                <span>Joining waitlist...</span>
            </span>
        `;
        button.style.opacity = '0.8';
        button.style.cursor = 'wait';

        // Add success animation to form container
        const formContainer = this.closest('.form-group-stacked') || this;
        formContainer.style.transition = 'all 0.3s ease';

        // Let form submit naturally - formsubmit.co will handle the redirect
    });
});
