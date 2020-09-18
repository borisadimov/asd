(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Editorial"],{

/***/ "./src/scripts/components/Form/Pagination.js":
/*!***************************************************!*\
  !*** ./src/scripts/components/Form/Pagination.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");



var Pagination = function Pagination(_ref) {
  var _this = this;

  var _ref$currentStep = _ref.currentStep,
      _currentStep = _ref$currentStep === void 0 ? 0 : _ref$currentStep,
      onClick = _ref.onClick;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Pagination);

  this.update = function (_ref2) {
    var oldStep = _ref2.oldStep,
        currentStep = _ref2.currentStep;

    if (oldStep >= 0) {
      var oldActive = _this.paginationText[oldStep];
      var oldOpen = _this.paginationText[oldStep + 1];
      var current = _this.paginationText[currentStep];
      var next = _this.paginationText[currentStep + 1];
      oldActive.parentNode.classList.remove('is-active');
      current.parentNode.classList.add('is-active');

      if (oldOpen) {
        gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(oldOpen, {
          duration: 0.3,
          width: 0
        });
      }

      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(next, {
        duration: 0.3,
        width: window.innerWidth < 768 ? 0 : 'auto'
      });
    } else {
      var prev = _this.paginationText[currentStep - 1];
      var _current = _this.paginationText[currentStep];
      var _next2 = _this.paginationText[currentStep + 1];
      prev.parentNode.classList.remove('is-active');

      _current.parentNode.classList.add('is-active');

      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(_current, {
        duration: 0.3,
        width: 0
      });

      if (_next2) {
        gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(_next2, {
          duration: 0.3,
          width: window.innerWidth < 768 ? 0 : 'auto'
        });
      }
    }
  };

  this.onClick = onClick;
  this.paginationText = document.querySelectorAll('.js-form-pagination-text');
  this.paginationDot = Object.values(document.querySelectorAll('.js-form-pagination-dot'));
  this.paginationDot.map(function (dot, index) {
    dot.addEventListener('click', function () {
      _this.onClick(index);
    });
  });
  var _next = this.paginationText[_currentStep + 1];
  gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(_next, {
    width: window.innerWidth < 768 ? 0 : 'auto'
  });
  this.loader = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({
    paused: true,
    repeat: -1,
    yoyo: false
  });
  this.loader.to(this.paginationDot, {
    duration: 0.3,
    stagger: 0.1,
    opacity: 1,
    clearProps: 'all'
  }).to(this.paginationDot, {
    duration: 0.3,
    stagger: 0.1,
    opacity: 0.2,
    clearProps: 'all'
  });

  this.loader.stop = function () {
    _this.loader.pause();

    _this.loader.seek(0);

    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(_this.paginationDot, {
      opacity: 1
    });
  };

  return this;
};



/***/ }),

/***/ "./src/scripts/components/Form/Steps.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/Form/Steps.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Steps; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


var Steps = function Steps(_ref) {
  var app = _ref.app;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Steps);

  return [{
    field: 'name',
    type: 'text',
    check: function check() {
      return app.validator.checkName();
    },
    errors: {
      required: 'Il campo nome è un campo obbligatorio'
    }
  }, {
    field: 'email',
    type: 'email',
    check: function check() {
      return app.validator.checkEmail();
    },
    errors: {
      required: 'Il campo email è un campo obbligatorio',
      invalid: 'Inserisci un indirizzo email valido'
    }
  }, {
    field: 'phone',
    type: 'tel',
    check: function check() {
      return app.validator.checkPhone();
    },
    errors: {
      required: 'Il campo telefono è un campo obbligatorio',
      invalid: 'Inserisci un numero di telefono valido'
    }
  }, {
    field: 'message',
    type: 'textarea',
    check: function check() {
      return app.validator.checkMessage();
    },
    errors: {
      required: 'Il campo messaggio è un campo obbligatorio'
    }
  }, {
    field: 'privacy',
    type: 'checkbox',
    check: function check() {
      return app.validator.checkLastStep();
    },
    errors: {
      required: 'Il campo privacy è un campo obbligatorio'
    }
  }];
};



/***/ }),

/***/ "./src/scripts/components/Form/Validator.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/Form/Validator.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Validator; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ciffi_js_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ciffi-js/form */ "./node_modules/@ciffi-js/form/Form.js");
/* harmony import */ var _ciffi_js_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ciffi_js_form__WEBPACK_IMPORTED_MODULE_1__);



var Validator = function Validator(_ref) {
  var _this = this;

  var app = _ref.app;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Validator);

  this.addError = function (message) {
    _this.app.form.classList.add(_this.app.errorClassName);

    _this.app.errorMessage = message;
  };

  this.removeError = function () {
    _this.app.form.classList.remove(_this.app.errorClassName);
  };

  this.checkRequired = function (value) {
    if (!value || value === '') {
      _this.addError(_this.app.steps[_this.app.currentStep].errors.required);

      return false;
    }

    return true;
  };

  this.checkName = function () {
    var value = _this.app.input.value;

    if (!_this.checkRequired(value)) {
      return false;
    }

    return value;
  };

  this.checkEmail = function () {
    var value = _this.app.input.value;

    if (!_this.checkRequired(value)) {
      return false;
    }

    if (!Object(_ciffi_js_form__WEBPACK_IMPORTED_MODULE_1__["validateEmail"])(value)) {
      _this.addError(_this.app.steps[_this.app.currentStep].errors.invalid);

      return false;
    }

    return value;
  };

  this.checkPhone = function () {
    var value = _this.app.input.value;

    if (!value || value === '') {
      return '';
    } // if (!validatePhone(value)) {


    if (!_this.__validatePhone(value)) {
      _this.addError(_this.app.steps[_this.app.currentStep].errors.invalid);

      return false;
    }

    return value;
  };

  this.checkMessage = function () {
    var value = _this.app.textarea.value;

    if (!_this.checkRequired(value)) {
      return false;
    }

    return value;
  };

  this.checkLastStep = function () {
    var checked = _this.app.checkBox.checked;

    if (!checked) {
      _this.addError(_this.app.steps[_this.app.currentStep].errors.required);
    }

    return checked ? '1' : true;
  };

  this.watchPhoneChange = function () {
    var input = _this.app.input;
    var value = input.value;
    var limit = 12;
    var maxLength = limit;

    if (value.substr(0, 1) === '+') {
      value = value.substr(1, value.length);
      value = value.replace(/\s+/g, '-').replace(/[^0-9-]/g, '').replace(/-+/g, '');
      value = '+' + value.substr(0, value.length);
      maxLength = limit + 3;
    } else {
      value = value.replace(/\s+/g, '-').replace(/[^0-9-]/g, '').replace(/-+/g, '');
      value = value.substr(0, value.length);
    }

    value = value.length <= maxLength ? value : value.substr(0, maxLength);
    input.value = value;
  };

  this.__validatePhone = function (number) {
    var result = number.length > 6;

    if (number.substr(0, 1) !== '+' && parseInt(number.substr(0, 1)) !== 3 && parseInt(number.substr(0, 1)) !== 0) {
      result = false;
    }

    return result;
  };

  this.app = app;
  return this;
};



/***/ }),

/***/ "./src/scripts/components/Form/index.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/Form/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pagination */ "./src/scripts/components/Form/Pagination.js");
/* harmony import */ var _Validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Validator */ "./src/scripts/components/Form/Validator.js");
/* harmony import */ var _Steps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Steps */ "./src/scripts/components/Form/Steps.js");
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/store */ "./src/scripts/modules/store.js");









var Form = /*#__PURE__*/function () {
  function Form(_ref) {
    var _this = this;

    var onResultCallback = _ref.onResultCallback;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Form);

    this.reset = function () {
      Object.keys(_this.formData).map(function (item) {
        delete _this.formData[item];
      });
      var selectedStep = _this.currentStep;
      setTimeout(function () {
        _this.textarea.value = '';
        _this.checkBox.checked = false;

        _this.form.classList.remove('is-submitted');

        _this.form.classList.remove('has-textarea');

        _this.form.classList.remove('is-last-step');

        _this.form.classList.add('has-captcha');

        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(_this.captcha, {
          clearProps: 'all'
        });
        _this.sendButton.disabled = !_this.checkBox.checked;
        window.grecaptcha.reset();

        _this.hideLastStep();

        _this.hideResult();

        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(_this.fieldSet, {
          marginBottom: window.innerWidth < 768 ? '94px' : '154px'
        });

        _this.validator.removeError();

        if (selectedStep !== 0) {
          _this.pagination.update({
            oldStep: selectedStep,
            currentStep: 0
          });
        }

        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(_this.labels, {
          clearProps: 'all'
        });
      }, 300);
      var oldStep = _this.currentStep;
      _this.currentStep = 0;

      _this.transformInput(oldStep);
    };

    this.checkForm = function () {
      var step = _this.steps[_this.currentStep];
      var value = step.check();

      if (value === false) {
        return;
      }

      _this.formData[step.field] = value;

      if (_this.currentStep === _this.steps.length - 1) {
        return window.grecaptcha.execute();
      }

      _this.currentStep = _this.currentStep + 1;

      _this.transformInput();
    };

    this.addListeners = function () {
      _this.form.addEventListener('submit', function (e) {
        e.preventDefault();

        _this.checkForm();

        return false;
      });

      var events = ['focus', 'input', 'change'];
      var elements = [_this.input, _this.textarea, _this.checkBox];
      elements.map(function (element) {
        return events.map(function (event) {
          return element.addEventListener(event, _this.validator.removeError);
        });
      });

      _this.checkBox.addEventListener('change', function () {
        _this.showCaptcha();
      });
    };

    this.transformInput = function (oldStep) {
      var step = _this.steps[_this.currentStep];
      var size = window.innerWidth < 768 ? 34 : 38;
      var y = "".concat(_this.currentStep * -size, "px");
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(_this.labels, {
        duration: 0.3,
        y: y
      });
      _this.input.value = _this.formData[step.field] || '';

      _this.input.blur();

      if (step.type === 'checkbox') {
        _this.pagination.update({
          oldStep: oldStep,
          currentStep: _this.currentStep
        });

        return _this.showLastStep();
      }

      if (oldStep === _this.steps.length - 1) {
        _this.hideLastStep();
      }

      _this.input.type = step.type;

      _this.pagination.update({
        oldStep: oldStep,
        currentStep: _this.currentStep
      });

      if (step.type === 'tel') {
        _this.input.addEventListener('input', _this.validator.watchPhoneChange);
      } else {
        _this.input.removeEventListener('input', _this.validator.watchPhoneChange);
      }

      if (step.type === 'textarea') {
        _this.textarea.focus();

        _this.form.classList.add('has-textarea');
      } else {
        _this.input.focus();

        _this.form.classList.remove('has-textarea');
      }

      if (_this.currentStep == 0) {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to('.js-form-advice', {
          duration: 0.4,
          opacity: 1,
          y: 0,
          onStart: function onStart() {
            document.querySelector('.js-form-advice').style.display = 'block';
          }
        });
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to('.js-form-advice', {
          duration: 0.4,
          opacity: 0,
          y: 20
        }).then(function () {
          document.querySelector('.js-form-advice').style.display = 'none';
        });
      }
    };

    this.showLastStep = function () {
      _this.form.classList.add('is-last-step');

      var _fieldsetMarginBottom = '94px';

      if (_this.form.classList.contains('has-captcha')) {
        _fieldsetMarginBottom = '154px';
      }

      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(_this.fieldSet, {
        duration: 0.3,
        marginBottom: _fieldsetMarginBottom
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(_this.inputs, {
        duration: 0.3,
        y: '-10px',
        opacity: 0,
        pointerEvents: 'none'
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(_this.lastStep, {
        duration: 0.3,
        y: _modules_store__WEBPACK_IMPORTED_MODULE_7__["default"].isMobile ? '-160px' : '-150px',
        opacity: 1,
        pointerEvents: 'all'
      });
    };

    this.hideLastStep = function () {
      _this.form.classList.remove('is-last-step');

      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(_this.fieldSet, {
        duration: 0.3,
        marginBottom: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(_this.inputs, {
        duration: 0.3,
        y: 0,
        opacity: 1,
        pointerEvents: 'all'
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(_this.lastStep, {
        duration: 0.3,
        y: 0,
        opacity: 0,
        pointerEvents: 'none'
      });
    };

    this.showCaptcha = function () {
      _this.sendButton.disabled = !_this.checkBox.checked;

      if (_this.checkBox.checked) {
        _this.form.classList.add('has-captcha');

        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(_this.fieldSet, {
          duration: 0.3,
          marginBottom: window.innerWidth < 768 ? '94px' : '154px',
          onComplete: function onComplete() {
            if (!_this.captcha.hasChildNodes()) {
              window.grecaptcha.render(_this.captcha, {
                sitekey: window.recaptchaKey,
                size: 'invisible',
                badge: 'inline',
                callback: function callback(token) {
                  _this.formData.captcha = token;

                  _this.sendForm();
                }
              });
            }

            gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(_this.captcha, {
              duration: 0.3,
              height: 'auto'
            });
          }
        });
      }
    };

    this.sendForm = function () {
      _this.lockForm();

      _this.pagination.loader.play();

      axios__WEBPACK_IMPORTED_MODULE_3___default()({
        method: 'post',
        url: window.apiUrl,
        config: {
          headers: {
            'Content-Type': 'application/json',
            'cache-control': 'no-cache'
          }
        },
        data: _this.formData
      }).then(function () {
        _this.pagination.loader.stop();

        _this.showResult();

        _this.unlockForm();
      })["catch"](function (err) {
        _this.validator.addError(err);

        _this.pagination.loader.stop();

        _this.unlockForm(); // console.log(err)
        // this.pagination.loader.stop()
        // this.showResult()
        // this.unlockForm()

      });
    };

    this.lockForm = function () {
      _this.form.classList.add('is-submitted');

      _this.sendButton.disabled = true;
    };

    this.unlockForm = function () {
      _this.form.classList.remove('is-submitted');

      _this.sendButton.disabled = false;
    };

    this.showResult = function () {
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to([_this.toHideOnResult], {
        duration: 0.3,
        opacity: 0,
        pointerEvents: 'none'
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(_this.result, {
        duration: 0.3,
        y: 0,
        opacity: 1,
        pointerEvents: 'all'
      }).then(function () {
        if (_this.onResultCallback !== null) {
          _this.onResultCallback();
        }
      });
    };

    this.hideResult = function () {
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set([_this.toHideOnResult], {
        clearProps: 'all'
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(_this.result, {
        clearProps: 'all'
      });
    };

    this.form = document.querySelector('.js-form');
    this.input = this.form.querySelector('input');
    this.textarea = this.form.querySelector('textarea');
    this.checkBox = this.form.querySelector('input[type="checkbox"]');
    this.formErrorMessage = this.form.querySelector('.js-form-error-message');
    this.labels = this.form.querySelector('.js-form-labels');
    this.fieldSet = this.form.querySelector('.js-form-fieldset');
    this.inputs = this.form.querySelector('.js-form-inputs');
    this.lastStep = this.form.querySelector('.js-form-last-step');
    this.captcha = this.form.querySelector('.js-captcha');
    this.sendButton = this.form.querySelector('.js-form-send');
    this.result = this.form.querySelector('.js-form-result');
    this.toHideOnResult = this.form.querySelectorAll('.js-form-to-hide-on-result');
    this.errorClassName = 'has-error';
    this.formData = {};
    this.currentStep = 0;
    this.onResultCallback = onResultCallback;
    this.steps = new _Steps__WEBPACK_IMPORTED_MODULE_6__["default"]({
      app: this
    });
    this.validator = new _Validator__WEBPACK_IMPORTED_MODULE_5__["default"]({
      app: this
    });
    this.pagination = new _Pagination__WEBPACK_IMPORTED_MODULE_4__["default"]({
      onClick: function onClick(newStep) {
        var oldStep = _this.currentStep;

        if (newStep < oldStep) {
          _this.currentStep = newStep;

          _this.transformInput(oldStep);
        } else if (newStep > oldStep) {
          _this.checkForm();
        }
      }
    });
    this.addListeners();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Form, [{
    key: "isLastStep",
    get: function get() {
      return this.form.classList.contains('is-last-step');
    }
  }, {
    key: "errorMessage",
    get: function get() {
      return this.formErrorMessage.innerHTML;
    },
    set: function set(message) {
      this.formErrorMessage.innerHTML = message;
    }
  }]);

  return Form;
}();



/***/ }),

/***/ "./src/scripts/components/header/Logo/Logo.js":
/*!****************************************************!*\
  !*** ./src/scripts/components/header/Logo/Logo.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _modules_animationSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/animationSettings */ "./src/scripts/modules/animationSettings.js");




var Logo = function Logo(_ref) {
  var _this = this;

  var onClick = _ref.onClick;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Logo);

  this.show = function () {
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(_this.domElement, {
      duration: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_2__["Duration"].introDuration,
      opacity: 1,
      x: 122,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_2__["Ease"].power3InOut
    });
  };

  this.hide = function () {
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(_this.domElement, {
      duration: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_2__["Duration"].introDuration,
      opacity: 0,
      x: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_2__["Ease"].power3InOut
    });
  };

  this.visible = function (flag) {
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(_this.domElement, {
      duration: 0.35,
      opacity: flag ? 1 : 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_2__["Ease"].power3InOut
    });
  };

  this.domElement = document.querySelector('.js-logo');
  this.domElement.addEventListener('click', onClick);
};



/***/ }),

/***/ "./src/scripts/controllers/Page.js":
/*!*****************************************!*\
  !*** ./src/scripts/controllers/Page.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Page = /*#__PURE__*/function () {
  function Page() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Page);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Page, null, [{
    key: "init",
    value: function init(props) {
      console.log(props);
    }
  }]);

  return Page;
}();



/***/ }),

/***/ "./src/scripts/controllers/pages/Editorial.js":
/*!****************************************************!*\
  !*** ./src/scripts/controllers/pages/Editorial.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Editorial; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Page */ "./src/scripts/controllers/Page.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Form */ "./src/scripts/components/Form/index.js");
/* harmony import */ var _components_header_Logo_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/header/Logo/Logo */ "./src/scripts/components/header/Logo/Logo.js");









var Editorial = /*#__PURE__*/function (_Page) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Editorial, _Page);

  function Editorial() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Editorial);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Editorial).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Editorial, null, [{
    key: "init",
    value: function init() {
      var _this = this;

      document.body.style.backgroundColor = 'white';
      document.body.classList.add('is-scollable');
      this.headerLogo = new _components_header_Logo_Logo__WEBPACK_IMPORTED_MODULE_7__["default"]({
        onClick: function onClick() {
          return window.location.href = '/';
        }
      });
      document.body.classList.add('app-is-ready', 'is-white');
      this.headerLogo.show(); // this.menu.show()

      if (!document.querySelector('.js-tab')) {
        new _components_Form__WEBPACK_IMPORTED_MODULE_6__["default"]();
        return;
      }

      this.setActive(window.location.hash);
      window.addEventListener('resize', function () {
        var height = document.querySelector('.js-tab-content .is-active').clientHeight;
        document.querySelector('.js-tab-content').style.height = "".concat(height, "px");
      });
      Object.values(document.querySelectorAll('.js-tab [href]')).map(function (item) {
        item.addEventListener('click', function () {
          var hash = item.getAttribute('href');

          _this.setActive(hash);
        });
      });
    }
  }]);

  return Editorial;
}(_Page__WEBPACK_IMPORTED_MODULE_5__["default"]);

Editorial.setActive = function (hash) {
  if (hash === '') {
    var _height = document.querySelector('.js-tab-content .is-active').clientHeight;
    document.querySelector('.js-tab-content').style.height = "".concat(_height, "px");
    return;
  }

  document.querySelector('.js-tab .is-active').classList.remove('is-active');
  document.querySelector(".js-tab [href=\"".concat(hash, "\"]")).parentNode.classList.add('is-active');
  document.querySelector('.js-tab-content .is-active').classList.remove('is-active');
  document.querySelector(".js-tab-content [data-tab=\"".concat(hash, "\"]")).classList.add('is-active');
  var height = document.querySelector('.js-tab-content .is-active').clientHeight;
  document.querySelector('.js-tab-content').style.height = "".concat(height, "px");
};



/***/ }),

/***/ "./src/scripts/controllers/pages/Privacy.js":
/*!**************************************************!*\
  !*** ./src/scripts/controllers/pages/Privacy.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Privacy; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Page */ "./src/scripts/controllers/Page.js");







var Privacy = /*#__PURE__*/function (_Page) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Privacy, _Page);

  function Privacy() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Privacy);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Privacy).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Privacy, null, [{
    key: "init",
    value: function init() {
      console.log('privacy page');
    }
  }]);

  return Privacy;
}(_Page__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/scripts/modules/animationSettings.js":
/*!**************************************************!*\
  !*** ./src/scripts/modules/animationSettings.js ***!
  \**************************************************/
/*! exports provided: Ease, Duration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return Ease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Duration", function() { return Duration; });
var Ease = {
  power3InOut: 'power3.inOut',
  power3Out: 'power3.out'
};
var Duration = {
  introDuration: 0.4,
  changeSectionDuration: 0.3
};

/***/ }),

/***/ "./src/scripts/modules/store.js":
/*!**************************************!*\
  !*** ./src/scripts/modules/store.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_0__);
// import * as dat from 'dat.gui'

var store = {
  // sections
  selectedSetionIndex: null,
  selectedSection: null,
  sections: [],
  isBlobVisible: false,
  // dom
  contentDomElement: document.querySelector('.js-content'),
  // gui: new dat.GUI({ name: 'My GUI' }),
  browser: bowser__WEBPACK_IMPORTED_MODULE_0___default.a.getParser(window.navigator.userAgent),

  get isMobile() {
    var _isMobile = false;

    switch (bowser__WEBPACK_IMPORTED_MODULE_0___default.a.getParser(window.navigator.userAgent).parsedResult.platform.type) {
      case 'mobile':
        _isMobile = true;
        break;

      case 'tablet':
        // TODO: CALCOLARE L'ORIENTATION
        _isMobile = false;
        break;

      default:
        _isMobile = false;
        break;
    }

    return 'ontouchstart' in window && _isMobile;
  },

  get isTablet() {
    return 'ontouchstart' in window && bowser__WEBPACK_IMPORTED_MODULE_0___default.a.getParser(window.navigator.userAgent).parsedResult.platform.type == 'tablet';
  },

  get isMobileOrTablet() {
    return this.isMobile || this.isTablet || this.hasTouch;
  },

  get isMobileOrTabletLandscape() {
    return this.isMobile || this.isTablet && this.isLandscape || this.hasTouch && this.isLandscape;
  },

  get isMobileOrTabletPortrait() {
    return this.isMobile || this.isTablet && this.isPortrait || this.hasTouch && this.isPortrait;
  },

  get isLandscape() {
    var _isAndroid = screen.orientation;
    var _isLandscape = false;

    if (_isAndroid) {
      _isLandscape = screen.orientation.angle !== 0;
    } else if (typeof window.orientation !== 'undefined') {
      _isLandscape = window.orientation == 90 || window.orientation == -90;
    }

    return _isLandscape;
  },

  get isPortrait() {
    var _isAndroid = screen.orientation;
    var _isPortrait = false;

    if (_isAndroid) {
      _isPortrait = screen.orientation.angle == 0;
    } else if (typeof window.orientation !== 'undefined') {
      _isPortrait = window.orientation !== 90 && window.orientation !== -90;
    }

    return _isPortrait;
  },

  get hasTouch() {
    return 'ontouchstart' in window;
  },

  get isSafariMobile() {
    var browser = bowser__WEBPACK_IMPORTED_MODULE_0___default.a.getParser(window.navigator.userAgent);
    return browser.parsedResult.os.name.toLowerCase() == 'ios' && browser.parsedResult.browser.name.toLowerCase() == 'safari';
  },

  getSectionById: function getSectionById(id) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = store.sections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var section = _step.value;

        if (section.id == id) {
          return section;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return null;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ })

}]);
//# sourceMappingURL=Editorial.js.map