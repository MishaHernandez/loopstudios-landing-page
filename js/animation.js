// Los elementos html que serán animados tendrán la clase 'animated'
let animated = document.querySelectorAll('.move-up');

function showScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animated.length; i++) {
        let scrollAnimated = animated[i].offsetTop;
        if (scrollAnimated - 400 < scrollTop) {
            animated[i].classList.add('js-remove-opacity');
            animated[i].classList.add('js-move-up');
        }
    }
}
window.addEventListener('scroll', showScroll);