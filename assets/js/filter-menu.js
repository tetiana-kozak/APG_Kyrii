"use strict"

            // filter menu


const filterNav = document.querySelector('.filter__navigation');
const projects = document.querySelector('.project__wrapper');
const footer = document.querySelector('footer');
const arrow = document.querySelector('.menu__filter');

if (arrow) {
    arrow.addEventListener('click', function (e) {
        document.body.classList.add('_lock');
        projects.classList.add('_filter-active')
        footer.classList.add('_filter-active')
        filterNav.classList.add('_filter-active')
        arrow.classList.add('_filter-active')
    })
}

const filterLinks = document.querySelectorAll('.filter__btn');


if (filterLinks.length > 0) {
    filterLinks.forEach(item => {
        item.addEventListener("click", onFilterLinksClick);
    });

    function onFilterLinksClick(e){
        const filterLink = e.target;
        if (filterLink) {
            
            if (filterNav.classList.contains('_filter-active')) {
                document.body.classList.remove('_lock');
                projects.classList.remove('_filter-active')
                footer.classList.remove('_filter-active')
                filterNav.classList.remove('_filter-active')
                arrow.classList.remove('_filter-active')    
            }            
        }                         

        // e.preventDefault();
    }
}