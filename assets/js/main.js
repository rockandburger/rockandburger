import {the, all, doc} from './utils'
import fonts from './vendors/fontLoader'
import parallax from './parallax'
import menuSticky from './menuSticky'
import burgersLazyLoad from './burgersLazyLoad'
import onSections from './sections'
import zenscroll from 'zenscroll'
import hamburger from './hamburger'
import markOnMenu from './markOnMenu'
import domready from 'domready'

domready( () => {

  // start parallax 
  parallax()

  // menu fixed on scroll
  menuSticky()

  //Lazy load
  burgersLazyLoad()

  // when sections are reached
  onSections()

  hamburger()

  markOnMenu()
  
})