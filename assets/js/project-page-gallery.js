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

document.querySelectorAll('.project-page__gallery-swiper').forEach(el => {
    const gallery = el.closest('.project-page__gallery');

    const swiper = new Swiper(el, {
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide: 0,
        spaceBetween: 30,
        loop: true,
        speed: 400,
        mousewheel: {
            sensitivity: 1,
            eventsTarget: gallery,
        },
        navigation: {
            nextEl: gallery.querySelector('.swiper-button-next'),
            prevEl: gallery.querySelector('.swiper-button-prev'),
        },
    });

    swiper.mousewheel.disable();

    const imgs = [...el.querySelectorAll('img')];
    const waitFor = imgs.map(img =>
        img.complete
            ? Promise.resolve()
            : new Promise(res => {
                img.addEventListener('load',  res, { once: true });
                img.addEventListener('error', res, { once: true });
            })
    );

    Promise.all(waitFor).then(() => {
        swiper.update();
        swiper.slideToLoop(0, 0, false);
    });

    let hoverTimer = null;

    el.addEventListener('mouseenter', () => {
        hoverTimer = setTimeout(() => swiper.mousewheel.enable(), 500);
    });

    el.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimer);
        swiper.mousewheel.disable();
        hoverTimer = null;
    });
});
