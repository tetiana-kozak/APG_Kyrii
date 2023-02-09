"use strict"

const filterList = document.querySelectorAll('.filter__btn')
const allProjects = document.querySelectorAll('.project__content')
const changeCategoryName = document.querySelector('.arrow-text')

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

if (params?.filter) {
    filter(params.filter, allProjects)
}

filterList.forEach((button) => {

    const currentCategory = button.dataset.filter

    button.addEventListener('click', () => {
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

function filter (category, items) {
    items.forEach(item => {
        const isItemFiltered = !item.classList.contains(category)
        const isShowAll = category.toLowerCase() === 'all projects'
        if (isItemFiltered && !isShowAll) {
            item.classList.add('animation')
        } else{
            item.classList.remove('filter_hidden')
            item.classList.remove('animation')
        }
        changeCategoryName.innerHTML = firstLetterToUppercase(category);
    });
}

function firstLetterToUppercase(category){
    return category.charAt(0).toUpperCase() + category.slice(1);
}

function changeUrl(currentCategory){

    const filterParams = {
        filter: currentCategory
    }
    const searchParams = new URLSearchParams(filterParams)
    const queryString = searchParams.toString()

    window.location.search = queryString
}


