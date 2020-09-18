import Section from '../Section'
import animations from './animations'
import store from '../../../modules/store'

export default class PlaySection extends Section {
  constructor(data) {
    super(data)
    this.isLeafOpened = false
    this.firstEnter = false
    this.mouseOverCallback = null
    this.mouseOutCallback = null
    this.leaf = document.querySelector('.js-leaf')
    this.activeDomElement = document.querySelector('.js-play-active')
    this.openLeafAnimation = animations.openLeaf({
      $dom: this.leaf
    })
    this.enterAnimation = animations.enter({ $dom: this.leaf.parentElement })
  }

  enter = callback => {
    this.isLeafOpened = false
    this.enterAnimation = animations.enter({ $dom: this.leaf.parentElement })

    this.enterAnimation.play().then(() => {
      this.activeDomElement.addEventListener('mouseover', this.__onMouseOver)
      this.activeDomElement.addEventListener('mouseout', this.__onMouseOut)

      this.firstEnter = true

      setTimeout(() => {
        this.__repositionFakeTitle()
      }, 200)

      if (callback) {
        callback()
      }
    })

    // show white version automatically on mobile
    if (store.hasTouch) {
      setTimeout(this.__onMouseOver, 500)
    }

    super.enter()
  }

  exit = callback => {
    this.activeDomElement.removeEventListener('mouseover', this.__onMouseOver)
    this.activeDomElement.removeEventListener('mouseout', this.__onMouseOut)

    // exit animation and reset tweend properties
    this.enterAnimation.reverse().then(() => {
      // restart leafs position on desktop. so once back in play section everything is like the first time
      if (!store.isMobile) {
        this.openLeafAnimation.reverse()
      }
    })

    super.exit(callback)
  }

  resize = () => {
    this.__repositionFakeTitle()

    if (this.isLeafOpened) {
      animations.resizeOpenLeaf({
        $dom: this.leaf
      })
    }
  }

  __repositionFakeTitle = () => {
    const originalActiveBoundingClient = this.activeDomElement.getBoundingClientRect()
    const $scroll = document.querySelector('.js-scroll-suggestion')
    const scrollBounding = $scroll.getBoundingClientRect()
    const pos =
      scrollBounding.y - originalActiveBoundingClient.y + scrollBounding.height
    let diff = pos - 400

    diff = 70 + diff / 2

    this.activeDomElement.style.height = `${pos}px`
    this.activeDomElement.style.top = `calc(50% + ${diff}px)`
  }

  __onMouseOver = () => {
    this.mouseOverCallback()
    this.openLeafAnimation.play().then(() => {
      this.isLeafOpened = true
    })
  }

  __onMouseOut = () => {
    this.mouseOutCallback()
    this.openLeafAnimation.reverse().then(() => {
      this.isLeafOpened = true
    })
  }
}
