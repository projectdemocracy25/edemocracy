document.addEventListener('DOMContentLoaded', function() {
    const waitlistForm = document.getElementById('waitlist-form');
    const formMessage = document.getElementById('form-message');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const languageSelector = document.getElementById('language-selector');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Theme handling
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.className = 'dark-theme';
    }

    // Theme toggle
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('light-theme')) {
            body.className = 'dark-theme';
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.className = 'light-theme';
            localStorage.setItem('theme', 'light-theme');
        }
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });

    // Language popup handling
    const languageTrigger = document.querySelector('.language-trigger');
    const languagePopup = document.querySelector('.language-popup');
    const languageList = document.querySelectorAll('.language-list li');
    const languageDisplay = document.querySelector('.language-trigger span');

    // Show/hide language popup
    languageTrigger.addEventListener('click', () => {
        languagePopup.classList.toggle('active');
    });

    // Close popup when clicking outside
    document.addEventListener('click', (e) => {
        if (!languageTrigger.contains(e.target) && !languagePopup.contains(e.target)) {
            languagePopup.classList.remove('active');
        }
    });

    // Language selection
    languageList.forEach(lang => {
        lang.addEventListener('click', () => {
            const selectedLang = lang.dataset.lang;
            localStorage.setItem('language', selectedLang);
            
            // Update active state
            languageList.forEach(l => l.classList.remove('active'));
            lang.classList.add('active');
            
            // Update trigger text
            languageDisplay.textContent = selectedLang.toUpperCase();
            
            // Close popup
            languagePopup.classList.remove('active');
            
            // Reload page to apply language
            window.location.reload();
        });
    });

    // Set initial language display
    const currentLang = localStorage.getItem('language') || 'en';
    languageDisplay.textContent = currentLang.toUpperCase();
    languageList.forEach(lang => {
        if (lang.dataset.lang === currentLang) {
            lang.classList.add('active');
        } else {
            lang.classList.remove('active');
        }
    });

    // Mobile menu handling
    function updateMenuVisibility() {
        const isMobile = window.innerWidth <= 768;
        mobileMenuBtn.style.display = isMobile ? 'block' : 'none';
        if (!isMobile) {
            navLinks.classList.remove('active');
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = navLinks.classList.contains('active') ? 'flex' : 'none';
        }
    }

    // Initial check and listen for window resize
    updateMenuVisibility();
    window.addEventListener('resize', updateMenuVisibility);

    // Form submission handling
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const submitButton = waitlistForm.querySelector('button');
            
            try {
                submitButton.disabled = true;
                submitButton.textContent = 'Submitting...';
                
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                formMessage.textContent = "Successfully registered! We'll contact you soon.";
                formMessage.style.color = '#059669';
                waitlistForm.reset();
                
            } catch (error) {
                formMessage.textContent = "An error occurred. Please try again.";
                formMessage.style.color = '#dc2626';
                
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Join';
            }
        });
    }

    // System theme change detection
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                body.className = e.matches ? 'dark-theme' : 'light-theme';
            }
        });
    }
}); 