document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');
    const navItems = document.querySelectorAll('nav ul li a');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('show'); /* Toggle mobile menu */
    });

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show'); /* Close menu on link click */
            }
        });
    });
});
