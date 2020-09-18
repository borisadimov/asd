import store from './store'

export default class WheelManager {
  constructor({ onWheelStart }) {
    this.marker = true
    this.counter1 = 0
    this.counter2
    this.interval = 50
    this.wheelStartCallback = onWheelStart
  }

  initEventListener = () => {
    const $dom = document.querySelector(
      `.js-section[data-id=${store.selectedSection.id}]`
    )

    if ($dom !== null) {
      $dom.addEventListener('wheel', this.__manageEvent, { passive: true })
    }
  }

  __manageEvent = e => {
    e.stopPropagation()

    switch (this.__getDirection(e)) {
      case 'up':
        if (store.selectedSection.prevSection !== null) {
          this.__dispatchEvent(e)
        }
        break

      case 'down':
        if (store.selectedSection.nextSection !== null) {
          this.__dispatchEvent(e)
        }
        break
    }

    return false
  }

  __dispatchEvent = e => {
    const $dom = e.target.closest('.js-section')
    $dom.removeEventListener('wheel', this.__manageEvent)

    if (this.wheelStartCallback !== null) {
      this.wheelStartCallback(e)
    }

    return false
  }

  __getDirection = e => {
    if (store.hasTouch) {
      return e.direction === 16 ? 'up' : 'down'
    }

    return e.deltaY < 0 ? 'up' : 'down'
  }
}
