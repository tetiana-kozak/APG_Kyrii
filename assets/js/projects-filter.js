"use strict"

// function app() {
    const filterList = document.querySelectorAll('.filter__btn')
    const allProjects = document.querySelectorAll('.project__content')
    const changeCategoryName = document.querySelector('.arrow-text')
    // get params = public (qvery param)
    const urlSearchParams = new URLSearchParams(window.location.search);
    console.log('urlSearchParams :>> ', urlSearchParams);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log('params :>> ', params);
    if (params.filter) {
        filter(params.filter, allProjects)
        
    }

    function firstLetterToUppercase(category){
        return category.charAt(0).toUpperCase() + category.slice(1);
    }

    function filter (category, items) {
        console.log('inside');

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
            // changeUrl()


        });

    }

    function changeUrl(currentCategory){
        const currentUrl = window.location.href
        let currentParam = window.location.search
        console.log('here');

        console.log('window.location.search before :>> ', window.location.search);

        
        const filterParams = {
            filter: currentCategory
        }

        const searchParams = new URLSearchParams(filterParams)
        const queryString = searchParams.toString()
        // console.log('searchParams :>> ', searchParams);
        // console.log('queryString :>> ', queryString);
         
        //  button.addEventListener('click', () => {

            window.location.search = queryString
            console.log('window.location.search click :>> ', window.location.search);
        // })
    }

    filterList.forEach((button) => {
        const currentCategory = button.dataset.filter


        button.addEventListener('click', () => {
            // const currentCategory = button.dataset.filter
            // console.log('currentCategory :>> ', currentCategory);

            // filter(currentCategory, allProjects)
            // setUrlParams(currentCategory)
            changeUrl(currentCategory)


            
        })

        allProjects.forEach(card => {
            card.ontransitionend = function () {
                if (card.classList.contains('animation')) {
                    card.classList.add('filter_hidden')
                }
            }
        });




        
    });
// }
// app()
