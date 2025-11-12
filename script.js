// Smooth scrolling for navigation links (including dynamically created ones)
document.addEventListener('click', function (e) {
    // Check if clicked element is a link with hash
    const link = e.target.closest('a[href^="#"]');
    if (link) {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
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
// Google Apps Script Web App URL - handles form submissions and returns count
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwsGq1BgiUNKnPcdv_Cqz0CQNp6I4WxPUFDSMknOOeLB4LU741nuAOV_uzFunz_QVt8/exec';

// Fetch real waitlist count from Google Sheets
async function fetchWaitlistCount() {
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL + '?action=count', {
            method: 'GET',
            mode: 'cors'
        });
        const data = await response.json();
        return data.count || 0;
    } catch (error) {
        console.log('Could not fetch waitlist count:', error);
        return null; // Return null if we can't fetch, so we don't show fake numbers
    }
}

// Update waitlist counter displays
async function updateWaitlistCounters() {
    const count = await fetchWaitlistCount();
    if (count !== null && count > 0) {
        document.querySelectorAll('.waitlist-count').forEach(el => {
            el.textContent = count.toLocaleString();
            el.closest('.social-proof')?.style.setProperty('display', 'block');
        });
    }
}

// Initialize counter on page load
document.addEventListener('DOMContentLoaded', updateWaitlistCounters);

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

// ===== DARK MODE FUNCTIONALITY =====

// Check for saved theme preference or default to system preference
function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }

    return 'light';
}

// Set theme on document
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#0F1419' : '#F6C28B');
    }
}

// Toggle between light and dark mode
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const preferredTheme = getPreferredTheme();
    setTheme(preferredTheme);

    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only auto-switch if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
});

// Create and add theme toggle button
function createThemeToggle() {
    const toggleButton = document.createElement('button');
    toggleButton.className = 'theme-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle dark mode');
    toggleButton.setAttribute('title', 'Toggle dark mode');

    toggleButton.innerHTML = `
        <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
    `;

    toggleButton.addEventListener('click', toggleTheme);

    document.body.appendChild(toggleButton);
}

// Create toggle button on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createThemeToggle);
} else {
    createThemeToggle();
}

// ===== EXIT-INTENT POPUP =====
let exitIntentShown = false;

function showExitIntentPopup() {
    if (exitIntentShown || localStorage.getItem('exitIntentShown')) return;

    exitIntentShown = true;
    localStorage.setItem('exitIntentShown', 'true');

    const popup = document.createElement('div');
    popup.className = 'exit-intent-popup';
    popup.innerHTML = `
        <div class="exit-intent-overlay"></div>
        <div class="exit-intent-content">
            <button class="exit-intent-close" aria-label="Close popup">&times;</button>
            <h2>Before you go...</h2>
            <p>Join the private alpha and meet AI people with real memory and agency.</p>
            <form class="exit-intent-form" id="exit-intent-form">
                <input type="email" name="email" placeholder="Enter your email" required>
                <button type="submit" class="btn btn-primary">Join Waitlist</button>
            </form>
            <p class="exit-intent-small">We'll notify you when Cady becomes available.</p>
        </div>
    `;

    document.body.appendChild(popup);

    // Close button
    popup.querySelector('.exit-intent-close').addEventListener('click', () => {
        popup.remove();
    });

    // Close on overlay click
    popup.querySelector('.exit-intent-overlay').addEventListener('click', () => {
        popup.remove();
    });

    // Handle form submission
    const form = popup.querySelector('#exit-intent-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = form.querySelector('input[name="email"]').value;
        const button = form.querySelector('button[type="submit"]');

        button.textContent = 'Joining...';
        button.disabled = true;

        try {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('name', '');
            formData.append('source', 'exit-intent');

            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });

            popup.querySelector('.exit-intent-content').innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
                    <h2 style="color: #7FB069;">You're on the list!</h2>
                    <p>Check your email for confirmation.</p>
                </div>
            `;

            setTimeout(() => popup.remove(), 3000);

            // Update counters
            updateWaitlistCounters();

        } catch (error) {
            button.textContent = 'Try Again';
            button.disabled = false;
        }
    });

    // Animate in
    setTimeout(() => popup.classList.add('active'), 10);
}

// Detect exit intent (mouse leaving viewport)
document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 0) {
        showExitIntentPopup();
    }
});

// Mobile: detect back button or scroll to top fast
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < 100 && lastScrollTop > 300 && scrollTop < lastScrollTop) {
        showExitIntentPopup();
    }
    lastScrollTop = scrollTop;
}, { passive: true });

// ===== WAITLIST POPUP MODAL =====
function showWaitlistPopup() {
    // Check if popup already exists
    if (document.querySelector('.waitlist-popup')) return;

    const popup = document.createElement('div');
    popup.className = 'waitlist-popup';
    popup.innerHTML = `
        <div class="waitlist-popup-overlay"></div>
        <div class="waitlist-popup-content">
            <button class="waitlist-popup-close" aria-label="Close popup">&times;</button>
            <h2>Join the Private Alpha</h2>
            <p>Be among the first to meet AI people with real memory and agency.</p>

            <form class="waitlist-popup-form" id="waitlist-popup-form">
                <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off">
                <input type="email" name="email" placeholder="Enter your email" required>
                <input type="text" name="name" placeholder="First name (optional)">
                <button type="submit" class="btn btn-primary">Join Waitlist</button>
            </form>

            <p class="waitlist-popup-note">
                <a href="#waitlist" class="learn-more-link">Learn more about Cady</a>
            </p>
        </div>
    `;

    document.body.appendChild(popup);

    // Close button
    popup.querySelector('.waitlist-popup-close').addEventListener('click', () => {
        popup.remove();
    });

    // Close on overlay click
    popup.querySelector('.waitlist-popup-overlay').addEventListener('click', () => {
        popup.remove();
    });

    // "Learn more" link scrolls and closes popup
    popup.querySelector('.learn-more-link').addEventListener('click', (e) => {
        e.preventDefault();
        popup.remove();
        const waitlistSection = document.getElementById('waitlist');
        if (waitlistSection) {
            waitlistSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    // Handle form submission
    const form = popup.querySelector('#waitlist-popup-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = form.querySelector('input[name="email"]').value;
        const name = form.querySelector('input[name="name"]').value;
        const button = form.querySelector('button[type="submit"]');

        button.textContent = 'Joining...';
        button.disabled = true;

        try {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('name', name);
            formData.append('source', 'sticky-popup');

            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });

            popup.querySelector('.waitlist-popup-content').innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
                    <h2 style="color: #7FB069;">You're on the list!</h2>
                    <p>Check your email for confirmation.</p>
                    <button class="btn btn-secondary" style="margin-top: 1.5rem;" onclick="this.closest('.waitlist-popup').remove()">Close</button>
                </div>
            `;

            // Update counters
            updateWaitlistCounters();

        } catch (error) {
            button.textContent = 'Try Again';
            button.disabled = false;
        }
    });

    // Animate in
    setTimeout(() => popup.classList.add('active'), 10);
}

// ===== STICKY CTA BUTTON =====
function createStickyCTA() {
    const stickyCTA = document.createElement('div');
    stickyCTA.className = 'sticky-cta';
    stickyCTA.innerHTML = `
        <button class="btn btn-primary sticky-cta-btn">Join Waitlist</button>
    `;
    document.body.appendChild(stickyCTA);

    // Click handler for sticky CTA
    stickyCTA.querySelector('.sticky-cta-btn').addEventListener('click', (e) => {
        e.preventDefault();
        showWaitlistPopup();
    });

    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        const scrollPos = window.pageYOffset;

        // Show after scrolling past hero, hide when near waitlist section
        const waitlistSection = document.getElementById('waitlist');
        const waitlistTop = waitlistSection ? waitlistSection.offsetTop - window.innerHeight : Infinity;

        if (scrollPos > 800 && scrollPos < waitlistTop) {
            stickyCTA.classList.add('visible');
        } else {
            stickyCTA.classList.remove('visible');
        }
    }, { passive: true });
}

document.addEventListener('DOMContentLoaded', createStickyCTA);

// ===== SCROLL PROGRESS INDICATOR =====
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

        progressBar.style.width = scrollPercent + '%';
    }, { passive: true });
}

document.addEventListener('DOMContentLoaded', createScrollProgress);

// ===== SOCIAL PROOF NOTIFICATIONS =====
// REMOVED: No fake notifications - only real data

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    // D for dark mode toggle
    if (e.key === 'd' || e.key === 'D') {
        if (!e.target.matches('input, textarea')) {
            toggleTheme();
        }
    }

    // / for focus on email input
    if (e.key === '/') {
        if (!e.target.matches('input, textarea')) {
            e.preventDefault();
            const emailInput = document.querySelector('input[name="email"]');
            if (emailInput) {
                emailInput.focus();
                emailInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    // Escape to close popups
    if (e.key === 'Escape') {
        document.querySelector('.exit-intent-popup')?.remove();
    }
});

// ===== SHARE FUNCTIONALITY =====
function createShareButtons() {
    const shareContainer = document.createElement('div');
    shareContainer.className = 'share-buttons';
    shareContainer.innerHTML = `
        <span class="share-label">Share:</span>
        <button class="share-btn share-twitter" aria-label="Share on Twitter" title="Share on Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
        </button>
        <button class="share-btn share-linkedin" aria-label="Share on LinkedIn" title="Share on LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
        </button>
        <button class="share-btn share-copy" aria-label="Copy link" title="Copy link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
        </button>
    `;

    document.body.appendChild(shareContainer);

    // Twitter share
    shareContainer.querySelector('.share-twitter').addEventListener('click', () => {
        const text = "Check out Cady - AI people you can actually share experiences with. Not chatbots, real AI people with memory and agency.";
        const url = encodeURIComponent(window.location.href);
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, '_blank');
    });

    // LinkedIn share
    shareContainer.querySelector('.share-linkedin').addEventListener('click', () => {
        const url = encodeURIComponent(window.location.href);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    });

    // Copy link
    shareContainer.querySelector('.share-copy').addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            const btn = shareContainer.querySelector('.share-copy');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<span style="font-size: 1rem;">✓</span>';
            setTimeout(() => btn.innerHTML = originalHTML, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    });
}

document.addEventListener('DOMContentLoaded', createShareButtons);
