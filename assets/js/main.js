import {the, all, doc} from './utils'
import fonts from './vendors/fontLoader'
import parallax from './parallax'
import menuSticky from './menuSticky'
import burgersLazyLoad from './burgersLazyLoad'
import onSections from './sections'
import zenscroll from 'zenscroll'
import hamburger from './hamburger'
import markOnMenu from './markOnMenu'
import isMobile from './vendors/isMobile'
import domready from 'domready'
import moveElements from './moveElements'

domready( _ => {

  // start parallax 
  isMobile.any() && hamburger()

  if (!isMobile.any()){
    parallax()
    
    // menu fixed on scroll
    menuSticky()
  }
  // when sections are reached
  onSections()

  markOnMenu()

  //Lazy load
  burgersLazyLoad()

  // move elements
  isMobile.any() && moveElements()
  
})