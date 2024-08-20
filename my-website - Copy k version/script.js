document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Toggle navigation menu on burger menu click
    burgerMenu.addEventListener('click', function() {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
        }
    });

    // Hide contact section initially
    const contactSection = document.querySelector('#contact');
    contactSection.style.display = 'none';

    // Toggle contact section visibility
    const contactLink = document.querySelector('a[href="#contact"]');
    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (contactSection.style.display === 'none') {
            contactSection.style.display = 'block';
        } else {
            contactSection.style.display = 'none';
        }
    });

    // Animate the color of the menu text on mouse drag
    navLinks.forEach(link => {
        link.addEventListener('mousemove', function(event) {
            const boundingRect = link.getBoundingClientRect();
            const xPos = event.clientX - boundingRect.left; // Mouse X position within the element
            const width = boundingRect.width; // Width of the link element

            // Calculate the hue based on the horizontal position of the mouse
            let colorHue = (xPos / width) * 360; // Hue value between 0 and 360
            let color = `hsl(${colorHue}, 100%, 50%)`;

            link.style.color = color;
        });

        link.addEventListener('mouseleave', function() {
            // Reset the color when the mouse leaves the element
            link.style.color = 'white';
        });
    });
});
