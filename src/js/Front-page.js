
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';

import anime from 'animejs/lib/anime.es.js';


document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'slider',
    heightRatio: 0.5,
    "perPage": 1,
  }).mount();
  navSlide();

});

// function testFunction() {
//   let imgs = document.querySelectorAll('.image');
//   imgs.forEach(img => {
//     img.addEventListener("click", myFunction);
//   })

//   function myFunction() {
//     console.log("Hello World!");
//   }
// }

// function imgAnimate() {
//   let imgs = document.querySelectorAll('.image');
//   imgs.forEach(img => {
//     img.addEventListener('click', imgSise);
//   })

//   function imgSise() {
//   }
// }




//menu
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelectorAll(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  burger.addEventListener("click", navFunction)

  function navFunction() {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5
          }s `;
      }
    });
    burger.classList.toggle("toggle");
  };
};

//ellipse
anime({
  targets: '.elipse',
  translateX: function (el) {
    return el.getAttribute('data-x');
  },
  translateY: function (el, i) {
    return 50 + (-50 * i);
  },
  scale: function (el, i, l) {
    return (l - i) + .25;
  },
  rotate: function () { return anime.random(-360, 360); },
  borderRadius: function () { return ['50%', anime.random(10, 35) + '%']; },
  duration: function () { return anime.random(1200, 1800); },
  delay: function () { return anime.random(0, 400); },
  direction: 'alternate',
  loop: true
});









