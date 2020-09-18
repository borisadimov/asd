import store from '../modules/store'

export default class RotateDevice {
  constructor() {
    this.domElement = document.querySelector('.js-rotate')

    if (store.isMobile) {
      window.addEventListener('orientationchange', this.checkOrientation)
      this.checkOrientation()
    }
  }

  checkOrientation = () => {
    let _isAndroid = screen.orientation
    let _isLandscape = false

    if (_isAndroid) {
      _isLandscape = screen.orientation.angle !== 0
    } else if (typeof window.orientation !== 'undefined') {
      _isLandscape = window.orientation == 90 || window.orientation == -90
    }

    if (_isLandscape) {
      this.show()
    } else {
      this.hide()
    }
  }

  show = () => {
    this.domElement.classList.add('is-visible')
  }

  hide = () => {
    this.domElement.classList.remove('is-visible')
  }
}
