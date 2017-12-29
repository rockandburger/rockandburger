import {the} from './utils'

export default function hamburger() {

    const burger = the('#hamburger-1')
    const menu = the('#menu')


    burger.addEventListener('click', _ => {
        menu.classList.toggle('openned')
        burger.classList.toggle('is-active')
    })

    menu.addEventListener('click', _ => {
        menu.classList.toggle('openned')
        burger.classList.toggle('is-active')
    })

}