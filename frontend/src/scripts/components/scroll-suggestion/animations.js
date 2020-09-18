import gsap from 'gsap'
import { Ease, Duration } from '../../modules/animationSettings'
import store from '../../modules/store'

const animations = {
  show({ $dom }) {
    return gsap.to($dom, {
      duration: Duration.introDuration,
      opacity: 1,
      ease: Ease.power3InOut
    })
  },

  hide({ $dom }) {
    return gsap.to($dom, {
      duration: 0.35,
      opacity: 0,
      ease: Ease.power3InOut
    })
  },

  playVersion({ $dom, $playDom }) {
    // let y = -135
    let y =
      -(window.innerHeight / 2) +
      document.querySelector('.js-title').getBoundingClientRect().height +
      30

    if (store.isMobile) {
      if (window.innerHeight <= 600) {
        // y = -60
        y = 30
      } else {
        y = 0
      }
    } else if (store.isTablet) {
      if (store.isPortrait) {
        y = -215
      } else {
        y = -115
      }
    } else if (store.hasTouch) {
      if (store.isPortrait) {
        y = -215
      } else {
        y = -115
      }
    }

    gsap.to($dom, {
      duration: 0.35,
      opacity: 1,
      y: y,
      ease: Ease.power3InOut
    })

    gsap.to($playDom, {
      duration: 0.35,
      opacity: 1,
      ease: Ease.power3InOut
    })
  },

  playVersion2({ $dom, $playDom }) {
    let y = -135

    if (store.isMobile) {
      if (window.innerHeight <= 600) {
        y = -60
      } else {
        y = -100
      }
    } else if (store.isTablet) {
      if (store.isPortrait) {
        y = -215
      } else {
        y = -115
      }
    } else {
      if (store.hasTouch) {
        if (store.isPortrait) {
          y = -215
        } else {
          y = -115
        }
      }
    }

    gsap.to($dom, {
      duration: 0.35,
      opacity: 1,
      y: y,
      ease: Ease.power3InOut
    })

    gsap.to($playDom, {
      duration: 0.35,
      opacity: 1,
      ease: Ease.power3InOut
    })
  },

  connectVersion({ $dom, $contactDom, $standardDom, $playDom }) {
    gsap.to($dom, {
      duration: 0.35,
      opacity: 1,
      ease: Ease.power3InOut
    })

    gsap.to($contactDom, {
      duration: 0.35,
      opacity: 1,
      ease: Ease.power3InOut
    })

    gsap.to($standardDom, {
      duration: 0.35,
      opacity: 0,
      ease: Ease.power3InOut
    })

    gsap.to($playDom, {
      duration: 0.35,
      opacity: 0,
      ease: Ease.power3InOut
    })
  },

  otherSectionsVersion({ $dom, $standardDom }) {
    let y = -85

    if (store.isMobileOrTablet && window.innerHeight <= 600) {
      y = -100
    }

    gsap.to($dom, {
      duration: 0.35,
      opacity: 0.3,
      y: y,
      ease: Ease.power3InOut
    })

    gsap.to($standardDom, {
      duration: 0.35,
      opacity: 1,
      ease: Ease.power3InOut
    })
  }
}

export default animations
