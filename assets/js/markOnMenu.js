import {
    the,
    all,
    ScrollHandler,
    getElemOffset,
    elementIsVisibleInViewport,
    forEach
} from './utils'


export default function markOnMenu() {

    const anchors = []


    forEach(all('.nav-item'), item=> {
        const href = item.getAttribute('href').replace('#', '')
        anchors.push({ href, item })
    })

    forEach(all('.section'), section => {

        const scroll = new ScrollHandler()

        const { top } = getElemOffset(section)

        function action(section) {

            if ((top - 120) < scroll.lastPosY) {

                const id = section.id
                const found = anchors.find(anchor => id === anchor.href)

                if (found) {
                    forEach(anchors, anchor => anchor.item.classList.remove('actual'))
                    found.item.classList.add('actual')
                } else {
                    forEach(anchors, anchor => anchor.item.classList.remove('actual'))
                }

            }
        }

        scroll.init({
            after: _ => action(section)
        })

    })

}