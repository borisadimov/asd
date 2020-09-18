import animations from './animations'
import store from '../../../modules/store'
import gsap from 'gsap'

export default class Menu {
  constructor({ onClick, onOpen, onClose }) {
    this.backgroundDomElement = document.querySelector('.js-menu-background')
    this.backgroundHoverDomElement = document.querySelector('.js-menu-over-bg')
    this.hamburgerDomElement = document.querySelector('.js-hamburger')
    this.hamburgerParentDomElement = document.querySelector(
      '.js-hamburger'
    ).parentElement
    this.nav = document.querySelector('.js-main-menu')
    this.footer = document.querySelector('.js-menu-footer')
    this.clickCallback = onClick
    this.openCallback = onOpen
    this.closeCallback = onClose
    this.selectedItem = null

    // setup menu animation
    gsap.set(this.backgroundDomElement, {
      transformOrigin: '50% 50%',
      x: 130,
      y: -130,
      scale: 0,
      display: 'block'
    })
    gsap.set(this.backgroundHoverDomElement, {
      transformOrigin: '50% 50%',
      x: 130,
      y: -130,
      scale: 0,
      display: 'block'
    })

    this.animationOver = animations.mouseOver({
      $dom: this.backgroundHoverDomElement
    })

    this.initListeners()

    // fix for smaller devices
    if (store.isMobile && window.innerHeight <= 600) {
      this.footer.style.bottom = 'calc(50vh + 38px)'
      this.footer.style.fontSize = '8px'
      this.footer.style.lineHeight = '12px'
    }
  }

  initListeners = () => {
    // activare mouseover/out only on desktop
    if (!store.isMobileOrTablet) {
      this.hamburgerParentDomElement.addEventListener('mouseenter', () => {
        this.animationOver.play()
      })

      this.hamburgerParentDomElement.addEventListener('mouseleave', () => {
        this.animationOver.reverse()
      })
    }

    this.hamburgerParentDomElement.addEventListener('click', () => {
      if (document.body.classList.contains('has-menu')) {
        animations.close({
          $dom: this.nav.children,
          $hamburger: this.hamburgerDomElement,
          $footerDom: this.footer,
          $backgroundDom: this.backgroundDomElement
        })

        this.closeCallback()
      } else {
        animations.open({
          $dom: this.nav.children,
          $hamburger: this.hamburgerDomElement,
          $footerDom: this.footer,
          $backgroundDom: this.backgroundDomElement
        })

        this.openCallback()
      }
    })

    window.addEventListener('keyup', e => {
      if (e.code === 'Escape' && document.body.classList.contains('has-menu')) {
        this.hamburgerParentDomElement.click()
      }
    })

    Object.values(this.nav.children).map(item => {
      item.addEventListener('click', this.__onItemClick)
    })

    document
      .querySelector('.js-main-menu-link')
      .addEventListener('click', this.__onItemClick)
  }

  show = () => {
    animations.show({ $dom: this.hamburgerDomElement })
  }

  hide = () => {
    animations.hide({ $dom: this.hamburgerDomElement })
  }

  fadeIn = () => {
    animations.fadeIn({ $dom: this.hamburgerDomElement })
  }

  fadeOut = () => {
    animations.fadeOut({ $dom: this.hamburgerDomElement })
  }

  close = () => {
    animations.close({
      $dom: this.nav.children,
      $hamburger: this.hamburgerDomElement,
      $backgroundDom: this.backgroundDomElement
    })
  }

  visible = flag => {
    if (flag) {
      animations.setVisible({ $dom: this.hamburgerDomElement })
    } else {
      animations.setHidden({ $dom: this.hamburgerDomElement })
    }
  }

  selectMenuItem = () => {
    let actualItem = this.nav.querySelector('.selected')
    let newItem = this.nav.querySelector(
      `[data-id=${store.selectedSection.id}]`
    )

    if (actualItem) {
      actualItem.classList.remove('selected')
    }

    if (newItem) {
      this.selectedItem = newItem
      this.selectedItem.classList.add('selected')
    } else {
      this.selectedItem = null
    }

    this.close()
  }

  resize = () => {}

  __onItemClick = event => {
    event.preventDefault()

    let dom = event.target
    let index = this.__getItemIndex(dom)
    let previousIndex =
      this.selectedItem !== null ? this.__getItemIndex(this.selectedItem) : -1
    let direction = previousIndex > index ? 'down' : 'up'
    let section = store.getSectionById(dom.getAttribute('data-id'))

    // close menu
    this.hamburgerParentDomElement.click()

    // navigate to the selected section
    if (section !== null) {
      this.clickCallback(section, direction)
    }

    return false
  }

  __getItemIndex = $dom => {
    return Array.from($dom.parentElement.children).indexOf($dom)
  }
}
