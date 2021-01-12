// Hide navbar on scroll
const navbar = document.getElementById('navbar');

// Hide navbar on screoll
let prevScrollpos = window.scrollY;

window.addEventListener('scroll', () => {
    let currentScrollpos = window.scrollY;

    if (prevScrollpos > currentScrollpos) {
        navbar.classList.remove('js-hidden');

    } else {
        navbar.classList.add('js-hidden');
        navbar.classList.add('js-shrink');
    }

    prevScrollpos = currentScrollpos;
});