import Section from '../Section'
import animations from './animations'
// import store from '../../../modules/store'

export default class ContactSection extends Section {
  constructor({ data, backHandler }) {
    super(data)

    this.backHandler = backHandler

    this.enterAnimation = animations.enter({ $dom: this.domElement })
    this.backDomElement = document.querySelector('.js-contact-back')
    this.backDomElement.addEventListener('click', this.backHandler)
  }

  enter = callback => {
    this.enterAnimation.play()
    super.enter(callback)
  }

  exit = callback => {
    this.enterAnimation.reverse().then(() => {
      super.exit(callback)

      if (this.backHandler !== null) {
        this.backHandler()
      }
    })
  }
}
