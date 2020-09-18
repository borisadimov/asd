import gsap from 'gsap'

export default class Pagination {
  constructor({ currentStep = 0, onClick }) {
    this.onClick = onClick
    this.paginationText = document.querySelectorAll('.js-form-pagination-text')

    this.paginationDot = Object.values(
      document.querySelectorAll('.js-form-pagination-dot')
    )

    this.paginationDot.map((dot, index) => {
      dot.addEventListener('click', () => {
        this.onClick(index)
      })
    })

    const next = this.paginationText[currentStep + 1]
    gsap.set(next, {
      width: window.innerWidth < 768 ? 0 : 'auto'
    })

    this.loader = gsap.timeline({
      paused: true,
      repeat: -1,
      yoyo: false
    })
    this.loader
      .to(this.paginationDot, {
        duration: 0.3,
        stagger: 0.1,
        opacity: 1,
        clearProps: 'all'
      })
      .to(this.paginationDot, {
        duration: 0.3,
        stagger: 0.1,
        opacity: 0.2,
        clearProps: 'all'
      })

    this.loader.stop = () => {
      this.loader.pause()
      this.loader.seek(0)
      gsap.set(this.paginationDot, {
        opacity: 1
      })
    }

    return this
  }

  update = ({ oldStep, currentStep }) => {
    if (oldStep >= 0) {
      const oldActive = this.paginationText[oldStep]
      const oldOpen = this.paginationText[oldStep + 1]
      const current = this.paginationText[currentStep]
      const next = this.paginationText[currentStep + 1]
      oldActive.parentNode.classList.remove('is-active')
      current.parentNode.classList.add('is-active')
      if (oldOpen) {
        gsap.to(oldOpen, {
          duration: 0.3,
          width: 0
        })
      }
      gsap.to(next, {
        duration: 0.3,
        width: window.innerWidth < 768 ? 0 : 'auto'
      })
    } else {
      const prev = this.paginationText[currentStep - 1]
      const current = this.paginationText[currentStep]
      const next = this.paginationText[currentStep + 1]
      prev.parentNode.classList.remove('is-active')
      current.parentNode.classList.add('is-active')
      gsap.to(current, {
        duration: 0.3,
        width: 0
      })
      if (next) {
        gsap.to(next, {
          duration: 0.3,
          width: window.innerWidth < 768 ? 0 : 'auto'
        })
      }
    }
  }
}
