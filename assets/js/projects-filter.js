"use strict";

function app() {
    const filterList = document.querySelectorAll('.filter__btn');
    const allProjects = document.querySelectorAll('.project__content');
    const changeCategoryName = document.querySelector('.arrow-text');

    // Застосувати фільтр з URL при завантаженні (без анімації)
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    if (params?.filter && params.filter.toLowerCase() !== 'all projects') {
        applyFilterInstant(params.filter);
    }

    filterList.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter;
            if (currentCategory.toLowerCase() === 'all projects') {
                window.location.href = window.location.pathname;
                return;
            }
            updateUrl(currentCategory);
            updateLabel(button.textContent.trim());
            filterAnimated(currentCategory);
        });
    });

    function firstLetterToUppercase(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function updateLabel(category) {
        if (changeCategoryName) {
            changeCategoryName.innerHTML = firstLetterToUppercase(category);
        }
    }

    function updateUrl(category) {
        const url = new URL(window.location.href);
        url.searchParams.set('filter', category);
        history.replaceState(null, '', url.toString());
    }

    // Миттєве приховання при завантаженні сторінки (без анімації)
    function applyFilterInstant(category) {
        allProjects.forEach(item => {
            const matches = item.classList.contains(category);
            if (!matches) {
                item.classList.add('project--hidden');
            }
        });
        // Беремо текст з відповідної кнопки фільтру
        const btn = Array.from(filterList).find(b => b.dataset.filter === category);
        updateLabel(btn ? btn.textContent.trim() : category);
    }

    // Двофазна плавна анімація при кліку на фільтр
    function filterAnimated(category) {
        const isAll = category.toLowerCase() === 'all projects';

        const toHide = [];
        const toShow = [];

        allProjects.forEach(item => {
            const isHidden = item.classList.contains('project--hidden');
            const matches = isAll || item.classList.contains(category);

            if (!matches && !isHidden) {
                toHide.push(item);
            } else if (matches && isHidden) {
                toShow.push(item);
            }
        });

        // Якщо нема що змінювати — виходимо
        if (toHide.length === 0 && toShow.length === 0) return;

        // Фаза 1: fade out невідповідних (скидаємо transition-delay від data-animate-delay)
        toHide.forEach(item => {
            item.style.transitionDelay = '0s';
            item.classList.add('project--hiding');
        });

        setTimeout(() => {
            // Ховаємо невідповідні
            toHide.forEach(item => {
                item.classList.remove('project--hiding');
                item.classList.add('project--hidden');
            });

            // Показуємо відповідні у стані "готовий до входу"
            toShow.forEach(item => {
                item.style.transitionDelay = '0s';
                item.classList.remove('project--hidden');
                item.classList.add('is-visible');     // щоб scroll-animation не заважав
                item.classList.add('project--entering');
            });

            // Стаґер-анімація входу
            requestAnimationFrame(() => {
                toShow.forEach((item, i) => {
                    setTimeout(() => {
                        item.classList.remove('project--entering');
                    }, i * 60);
                });
            });

        }, 350);
    }
}

app();
