import gsap from 'gsap'
import { Ease, Duration } from '../../modules/animationSettings'

gsap.registerPlugin(window.DrawSVGPlugin)

export default class Intro {
  constructor({ onComplete }) {
    const app = document.querySelector('.js-app')
    const logo = document.querySelector('.js-intro-logo')
    // const greenBar = document.querySelector('.js-intro-green-bar')

    logo.style.opacity = 1

    Promise.resolve([])
      .then(() => {
        // draw outline
        return gsap.from(logo.children, {
          duration: Duration.introDuration,
          drawSVG: 0,
          ease: 'none'
        })
      })

      .then(() => {
        // fill all the white letters and green leaf
        return (
          gsap.to(Object.values(logo.children).splice(1), {
            duration: 0.5,
            fill: '#FFFFFF',
            ease: 'none'
          }) &&
          gsap.to(logo.children[0], {
            duration: 0.5,
            fill: '#0BFFAE',
            ease: 'none'
          })
        )
      })
      .then(() => {
        // hide logo
        return gsap.to(logo.parentNode, {
          duration: Duration.introDuration,
          opacity: 0,
          y: window.innerHeight * -0.5,
          ease: Ease.power3InOut,
          onStart: () => {
            // launch the callback so the exit logo animation will execute togheter with the entrance of the first section
            if (typeof onComplete === 'function') {
              onComplete()
            }
          }
        })
      })
      .then(() => {
        app.removeChild(logo.parentNode)
      })
  }
}
