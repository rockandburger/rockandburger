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
        const { top } = getElemOffset(section)

        scroll.init({

            after: _ => {

                if (scroll.lastPosY >= (top - 160)){
                    section.classList.add('active')

                    if(section.id === 'contato'){

                        if (typeof google !== 'undefined'){
                            gMaps.load()
                            contact()
                            scroll.stop()
                        }

                    }else{
                        scroll.stop()
                    }

                  
                }

            }

        })


    })



}