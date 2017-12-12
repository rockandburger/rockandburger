import {the, all, doc} from './utils'
import fonts from './vendors/fontLoader'
import domready from 'domready'
import Swiper from './vendors/swiper.esm'


domready( () => {

  console.log('hey')


})
document.onscroll = function () {
    var bigger = document.querySelector('.contato');
    return bigger.style.backgroundPosition = 'center ' + window.scrollY * -2 / 3 + 'px';
};
