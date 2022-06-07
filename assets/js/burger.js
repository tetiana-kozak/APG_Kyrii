"use strict"

            // Burger menu

const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (menuIcon) {
    menuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        menuIcon.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
    
};




            // Scroll

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinksClick);
    });

    function onMenuLinksClick(e){
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.page__header').offsetHeight;

            if (menuIcon.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                menuIcon.classList.remove('_active');
                menuBody.classList.remove('_active');    
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });

            e.preventDefault();
        }
    }
}

