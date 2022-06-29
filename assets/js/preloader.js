"use strict"

const preloader = document.querySelector('.preloader')
const preloaderContent = document.querySelector('#preloader__content')
const noScroll = document.querySelector('.no-scroll-y')
    
if (preloader) {
    const myTimeout = setTimeout(vanish, 6000);
    function vanish() {
        preloader.classList.add('disapear')
        noScroll.classList.remove('no-scroll-y')
    }
    function myStopFunction() {
        clearTimeout(myTimeout);
    }
}
