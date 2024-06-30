document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.right ul').classList.toggle('show');
});

var typed = new Typed('#element', {
    strings: ['Empower', 'Success', 'with best notes'],
    typeSpeed: 50,
});
