const doc = document
const the = doc.querySelector.bind(doc)
const all = doc.querySelectorAll.bind(doc)

// Detect request animation frame
const animation = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    // IE Fallback, you can even fallback to onscroll
    function(callback) {
        window.setTimeout(callback, 1000 / 60)
    }

const getElemOffset = elem => {

  const width = elem.offsetWidth
  const height = elem.offsetHeight

  let top = 0
  let left = 0

  do {
    if (!isNaN(elem.offsetTop)) {
      top += elem.offsetTop
    }
    if (!isNaN(elem.offsetLeft)) {
      left += elem.offsetLeft
    }
  } while ((elem = elem.offsetParent) !== null)

  const bottom = top + height
  const right  = left + width
  
  return {height, width, top, left, bottom, right}

}


class ScrollHandler {
  // Needs Animation variable from common.js file
  constructor() {
    this.lastPosY = window.pageYOffset
    this.loop()
  }

  init(options) {
    this.after = options.after || function () { }
    this.before = options.before || function () { }
    this.max = options.max || 0
    this.min = options.min || 0
  }

  callback() {

    if (this.lastPosY >= this.max) {
      this.after()
    }

    if (this.lastPosY <= this.min) {
      this.before()
    }

  }

  loop() {

    let scrollTop = window.pageYOffset

    if (this.lastPosY === scrollTop) {
      animation(this.loop.bind(this))
      return
    } else {
      this.lastPosY = scrollTop
      this.callback()
      animation(this.loop.bind(this))
    }

  }

  stop(name = false) {
    
    if(name){
      
      this[name] = () => null

    }else{

      this.after = () => null
      this.before = () => null

    }

  }

}

const elementIsVisibleInViewport = (el, partiallyVisible = false) => {

  const { left, bottom, right, top } = el.getBoundingClientRect()
  
  if(el.id === 'contato'){
    console.log(top)
  }

  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
    ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth

}

export { doc, the, all, animation, getElemOffset, ScrollHandler, elementIsVisibleInViewport}