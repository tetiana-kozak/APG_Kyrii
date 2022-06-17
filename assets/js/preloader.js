// const bodyClass = document.querySelector('.body')


// function addClass() {
//     bodyClass.classList.add('loaded')
// }


// setTimeout(addClass, 1000);


const preloader = document.querySelector('.preloader')
const preloaderContent = document.querySelector('#preloader__content')
const noScroll = document.querySelector('.no-scroll-y')
// let timeSet = setTimeout(vanish, 500)

// console.log(preloader)




// function vanish(){
    //     // document.querySelector('.no-scroll-y').classList.remove('no-scroll-y')
// }
    
// window.addEventListener('load', vanish);
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
