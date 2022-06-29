"use strict"

function app() {
    const filterList = document.querySelectorAll('.filter__btn')
    const projects = document.querySelectorAll('.project__content')
    const changeCategoryName = document.querySelector('.arrow-text')
    filterList.forEach((button) => {
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
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, projects)
        })

        projects.forEach(card => {
            card.ontransitionend = function () {
                if (card.classList.contains('animation')) {
                    card.classList.add('filter_hidden')
                }
            }
        });
    });
}
app()
