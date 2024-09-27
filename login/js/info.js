/*Navvar*/
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function() {
        menu.style.display = (menu.style.display === 'block' ? 'none' : 'block');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('#menu-icon') && !event.target.matches('#menu')) {
            menu.style.display = 'none';
        }
    });
});
