import gsap from 'gsap'
import { Ease, Duration } from '../../modules/animationSettings'

const animations = {
  showDescription($domElement) {
    gsap.to($domElement, {
      duration: 0.35,
      opacity: 1,
      ease: Ease.power3InOut,
      onStart: () => {
        $domElement.style.display = 'block'
        $domElement.style.visibility = 'visible'
      }
    })
  },

  hideDescription({ $dom, callback }) {
    gsap
      .to($dom, {
        duration: 0.35,
        opacity: 0,
        ease: Ease.power3InOut
      })
      .then(() => {
        $dom.style.display = 'none'
        $dom.style.visibility = 'hidden'

        if (typeof callback !== 'undefined') {
          callback()
        }
      })
  },

  enter({ $dom, settings }) {
    return gsap.from($dom, {
      duration: Duration.changeSectionDuration,
      x: settings.x,
      y: settings.y,
      scale: settings.scale,
      rotation: settings.rotation,
      ease: Ease.power3InOut,
      opacity: settings.opacity,
      onStart: () => {
        gsap.set($dom, { visibility: 'visible' })
      },
      paused: true
    })
  },

  // exit animation for the section that is not symmetric
  exit({ $dom, settings }) {
    return gsap.to($dom, {
      duration: Duration.changeSectionDuration,
      x: settings.x,
      y: settings.y,
      scale: settings.scale,
      rotation: settings.rotation,
      ease: Ease.power3InOut,
      opacity: settings.opacity
    })
  },

  fadeIn({ $dom }) {
    gsap.to($dom, {
      duration: 0.35,
      opacity: 1,
      ease: Ease.power3InOut
    })
  },

  fadeOut({ $dom }) {
    gsap.to($dom, {
      duration: 0.35,
      opacity: 0,
      ease: Ease.power3InOut
    })
  },

  hideIcons({ $dom }) {
    return gsap.to($dom, {
      duration: 0.35,
      opacity: 0,
      ease: Ease.power3InOut,
      paused: true
    })
  }
}

export default animations
