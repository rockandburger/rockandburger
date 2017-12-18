import {the, all, doc} from './utils'
import fonts from './vendors/fontLoader'
import parallax from './parallax'
import menuSticky from './menuSticky'
import lazyLoad from './lazyLoad'
import onSections from './sections'
import zenscroll from 'zenscroll'
import domready from 'domready'

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

  // when sections are reached
  onSections()

  
})