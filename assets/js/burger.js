"use strict"

const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (menuIcon) {
    menuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        menuIcon.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
    
};

if (menuIcon.classList.contains('_active')) {
    document.body.classList.remove('_lock');
    menuIcon.classList.remove('_active');
    menuBody.classList.remove('_active');    
}






