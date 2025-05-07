// JavaScript to toggle menu visibility
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.btn-menu button');
    const navMenu = document.querySelector('nav ul');
    
    // Toggle menu when button is clicked
    menuButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuButton.classList.toggle('active');
        
        // Change button text based on menu state
        if (navMenu.classList.contains('active')) {
            menuButton.textContent = 'Close Menu';
        } else {
            menuButton.textContent = 'Menu';
        }
    });
});