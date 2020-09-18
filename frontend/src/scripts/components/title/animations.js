import gsap from 'gsap'
import { Ease, Duration } from '../../modules/animationSettings'
import store from '../../modules/store'

const ORIGINAL_MOBILE_HEIGHT = 667

const animations = {
  // title block entrance
  show($domElement) {
    $domElement.style.visibility = 'visible'
    $domElement.style.display = 'block'
    let y = 0

    switch (store.isMobile) {
      case true:
        y = -(window.innerHeight / 2 + $domElement.clientHeight * 0.5) - 66
        y -= (window.innerHeight * -30) / ORIGINAL_MOBILE_HEIGHT
        break

      case false:
      default:
        y = $domElement.clientHeight * -0.5
        break
    }

    gsap.to($domElement, {
      duration: Duration.introDuration,
      opacity: 1,
      // y: $domElement.clientHeight * -0.5,
      y: y,
      ease: Ease.power3InOut
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

  // animate title words on desktop
  desktopWordsAnimations: {
    letMovement: gsap.to(document.querySelector('.js-title-let'), {
      duration: 0.4,
      x: -202,
      y: 70,
      ease: Ease.power3InOut,
      paused: true
    }),
    dynMovement: gsap.to(document.querySelector('.js-title-dynamic'), {
      duration: 0.4,
      x: -58,
      y: 4,
      ease: Ease.power3InOut,
      paused: true
    }),
    outMovement: gsap.to(document.querySelector('.js-title-out'), {
      duration: 0.4,
      x: 68,
      y: -66,
      ease: Ease.power3InOut,
      paused: true
    }),
    thereMovement: gsap.to(document.querySelector('.js-title-there'), {
      duration: 0.4,
      x: 192,
      y: -134,
      ease: Ease.power3InOut,
      paused: true
    })
  },

  // animate title words on mobile
  mobileWordsAnimations: {
    letMovement: gsap.to(document.querySelector('.js-title-let'), {
      duration: 0.3,
      right: '100px',
      top: '42px',
      ease: Ease.power3InOut,
      paused: true
    }),
    dynMovement: gsap.to(document.querySelector('.js-title-dynamic'), {
      duration: 0.3,
      right: '141px',
      top: '108px',
      ease: Ease.power3InOut,
      paused: true
    }),
    outMovement: gsap.to(document.querySelector('.js-title-out'), {
      duration: 0.3,
      right: '86px',
      top: '180px',
      ease: Ease.power3InOut,
      paused: true
    }),
    thereMovement: gsap.to(document.querySelector('.js-title-there'), {
      duration: 0.3,
      right: '110px',
      top: '246px',
      ease: Ease.power3InOut,
      paused: true
    })
  },

  updateWordsSpacing() {
    gsap.to(document.querySelector('.js-title-let'), {
      duration: 0.4,
      x: store.selectedSection.id == 'connect' ? -236 : -202,
      ease: Ease.power3InOut
    })

    gsap.to(document.querySelector('.js-title-out'), {
      duration: 0.4,
      x: store.selectedSection.id == 'connect' ? 104 : 68,
      ease: Ease.power3InOut
    })

    gsap.to(document.querySelector('.js-title-there'), {
      duration: 0.4,
      x: store.selectedSection.id == 'connect' ? 225 : 192,
      ease: Ease.power3InOut
    })
  },

  fadeWord({ $actual, $next, callback }) {
    gsap.to($actual, {
      duration: 0.35,
      opacity: 0,
      ease: Ease.power3InOut,
      delay: 0,
      onComplete: () => {
        $actual.style.visibility = 'hidden'
      }
    })

    gsap.to($next, {
      duration: 0.35,
      opacity: 1,
      ease: Ease.power3InOut,
      delay: 0,
      onStart: () => {
        $next.style.display = 'block'
        $next.style.visibility = 'visible'
      },
      onComplete: callback
    })
  },

  slideWord({ $actual, $next, direction, callback }) {
    let defaultPosition = direction == 'up' ? -100 : 100

    gsap.to($actual, {
      // duration: 0.35,
      duration: Duration.changeSectionDuration,
      y: defaultPosition * -1,
      opacity: 0,
      ease: Ease.power3InOut,
      onComplete: () => {
        // $actual.style.display = 'none'
        $actual.style.visibility = 'hidden'
        $actual.classList.remove('is-visible')
        gsap.set($actual, { clearProps: 'all' })
      }
    })

    gsap.set($next, { clearProps: 'all' })

    gsap.set($next, { y: defaultPosition })
    gsap.to($next, {
      // duration: 0.35,
      duration: Duration.changeSectionDuration,
      y: 0,
      opacity: 1,
      ease: Ease.power3InOut,
      onStart: () => {
        $next.style.display = 'block'
        $next.style.visibility = 'visible'
        $next.classList.add('is-visible')
      },
      onComplete: callback
    })
  },

  turnColor({ color1, color2 }) {
    gsap.to(':root', {
      duration: 0.4,
      '--gradientColor1': color1,
      '--gradientColor2': color2,
      ease: Ease.power3InOut
    })
  },

  colorizeDynamicWord({ color }) {
    gsap.to(document.querySelectorAll('.js-title-dynamic span'), {
      duration: 0.4,
      color: color,
      ease: Ease.power3InOut
    })
  },

  updateSubLine({ $lineDom, $textDom, isMobile, speed }) {
    let textWidth = 0

    if ($textDom !== null) {
      textWidth = $textDom.clientWidth
      textWidth += isMobile ? 8 : 17
    }

    gsap.to($lineDom, {
      duration: speed ? speed : 0.35,
      opacity: 1,
      ease: Ease.power3InOut,
      width: textWidth
    })
  },

  hideSublineForBlob({ $dom }) {
    gsap.to($dom, {
      duration: 0.35,
      opacity: 0,
      width: 0,
      ease: Ease.power3InOut
    })
  },

  hideStaticWords() {
    gsap.to(document.querySelector('.js-title-let'), {
      duration: 0.35,
      opacity: 0,
      ease: Ease.power3InOut
    })

    gsap.to(document.querySelector('.js-title-out'), {
      duration: 0.35,
      opacity: 0,
      ease: Ease.power3InOut
    })

    gsap.to(document.querySelector('.js-title-there'), {
      duration: 0.35,
      opacity: 0,
      ease: Ease.power3InOut
    })
  },

  showStaticWords() {
    gsap.to(document.querySelector('.js-title-let'), {
      duration: 0.35,
      opacity: 1,
      ease: Ease.power3InOut
    })

    gsap.to(document.querySelector('.js-title-out'), {
      duration: 0.35,
      opacity: 1,
      ease: Ease.power3InOut
    })

    gsap.to(document.querySelector('.js-title-there'), {
      duration: 0.35,
      opacity: 1,
      ease: Ease.power3InOut
    })
  }
}

export default animations
