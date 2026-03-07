document.addEventListener('DOMContentLoaded', function () {
    var lastScrollY = window.scrollY;
    var scrollingDown = true;

    window.addEventListener('scroll', function () {
        scrollingDown = window.scrollY >= lastScrollY;
        lastScrollY = window.scrollY;
    }, { passive: true });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.remove('no-transition');
                requestAnimationFrame(function () {
                    entry.target.classList.add('is-visible');
                });
            } else if (!scrollingDown) {
                // Скрол вгору — ховаємо миттєво (без анімації)
                entry.target.classList.add('no-transition');
                entry.target.classList.remove('is-visible');
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('[data-animate]').forEach(function (el) {
        observer.observe(el);
    });
});
