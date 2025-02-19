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