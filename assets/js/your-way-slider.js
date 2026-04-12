new Swiper('.your-way__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,
    mousewheel: {
        enabled: true,
        eventsTarget: '.your-way__swiper',
        sensitivity: 1,
    },
    navigation: {
        nextEl: '.your-way__arrow',
    },
    speed: 1200,
    keyboard: { enabled: true },
});
