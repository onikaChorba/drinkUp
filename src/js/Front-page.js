
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';


document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',
    heightRatio: 0.5,
  }).mount();
});