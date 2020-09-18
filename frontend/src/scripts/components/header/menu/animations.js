import gsap from 'gsap'
import { Ease, Duration } from '../../../modules/animationSettings'
import store from '../../../modules/store'

const animations = {
  show({ $dom }) {
    $dom.style.pointerEvents = 'none'
    $dom.parentElement.style.pointerEvents = 'none'

    gsap.to($dom, {
      duration: Duration.introDuration,
      x: -80,
      opacity: 1,
      ease: Ease.power3InOut,
      onComplete: () => {
        $dom.style.pointerEvents = 'all'
        $dom.parentElement.style.pointerEvents = 'all'
      }
    })
  },

  hide({ $dom }) {
    $dom.style.pointerEvents = 'none'
    $dom.parentElement.style.pointerEvents = 'none'

    gsap.to($dom, {
      duration: Duration.introDuration,
      x: 0,
      opacity: 0,
      ease: Ease.power3InOut
    })
  },

  fadeIn({ $dom }) {
    gsap.to($dom, {
      duration: 0.3,
      opacity: 1,
      ease: Ease.power3InOut
    })
  },

  fadeOut({ $dom }) {
    gsap.to($dom, {
      duration: 0.3,
      opacity: 0,
      ease: Ease.power3InOut
    })
  },

  setVisible({ $dom }) {
    $dom.style.pointerEvents = 'none'

    gsap.to($dom, {
      duration: 0.35,
      opacity: 1,
      ease: Ease.power3InOut,
      onComplete: () => {
        $dom.style.pointerEvents = 'all'
      }
    })
  },

  setHidden({ $dom }) {
    $dom.style.pointerEvents = 'none'

    gsap.to($dom, {
      duration: 0.35,
      opacity: 0,
      ease: Ease.power3InOut,
      onComplete: () => {
        $dom.style.pointerEvents = 'all'
      }
    })
  },

  close({ $dom, $hamburger, $footerDom, $backgroundDom }) {
    $hamburger.style.pointerEvents = 'none'

    gsap
      .to([$dom, $footerDom], {
        duration: 0.25,
        stagger: -0.1,
        opacity: 0,
        x: '100px',
        ease: Ease.power3InOut
      })
      .then(() => {
        document.body.classList.remove('has-menu')
        $hamburger.style.pointerEvents = 'all'
      })

    gsap.to($backgroundDom, {
      duration: 0.25,
      delay: 0.25 * 2,
      scale: 0,
      y: -130
    })
  },

  open({ $dom, $hamburger, $footerDom, $backgroundDom }) {
    $hamburger.style.pointerEvents = 'none'
    document.body.classList.add('has-menu')

    let delta = 280
    let elemWidth = 260
    let scaleX = (window.innerWidth * 2 - delta) / elemWidth
    let scaleY = (window.innerHeight * 2 - delta) / elemWidth

    if (store.isMobile) {
      scaleX = (window.innerWidth * 2.5) / elemWidth
      scaleY = (window.innerHeight * 2.5) / elemWidth
    } else if (store.isTablet || store.hasTouch) {
      if (store.isPortrait) {
        scaleX = (window.innerWidth * 1.75 - delta) / elemWidth
        scaleY = (window.innerHeight * 1.75 - delta) / elemWidth
      } else {
        scaleX = (window.innerWidth * 2 - delta) / elemWidth
        scaleY = (window.innerHeight * 2 - delta) / elemWidth
      }
    }

    gsap
      .to([$dom, $footerDom], {
        duration: 0.25,
        stagger: 0.1,
        // delay: 0.25,
        opacity: 1,
        x: 0,
        ease: Ease.power3InOut
      })
      .then(() => {
        $hamburger.style.pointerEvents = 'all'
      })

    gsap.to($backgroundDom, {
      duration: 0.2,
      scale: Math.max(scaleX, scaleY),
      y: window.innerHeight * 0.35
    })
  },

  mouseOver({ $dom }) {
    return gsap.to($dom, {
      duration: 0.3,
      scale: 1,
      ease: Ease.power3InOut,
      paused: true
    })
  }
}

export default animations
