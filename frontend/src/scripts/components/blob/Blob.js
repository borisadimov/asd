import gsap from 'gsap'
import { Ease } from '../../modules/animationSettings'
import store from '../../modules/store'

const DELTA_X = 155
const DELTA_Y = 70

const DELTA_MOBILE_X = 50
const DELTA_MOBILE_Y = 300

export default class Blob {
  constructor({ $img, clickCallback }) {
    this.domElement = document.querySelector('#blob')
    this.imgElement = $img
    this.maskAnimation = null
    this.imageAnimation = null
    this.isOpened = false
    this.isIOSChrome = false

    if (
      store.isMobile &&
      store.browser.parsedResult.browser.name.toLowerCase() == 'chrome'
    ) {
      this.isIOSChrome = true
    }

    if (this.imgElement !== null) {
      this.imgElement.addEventListener('click', clickCallback)
    }
  }

  show = () => {
    this.__prepareForShow()

    this.maskAnimation.play()
    this.imageAnimation.play()

    this.isOpened = true
  }

  hide = () => {
    if (this.maskAnimation !== null && this.imageAnimation !== null) {
      this.maskAnimation.reverse()
      this.imageAnimation.reverse()

      this.isOpened = false
    }
  }

  resize = () => {
    if (this.isOpened) {
      const values = this.__prepareValues({ reset: false })

      gsap.set(this.domElement, {
        x: values.position.x,
        y: values.position.y,
        scale: values.scale
      })
    }
  }

  __prepareForShow = () => {
    gsap.set(this.domElement, { clearProps: 'all' })
    gsap.set(this.imgElement, { clearProps: 'all' })

    const values = this.__prepareValues({ reset: true })

    // animate shape
    this.maskAnimation = gsap.to(this.domElement, {
      duration: 0.35,
      x: values.position.x,
      y: values.position.y,
      scale: values.scale,
      ease: Ease.power3InOut
    })

    // animate content image
    this.imageAnimation = gsap.to(this.imgElement, {
      duration: 0.35,
      opacity: 1,
      ease: Ease.power3InOut
    })
  }

  __prepareValues = ({ reset }) => {
    let newCenter = null
    let newPosition = this.__getPosition()
    let deltaX = store.isMobileOrTabletPortrait ? DELTA_MOBILE_X : DELTA_X
    let deltaY = store.isMobileOrTabletPortrait ? DELTA_MOBILE_Y : DELTA_Y

    // if (this.isIOSChrome) {
    //   deltaX = DELTA_IOS_CHROME_X
    //   deltaY = DELTA_IOS_CHROME_Y
    // }

    if (reset) {
      if (this.isIOSChrome) {
        newCenter = this.__getSafariCenter()
        gsap.set(this.domElement, {
          transformOrigin: `${newCenter.x}px ${newCenter.y}px`,
          x: 0,
          y: 0,
          scale: 0
        })
      } else {
        // in order to avoid a transformOrigin bug on svg animations
        // we set specific values for safari/firefox or chrome
        switch (store.browser.getBrowserName().toLowerCase()) {
          case 'firefox':
          case 'safari':
            newCenter = this.__getSafariCenter()
            gsap.set(this.domElement, {
              transformOrigin: `${newCenter.x}px ${newCenter.y}px`,
              x: 0,
              y: 0,
              scale: 0
            })
            break

          case 'chrome':
          default:
            newCenter = this.__getCenter()
            gsap.set(this.domElement, {
              transformOrigin: `${newCenter.x}% ${newCenter.y}%`,
              x: newPosition.x,
              y: newPosition.y,
              scale: 0
            })
            break
        }
      }
    }

    if (store.isMobile && window.innerHeight <= 600) {
      deltaX += 100
      deltaY += 20
    }

    return {
      position: {
        x: newPosition.x + deltaX,
        y: newPosition.y + deltaY
      },
      scale: this.__getScale()
    }
  }

  __getPosition = () => {
    return {
      x:
        (window.innerWidth -
          this.domElement.getAttribute('data-original-width')) /
        2,
      y:
        (window.innerHeight -
          this.domElement.getAttribute('data-original-height')) /
        2
    }
  }

  __getScale = () => {
    return Math.max(
      window.innerWidth / this.domElement.getAttribute('data-scale-w'),
      window.innerHeight / this.domElement.getAttribute('data-scale-h')
    )
  }

  __getSafariCenter = () => {
    let boundingBox = document
      .querySelector('.js-title-dynamic')
      .getBoundingClientRect()

    return {
      x: boundingBox.x + boundingBox.width / 2,
      y: boundingBox.y + boundingBox.height / 2
    }
  }

  __getCenter = () => {
    let boundingBox = document
      .querySelector('.js-title-dynamic')
      .getBoundingClientRect()
    let x = boundingBox.x + boundingBox.width / 2
    let y = boundingBox.y + 70 / 2

    return {
      x: ((x / window.innerWidth) * 100).toFixed(2),
      y: ((y / window.innerHeight) * 100).toFixed(2)
    }
  }
}
