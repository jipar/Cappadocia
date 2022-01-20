let btn = document.querySelector('.btn_trip')
let modal = document.querySelector('.modal')
let close = document.querySelector('#close')

btn.addEventListener('click', () => {
    modal.style.display = 'block'
})
close.addEventListener('click', () => {
    modal.style.display = 'none'
})

//! --------------------------------------------Slider----------------------// !
let abSlide = document.querySelectorAll('.about__slide');

for (let i = 0; i < abSlide.length; i++){
    abSlide[i].style.display = 'none'
}
abSlide[0].style.display = 'block'

let abPrev = document.querySelector('#about_prev');
let abNext = document.querySelector('#about_next');
let c = 0;

abNext.addEventListener('click', () => {
    if(c < 2){
        abSlide[c].style.display = 'none'
        c++
        abSlide[c].style.display = 'block'
    } else {
        abSlide[c].style.display = 'none'
        c = 0;
        abSlide[c].style.display = 'block'
    }
})
abPrev.addEventListener('click', () => {
    if (c > 0){
        abSlide[c].style.display = 'none'
        c--
        abSlide[c].style.display = 'block'
    }else {
        abSlide[c].style.display = 'none'
        c = 2;
        abSlide[c].style.display = 'block'
    }
})

// !-----------Trip Slider-----------------
let tSlide = document.querySelectorAll('.trip__slide')

for (let i = 0; i < tSlide.length; i++){
    tSlide[i].style.display = 'none'
}
     tSlide[0].style.display = 'block'

let tNext = document.querySelector('#trip_next');
let tPrev = document.querySelector('#trip_prev');
let x = 0;

tNext.addEventListener ('click', () => {
    if (x < 2){
        tSlide[x].style.display = 'none';
        x++
        tSlide[x].style.display = 'block';
    }else {
        tSlide[x].style.display = 'none';
        x = 0;
        tSlide[x].style.display = 'block'; 
    }
})
tPrev.addEventListener ('click', () => {
    if (x > 0){
        tSlide[x].style.display = 'none';
        x--
        tSlide[x].style.display = 'block';
    }else {
        tSlide[x].style.display = 'none';
        x = 2;
        tSlide[x].style.display = 'block'; 
    }
})

// ! NAVBAR--------------

let nav = document.querySelector('nav')
nav.addEventListener('mouseover', () => {
    nav.style.backgroundColor = '#E2AB3F'
})
nav.addEventListener('mouseout', () => {
    nav.style.backgroundColor = 'rgba(250, 250, 154, 0.48)'
})
// window.addEventListener('scroll', () => {
//     nav.style.backgroundColor = 'rgba(250, 250, 154, 0.48)'
// })

// ! MAYAK

let mayak = document.querySelector('.mayak')

window.onscroll = () => {
    if (window.pageYOffset > 200) {
      mayak.style.display = 'block'
      mayak.style.color = '#000'
    } else {
      mayak.style.display = 'none'
    }
  }

