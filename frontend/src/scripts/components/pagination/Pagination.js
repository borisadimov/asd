import animations from './animations'
import store from '../../modules/store'
import gsap from 'gsap'

export default class Pagination {
  constructor({ onClick }) {
    this.barDomElement = document.querySelector('.js-bar-filler')
    this.numbersDomElement = document.querySelector('.js-numbers-pagination')
    this.sublineDomElement = document.querySelector(
      '.js-numbers-pagination-line'
    )
    this.selectedItemDomElement = null
    this.onClick = onClick
    this.items = this.numbersDomElement.querySelectorAll('.pagination__item')

    Object.values(this.items).map(item => {
      item.addEventListener('click', this.__onNumberClick)
    })

    gsap.set(this.barDomElement.children[0], {
      scaleX: 1,
      scaleY: 0,
      transformOrigin: '0% 0%'
    })
  }

  show = () => {
    animations.show({
      $dom: this.numbersDomElement,
      $barDom: this.barDomElement
    })

    this.update()
  }

  hide = () => {
    animations.hide({
      $dom: this.numbersDomElement,
      $barDom: this.barDomElement
    })

    this.deselectItem()
  }

  update = () => {
    if (store.selectedSection.hasPagination) {
      let singleVoiceDom = this.numbersDomElement.querySelector(
        `[data-id=${store.selectedSection.id}]`
      )

      // hide previous selection
      this.deselectItem()

      // memorize new selected item
      this.selectedItemDomElement = singleVoiceDom

      // calculate bar height
      let _barScale =
        (this.__getItemIndex(this.selectedItemDomElement) + 1) /
        this.items.length
      animations.selectItem({
        $dom: this.selectedItemDomElement,
        $lineDom: this.sublineDomElement,
        $barDom: this.barDomElement,
        height: _barScale
      })
    }
  }

  deselectItem = () => {
    if (this.selectedItemDomElement !== null) {
      animations.deselectItem({
        $dom: this.selectedItemDomElement
      })
    }
  }

  __onNumberClick = event => {
    let dom = event.target
    let index = this.__getItemIndex(dom)
    let previousIndex =
      this.selectedItemDomElement !== null
        ? this.__getItemIndex(this.selectedItemDomElement)
        : -1
    let direction = previousIndex > index ? 'down' : 'up'
    let section = store.getSectionById(dom.getAttribute('data-id'))

    this.onClick(section, direction)
  }

  __getItemIndex = $dom => {
    return Array.from($dom.parentElement.children).indexOf($dom)
  }
}
