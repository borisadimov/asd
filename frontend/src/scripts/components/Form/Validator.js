import { validateEmail } from '@ciffi-js/form'

export default class Validator {
  constructor({ app }) {
    this.app = app
    return this
  }

  addError = message => {
    this.app.form.classList.add(this.app.errorClassName)
    this.app.errorMessage = message
  }

  removeError = () => {
    this.app.form.classList.remove(this.app.errorClassName)
  }

  checkRequired = value => {
    if (!value || value === '') {
      this.addError(this.app.steps[this.app.currentStep].errors.required)
      return false
    }

    return true
  }

  checkName = () => {
    const { value } = this.app.input

    if (!this.checkRequired(value)) {
      return false
    }

    return value
  }

  checkEmail = () => {
    const { value } = this.app.input

    if (!this.checkRequired(value)) {
      return false
    }

    if (!validateEmail(value)) {
      this.addError(this.app.steps[this.app.currentStep].errors.invalid)
      return false
    }

    return value
  }

  checkPhone = () => {
    const { value } = this.app.input

    if (!value || value === '') {
      return ''
    }

    // if (!validatePhone(value)) {
    if (!this.__validatePhone(value)) {
      this.addError(this.app.steps[this.app.currentStep].errors.invalid)
      return false
    }

    return value
  }

  checkMessage = () => {
    const { value } = this.app.textarea

    if (!this.checkRequired(value)) {
      return false
    }

    return value
  }

  checkLastStep = () => {
    const checked = this.app.checkBox.checked
    if (!checked) {
      this.addError(this.app.steps[this.app.currentStep].errors.required)
    }
    return checked ? '1' : true
  }

  watchPhoneChange = () => {
    const { input } = this.app
    let value = input.value
    const limit = 12
    let maxLength = limit

    if (value.substr(0, 1) === '+') {
      value = value.substr(1, value.length)
      value = value
        .replace(/\s+/g, '-')
        .replace(/[^0-9-]/g, '')
        .replace(/-+/g, '')
      value = '+' + value.substr(0, value.length)
      maxLength = limit + 3
    } else {
      value = value
        .replace(/\s+/g, '-')
        .replace(/[^0-9-]/g, '')
        .replace(/-+/g, '')
      value = value.substr(0, value.length)
    }

    value = value.length <= maxLength ? value : value.substr(0, maxLength)

    input.value = value
  }

  __validatePhone = number => {
    let result = number.length > 6

    if (
      number.substr(0, 1) !== '+' &&
      parseInt(number.substr(0, 1)) !== 3 &&
      parseInt(number.substr(0, 1)) !== 0
    ) {
      result = false
    }

    return result
  }
}
