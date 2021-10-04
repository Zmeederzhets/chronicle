(() => {
    const menuButton = document.querySelector('.menu__burger');
    const menuList = document.querySelector('.menu__list');
    const menuListSecond = document.querySelector('.menu__list:nth-child(2)');

    menuButton.addEventListener('click', () => {
        const expanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', `${!expanded}`);
        menuButton.classList.toggle('menu__burger--open');
        menuList.classList.toggle('menu__list--open');
        menuListSecond.classList.toggle('menu__list--open');
    });
})();
