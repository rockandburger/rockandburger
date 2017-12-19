import {
    the,
    all,
    ScrollHandler,
    getElemOffset,
    elementIsVisibleInViewport,

} from './utils'

import GoogleMaps from './maps'
import contact from './contact'

export default function onSections() {

    const gMaps = new GoogleMaps()
    gMaps.init()

    all('.section').forEach(section => {

        const scroll = new ScrollHandler()

       // const { top } = getElemOffset(section)

        function action(section) {

            console.log(section.id)
            section.classList.add('active')

            if (section.id === 'contato') {

                if (typeof google !== 'undefined') {
                    gMaps.load()
                    contact()
                    scroll.stop()
                }

            } else {
                scroll.stop()
            }

        }

        if (elementIsVisibleInViewport(section, true)){
            action(section)
        }

        scroll.init({

            after: _ => {
                //|| scroll.lastPosY >= (top - 160)

                if (elementIsVisibleInViewport(section, true)) {
                    action(section)
                }

                if (section.id === 'contato' && scroll.lastPosY >= (getElemOffset(section).top - 160) ){
                    action(section)
                }

            }

        })


    })



}