
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';


document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'slider',
    heightRatio: 0.5,
    "perPage": 1,
  }).mount(),
    navSlide()
  setInterval(() => imgAnimate(), 5000);

});

//animation image

function imgAnimate() {
  const images = document.querySelectorAll(".image");
  let zeroTop = 0;
  let zeroLeft = 0;
  let zeroTransform = "";
  for (let i = 0; i < images.length; i++) {
    let currentElement = images[i];
    let nextElement = images[i + 1];
    if (i === 0) {
      zeroTop = window
        .getComputedStyle(currentElement, null)
        .getPropertyValue("top");
      zeroLeft = window
        .getComputedStyle(currentElement, null)
        .getPropertyValue("left");
      zeroTransform = window
        .getComputedStyle(currentElement, null)
        .getPropertyValue("transform");
    }
    if (nextElement) {
      let nextTop = window
        .getComputedStyle(nextElement, null)
        .getPropertyValue("top");
      let nextLeft = window
        .getComputedStyle(nextElement, null)
        .getPropertyValue("left");
      let nextTransform = window
        .getComputedStyle(nextElement, null)
        .getPropertyValue("transform");

      currentElement.style.top = nextTop;
      currentElement.style.left = nextLeft;
      currentElement.style.transform = nextTransform;
    } else {
      currentElement.style.top = zeroTop;
      currentElement.style.left = zeroLeft;
      currentElement.style.transform = zeroTransform;
    }
  }
}


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










