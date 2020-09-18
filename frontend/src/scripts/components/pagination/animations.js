import gsap from 'gsap'
import { Ease } from '../../modules/animationSettings'

const animations = {
  show({ $dom, $barDom }) {
    gsap.to($barDom, {
      duration: 0.35,
      opacity: 1,
      ease: Ease.power3InOut
    })

    gsap
      .to($dom, {
        duration: 0.35,
        opacity: 1,
        ease: Ease.power3InOut
      })
      .then(() => {
        gsap.set($dom, { pointerEvents: 'all' })
      })
  },

  hide({ $dom, $barDom }) {
    gsap.to($barDom, {
      duration: 0.35,
      opacity: 0,
      ease: Ease.power3InOut
    })

    gsap.to($dom, {
      duration: 0.35,
      opacity: 0,
      ease: Ease.power3InOut,
      onStart: () => {
        gsap.set($dom, { pointerEvents: 'none' })
      }
    })
  },

  selectItem({ $dom, $lineDom, $barDom, height }) {
    let _lineY =
      $dom.getBoundingClientRect().y -
      $dom.parentElement.getBoundingClientRect().y +
      $dom.getBoundingClientRect().height

    gsap.to($dom, {
      duration: 0.3,
      opacity: 1,
      ease: Ease.power3InOut
    })

    gsap.to($lineDom, {
      duration: 0.3,
      y: _lineY,
      ease: Ease.power3InOut
    })

    gsap.to($barDom.children[0], {
      duration: 0.5,
      scaleY: height,
      ease: Ease.power3InOut
    })
  },

  deselectItem({ $dom }) {
    gsap.to($dom, {
      duration: 0.3,
      opacity: 0.2,
      ease: Ease.power3InOut
    })
  }
}

export default animations
