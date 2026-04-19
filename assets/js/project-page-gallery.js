new Swiper('.project-page__gallery-swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    initialSlide: 1,
    spaceBetween: 20,
    loop: false,
    speed: 700,
    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.project-page__gallery',
    },
    navigation: {
        nextEl: '.project-page__gallery .swiper-button-next',
        prevEl: '.project-page__gallery .swiper-button-prev',
    },
});
