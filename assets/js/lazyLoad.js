import {
    the,
    all,
    doc,
    animation,
    ScrollHandler,
    getElemOffset,
    elementIsVisibleInViewport
} from './utils'


export default function lazyLoad() {

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

    all('.lazy').forEach(lazy => {

        if (elementIsVisibleInViewport(lazy, true)){
            load(lazy)
        }else{
            watch(lazy)  
        }

    })

}