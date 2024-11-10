// js/main.js

// Form validation
document.addEventListener('DOMContentLoaded', function() {
    // Get all forms that need validation
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                // Handle form submission here
                handleFormSubmit(form);
            }
            form.classList.add('was-validated');
        }, false);
    });

    // Navbar active state
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Highlight active nav item based on scroll position
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight/3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

// Handle form submission
function handleFormSubmit(form) {
    const formData = {
        name: form.querySelector('#name').value,
        email: form.querySelector('#email').value,
        message: form.querySelector('#message').value
    };

    // Example: Log form data (replace with your actual form handling logic)
    console.log('Form submitted:', formData);
    
    // Show success message
    showAlert('Message sent successfully!', 'success');
    
    // Reset form
    form.reset();
    form.classList.remove('was-validated');
}

// Show alert message
function showAlert(message, type = 'success') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const container = document.querySelector('#contact .container');
    container.insertBefore(alertDiv, container.firstChild);
    
    // Auto-dismiss alert after 5 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}