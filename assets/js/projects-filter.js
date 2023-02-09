"use strict"

function app() {
    const filterList = document.querySelectorAll('.filter__btn')
    const projects = document.querySelectorAll('.project__content')
    const changeCategoryName = document.querySelector('.arrow-text')

    filterList.forEach((button) => {
        const currentCategory = button.dataset.filter
        function filter (category, items) {
            items.forEach(item => {
                const isItemFiltered = !item.classList.contains(category)
                const isShowAll = category.toLowerCase() === 'all projects'
                if (isItemFiltered && !isShowAll) {
                    item.classList.add('animation')
                    // setUrlParams(currentCategory)
                    
                } else{
                    item.classList.remove('filter_hidden')
                    item.classList.remove('animation')
                }
                changeCategoryName.innerHTML = firstLetterToUppercase(category);
                // deleteUrlParams()
            });
        }
        function firstLetterToUppercase(category){
            return category.charAt(0).toUpperCase() + category.slice(1);
        }
        button.addEventListener('click', () => {
            // const currentCategory = button.dataset.filter
            // console.log('currentCategory :>> ', currentCategory);
            filter(currentCategory, projects)
            // setUrlParams(currentCategory)
            
        })

        projects.forEach(card => {
            card.ontransitionend = function () {
                if (card.classList.contains('animation')) {
                    card.classList.add('filter_hidden')
                }
            }
        });

        function changeUrl(){
            const currentUrl = window.location.href
            const currentParam = window.location.search
            
            const filterParams = {
                filter: currentCategory
            }

            const searchParams = new URLSearchParams(filterParams)
            const queryString = searchParams.toString()

            // console.log('queryString :>> ', queryString);
             
             button.addEventListener('click', () => {
                 if (currentParam === '') {
                    window.location.href = `${currentUrl}?${queryString}`
                    console.log('currentUrl :>> ', currentUrl);
                    console.log('window.location :>> ', window.location);


                } else {
                    const params = currentUrl.split('?')
                    window.location.href = params[0]
                    
                }
            })
        }
        changeUrl()

        
    });
}
app()

function setUrlParams(filterCategory) {

    const currentUrl = window.location.href + '?'
    const filterParams = {
        filter: filterCategory
    }
    const searchParams = new URLSearchParams(filterParams)
    const queryString = searchParams.toString()

    window.location.href = currentUrl + queryString
}

function deleteUrlParams() {

    const currentUrl = window.location.href

    const params = window.location.href.split('?')
    console.log('params :>> ', params);

    console.log('params[0] :>> ', params[0]);
    window.location.href = params[0]


    // console.log('currentUrl2 :>> ', currentUrl);
    // console.log('window.location :>> ', window.location);
//  console.log('window.location.search :>> ', window.location.search);
}


