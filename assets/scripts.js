
// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', function () {
    // Select the hamburger menu icon and navigation links
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');
    const navItems = document.querySelectorAll('nav ul li a');

    // Add click event listener to toggle the visibility of navigation links
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });

    // Add click event listeners to navigation items to hide the menu on click (for mobile view)
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
            }
        });
    });
});
