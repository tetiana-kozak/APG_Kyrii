"use strict"

// Scroll navigation

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
                top: gotoBlockValue + 1,
                behavior: "smooth"
            });

            e.preventDefault();
        }
    }
}

            // Scroll logo

// const logoLinks = document.querySelectorAll('.logo__link[data-goto]');
// if (logoLinks.length > 0) {
//     logoLinks.forEach(logoLink => {
//         logoLink.addEventListener("click", onLogoLinksClick);
//     });

//     function onLogoLinksClick(e){
//         const logoLink = e.target;
//         if (logoLink.dataset.gotoLogo && document.querySelector(logoLink.dataset.goto)) {
//             const gotoBlockLogo = document.querySelector(logoLink.dataset.goto);
//             const gotoBlockLogoValue = gotoBlockLogo.getBoundingClientRect().top + scrollY - document.querySelector('.page__header').offsetHeight;
                
//             window.scrollTo({
//                 top: gotoBlockLogoValue,
//                 behavior: "smooth"
//             });

//             e.preventDefault();
//         }
//     }
// }

            // Change menu item when scrolling 

            
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