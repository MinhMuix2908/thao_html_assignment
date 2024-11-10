// js/pages/news.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize news filters
    initNewsFilters();
    
    // Initialize newsletter form
    initNewsletterForm();

    // Store modal instance
    window.subscriptionModal = new bootstrap.Modal(document.getElementById('subscriptionModal'));
});

function initNewsFilters() {
    // Add active class to current category
    const newsTab = document.getElementById('newsTab');
    if (newsTab) {
        const pills = newsTab.getElementsByClassName('nav-link');
        for (let pill of pills) {
            pill.addEventListener('click', function() {
                // Remove active class from all pills
                for (let p of pills) {
                    p.classList.remove('active');
                }
                // Add active class to clicked pill
                this.classList.add('active');
            });
        }
    }
}

function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get the email input
            const emailInput = document.getElementById('newsletterEmail');
            
            // Remove existing validation classes
            form.classList.remove('was-validated');
            
            // Validate email
            if (emailInput.value && validateEmail(emailInput.value)) {
                // Here you would typically send the email to your server
                // For now, we'll just show the success modal
                handleSuccessfulSubscription(emailInput.value);
            } else {
                // Show validation feedback
                form.classList.add('was-validated');
            }
        });
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function handleSuccessfulSubscription(email) {
    // Here you would typically send the email to your server
    console.log('Subscribing email:', email);
    
    // Reset the form
    document.getElementById('newsletterForm').reset();
    
    // Show the modal
    window.subscriptionModal.show();
    
    // Optional: Close modal after 3 seconds
    setTimeout(() => {
        window.subscriptionModal.hide();
    }, 3000);
}