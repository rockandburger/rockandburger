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

    const wh = window.innerHeight

    all('.section').forEach(section => {

        const scroll = new ScrollHandler()

       // const { top } = getElemOffset(section)

        function action(section) {

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

        // if (elementIsVisibleInViewport(section, true)){
        //     action(section)
        // }
        
        scroll.init({

            after: _ => {

                if (elementIsVisibleInViewport(section, true)) {
                    action(section)
                }

                if (section.id === 'contato' && scroll.lastPosY >= (getElemOffset(section).top - (getElemOffset(section).top / 5)  )){
                    action(section)
                }

            }

        })


    })

}