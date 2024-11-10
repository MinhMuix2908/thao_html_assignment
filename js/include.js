// js/include.js
document.addEventListener('DOMContentLoaded', function() {
    // Function to include HTML components
    function includeHTML() {
        const elements = document.getElementsByTagName("*");
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const file = element.getAttribute("include-html");
            if (file) {
                fetch(file)
                    .then(response => response.text())
                    .then(data => {
                        element.innerHTML = data;
                        element.removeAttribute("include-html");
                        includeHTML(); // Recursive call for nested includes
                    })
                    .catch(error => {
                        console.error(`Error loading ${file}:`, error);
                    });
            }
        }
    }

    // Initialize component inclusion
    includeHTML();
});