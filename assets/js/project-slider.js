new Swiper('.image-slider', {
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    simulateTouch: true,
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
    },
    mousewheel: {
        sensitivity: 1,
        eventTarget: ".image-slider",
    },
    watchOverflow: true,
    loop: true,
    speed: 700,
});
