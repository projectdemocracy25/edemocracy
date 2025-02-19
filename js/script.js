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
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
    } else {
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.className = 'dark-theme';
        }
    }
    
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
    
    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                body.className = e.matches ? 'dark-theme' : 'light-theme';
            }
        });
    }
}); 