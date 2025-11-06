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

// ===== WAITLIST FORM HANDLER =====
// IMPORTANT: Replace this URL with your Google Apps Script Web App URL
// See GOOGLE-SHEETS-SETUP.md for deployment instructions
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

// Handle waitlist form submission
document.addEventListener('DOMContentLoaded', function() {
    const waitlistForm = document.getElementById('waitlist-form');
    if (!waitlistForm) return;

    waitlistForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const button = this.querySelector('button[type="submit"]');
        const emailInput = this.querySelector('input[name="email"]');
        const nameInput = this.querySelector('input[name="name"]');
        const formContainer = this.querySelector('.form-group-stacked');

        if (!button || !emailInput) return;

        // Get form data
        const email = emailInput.value.trim();
        const name = nameInput ? nameInput.value.trim() : '';

        // Validate email
        if (!email || !isValidEmail(email)) {
            showMessage(formContainer, 'Please enter a valid email address', 'error');
            return;
        }

        // Store original button text
        const originalButtonText = button.innerHTML;

        try {
            // Show loading state
            button.disabled = true;
            button.innerHTML = `
                <span style="display: inline-flex; align-items: center; gap: 0.5rem; justify-content: center;">
                    <span class="spinner"></span>
                    <span>Joining waitlist...</span>
                </span>
            `;
            button.style.opacity = '0.8';
            button.style.cursor = 'wait';

            // Submit to Google Apps Script
            const formData = new FormData();
            formData.append('email', email);
            formData.append('name', name);

            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Required for Google Apps Script
            });

            // Note: no-cors mode means we can't read the response
            // But if we reach here without error, submission likely succeeded

            // Show success message
            showSuccessState(formContainer, button, emailInput, nameInput);

        } catch (error) {
            console.error('Form submission error:', error);

            // Reset button state
            button.disabled = false;
            button.innerHTML = originalButtonText;
            button.style.opacity = '1';
            button.style.cursor = 'pointer';

            // Show error message
            showMessage(formContainer, 'Something went wrong. Please try again.', 'error');
        }
    });
});

function showSuccessState(formContainer, button, emailInput, nameInput) {
    // Clear form
    emailInput.value = '';
    if (nameInput) nameInput.value = '';

    // Update button to success state
    button.innerHTML = `
        <span style="display: inline-flex; align-items: center; gap: 0.5rem; justify-content: center;">
            <span style="font-size: 1.2rem;">✓</span>
            <span>You're on the list!</span>
        </span>
    `;
    button.style.opacity = '1';
    button.style.background = '#7FB069';
    button.style.cursor = 'default';

    // Show success message
    showMessage(formContainer, 'Check your email for confirmation! 🎉', 'success');

    // Reset button after 5 seconds
    setTimeout(() => {
        button.disabled = false;
        button.innerHTML = 'Join Waitlist';
        button.style.background = '';
        button.style.cursor = 'pointer';
    }, 5000);
}

function showMessage(container, message, type) {
    // Remove existing messages
    const existingMsg = container.querySelector('.form-message');
    if (existingMsg) existingMsg.remove();

    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;

    // Add styles
    messageDiv.style.cssText = `
        margin-top: 1rem;
        padding: 0.875rem 1.25rem;
        border-radius: 8px;
        font-size: 0.9375rem;
        font-weight: 500;
        text-align: center;
        animation: slideDown 0.3s ease;
        background: ${type === 'success' ? '#E8F5E9' : '#FFEBEE'};
        color: ${type === 'success' ? '#2E7D32' : '#C62828'};
        border: 1px solid ${type === 'success' ? '#7FB069' : '#EF5350'};
    `;

    // Insert message
    container.appendChild(messageDiv);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        messageDiv.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);
