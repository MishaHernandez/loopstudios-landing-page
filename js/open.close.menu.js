const menuBtn = document.getElementById('menu-btn');
const logo = document.querySelector('.navbar__logo');
const menuIcon = document.querySelector('.navbar__menu-icon');
// const nav = document.getElementById('nav');
const nav = document.getElementsByTagName('nav')[0];
const headerMenu = document.querySelector('.header-menu')

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.setAttribute('src', 'images/icon-close.svg');
        logo.classList.add('js-fixed-logo');
        menuIcon.classList.add('js-fixed-menu');
        headerMenu.classList.add('js-move-right');
        nav.classList.add('js-navbar__nav');
        menuOpen = true;
    } else {
        menuBtn.setAttribute('src', 'images/icon-hamburger.svg');
        logo.classList.remove('js-fixed-logo');
        menuIcon.classList.remove('js-fixed-menu');
        nav.classList.remove('js-navbar__nav');
        menuOpen = false;
    }
});