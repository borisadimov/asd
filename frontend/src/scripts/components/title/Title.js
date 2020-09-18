import store from '../../modules/store'
import animations from './animations'
import gsap from 'gsap'

export default class Title {
  constructor({ overCallback, outCallback, toggleCallback }) {
    this.style = 'vertical'
    this.domElement = document.querySelector('.js-title')
    this.actualWordDomElement = document.querySelector(
      '.js-title-vertical-item[data-id="play"]'
    )

    this.sublineDomElement = document.querySelector('.js-title-subline')

    if (store.isMobileOrTablet) {
      this.domElement.addEventListener('click', toggleCallback)

      Object.values(document.querySelectorAll('.js-fake-blob-title')).map(
        item => {
          item.addEventListener('click', e => {
            this.domElement.classList.toggle('maintitle--blob')
            toggleCallback(e)
          })
        }
      )
    } else {
      Object.values(document.querySelectorAll('.js-fake-blob-title')).map(
        item => {
          item.addEventListener('mouseover', e => {
            this.domElement.classList.add('maintitle--blob')
            e.target.classList.add('is-hidden')
            overCallback(e)
          })
        }
      )

      this.domElement
        .querySelector('.js-title-dynamic')
        .addEventListener('mouseout', e => {
          const fakeTitle = document.querySelector(
            '.js-fake-blob-title.is-hidden'
          )
          this.domElement.classList.remove('maintitle--blob')

          if (fakeTitle !== null) {
            setTimeout(() => {
              fakeTitle.classList.remove('is-hidden')
            }, 150)
          }

          outCallback(e)
        })
    }
  }

  show = () => {
    animations.show(this.domElement)
  }

  fadeIn = () => {
    animations.fadeIn({ $dom: this.domElement })

    this.style = store.selectedSection.titleStyle
  }

  fadeOut = () => {
    animations.fadeOut({ $dom: this.domElement })

    this.style = store.selectedSection.titleStyle
  }

  animate = direction => {
    // change text alignment only if the request is different from the previous one
    if (store.selectedSection.titleStyle != this.style) {
      switch (store.selectedSection.titleStyle) {
        case 'horizontal':
          this.__horizontalize()
          break

        case 'vertical':
        default:
          this.__verticalize()
          break
      }
    } else {
      this.__changeWordBySlide(direction)
    }

    this.updateSubline()
  }

  black = () => {
    animations.turnColor({
      color1: 0,
      color2: 0
    })
  }

  white = () => {
    animations.turnColor({
      color1: 0,
      color2: 255
    })
  }

  convertToBlobTitle = () => {
    this.white()

    animations.turnColor({
      color1: 255,
      color2: 255
    })

    animations.colorizeDynamicWord({
      color: '#0bffae'
    })

    animations.hideSublineForBlob({
      $dom: this.sublineDomElement
    })
  }

  convertToStandardTitle = () => {
    this.black()

    animations.colorizeDynamicWord({
      color: '#000000'
    })

    animations.updateSubLine({
      $lineDom: this.sublineDomElement,
      $textDom: document.querySelector(
        `.js-title-vertical-item[data-id=${store.selectedSection.id}] span`
      ),
      isMobile: store.isMobile
    })
  }

  showStaticWords = () => {
    animations.showStaticWords()
  }

  hideStaticWords = () => {
    if (store.isMobile) {
      animations.hideStaticWords()
    }
  }

  bringTo = to => {
    setTimeout(() => {
      switch (to) {
        case 'back':
          this.domElement.classList.remove('maintitle__front')
          break

        case 'front':
        default:
          this.domElement.classList.add('maintitle__front')
          break
      }
    }, 100)
  }

  resize = () => {
    if (!store.isMobile) {
      gsap.set(this.domElement, {
        x: window.innerWidth / 2
      })
    }
  }

  __horizontalize = () => {
    if (store.isMobile) {
      animations.mobileWordsAnimations.letMovement.play()
      animations.mobileWordsAnimations.dynMovement.play()
      animations.mobileWordsAnimations.outMovement.play()
      animations.mobileWordsAnimations.thereMovement.play()
    } else {
      animations.desktopWordsAnimations.letMovement.play()
      animations.desktopWordsAnimations.dynMovement.play()
      animations.desktopWordsAnimations.outMovement.play()
      animations.desktopWordsAnimations.thereMovement.play().then(() => {
        // only on mobile update space between words. last section title needs more space
        animations.updateWordsSpacing()
      })
    }

    this.__changeWordByFade()
    this.style = 'horizontal'
  }

  __verticalize = () => {
    if (store.isMobile) {
      animations.mobileWordsAnimations.letMovement.reverse()
      animations.mobileWordsAnimations.dynMovement.reverse()
      animations.mobileWordsAnimations.outMovement.reverse()
      animations.mobileWordsAnimations.thereMovement.reverse()
    } else {
      animations.desktopWordsAnimations.letMovement.reverse()
      animations.desktopWordsAnimations.dynMovement.reverse()
      animations.desktopWordsAnimations.outMovement.reverse()
      animations.desktopWordsAnimations.thereMovement.reverse()
    }

    this.__changeWordByFade()
    this.style = 'vertical'
  }

  __changeWordBySlide = direction => {
    let nextWordDomElement = document.querySelector(
      `.js-title-vertical-item[data-id=${store.selectedSection.id}]`
    )

    if (this.actualWordDomElement !== nextWordDomElement) {
      // only on mobile update space between words. last section title needs more space
      if (!store.isMobile) {
        animations.updateWordsSpacing()
      }

      // animate the slide in/out of the section title if there's a next element
      if (nextWordDomElement !== null) {
        animations.slideWord({
          $actual: this.actualWordDomElement,
          $next: nextWordDomElement,
          direction: direction,
          callback: () => {
            this.actualWordDomElement = nextWordDomElement
          }
        })
      }
    }
  }

  __changeWordByFade = () => {
    let nextWordDomElement = document.querySelector(
      `.js-title-vertical-item[data-id=${store.selectedSection.id}]`
    )

    if (this.actualWordDomElement !== nextWordDomElement) {
      animations.fadeWord({
        $actual: this.actualWordDomElement,
        $next: nextWordDomElement,
        callback: () => {
          this.actualWordDomElement = nextWordDomElement
        }
      })
    }
  }

  // manage show/hiding and update of the green line
  updateSubline = forcedSpeed => {
    let nextWordDomElement = document.querySelector(
      `.js-title-vertical-item[data-id=${store.selectedSection.id}] span`
    )

    animations.updateSubLine({
      $lineDom: this.sublineDomElement,
      $textDom: nextWordDomElement,
      isMobile: store.isMobile,
      speed: forcedSpeed
    })
  }
}
