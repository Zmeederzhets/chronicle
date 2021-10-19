const addProduct = document.querySelector('.order');
const bayProduct = document.querySelectorAll('.bay');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__overlay');

if (addProduct) {
    addProduct.addEventListener('click', function (event) {
        event.preventDefault();
        modal.classList.add('modal--show');
    });
}
if (bayProduct) {
    for (let i = 0; i < bayProduct.length; i++) {
        bayProduct[i].addEventListener('click', function (event) {
            event.preventDefault();
            modal.classList.add('modal--show');
        });
    }
}

if (modalClose) {
    modalClose.addEventListener('click', function () {
        modal.classList.remove('modal--show');
    });
}

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        if (modal.classList.contains('modal--show')) {
            modal.classList.remove('modal--show');
        }
    }
});
