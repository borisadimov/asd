import animations from './animations'
import store from '../../modules/store'

export default class ScrollSuggestion {
  constructor({ onClick }) {
    this.domElement = document.querySelector('.js-scroll-suggestion')
    this.playDomElement = this.domElement.querySelector(
      '.js-scroll-suggestion-play'
    )
    this.standardDomElement = this.domElement.querySelector(
      '.js-scroll-suggestion-standard'
    )
    this.contactDomElement = this.domElement.querySelector(
      '.js-scroll-suggestion-contact'
    )
    this.domElement.addEventListener('click', () => {
      onClick(store.selectedSection.nextSection, 'down')
    })

    Object.values(document.querySelectorAll('.js-fake-scroll')).map(item => {
      item.addEventListener('click', () => {
        onClick(store.selectedSection.nextSection, 'down')
      })
    })
  }

  show = () => {
    animations.show({ $dom: this.domElement }).then(() => {
      this.domElement.classList.remove('no-events')
    })
  }

  hide = () => {
    animations.hide({ $dom: this.domElement }).then(() => {
      this.domElement.classList.add('no-events')
    })
  }

  update = () => {
    switch (store.selectedSection.id) {
      case 'play':
        animations.playVersion({
          $dom: this.domElement,
          $playDom: this.playDomElement
        })
        animations.hide({ $dom: this.contactDomElement })
        animations.hide({ $dom: this.standardDomElement })
        break

      case 'connect':
        if (store.isMobileOrTabletPortrait) {
          this.hide()
        } else {
          animations.connectVersion({
            $dom: this.domElement,
            $contactDom: this.contactDomElement,
            $standardDom: this.standardDomElement,
            $playDom: this.playDomElement
          })
        }
        break

      case 'contact':
        this.hide()
        break

      default:
        if (store.isMobileOrTabletPortrait) {
          this.hide()
        } else {
          animations.otherSectionsVersion({
            $dom: this.domElement,
            $standardDom: this.standardDomElement
          })
          animations.hide({ $dom: this.contactDomElement })
          animations.hide({ $dom: this.playDomElement })
        }
        break
    }
  }
}
