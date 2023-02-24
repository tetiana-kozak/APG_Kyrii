"use strict"

function app() {
    const filterList = document.querySelectorAll('.filter__btn')
    const allProjects = document.querySelectorAll('.project__content')
    const changeCategoryName = document.querySelector('.arrow-text')

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (params?.filter) {
        filter(params.filter, allProjects)
    }

    filterList.forEach((button) => {

        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            changeUrl(currentCategory)
        })
    })

    function firstLetterToUppercase(category){
        return category.charAt(0).toUpperCase() + category.slice(1);
    }

    function filter (category, items) {
        items.forEach(item => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all projects'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('animation')
                setTimeout(() => {
                    item.classList.add('filter_hidden')
                }, 700);
                setTimeout(() => {
                    item.classList.add('hide')
                }, 1450);
            } 
            changeCategoryName.innerHTML = firstLetterToUppercase(category);
        });
    }

    function changeUrl(currentCategory){

        const filterParams = {
            filter: currentCategory
        }

        const searchParams = new URLSearchParams(filterParams)
        const queryString = searchParams.toString()

        window.location.search = queryString
    }
}

app()
