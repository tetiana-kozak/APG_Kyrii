"use strict"

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinksClick);
    });
    function onMenuLinksClick(e){
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            if (menuIcon.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                menuIcon.classList.remove('_active');
                menuBody.classList.remove('_active');    
            }            
            window.scrollTo({
                top: gotoBlockValue + 1,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
            
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    document.querySelectorAll('.scroll-section').forEach((el,i) => {
        if (el.offsetTop - document.querySelector('.page__header').clientHeight <= scrollDistance) {
            document.querySelectorAll('.menu__link').forEach((el) => {
                if (el.classList.contains('menu__active')) {
                    el.classList.remove('menu__active')                    
                }
            })
            document.querySelectorAll('.menu__link')[i].classList.toggle('menu__active')
        } else{
            document.querySelectorAll('.menu__link')[i].classList.remove('menu__active')
        }  
    });
});
