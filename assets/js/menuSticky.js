import {
    the,
    all,
    doc,
    animation,
    ScrollHandler
} from './utils'


export default function menuSticky() {

    const menu = the('#menu')
    const header = the('header')

    if (window.pageYOffset > 0){
        menu.classList.add('fixed')
        header.classList.add('fixed')
    }

    function menuSticky(y) {

        if (y > 5) {
            menu.classList.add('fixed')
            header.classList.add('fixed')
        } else {
            menu.classList.remove('fixed')
            header.classList.remove('fixed')
        }

    }

    const scrollPos = new ScrollHandler()

    scrollPos.init({
        after: () => menuSticky(scrollPos.lastPosY)
    })

}