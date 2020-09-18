import store from '../modules/store'
import Hammer from 'hammerjs'
import WheelManager from '../modules/WheelManager'

export default class Slider {
  constructor(prop) {
    this.onChange = prop.onChange
    this.wheelManager = null

    if (store.hasTouch) {
      this.touchGesture = new Hammer.Manager(document.body)
      this.touchGesture.add(
        new Hammer.Swipe({ direction: Hammer.DIRECTION_VERTICAL })
      )
    } else {
      this.wheelManager = new WheelManager({
        onWheelStart: this.__manageEvent
      })
    }
  }

  initEventListeners = () => {
    if (store.hasTouch) {
      this.touchGesture.on('swipe', this.__manageEvent)
    } else {
      this.wheelManager.initEventListener()
    }

    window.addEventListener('keyup', this.__manageKeyEvent)
  }

  removeEventListeners = () => {
    if (store.hasTouch) {
      this.touchGesture.off('swipe', this.__manageEvent)
    }

    window.removeEventListener('keyup', this.__manageKeyEvent)
  }

  __manageKeyEvent = e => {
    switch (e.code) {
      case 'ArrowDown':
      case 'ArrowRight':
        this.__manageEvent(e, 'down')
        break

      case 'ArrowUp':
      case 'ArrowLeft':
        this.__manageEvent(e, 'up')
        break
    }
  }

  __manageEvent = (e, forcedDirection) => {
    if (!document.body.classList.contains('has-menu')) {
      this.__slideTo(e, forcedDirection)
    }
  }

  __getDirection = e => {
    if (store.hasTouch) {
      return e.direction === 16 ? 'up' : 'down'
    }

    return e.deltaY < 0 ? 'up' : 'down'
  }

  __slideTo = (e, forcedDirection) => {
    const direction = forcedDirection ? forcedDirection : this.__getDirection(e)
    let nextSection = null

    if (direction == 'down') {
      nextSection = store.selectedSection.nextSection
    } else if (direction == 'up') {
      nextSection = store.selectedSection.prevSection
    }

    // if there's a next section navigato to it
    // if not, reactivate the mouse listeners
    if (store.selectedSection !== nextSection && nextSection !== null) {
      this.onChange(nextSection, direction)
    }
  }
}
