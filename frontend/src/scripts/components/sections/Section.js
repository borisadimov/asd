import animations from './animations'
import store from '../../modules/store'
import Blob from '../blob/Blob'

export default class Section {
  constructor(data) {
    this.data = data
    this.nextSection = null
    this.prevSection = null

    this.domElement = document.querySelector(
      `.js-section[data-id=${this.data.id}`
    )

    this.descriptionDomElement = this.domElement.querySelector(
      '.js-description'
    )

    this.hideIconsAnimation = animations.hideIcons({
      $dom: this.domElement.querySelector('.background__icons')
    })

    if (this.id !== 'play') {
      this.ico1DomElement = this.domElement.querySelector(
        `.js-icon-${this.id}-1`
      )
      this.ico2DomElement = this.domElement.querySelector(
        `.js-icon-${this.id}-2`
      )

      this.blob = new Blob({
        $img: this.domElement.querySelector('.js-blob-image'),
        clickCallback: this.data.blobCallback
      })
    }
  }

  get id() {
    return this.data.id
  }

  get titlePosition() {
    return this.data.titlePosition
  }

  get titleStyle() {
    return this.data.titleStyle
  }

  get theme() {
    return this.data.theme
  }

  get hasPagination() {
    return this.data.hasPagination
  }

  enter(callback) {
    // this.domElement.classList.add('is-active')

    if (!store.isMobile && this.descriptionDomElement !== null) {
      animations.showDescription(this.descriptionDomElement)
    }

    animations.fadeIn({ $dom: this.domElement })

    if (this.id !== 'play' && this.id !== 'contact') {
      // if it's the first animation, create animation object. if not restart the old anim objects
      if (typeof this.anim1 == 'undefined') {
        this.anim1 = animations.enter({
          $dom: this.ico1DomElement,
          settings: store.isMobile
            ? this.data.background1Animation.mobile
            : this.data.background1Animation.desktop
        })

        this.anim2 = animations.enter({
          $dom: this.ico2DomElement,
          settings: store.isMobile
            ? this.data.background2Animation.mobile
            : this.data.background2Animation.desktop
        })
      }

      this.anim1.play()
      this.anim2.play().then(() => {
        if (typeof callback !== 'undefined') {
          callback()
        }
      })
    } else {
      if (typeof callback !== 'undefined') {
        callback()
      }
    }
  }

  exit(callback) {
    if (!store.isMobile && this.descriptionDomElement !== null) {
      animations.hideDescription({
        $dom: this.descriptionDomElement
      })
    }

    if (this.id !== 'play' && this.id !== 'contact') {
      if (this.data.animReversable) {
        this.anim1.reverse()
        this.anim2.reverse().then(() => {
          if (typeof callback !== 'undefined') {
            callback()
          }

          this.deactivate()
        })
      } else {
        animations
          .exit({
            $dom: this.ico1DomElement,
            settings: store.isMobile
              ? this.data.background1ExitAnimation.mobile
              : this.data.background1ExitAnimation.desktop
          })
          .then(() => {
            this.anim1.pause(0)
          })

        animations
          .exit({
            $dom: this.ico2DomElement,
            settings: store.isMobile
              ? this.data.background2ExitAnimation.mobile
              : this.data.background2ExitAnimation.desktop
          })
          .then(() => {
            if (typeof callback !== 'undefined') {
              callback()
            }

            this.anim2.pause(0)
            this.deactivate()
          })
      }
    } else {
      if (typeof callback !== 'undefined') {
        callback()
        this.deactivate()
      }
    }
  }

  fadeOut() {
    animations.fadeOut({
      $dom: this.domElement
    })
  }

  showBlob() {
    if (typeof this.blob !== 'undefined') {
      this.blob.show()
      this.hideIcons()
    }
  }

  hideBlob() {
    if (typeof this.blob !== 'undefined') {
      this.blob.hide()
      this.showIcons()
    }
  }

  showIcons = () => {
    this.hideIconsAnimation.reverse()
  }

  hideIcons = () => {
    this.hideIconsAnimation.play()
  }

  activate = () => {
    if (!store.isMobile) {
      switch (store.browser.parsedResult.browser.name.toLowerCase()) {
        case 'firefox':
        case 'safari':
          setTimeout(() => {
            this.domElement.classList.add('is-active')
          }, 700)
          break

        case 'chrome':
        default:
          this.domElement.classList.add('is-active')
          break
      }
    } else {
      this.domElement.classList.add('is-active')
    }
  }

  deactivate = () => {
    this.domElement.classList.remove('is-active')
  }

  resize = () => {
    this.blob.resize()
  }
}
