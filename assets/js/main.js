import {the, all, doc} from './utils'
import fonts from './vendors/fontLoader'
import domready from 'domready'
import parallax from './parallax'
import menuSticky from './menuSticky'
import lazyLoad from './lazyLoad'
import buger from './burger'
// import Swiper from './vendors/maps.js'



domready( () => {

  // handle the menu on mobile;
  // const menu = the('#menu')
  // const hamburger = the('#hamburger-1')

  // hamburger.addEventListener('click', function() {
  //   menu.classList.toggle('openned')
  //   this.classList.toggle('is-active')
  // }, false)
  
  // start parallax 
  parallax()

  // menu fixed on scroll
  menuSticky()

  //Lazy load
  lazyLoad()

  // active burger section
  buger()

})