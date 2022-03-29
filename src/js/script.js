window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
          overlay = document.querySelector('.menu__overlay'),
          main = document.querySelector('.menu__main'),
          close = document.querySelector('.menu__close'),
          menu = document.querySelector('.menu');
    hamburger.onclick = function() {
        overlay.classList.add('menu__overlay_active');
        main.classList.add('menu__main_active');
        menu.classList.add('menu_active');
        menu.style.transitionDelay='0s';
    };
    close.onclick = function() {
        overlay.classList.remove('menu__overlay_active');
        main.classList.remove('menu__main_active');
        menu.classList.remove('menu_active');
        menu.style.transitionDelay='1s';
    };
    const percent = document.querySelectorAll('.skills__level-percent'),
          lines = document.querySelectorAll('.skills__level-scale span');
    percent.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });
});