(function () {
    var btn = document.getElementById('scrollToTop');
    if (!btn) return;

    window.addEventListener('scroll', function () {
        btn.classList.toggle('scroll-to-top--visible', window.scrollY > 0);
    });

    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();
