
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
});

//animation image
// console.clear();
// let angle = 360 / 6;
// let finalAngle = -360;
// let scale = 3 / 6;
// let finalScale = -3;

// const imageContainer = document.querySelectorAll(".image");
// imageContainer.forEach(image => {

//   finalAngle -= 60;
//   image.style.transform = `rotate(${angle}deg)`;
//   image.style.setProperty("--start-angle-of-rotation", `-${angle}deg`);
//   image.style.setProperty("--end-angle-of-rotation", `${finalAngle}deg`);
//   angle += 60;

// });
// imageContainer.forEach(image => {

//   finalScale = 3;
//   image.style.transform = `scale(${scale})`;
//   image.style.setProperty(`-${scale}`);
//   image.style.setProperty(`${finalScale}`);
//   scale += 0.5;

// });




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










