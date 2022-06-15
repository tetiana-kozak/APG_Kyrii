"use strict"


function app() {
    const filterList = document.querySelectorAll('.filter__btn')
    const projects = document.querySelectorAll('.project__content')

    filterList.forEach((button) => {
        

        function filter (category, items) {
            
            items.forEach(item => {
                const isItemFiltered = !item.classList.contains(category)
                const isShowAll = category.toLowerCase() === 'all'
                if (isItemFiltered && !isShowAll) {
                    item.classList.add('animation')
                } else{
                    item.classList.remove('filter_hidden')
                    // item.classList.remove('card-hide')
                    item.classList.remove('animation')
                }
            });


        }


        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter

            filter(currentCategory, projects)
        })

        projects.forEach(card => {
            card.ontransitionend = function () {
                if (card.classList.contains('animation')) {
                    console.log("finish")

                    card.classList.add('filter_hidden')
                    // card.classList.add('card-hide')
                    
                }
                
            }
            
        });
        
    });




}

app()






// const filterList = document.querySelector('.filter__navigation')
// // const filterList = document.querySelector('.filter__navigation-list')
// const projects = document.querySelectorAll('.project__content')

    
// filterList.addEventListener('click', function(evt){
//     // console.log('click')
//     if(evt.target.tagName !== 'LI') return false;

//     let filterClass = evt.target.dataset['filter']
//     console.log(filterClass)

    
//     projects.forEach(element => {
        
//         if (element.classList.contains('filter_hidden')) {
//             element.classList.remove('filter_hidden')
//         } else
//         // element.classList.remove('filter_hidden')        
//         // element.classList.remove('filter_hidden')        
//         if (!element.classList.contains(filterClass) && filterClass !== 'all') {
//             // console.log("inside if")
//             element.classList.add('filter_hidden') 

//             
//         } 
        

    
//     });
   


// })



