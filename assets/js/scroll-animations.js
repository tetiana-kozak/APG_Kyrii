document.addEventListener('DOMContentLoaded', function () {
    var lastScrollY = window.scrollY;
    var scrollingDown = true;

    window.addEventListener('scroll', function () {
        scrollingDown = window.scrollY >= lastScrollY;
        lastScrollY = window.scrollY;
    }, { passive: true });

    function animateCounter(el) {
        var target = parseInt(el.getAttribute('data-count'), 10);
        var duration = 900;
        var start = null;

        function easeOut(t) {
            return 1 - Math.pow(1 - t, 3);
        }

        function step(timestamp) {
            if (!start) start = timestamp;
            var progress = Math.min((timestamp - start) / duration, 1);

            if (progress < 0.3) {
                // Коротка фаза перебору — випадкові числа
                el.textContent = Math.floor(Math.random() * (target + 1));
            } else {
                // Основна фаза — плавний лічильник до фінального значення
                var converge = easeOut((progress - 0.3) / 0.7);
                el.textContent = Math.floor(target * converge);
            }

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target;
            }
        }

        requestAnimationFrame(step);
    }

    function getColumnDelay(el) {
        var rect = el.getBoundingClientRect();
        var allEls = document.querySelectorAll('[data-animate]');
        var rowEls = Array.from(allEls).filter(function (other) {
            return Math.abs(other.getBoundingClientRect().top - rect.top) < 10;
        });
        rowEls.sort(function (a, b) {
            return a.getBoundingClientRect().left - b.getBoundingClientRect().left;
        });
        var colIndex = rowEls.indexOf(el);
        return colIndex >= 0 ? colIndex * 0.1 : 0;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.remove('no-transition');
                entry.target.style.transitionDelay = getColumnDelay(entry.target) + 's';
                requestAnimationFrame(function () {
                    entry.target.classList.add('is-visible');
                });
                // Запускаємо анімацію лічильника лише при скролі вниз
                if (scrollingDown) {
                    entry.target.querySelectorAll('[data-count]').forEach(animateCounter);
                }
            } else if (!scrollingDown) {
                // Скрол вгору — ховаємо миттєво (без анімації), цифри залишаються
                entry.target.classList.add('no-transition');
                entry.target.classList.remove('is-visible');
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('[data-animate]').forEach(function (el) {
        observer.observe(el);
    });
});
