document.addEventListener('DOMContentLoaded', function() {
    // Link main.html and style.css by dynamically adding the stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style.css';
    document.head.appendChild(link);

    // Example: Manipulate DOM from main.html
    // Assuming there's an element with id="main-content" in main.html
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.textContent = 'Style.css has been linked via script.js!';
    }
});