import {the, all, doc} from './utils'
import fonts from './vendors/fontLoader'
import parallax from './parallax'
import menuSticky from './menuSticky'
import lazyLoad from './lazyLoad'
import onSections from './sections'
import zenscroll from 'zenscroll'
import hamburger from './hamburger'
import domready from 'domready'

domready( () => {

  // start parallax 
  parallax()

  // menu fixed on scroll
  menuSticky()

  //Lazy load
  lazyLoad()

  // when sections are reached
  onSections()

  hamburger()
  
})