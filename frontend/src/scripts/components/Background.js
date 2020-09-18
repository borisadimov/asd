import gsap from 'gsap'
import { Ease } from '../modules/animationSettings'

export default class Background {
  constructor() {
    this.domElement = document.querySelector('body')
  }

  black = () => {
    document.body.classList.remove('is-white')

    gsap.to(this.domElement, {
      duration: 0.4,
      backgroundColor: '#000',
      ease: Ease.power3InOut
    })
  }

  white = () => {
    document.body.classList.add('is-white')

    gsap.to(this.domElement, {
      duration: 0.4,
      backgroundColor: '#fff',
      ease: Ease.power3InOut
    })
  }
}
