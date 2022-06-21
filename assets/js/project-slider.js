"use strict"


const images = document.querySelectorAll('.slider .slider__line .photo-bg')
const sliderLine = document.querySelector('.slider__line')

let count = 0;
let width;


// function init() {
//     console.log('resize')
//     width = document.querySelector('.slider').offsetWidth;
//     sliderLine.style.width = width*images.length + 'px';
//     images.forEach( item => {
//         item.style.width = width + 'px';
//         item.style.height = 'auto';
//     })
//     console.log(width)
// }

// window.addEventListener('resize', init)





document.querySelector('.slider__right').addEventListener('click', function () {
    count++;
    rollSlider()
})

function rollSlider() {
    sliderLine.style.transform = 'translate(-'+count*width+'px)';
}






















