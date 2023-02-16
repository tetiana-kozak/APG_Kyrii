"use strict"

function app() {
    const filterList = document.querySelectorAll('.filter__btn')
    const allProjects = document.querySelectorAll('.project__content')
    const changeCategoryName = document.querySelector('.arrow-text')

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());


    if (params?.filter) {
    
        console.log('in if - check params ==> before filter()');
        filter(params.filter, allProjects)
        console.log('in if - check params ==> after filter()');
    }


    filterList.forEach((button) => {

        console.log('in filterList.forEach() ==> before EventListener()');

        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            console.log('in EventListener() ==> before changeUrl()');
            changeUrl(currentCategory)
            console.log('in EventListener() ==> after changeUrl()');
            // filter(currentCategory, allProjects)
        })

        console.log('in filterList.forEach() ==> before allProjects.forEach()');

        allProjects.forEach(card => {
            card.ontransitionend = function () {
                if (card.classList.contains('animation')) {
                    card.classList.add('filter_hidden')
                }
            }
        });
    });

     console.log('END ====== END');

    function firstLetterToUppercase(category){
        return category.charAt(0).toUpperCase() + category.slice(1);
    }

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