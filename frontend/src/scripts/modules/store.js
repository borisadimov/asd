// import * as dat from 'dat.gui'
import Bowser from 'bowser'

const store = {
  // sections
  selectedSetionIndex: null,
  selectedSection: null,
  sections: [],
  isBlobVisible: false,

  // dom
  contentDomElement: document.querySelector('.js-content'),

  // gui: new dat.GUI({ name: 'My GUI' }),

  browser: Bowser.getParser(window.navigator.userAgent),

  get isMobile() {
    let _isMobile = false

    switch (
      Bowser.getParser(window.navigator.userAgent).parsedResult.platform.type
    ) {
      case 'mobile':
        _isMobile = true
        break

      case 'tablet':
        // TODO: CALCOLARE L'ORIENTATION
        _isMobile = false
        break

      default:
        _isMobile = false
        break
    }

    return 'ontouchstart' in window && _isMobile
  },

  get isTablet() {
    return (
      'ontouchstart' in window &&
      Bowser.getParser(window.navigator.userAgent).parsedResult.platform.type ==
        'tablet'
    )
  },

  get isMobileOrTablet() {
    return this.isMobile || this.isTablet || this.hasTouch
  },

  get isMobileOrTabletLandscape() {
    return (
      this.isMobile ||
      (this.isTablet && this.isLandscape) ||
      (this.hasTouch && this.isLandscape)
    )
  },

  get isMobileOrTabletPortrait() {
    return (
      this.isMobile ||
      (this.isTablet && this.isPortrait) ||
      (this.hasTouch && this.isPortrait)
    )
  },

  get isLandscape() {
    let _isAndroid = screen.orientation
    let _isLandscape = false

    if (_isAndroid) {
      _isLandscape = screen.orientation.angle !== 0
    } else if (typeof window.orientation !== 'undefined') {
      _isLandscape = window.orientation == 90 || window.orientation == -90
    }

    return _isLandscape
  },

  get isPortrait() {
    let _isAndroid = screen.orientation
    let _isPortrait = false

    if (_isAndroid) {
      _isPortrait = screen.orientation.angle == 0
    } else if (typeof window.orientation !== 'undefined') {
      _isPortrait = window.orientation !== 90 && window.orientation !== -90
    }

    return _isPortrait
  },

  get hasTouch() {
    return 'ontouchstart' in window
  },

  get isSafariMobile() {
    const browser = Bowser.getParser(window.navigator.userAgent)
    return (
      browser.parsedResult.os.name.toLowerCase() == 'ios' &&
      browser.parsedResult.browser.name.toLowerCase() == 'safari'
    )
  },

  getSectionById(id) {
    for (let section of store.sections) {
      if (section.id == id) {
        return section
      }
    }

    return null
  }
}

export default store
