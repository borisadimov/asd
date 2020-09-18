import gsap from 'gsap'
import { Ease, Duration } from '../../../modules/animationSettings'

export default class Logo {
  constructor({ onClick }) {
    this.domElement = document.querySelector('.js-logo')
    this.domElement.addEventListener('click', onClick)
  }

  show = () => {
    gsap.to(this.domElement, {
      duration: Duration.introDuration,
      opacity: 1,
      x: 122,
      ease: Ease.power3InOut
    })
  }

  hide = () => {
    gsap.to(this.domElement, {
      duration: Duration.introDuration,
      opacity: 0,
      x: 0,
      ease: Ease.power3InOut
    })
  }

  visible = flag => {
    gsap.to(this.domElement, {
      duration: 0.35,
      opacity: flag ? 1 : 0,
      ease: Ease.power3InOut
    })
  }
}
