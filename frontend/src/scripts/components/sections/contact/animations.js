import gsap from 'gsap'
import { Ease } from '../../../modules/animationSettings'

const animations = {
  enter({ $dom }) {
    return gsap.from($dom, {
      duration: 0.35,
      opacity: 0,
      y: '100%',
      ease: Ease.power3InOut,
      paused: true,
      onStart: () => {
        gsap.set($dom, { visibility: 'visible' })
      }
    })
  }
}

export default animations
