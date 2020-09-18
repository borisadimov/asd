import Page from '../Page'

import SectionSettings from '../../../config/SectionSettings'
import store from '../../modules/store'

// components
import Intro from '../../components/intro/Intro'
import Menu from '../../components/header/menu/Menu'
import Slider from '../../components/Slider'
import Title from '../../components/title/Title'
import PlaySection from '../../components/sections/play/PlaySection'
import Background from '../../components/Background'
import Section from '../../components/sections/Section'
import Logo from '../../components/header/Logo/Logo'
import Pagination from '../../components/pagination/Pagination'
import ScrollSuggestion from '../../components/scroll-suggestion/ScrollSuggestion'
import ContactSection from '../../components/sections/contact/ContactSection'
import Form from '../../components/Form'
import RotateDevice from '../../components/RotateDevice'

export default class Home extends Page {
  static init() {
    // initialize and store all the sections from config objects
    this.__createSections()
    this.prevSection = null
    this.title = new Title({
      overCallback: this.showBlob,
      outCallback: this.hideBlob,
      toggleCallback: this.toggleBlobForMobile
    })
    this.background = new Background()
    this.slider = new Slider({
      onChange: this.goTo
    })
    this.menu = new Menu({
      onClick: this.goTo,
      onOpen: this.__onMenuOpen,
      onClose: this.__onMenuClose
    })
    this.headerLogo = new Logo({
      onClick: () => {
        this.goTo(store.sections[0], 'up')
      }
    })
    this.pagination = new Pagination({
      onClick: this.goTo
    })
    this.scrollSuggestion = new ScrollSuggestion({
      onClick: this.goTo
    })

    this.form = new Form({
      onResultCallback: this.slider.initEventListeners
    })
    new RotateDevice()

    // init intro animation
    this.intro = new Intro({
      onComplete: this.showFirstSection
    })

    window.onbeforeunload = function() {
      this.document.body.innerHTML = ''
    }

    window.onresize = this.resize
    window.onorientationchange = this.resize

    // this.resize()
  }

  static showFirstSection = () => {
    const $domElement = document.querySelector('.js-content')
    document.body.classList.add('app-is-ready')

    $domElement.style.opacity = 1
    $domElement.style.pointerEvents = 'all'
    $domElement.classList.add('is-active')

    this.menu.show()
    this.headerLogo.show()
    this.title.show()

    // show home section
    store.sections[0].activate()
    store.sections[0].enter()

    this.setThemeBlack()

    // setup general view
    this.scrollSuggestion.show()
    this.scrollSuggestion.update()

    this.slider.initEventListeners()
  }

  static goTo = (section, direction) => {
    if (section == store.selectedSection) {
      return
    }

    this.slider.removeEventListeners()

    // 1- Update blob
    this.updateBlobStatus()

    // 2- update selected store
    this.prevSection = store.selectedSection
    store.selectedSection = section

    // 3- update menu
    this.menu.selectMenuItem()

    switch (section.id) {
      case 'contact':
        this.goToContact()
        break

      case 'play':
        this.goToPlay(direction)
        break

      default:
        this.goToSection(direction)
        break
    }

    // 4- update scroll position
    this.scrollSuggestion.update()
  }

  static goToPlay = direction => {
    this.title.animate(direction)
    this.title.fadeIn()

    this.prevSection.exit(() => {
      // update title position, bring to front or back base on the selected section setting
      this.title.bringTo(store.selectedSection.titlePosition)
    })

    if (store.isMobile) {
      this.setThemeWhite()
    } else {
      this.setThemeBlack()
    }

    this.pagination.hide()
    store.selectedSection.enter(() => {
      this.slider.initEventListeners()
      store.selectedSection.activate()
    })

    this.menu.show()
    this.headerLogo.show()
  }

  static goToContact = () => {
    store.selectedSection.prevSection = this.prevSection

    this.slider.removeEventListeners()

    this.prevSection.fadeOut()
    this.title.bringTo(store.selectedSection.titlePosition)
    this.title.fadeOut()
    this.pagination.hide()
    this.scrollSuggestion.hide()

    if (store.isMobile || store.isTablet || store.hasTouch) {
      this.menu.hide()
      this.headerLogo.hide()
    }

    this.setThemeWhite()

    store.selectedSection.enter(() => {
      store.selectedSection.activate()

      // test maz
      this.prevSection.exit(() => {
        // update title position, bring to front or back base on the selected section setting
        this.title.bringTo(store.selectedSection.titlePosition)
      })
    })
  }

  static goToSection = direction => {
    // update title if the section is not coming from contact
    if (this.prevSection.id !== 'contact') {
      this.title.animate(direction)
    } else {
      this.title.animate(direction)
      this.title.fadeIn()
      this.title.updateSubline(0)
    }

    this.pagination.show()

    // enter/exit animations based on the requested section
    this.prevSection.exit(() => {
      // update title position, bring to front or back base on the selected section setting
      this.title.bringTo(store.selectedSection.titlePosition)
    })

    store.selectedSection.enter(() => {
      this.slider.initEventListeners()

      store.selectedSection.activate()
    })

    this.menu.show()
    this.headerLogo.show()

    this.setThemeWhite()
  }

  static setThemeBlack = () => {
    this.background.black()
    this.title.white()
  }

  static setThemeWhite = () => {
    this.background.white()
    this.title.black()
  }

  static updateBlobStatus = () => {
    if (store.isBlobVisible) {
      switch (store.isMobile) {
        case true:
          this.toggleBlobForMobile()
          break

        case false:
          this.hideBlob()
          break
      }
    }
  }

  static showBlob = () => {
    store.selectedSection.showBlob()
    this.title.convertToBlobTitle()
    this.pagination.hide()

    this.slider.removeEventListeners()

    if (!store.isMobileOrTabletPortrait) {
      this.menu.fadeOut()
    }
  }

  static hideBlob = () => {
    store.selectedSection.hideBlob()
    this.title.convertToStandardTitle()
    this.pagination.show()

    this.slider.initEventListeners()

    if (!store.isMobileOrTabletPortrait) {
      this.menu.fadeIn()
    }
  }

  static toggleBlobForMobile = () => {
    if (store.isBlobVisible) {
      this.hideBlob()
      this.title.showStaticWords()
    } else {
      this.showBlob()
      this.title.hideStaticWords()
    }

    store.isBlobVisible = !store.isBlobVisible
  }

  static resize = () => {
    if (this.title) {
      this.title.resize()
    }

    document.body.style.maxHeight = `${window.innerHeight}px`

    // fix bug on safari during the rotation of the device
    if (store.isMobile && store.isSafariMobile) {
      setTimeout(() => {
        document.body.style.maxHeight = `${window.innerHeight}px`
      }, 500)
    }

    store.selectedSection.resize()

    if (store.isTablet && store.isBlobVisible) {
      switch (store.isPortrait) {
        case true:
          this.menu.fadeIn()
          break

        case false:
        default:
          this.menu.fadeOut()
          break
      }
    }

    this.scrollSuggestion.update()
  }

  // create each section, connect each other and save the first that will be showed
  static __createSections = () => {
    // create sections
    for (let sectionObj of SectionSettings.sections) {
      let newSection = null

      sectionObj.blobCallback = this.updateBlobStatus

      switch (sectionObj.id) {
        case 'play':
          newSection = new PlaySection(sectionObj)
          newSection.mouseOverCallback = this.setThemeWhite
          newSection.mouseOutCallback = this.setThemeBlack
          break

        case 'contact':
          newSection = new ContactSection({
            data: sectionObj,
            backHandler: () => {
              if (this.form.isLastStep) {
                this.form.reset()
              }

              this.goTo(newSection.prevSection, 'up')
            }
          })
          break

        default:
          newSection = new Section(sectionObj)
          break
      }

      store.sections.push(newSection)
    }

    // create connections between sections
    for (const [index, section] of store.sections.entries()) {
      // next
      if (index < store.sections.length - 1) {
        section.nextSection = store.sections[index + 1]
      }

      // prev (set the previous from "think" section)
      if (index > 1) {
        section.prevSection = store.sections[index - 1]
      }
    }

    // select first section
    store.selectedSection = store.sections[0]
  }

  static __onMenuOpen = () => {
    this.pagination.hide()
    store.selectedSection.hideIcons()
  }

  static __onMenuClose = () => {
    if (store.selectedSection.hasPagination) {
      this.pagination.show()
    }
    store.selectedSection.showIcons()
  }
}
