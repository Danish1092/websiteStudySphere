const menuIcon = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    const target = e.target;
    const isClickInsideMenu = menuIcon.contains(target) || navLinks.contains(target);

    if (!isClickInsideMenu) {
        navLinks.classList.remove('show');
    }
});
