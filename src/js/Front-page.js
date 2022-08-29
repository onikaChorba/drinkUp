
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';


document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'slider',
    heightRatio: 0.5,
    "perPage": 1,
  }).mount();
  navSlide();
  imgAnimate();

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







