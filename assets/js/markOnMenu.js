import {
    the,
    all,
    ScrollHandler,
    getElemOffset,
    elementIsVisibleInViewport,
} from './utils'


export default function markOnMenu() {

    const anchors = []

    all('.nav-item').forEach(item => {
        const href = item.getAttribute('href').replace('#', '')
        anchors.push({ href, item })
    })

    all('.section').forEach(section => {

        const scroll = new ScrollHandler()

        const { top } = getElemOffset(section)

        function action(section) {

            if ((top - 120) < scroll.lastPosY) {

                const id = section.id
                const found = anchors.find(anchor => id === anchor.href)

                if(found){
                    anchors.forEach(anchor => anchor.item.classList.remove('actual'))
                    found.item.classList.add('actual')
                }else{
                    anchors.forEach(anchor => anchor.item.classList.remove('actual'))
                }

            }
        }


        scroll.init({
            after: _ => action(section)
        })

    })

}