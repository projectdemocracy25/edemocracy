import translations from './languages.js';

document.addEventListener('DOMContentLoaded', function () {
    const waitlistForm = document.getElementById('waitlist-form');
    const formMessage = document.getElementById('form-message');

    waitlistForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const submitButton = waitlistForm.querySelector('button');
        
        try {
            submitButton.disabled = true;
            submitButton.textContent = 'Kaydediliyor...';
            
            // Burada gerçek bir API çağrısı yapılabilir
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            formMessage.textContent = "Başarıyla kaydoldunuz! Size en kısa sürede ulaşacağız.";
            formMessage.style.color = '#059669';
            waitlistForm.reset();
            
        } catch (error) {
            formMessage.textContent = "Bir hata oluştu. Lütfen tekrar deneyin.";
            formMessage.style.color = '#dc2626';
            
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Katıl';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Theme handling
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Language handling
    const languageSelector = document.getElementById('language-selector');
    let currentLang = localStorage.getItem('language') || navigator.language.split('-')[0] || 'en';
    
    // Initialize language
    setLanguage(currentLang);
    languageSelector.value = currentLang;
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('light-theme')) {
            body.className = 'dark-theme';
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.className = 'light-theme';
            localStorage.setItem('theme', 'light-theme');
        }
    });
    
    // Language change handler
    languageSelector.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
    
    // Function to set language
    function setLanguage(lang) {
        if (!translations[lang]) {
            lang = 'en'; // Fallback to English
        }
        
        currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        
        const t = translations[lang];
        
        // Update all text content
        updateTextContent(t);
    }
    
    function updateTextContent(t) {
        // Navigation
        document.querySelector('[data-i18n="nav.about"]').textContent = t.nav.about;
        document.querySelector('[data-i18n="nav.contribute"]').textContent = t.nav.contribute;
        document.querySelector('[data-i18n="nav.github"]').textContent = t.nav.github;
        
        // Hero
        document.querySelector('[data-i18n="hero.title"]').textContent = t.hero.title;
        document.querySelector('[data-i18n="hero.subtitle"]').textContent = t.hero.subtitle;
        document.querySelector('[data-i18n="hero.viewGithub"]').textContent = t.hero.viewGithub;
        document.querySelector('[data-i18n="hero.contribute"]').textContent = t.hero.contribute;
        
        // Features
        document.querySelector('[data-i18n="features.secure.title"]').textContent = t.features.secure.title;
        document.querySelector('[data-i18n="features.secure.desc"]').textContent = t.features.secure.desc;
        document.querySelector('[data-i18n="features.community.title"]').textContent = t.features.community.title;
        document.querySelector('[data-i18n="features.community.desc"]').textContent = t.features.community.desc;
        document.querySelector('[data-i18n="features.openSource.title"]').textContent = t.features.openSource.title;
        document.querySelector('[data-i18n="features.openSource.desc"]').textContent = t.features.openSource.desc;
        
        // Contribute
        document.querySelector('[data-i18n="contribute.title"]').textContent = t.contribute.title;
        document.querySelector('[data-i18n="contribute.subtitle"]').textContent = t.contribute.subtitle;
        document.querySelector('[data-i18n="contribute.fork"]').textContent = t.contribute.fork;
        document.querySelector('[data-i18n="contribute.code"]').textContent = t.contribute.code;
        document.querySelector('[data-i18n="contribute.report"]').textContent = t.contribute.report;
        
        // Construction Banner
        document.querySelector('[data-i18n="construction"]').textContent = t.construction;
        
        // Footer
        document.querySelector('[data-i18n="footer.copyright"]').textContent = t.footer.copyright;
    }
}); 