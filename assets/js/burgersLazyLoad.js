import {
    the,
    all,
    doc,
    animation,
    ScrollHandler,
    getElemOffset,
    elementIsVisibleInViewport
} from './utils'

import imagesloaded from 'imagesloaded'

export default function burgersLazyLoad() {

    const lazzys = all('.lazy')

    const load = img => {
        img.src = img.dataset.src
        img.classList.add('loaded')
    }

    const watch = img => {
    
        const scroll = new ScrollHandler()

        scroll.init({
            after: () => {

                if (elementIsVisibleInViewport(img, true)){
                    load(img)
                    scroll.stop()
                }

            }
        })

    }

    lazzys.forEach(lazy => {

        if (elementIsVisibleInViewport(lazy, true)){
            load(lazy)
        }else{
            watch(lazy)  
        }

    })

    imagesloaded(lazzys, function () {
        the('.burger-wrp').classList.add('all-loaded')
    })


}