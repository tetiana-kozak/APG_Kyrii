"use strict"

const filterList = document.querySelector('.filter__navigation')
// const filterList = document.querySelector('.filter__navigation-list')
const projects = document.querySelectorAll('.project__content')

    
filterList.addEventListener('click', function(evt){
    // console.log('click')
    if(evt.target.tagName !== 'LI') return false;

    let filterClass = evt.target.dataset['filter']
    console.log(filterClass)

    
    projects.forEach(element => {
        
        element.classList.remove('anime')        
        element.classList.remove('filter_hidden')        
        if (!element.classList.contains(filterClass) && filterClass !== 'all') {
            // console.log("inside if")
            element.classList.add('anime') 

            projects.forEach(card => {
                card.ontransitionend = function () {
                    if (card.classList.contains('anime')) {
                        card.classList.add('filter_hidden')
                    }
                }
            });
        }

    
    });


})



