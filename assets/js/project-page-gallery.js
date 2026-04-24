document.querySelectorAll('.photo-double').forEach(container => {
    const photos = [...container.querySelectorAll('.project-page__photo')];
    const imgs = photos.map(p => p.querySelector('img'));

    const applyRatios = () => {
        imgs.forEach((img, i) => {
            photos[i].style.flex = img.naturalWidth / img.naturalHeight;
        });
    };

    const pending = imgs.filter(img => !img.complete);
    if (pending.length === 0) {
        applyRatios();
    } else {
        let loaded = 0;
        pending.forEach(img => img.addEventListener('load', () => {
            if (++loaded === pending.length) applyRatios();
        }));
    }
});

new Swiper('.project-page__gallery-swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    initialSlide: 0,
    spaceBetween: 30,
    loop: true,
    speed: 400,
    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.project-page__gallery',
    },
    navigation: {
        nextEl: '.project-page__gallery .swiper-button-next',
        prevEl: '.project-page__gallery .swiper-button-prev',
    },
});
