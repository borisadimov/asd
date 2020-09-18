export default class Steps {
  constructor({ app }) {
    return [
      {
        field: 'name',
        type: 'text',
        check: () => app.validator.checkName(),
        errors: {
          required: 'Il campo nome è un campo obbligatorio'
        }
      },
      {
        field: 'email',
        type: 'email',
        check: () => app.validator.checkEmail(),
        errors: {
          required: 'Il campo email è un campo obbligatorio',
          invalid: 'Inserisci un indirizzo email valido'
        }
      },
      {
        field: 'phone',
        type: 'tel',
        check: () => app.validator.checkPhone(),
        errors: {
          required: 'Il campo telefono è un campo obbligatorio',
          invalid: 'Inserisci un numero di telefono valido'
        }
      },
      {
        field: 'message',
        type: 'textarea',
        check: () => app.validator.checkMessage(),
        errors: {
          required: 'Il campo messaggio è un campo obbligatorio'
        }
      },
      {
        field: 'privacy',
        type: 'checkbox',
        check: () => app.validator.checkLastStep(),
        errors: {
          required: 'Il campo privacy è un campo obbligatorio'
        }
      }
    ]
  }
}
