import {the, all, doc} from './utils'
import fonts from './vendors/fontLoader'
import domready from 'domready'
import Swiper from './vendors/maps.js'

const hamburger = document.querySelector('#hamburger-1');
const menu = document.querySelector('#menu');
const header = document.querySelector('header');
const hHeight = header.offsetHeight;
const mHeight = menu.offsetHeight;
const parallax = document.querySelector('.contato');
domready( () => {

hamburger.addEventListener('click', function() {
  menu.classList.toggle('openned')
  this.classList.toggle('is-active')
}, false)

})
function parallaxTriger() {
  parallax.style.backgroundPosition = 'center ' + window.scrollY * -2 / 3 + 'px';
}
function menuSticky() {
  if(window.pageYOffset > hHeight) {
    menu.classList.add('fixed');
    header.classList.add('fixed');
    // console.log(window.pageYOffset > hHeight)
    // header.style.marginTop = nHeight+"px";
  } else {
    menu.classList.remove('fixed');
    header.classList.remove('fixed');
    // header.style.marginTop = 0;
  }
}
window.addEventListener('scroll', function() {
  parallaxTriger();
  menuSticky();
});
