import {
    the,
    ScrollHandler,
    getElemOffset,
    elementIsVisibleInViewport
} from './utils'


export default function bugers() {

    const burger = the('.burger-wrp')

    const scroll = new ScrollHandler()

    scroll.init({
        after: () => {

            if (elementIsVisibleInViewport(burger, true)) {
                burger.classList.add('visible')
                scroll.stop()
            }

        }
    })


}