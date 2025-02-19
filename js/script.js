document.addEventListener('DOMContentLoaded', function () {
    const waitlistForm = document.getElementById('waitlist-form');
    const formMessage = document.getElementById('form-message');

    waitlistForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting traditionally

        const email = document.getElementById('email').value;

        if (email) {
            // Here you can add logic to send the email to your backend waitlist endpoint.
            // For demonstration, we simply display a thank you message.
            formMessage.textContent = "Thank you for joining the waitlist!";
            waitlistForm.reset();
        } else {
            formMessage.textContent = "Please enter a valid email address.";
        }
    });
}); 