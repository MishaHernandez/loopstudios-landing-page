// Los elementos html que serán animados tendrán la clase 'animated'

let animated = document.querySelectorAll('.move-up-1, .move-up-2, .move-left');

function showScroll() {
    let scrollTop = document.documentElement.scrollTop;

    for (let i = 0; i < animated.length; i++) {
        let scrollAnimated = animated[i].offsetTop;

        if (animated[i].matches('.move-up-1')) {
            if (scrollAnimated - 400 < scrollTop) {
                animated[i].classList.add('js-remove-opacity');
                animated[i].classList.add('js-move-up-1');
            }
        } else if (animated[i].matches('.move-up-2')) {
            if (scrollAnimated + 100 < scrollTop) {
                animated[i].classList.add('js-remove-opacity');
                animated[i].classList.add('js-move-up-2');
            }
        } else if (animated[i].matches('.move-left')) {
            if (scrollAnimated + 100 < scrollTop) {
                animated[i].classList.add('js-remove-opacity');
                animated[i].classList.add('js-move-left');
            }
        }
    }
}

window.addEventListener('scroll', showScroll);