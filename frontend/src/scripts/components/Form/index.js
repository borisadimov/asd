import gsap from 'gsap'
import axios from 'axios'
import Pagination from './Pagination'
import Validator from './Validator'
import Steps from './Steps'
import store from '../../modules/store'

export default class Form {
  constructor({ onResultCallback }) {
    this.form = document.querySelector('.js-form')
    this.input = this.form.querySelector('input')
    this.textarea = this.form.querySelector('textarea')
    this.checkBox = this.form.querySelector('input[type="checkbox"]')
    this.formErrorMessage = this.form.querySelector('.js-form-error-message')
    this.labels = this.form.querySelector('.js-form-labels')
    this.fieldSet = this.form.querySelector('.js-form-fieldset')
    this.inputs = this.form.querySelector('.js-form-inputs')
    this.lastStep = this.form.querySelector('.js-form-last-step')
    this.captcha = this.form.querySelector('.js-captcha')
    this.sendButton = this.form.querySelector('.js-form-send')
    this.result = this.form.querySelector('.js-form-result')
    this.toHideOnResult = this.form.querySelectorAll(
      '.js-form-to-hide-on-result'
    )
    this.errorClassName = 'has-error'
    this.formData = {}
    this.currentStep = 0
    this.onResultCallback = onResultCallback

    this.steps = new Steps({
      app: this
    })

    this.validator = new Validator({
      app: this
    })

    this.pagination = new Pagination({
      onClick: newStep => {
        const oldStep = this.currentStep
        if (newStep < oldStep) {
          this.currentStep = newStep
          this.transformInput(oldStep)
        } else if (newStep > oldStep) {
          this.checkForm()
        }
      }
    })

    this.addListeners()
  }

  reset = () => {
    Object.keys(this.formData).map(item => {
      delete this.formData[item]
    })
    const selectedStep = this.currentStep

    setTimeout(() => {
      this.textarea.value = ''
      this.checkBox.checked = false
      this.form.classList.remove('is-submitted')
      this.form.classList.remove('has-textarea')
      this.form.classList.remove('is-last-step')
      this.form.classList.add('has-captcha')

      gsap.set(this.captcha, { clearProps: 'all' })

      this.sendButton.disabled = !this.checkBox.checked

      window.grecaptcha.reset()

      this.hideLastStep()
      this.hideResult()

      gsap.set(this.fieldSet, {
        marginBottom: window.innerWidth < 768 ? '94px' : '154px'
      })

      this.validator.removeError()

      if (selectedStep !== 0) {
        this.pagination.update({
          oldStep: selectedStep,
          currentStep: 0
        })
      }

      gsap.set(this.labels, { clearProps: 'all' })
    }, 300)

    const oldStep = this.currentStep
    this.currentStep = 0
    this.transformInput(oldStep)
  }

  checkForm = () => {
    const step = this.steps[this.currentStep]
    const value = step.check()
    if (value === false) {
      return
    }
    this.formData[step.field] = value

    if (this.currentStep === this.steps.length - 1) {
      return window.grecaptcha.execute()
    }

    this.currentStep = this.currentStep + 1
    this.transformInput()
  }

  addListeners = () => {
    this.form.addEventListener('submit', e => {
      e.preventDefault()
      this.checkForm()
      return false
    })

    const events = ['focus', 'input', 'change']
    const elements = [this.input, this.textarea, this.checkBox]
    elements.map(element =>
      events.map(event =>
        element.addEventListener(event, this.validator.removeError)
      )
    )

    this.checkBox.addEventListener('change', () => {
      this.showCaptcha()
    })
  }

  transformInput = oldStep => {
    const step = this.steps[this.currentStep]
    const size = window.innerWidth < 768 ? 34 : 38
    const y = `${this.currentStep * -size}px`
    gsap.to(this.labels, {
      duration: 0.3,
      y
    })
    this.input.value = this.formData[step.field] || ''
    this.input.blur()

    if (step.type === 'checkbox') {
      this.pagination.update({
        oldStep: oldStep,
        currentStep: this.currentStep
      })
      return this.showLastStep()
    }

    if (oldStep === this.steps.length - 1) {
      this.hideLastStep()
    }

    this.input.type = step.type

    this.pagination.update({
      oldStep: oldStep,
      currentStep: this.currentStep
    })

    if (step.type === 'tel') {
      this.input.addEventListener('input', this.validator.watchPhoneChange)
    } else {
      this.input.removeEventListener('input', this.validator.watchPhoneChange)
    }

    if (step.type === 'textarea') {
      this.textarea.focus()
      this.form.classList.add('has-textarea')
    } else {
      this.input.focus()
      this.form.classList.remove('has-textarea')
    }

    if (this.currentStep == 0) {
      gsap.to('.js-form-advice', {
        duration: 0.4,
        opacity: 1,
        y: 0,
        onStart: () => {
          document.querySelector('.js-form-advice').style.display = 'block'
        }
      })
    } else {
      gsap
        .to('.js-form-advice', {
          duration: 0.4,
          opacity: 0,
          y: 20
        })
        .then(() => {
          document.querySelector('.js-form-advice').style.display = 'none'
        })
    }
  }

  get isLastStep() {
    return this.form.classList.contains('is-last-step')
  }

  showLastStep = () => {
    this.form.classList.add('is-last-step')

    let _fieldsetMarginBottom = '94px'

    if (this.form.classList.contains('has-captcha')) {
      _fieldsetMarginBottom = '154px'
    }

    gsap.to(this.fieldSet, {
      duration: 0.3,
      marginBottom: _fieldsetMarginBottom
    })
    gsap.to(this.inputs, {
      duration: 0.3,
      y: '-10px',
      opacity: 0,
      pointerEvents: 'none'
    })
    gsap.to(this.lastStep, {
      duration: 0.3,
      y: store.isMobile ? '-160px' : '-150px',
      opacity: 1,
      pointerEvents: 'all'
    })
  }

  hideLastStep = () => {
    this.form.classList.remove('is-last-step')
    gsap.to(this.fieldSet, {
      duration: 0.3,
      marginBottom: 0
    })
    gsap.to(this.inputs, {
      duration: 0.3,
      y: 0,
      opacity: 1,
      pointerEvents: 'all'
    })
    gsap.to(this.lastStep, {
      duration: 0.3,
      y: 0,
      opacity: 0,
      pointerEvents: 'none'
    })
  }

  showCaptcha = () => {
    this.sendButton.disabled = !this.checkBox.checked

    if (this.checkBox.checked) {
      this.form.classList.add('has-captcha')

      gsap.to(this.fieldSet, {
        duration: 0.3,
        marginBottom: window.innerWidth < 768 ? '94px' : '154px',
        onComplete: () => {
          if (!this.captcha.hasChildNodes()) {
            window.grecaptcha.render(this.captcha, {
              sitekey: window.recaptchaKey,
              size: 'invisible',
              badge: 'inline',
              callback: token => {
                this.formData.captcha = token
                this.sendForm()
              }
            })
          }

          gsap.to(this.captcha, {
            duration: 0.3,
            height: 'auto'
          })
        }
      })
    }
  }

  sendForm = () => {
    this.lockForm()
    this.pagination.loader.play()

    axios({
      method: 'post',
      url: window.apiUrl,
      config: {
        headers: {
          'Content-Type': 'application/json',
          'cache-control': 'no-cache'
        }
      },
      data: this.formData
    })
      .then(() => {
        this.pagination.loader.stop()
        this.showResult()
        this.unlockForm()
      })
      .catch(err => {
        this.validator.addError(err)
        this.pagination.loader.stop()
        this.unlockForm()

        // console.log(err)
        // this.pagination.loader.stop()
        // this.showResult()
        // this.unlockForm()
      })
  }

  lockForm = () => {
    this.form.classList.add('is-submitted')
    this.sendButton.disabled = true
  }

  unlockForm = () => {
    this.form.classList.remove('is-submitted')
    this.sendButton.disabled = false
  }

  showResult = () => {
    gsap.to([this.toHideOnResult], {
      duration: 0.3,
      opacity: 0,
      pointerEvents: 'none'
    })

    gsap
      .to(this.result, {
        duration: 0.3,
        y: 0,
        opacity: 1,
        pointerEvents: 'all'
      })
      .then(() => {
        if (this.onResultCallback !== null) {
          this.onResultCallback()
        }
      })
  }

  hideResult = () => {
    gsap.set([this.toHideOnResult], {
      clearProps: 'all'
    })

    gsap.set(this.result, {
      clearProps: 'all'
    })
  }

  get errorMessage() {
    return this.formErrorMessage.innerHTML
  }

  set errorMessage(message) {
    this.formErrorMessage.innerHTML = message
  }
}
