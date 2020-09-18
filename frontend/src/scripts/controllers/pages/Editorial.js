import Page from '../Page'
import Form from '../../components/Form'
import Logo from '../../components/header/Logo/Logo'

export default class Editorial extends Page {
  static init() {
    document.body.style.backgroundColor = 'white'
    document.body.classList.add('is-scollable')

    this.headerLogo = new Logo({
      onClick: () => (window.location.href = '/')
    })

    document.body.classList.add('app-is-ready', 'is-white')
    this.headerLogo.show()
    // this.menu.show()

    if (!document.querySelector('.js-tab')) {
      new Form()
      return
    }

    this.setActive(window.location.hash)

    window.addEventListener('resize', () => {
      const height = document.querySelector('.js-tab-content .is-active')
        .clientHeight
      document.querySelector('.js-tab-content').style.height = `${height}px`
    })

    Object.values(document.querySelectorAll('.js-tab [href]')).map(item => {
      item.addEventListener('click', () => {
        const hash = item.getAttribute('href')
        this.setActive(hash)
      })
    })
  }

  static setActive = hash => {
    if (hash === '') {
      const height = document.querySelector('.js-tab-content .is-active')
        .clientHeight
      document.querySelector('.js-tab-content').style.height = `${height}px`
      return
    }
    document.querySelector('.js-tab .is-active').classList.remove('is-active')
    document
      .querySelector(`.js-tab [href="${hash}"]`)
      .parentNode.classList.add('is-active')

    document
      .querySelector('.js-tab-content .is-active')
      .classList.remove('is-active')
    document
      .querySelector(`.js-tab-content [data-tab="${hash}"]`)
      .classList.add('is-active')

    const height = document.querySelector('.js-tab-content .is-active')
      .clientHeight
    document.querySelector('.js-tab-content').style.height = `${height}px`
  }
}
