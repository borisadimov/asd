import gsap from 'gsap'
import { Ease, Duration } from '../../../modules/animationSettings'
import store from '../../../modules/store'

function getEnterValues() {
  let y = store.isMobileOrTabletPortrait ? -450 : -806
  let scale = 1
  let diff = (100 * scale - 100) / 2

  if (!store.isMobile) {
    scale = window.innerHeight / 700
    y = `-${100 + diff}%`
  }

  if (store.isTablet && store.isPortrait) {
    scale = window.innerHeight / 700
    y = `-${100 + diff - 10}%`
  }

  return {
    scale: scale,
    y: y
  }
}

function getLeafValues() {
  let leaf1 = {
    rotate: -20,
    x: -70,
    y: 40,
    scale: 0.9
  }

  let leaf2 = {
    rotate: 20,
    x: 50,
    y: 40,
    scale: 0.9
  }

  let leaf3 = {
    rotate: store.isMobileOrTabletPortrait ? 10 : 20,
    x: store.isMobileOrTabletPortrait ? 50 : 76,
    y: store.isMobileOrTabletPortrait ? 60 : 72,
    scale: 0.9
  }

  let leaf4 = {
    rotate: -20,
    x: store.isMobileOrTabletPortrait ? -50 : -30,
    y: 140,
    scale: 0.9
  }

  return {
    leaf1: leaf1,
    leaf2: leaf2,
    leaf3: leaf3,
    leaf4: leaf4
  }
}

const animations = {
  openLeaf({ $dom }) {
    let anim = gsap.timeline({ paused: true })
    const leavesValues = getLeafValues()

    gsap.set($dom.children[0], { transformOrigin: '50% 50%' })
    gsap.set($dom.children[1], { transformOrigin: '50% 50%' })
    gsap.set($dom.children[2], { transformOrigin: '50% 50%' })
    gsap.set($dom.children[3], { transformOrigin: '50% 50%' })

    anim
      .to(
        $dom.children[0],
        {
          duration: 0.4,
          rotate: leavesValues.leaf1.rotate + 'deg',
          x: leavesValues.leaf1.x,
          y: leavesValues.leaf1.y,
          scale: leavesValues.leaf1.scale,
          fill: '#ffffff',
          ease: Ease.power3InOut
        }
        // '-=0.2'
      )
      .to(
        $dom.children[1],
        {
          duration: 0.4,
          rotate: leavesValues.leaf2.rotate + 'deg',
          x: leavesValues.leaf2.x,
          y: leavesValues.leaf2.y,
          scale: leavesValues.leaf2.scale,
          fill: '#ffffff',
          ease: Ease.power3InOut
        },
        '-=0.4'
      )
      .to(
        $dom.children[2],
        {
          duration: 0.4,
          rotate: leavesValues.leaf3.rotate + 'deg',
          x: leavesValues.leaf3.x,
          y: leavesValues.leaf3.y,
          scale: leavesValues.leaf3.scale,
          fill: '#ffffff',
          ease: Ease.power3InOut
        },
        '-=0.4'
      )
      .to(
        $dom.children[3],
        {
          duration: 0.4,
          rotate: leavesValues.leaf4.rotate + 'deg',
          x: leavesValues.leaf4.x,
          y: leavesValues.leaf4.y,
          scale: leavesValues.leaf4.scale,
          fill: '#ffffff',
          ease: Ease.power3InOut
        },
        '-=0.4'
      )

    return anim
  },

  enter({ $dom }) {
    let y = store.isMobileOrTabletPortrait ? -450 : -806
    let scale = 1
    let diff = (100 * scale - 100) / 2

    if (!store.isMobile) {
      scale = window.innerHeight / 700
      y = `-${100 + diff}%`
    }

    if (store.isTablet && store.isPortrait) {
      scale = window.innerHeight / 700
      y = `-${100 + diff - 10}%`
    }

    return gsap.to($dom, {
      duration: Duration.introDuration + 0.05,
      y: y,
      scale: scale,
      ease: Ease.power3InOut,
      paused: true,
      onStart: () => {
        gsap.set($dom, { visibility: 'visible' })
      }
    })
  },

  resizeOpenLeaf({ $dom }) {
    const enterValues = getEnterValues()
    const leavesValues = getLeafValues()

    gsap.set($dom.parentElement, {
      y: enterValues.y,
      scale: enterValues.scale
    })

    gsap.set($dom.children[0], {
      rotate: leavesValues.leaf1.rotate + 'deg',
      x: leavesValues.leaf1.x,
      y: leavesValues.leaf1.y,
      scale: leavesValues.leaf1.scale
    })

    gsap.set($dom.children[1], {
      rotate: leavesValues.leaf2.rotate + 'deg',
      x: leavesValues.leaf2.x,
      y: leavesValues.leaf2.y,
      scale: leavesValues.leaf2.scale
    })

    gsap.set($dom.children[2], {
      rotate: `${leavesValues.leaf3.rotate}deg`,
      x: leavesValues.leaf3.x,
      y: leavesValues.leaf3.y,
      scale: leavesValues.leaf3.scale
    })

    gsap.set($dom.children[3], {
      rotate: leavesValues.leaf4.rotate + 'deg',
      x: leavesValues.leaf4.x,
      y: leavesValues.leaf4.y,
      scale: leavesValues.leaf4.scale
    })
  }
}

export default animations
