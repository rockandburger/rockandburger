import {
    the,
    all,
    doc,
    animation,
    ScrollHandler
} from './utils'


export default function parallax() {

    // parallax
    const parallax = new ScrollHandler()
    const bg = the('.contato')

    parallax.init({
        after: () => {
            const y = `${parallax.lastPosY * -2 / 3}px`
            bg.style.backgroundPosition = `center ${y}`
        }
    })
    

}