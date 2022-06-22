new Swiper('.image-slider', {

        // arrows

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

        // bullets

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        // clickable: true,
    },

    simulateTouch: true,
    // grabCursor: true,
    slideToClickedSlide: true,

    keyboard: {
        enabled: true,

    },

    mousewheel: {
        sensitivity: 1,
        eventTarget: ".image-slider"
    },

    watchOverflow: true,

    loop: true,

    speed: 700,

});












