(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home"],{

/***/ "./src/config/SectionSettings.js":
/*!***************************************!*\
  !*** ./src/config/SectionSettings.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SectionSettings = {
  sections: [{
    id: 'play',
    title: 'PLAY',
    titleStyle: 'vertical',
    theme: 'black',
    titlePosition: 'back',
    hasPagination: false
  }, {
    id: 'study',
    title: 'STUDY',
    titleStyle: 'horizontal',
    theme: 'white',
    titlePosition: 'front',
    hasPagination: true,
    animReversable: true,
    background1Animation: {
      desktop: {
        x: -75,
        y: -317,
        rotation: 60,
        scale: 1,
        opacity: 0.5
      },
      mobile: {
        x: -138,
        y: 25,
        rotation: -30,
        scale: 0.54,
        opacity: 0.5
      }
    },
    background2Animation: {
      desktop: {
        x: -106,
        y: 422,
        rotation: -60,
        scale: 1,
        opacity: 0.5
      },
      mobile: {
        x: 195,
        y: 193,
        rotation: 30,
        scale: 0.54,
        opacity: 0.5
      }
    }
  }, {
    id: 'think',
    title: 'THINK',
    titleStyle: 'horizontal',
    theme: 'white',
    titlePosition: 'front',
    hasPagination: true,
    animReversable: true,
    background1Animation: {
      desktop: {
        x: 190,
        y: -362,
        rotation: -90,
        scale: 1,
        opacity: 0.5
      },
      mobile: {
        x: -210,
        y: -60,
        rotation: 90,
        scale: 0.68,
        opacity: 0.5
      }
    },
    background2Animation: {
      desktop: {
        x: -134,
        y: 298,
        rotation: 90,
        scale: 0.54,
        opacity: 0.5
      },
      mobile: {
        x: -47,
        y: 185,
        rotation: 90,
        scale: 0.6,
        opacity: 0.5
      }
    }
  }, {
    id: 'move',
    title: 'MOVE',
    titleStyle: 'horizontal',
    theme: 'white',
    titlePosition: 'front',
    hasPagination: true,
    animReversable: false,
    background1Animation: {
      desktop: {
        x: -497,
        y: 430,
        rotation: 0,
        scale: 1,
        opacity: 0.5
      },
      mobile: {
        x: -231,
        y: 212,
        rotation: 0,
        scale: 0.47,
        opacity: 0.5
      }
    },
    background2Animation: {
      desktop: {
        x: 492,
        y: -450,
        rotation: 180,
        scale: 0.88,
        opacity: 0.5
      },
      mobile: {
        x: 289,
        y: -339,
        rotation: 180,
        scale: 0.47,
        opacity: 0.5
      }
    },
    background1ExitAnimation: {
      desktop: {
        x: 462,
        y: -440,
        rotation: 0,
        scale: 1,
        opacity: 0.5
      },
      mobile: {
        x: 280,
        y: -345,
        rotation: 0,
        scale: 0.47,
        opacity: 0.5
      }
    },
    background2ExitAnimation: {
      desktop: {
        x: -334,
        y: 392,
        rotation: 180,
        scale: 0.88,
        opacity: 0.5
      },
      mobile: {
        x: -210,
        y: 185,
        rotation: 180,
        scale: 0.47,
        opacity: 0.5
      }
    }
  }, {
    id: 'connect',
    title: 'CONNECT',
    titleStyle: 'horizontal',
    theme: 'white',
    titlePosition: 'front',
    hasPagination: true,
    animReversable: true,
    background1Animation: {
      desktop: {
        x: 42,
        y: -365,
        rotation: -30,
        scale: 0.54,
        opacity: 0.5
      },
      mobile: {
        x: -228,
        y: 25,
        rotation: 0,
        scale: 0.57,
        opacity: 0.5
      }
    },
    background2Animation: {
      desktop: {
        x: -50,
        y: 383,
        rotation: -30,
        scale: 0.54,
        opacity: 0.5
      },
      mobile: {
        x: 230,
        y: -60,
        rotation: 0,
        scale: 0.6,
        opacity: 0.5
      }
    }
  }, {
    id: 'contact',
    title: 'CONTACT',
    titleStyle: 'horizontal',
    theme: 'white',
    titlePosition: 'back',
    hasPagination: false
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (SectionSettings);

/***/ }),

/***/ "./src/scripts/components/Background.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/Background.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Background; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _modules_animationSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/animationSettings */ "./src/scripts/modules/animationSettings.js");




var Background = function Background() {
  var _this = this;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Background);

  this.black = function () {
    document.body.classList.remove('is-white');
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(_this.domElement, {
      duration: 0.4,
      backgroundColor: '#000',
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_2__["Ease"].power3InOut
    });
  };

  this.white = function () {
    document.body.classList.add('is-white');
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(_this.domElement, {
      duration: 0.4,
      backgroundColor: '#fff',
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_2__["Ease"].power3InOut
    });
  };

  this.domElement = document.querySelector('body');
};



/***/ }),

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

/***/ "./src/scripts/components/RotateDevice.js":
/*!************************************************!*\
  !*** ./src/scripts/components/RotateDevice.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RotateDevice; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/store */ "./src/scripts/modules/store.js");



var RotateDevice = function RotateDevice() {
  var _this = this;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RotateDevice);

  this.checkOrientation = function () {
    var _isAndroid = screen.orientation;
    var _isLandscape = false;

    if (_isAndroid) {
      _isLandscape = screen.orientation.angle !== 0;
    } else if (typeof window.orientation !== 'undefined') {
      _isLandscape = window.orientation == 90 || window.orientation == -90;
    }

    if (_isLandscape) {
      _this.show();
    } else {
      _this.hide();
    }
  };

  this.show = function () {
    _this.domElement.classList.add('is-visible');
  };

  this.hide = function () {
    _this.domElement.classList.remove('is-visible');
  };

  this.domElement = document.querySelector('.js-rotate');

  if (_modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile) {
    window.addEventListener('orientationchange', this.checkOrientation);
    this.checkOrientation();
  }
};



/***/ }),

/***/ "./src/scripts/components/Slider.js":
/*!******************************************!*\
  !*** ./src/scripts/components/Slider.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/store */ "./src/scripts/modules/store.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_WheelManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/WheelManager */ "./src/scripts/modules/WheelManager.js");





var Slider = function Slider(prop) {
  var _this = this;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Slider);

  this.initEventListeners = function () {
    if (_modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].hasTouch) {
      _this.touchGesture.on('swipe', _this.__manageEvent);
    } else {
      _this.wheelManager.initEventListener();
    }

    window.addEventListener('keyup', _this.__manageKeyEvent);
  };

  this.removeEventListeners = function () {
    if (_modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].hasTouch) {
      _this.touchGesture.off('swipe', _this.__manageEvent);
    }

    window.removeEventListener('keyup', _this.__manageKeyEvent);
  };

  this.__manageKeyEvent = function (e) {
    switch (e.code) {
      case 'ArrowDown':
      case 'ArrowRight':
        _this.__manageEvent(e, 'down');

        break;

      case 'ArrowUp':
      case 'ArrowLeft':
        _this.__manageEvent(e, 'up');

        break;
    }
  };

  this.__manageEvent = function (e, forcedDirection) {
    if (!document.body.classList.contains('has-menu')) {
      _this.__slideTo(e, forcedDirection);
    }
  };

  this.__getDirection = function (e) {
    if (_modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].hasTouch) {
      return e.direction === 16 ? 'up' : 'down';
    }

    return e.deltaY < 0 ? 'up' : 'down';
  };

  this.__slideTo = function (e, forcedDirection) {
    var direction = forcedDirection ? forcedDirection : _this.__getDirection(e);
    var nextSection = null;

    if (direction == 'down') {
      nextSection = _modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].selectedSection.nextSection;
    } else if (direction == 'up') {
      nextSection = _modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].selectedSection.prevSection;
    } // if there's a next section navigato to it
    // if not, reactivate the mouse listeners


    if (_modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].selectedSection !== nextSection && nextSection !== null) {
      _this.onChange(nextSection, direction);
    }
  };

  this.onChange = prop.onChange;
  this.wheelManager = null;

  if (_modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].hasTouch) {
    this.touchGesture = new hammerjs__WEBPACK_IMPORTED_MODULE_2___default.a.Manager(document.body);
    this.touchGesture.add(new hammerjs__WEBPACK_IMPORTED_MODULE_2___default.a.Swipe({
      direction: hammerjs__WEBPACK_IMPORTED_MODULE_2___default.a.DIRECTION_VERTICAL
    }));
  } else {
    this.wheelManager = new _modules_WheelManager__WEBPACK_IMPORTED_MODULE_3__["default"]({
      onWheelStart: this.__manageEvent
    });
  }
};



/***/ }),

/***/ "./src/scripts/components/blob/Blob.js":
/*!*********************************************!*\
  !*** ./src/scripts/components/blob/Blob.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blob; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _modules_animationSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/animationSettings */ "./src/scripts/modules/animationSettings.js");
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/store */ "./src/scripts/modules/store.js");




var DELTA_X = 155;
var DELTA_Y = 70;
var DELTA_MOBILE_X = 50;
var DELTA_MOBILE_Y = 300;

var Blob = function Blob(_ref) {
  var _this = this;

  var $img = _ref.$img,
      clickCallback = _ref.clickCallback;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Blob);

  this.show = function () {
    _this.__prepareForShow();

    _this.maskAnimation.play();

    _this.imageAnimation.play();

    _this.isOpened = true;
  };

  this.hide = function () {
    if (_this.maskAnimation !== null && _this.imageAnimation !== null) {
      _this.maskAnimation.reverse();

      _this.imageAnimation.reverse();

      _this.isOpened = false;
    }
  };

  this.resize = function () {
    if (_this.isOpened) {
      var values = _this.__prepareValues({
        reset: false
      });

      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(_this.domElement, {
        x: values.position.x,
        y: values.position.y,
        scale: values.scale
      });
    }
  };

  this.__prepareForShow = function () {
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(_this.domElement, {
      clearProps: 'all'
    });
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(_this.imgElement, {
      clearProps: 'all'
    });

    var values = _this.__prepareValues({
      reset: true
    }); // animate shape


    _this.maskAnimation = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(_this.domElement, {
      duration: 0.35,
      x: values.position.x,
      y: values.position.y,
      scale: values.scale,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_2__["Ease"].power3InOut
    }); // animate content image

    _this.imageAnimation = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(_this.imgElement, {
      duration: 0.35,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_2__["Ease"].power3InOut
    });
  };

  this.__prepareValues = function (_ref2) {
    var reset = _ref2.reset;
    var newCenter = null;

    var newPosition = _this.__getPosition();

    var deltaX = _modules_store__WEBPACK_IMPORTED_MODULE_3__["default"].isMobileOrTabletPortrait ? DELTA_MOBILE_X : DELTA_X;
    var deltaY = _modules_store__WEBPACK_IMPORTED_MODULE_3__["default"].isMobileOrTabletPortrait ? DELTA_MOBILE_Y : DELTA_Y; // if (this.isIOSChrome) {
    //   deltaX = DELTA_IOS_CHROME_X
    //   deltaY = DELTA_IOS_CHROME_Y
    // }

    if (reset) {
      if (_this.isIOSChrome) {
        newCenter = _this.__getSafariCenter();
        gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(_this.domElement, {
          transformOrigin: "".concat(newCenter.x, "px ").concat(newCenter.y, "px"),
          x: 0,
          y: 0,
          scale: 0
        });
      } else {
        // in order to avoid a transformOrigin bug on svg animations
        // we set specific values for safari/firefox or chrome
        switch (_modules_store__WEBPACK_IMPORTED_MODULE_3__["default"].browser.getBrowserName().toLowerCase()) {
          case 'firefox':
          case 'safari':
            newCenter = _this.__getSafariCenter();
            gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(_this.domElement, {
              transformOrigin: "".concat(newCenter.x, "px ").concat(newCenter.y, "px"),
              x: 0,
              y: 0,
              scale: 0
            });
            break;

          case 'chrome':
          default:
            newCenter = _this.__getCenter();
            gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(_this.domElement, {
              transformOrigin: "".concat(newCenter.x, "% ").concat(newCenter.y, "%"),
              x: newPosition.x,
              y: newPosition.y,
              scale: 0
            });
            break;
        }
      }
    }

    if (_modules_store__WEBPACK_IMPORTED_MODULE_3__["default"].isMobile && window.innerHeight <= 600) {
      deltaX += 100;
      deltaY += 20;
    }

    return {
      position: {
        x: newPosition.x + deltaX,
        y: newPosition.y + deltaY
      },
      scale: _this.__getScale()
    };
  };

  this.__getPosition = function () {
    return {
      x: (window.innerWidth - _this.domElement.getAttribute('data-original-width')) / 2,
      y: (window.innerHeight - _this.domElement.getAttribute('data-original-height')) / 2
    };
  };

  this.__getScale = function () {
    return Math.max(window.innerWidth / _this.domElement.getAttribute('data-scale-w'), window.innerHeight / _this.domElement.getAttribute('data-scale-h'));
  };

  this.__getSafariCenter = function () {
    var boundingBox = document.querySelector('.js-title-dynamic').getBoundingClientRect();
    return {
      x: boundingBox.x + boundingBox.width / 2,
      y: boundingBox.y + boundingBox.height / 2
    };
  };

  this.__getCenter = function () {
    var boundingBox = document.querySelector('.js-title-dynamic').getBoundingClientRect();
    var x = boundingBox.x + boundingBox.width / 2;
    var y = boundingBox.y + 70 / 2;
    return {
      x: (x / window.innerWidth * 100).toFixed(2),
      y: (y / window.innerHeight * 100).toFixed(2)
    };
  };

  this.domElement = document.querySelector('#blob');
  this.imgElement = $img;
  this.maskAnimation = null;
  this.imageAnimation = null;
  this.isOpened = false;
  this.isIOSChrome = false;

  if (_modules_store__WEBPACK_IMPORTED_MODULE_3__["default"].isMobile && _modules_store__WEBPACK_IMPORTED_MODULE_3__["default"].browser.parsedResult.browser.name.toLowerCase() == 'chrome') {
    this.isIOSChrome = true;
  }

  if (this.imgElement !== null) {
    this.imgElement.addEventListener('click', clickCallback);
  }
};



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

/***/ "./src/scripts/components/header/menu/Menu.js":
/*!****************************************************!*\
  !*** ./src/scripts/components/header/menu/Menu.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "./src/scripts/components/header/menu/animations.js");
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/store */ "./src/scripts/modules/store.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");





var Menu = function Menu(_ref) {
  var _this = this;

  var onClick = _ref.onClick,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Menu);

  this.initListeners = function () {
    // activare mouseover/out only on desktop
    if (!_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isMobileOrTablet) {
      _this.hamburgerParentDomElement.addEventListener('mouseenter', function () {
        _this.animationOver.play();
      });

      _this.hamburgerParentDomElement.addEventListener('mouseleave', function () {
        _this.animationOver.reverse();
      });
    }

    _this.hamburgerParentDomElement.addEventListener('click', function () {
      if (document.body.classList.contains('has-menu')) {
        _animations__WEBPACK_IMPORTED_MODULE_1__["default"].close({
          $dom: _this.nav.children,
          $hamburger: _this.hamburgerDomElement,
          $footerDom: _this.footer,
          $backgroundDom: _this.backgroundDomElement
        });

        _this.closeCallback();
      } else {
        _animations__WEBPACK_IMPORTED_MODULE_1__["default"].open({
          $dom: _this.nav.children,
          $hamburger: _this.hamburgerDomElement,
          $footerDom: _this.footer,
          $backgroundDom: _this.backgroundDomElement
        });

        _this.openCallback();
      }
    });

    window.addEventListener('keyup', function (e) {
      if (e.code === 'Escape' && document.body.classList.contains('has-menu')) {
        _this.hamburgerParentDomElement.click();
      }
    });
    Object.values(_this.nav.children).map(function (item) {
      item.addEventListener('click', _this.__onItemClick);
    });
    Object.values(_this.footerNav.querySelectorAll('a')).map(function (item) {
      item.addEventListener('click', _this.__foterItemClick);
    });
    document.querySelector('.js-main-menu-link').addEventListener('click', _this.__onItemClick);
  };

  this.show = function () {
    _animations__WEBPACK_IMPORTED_MODULE_1__["default"].show({
      $dom: _this.hamburgerDomElement
    });
  };

  this.hide = function () {
    _animations__WEBPACK_IMPORTED_MODULE_1__["default"].hide({
      $dom: _this.hamburgerDomElement
    });
  };

  this.fadeIn = function () {
    _animations__WEBPACK_IMPORTED_MODULE_1__["default"].fadeIn({
      $dom: _this.hamburgerDomElement
    });
  };

  this.fadeOut = function () {
    _animations__WEBPACK_IMPORTED_MODULE_1__["default"].fadeOut({
      $dom: _this.hamburgerDomElement
    });
  };

  this.close = function () {
    _animations__WEBPACK_IMPORTED_MODULE_1__["default"].close({
      $dom: _this.nav.children,
      $hamburger: _this.hamburgerDomElement,
      $backgroundDom: _this.backgroundDomElement
    });
  };

  this.visible = function (flag) {
    if (flag) {
      _animations__WEBPACK_IMPORTED_MODULE_1__["default"].setVisible({
        $dom: _this.hamburgerDomElement
      });
    } else {
      _animations__WEBPACK_IMPORTED_MODULE_1__["default"].setHidden({
        $dom: _this.hamburgerDomElement
      });
    }
  };

  this.selectMenuItem = function () {
    var actualItem = _this.nav.querySelector('.selected');

    var newItem = _this.nav.querySelector("[data-id=".concat(_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].selectedSection.id, "]"));

    if (actualItem) {
      actualItem.classList.remove('selected');
    }

    if (newItem) {
      _this.selectedItem = newItem;

      _this.selectedItem.classList.add('selected');
    } else {
      _this.selectedItem = null;
    }

    _this.close();
  };

  this.resize = function () {};

  this.__foterItemClick = function (event) {
    event.preventDefault();
    var dom = event.target;
    if (document.body.classList.contains('has-menu')) _this.hamburgerParentDomElement.click();
    var section = _modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].getSectionById(dom.getAttribute('data-id'));

    if (section !== null) {
      _this.clickCallback(section, 'down');
    }

    return false;
  };

  this.__onItemClick = function (event) {
    event.preventDefault();
    var dom = event.target;

    var index = _this.__getItemIndex(dom);

    var previousIndex = _this.selectedItem !== null ? _this.__getItemIndex(_this.selectedItem) : -1;
    var direction = previousIndex > index ? 'down' : 'up';
    var section = _modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].getSectionById(dom.getAttribute('data-id')); // close menu

    _this.hamburgerParentDomElement.click(); // navigate to the selected section


    if (section !== null) {
      _this.clickCallback(section, direction);
    }

    return false;
  };

  this.__getItemIndex = function ($dom) {
    return Array.from($dom.parentElement.children).indexOf($dom);
  };

  this.backgroundDomElement = document.querySelector('.js-menu-background');
  this.backgroundHoverDomElement = document.querySelector('.js-menu-over-bg');
  this.hamburgerDomElement = document.querySelector('.js-hamburger');
  this.hamburgerParentDomElement = document.querySelector('.js-hamburger').parentElement;
  this.nav = document.querySelector('.js-main-menu');
  this.footerNav = document.querySelector('.js-main-menu-footer');
  this.footer = document.querySelector('.js-menu-footer');
  this.clickCallback = onClick;
  this.openCallback = onOpen;
  this.closeCallback = onClose;
  this.selectedItem = null; // setup menu animation

  gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(this.backgroundDomElement, {
    transformOrigin: '50% 50%',
    x: 130,
    y: -130,
    scale: 0,
    display: 'block'
  });
  gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(this.backgroundHoverDomElement, {
    transformOrigin: '50% 50%',
    x: 130,
    y: -130,
    scale: 0,
    display: 'block'
  });
  this.animationOver = _animations__WEBPACK_IMPORTED_MODULE_1__["default"].mouseOver({
    $dom: this.backgroundHoverDomElement
  });
  this.initListeners(); // fix for smaller devices

  if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isMobile && window.innerHeight <= 600) {
    this.footer.style.bottom = 'calc(50vh + 38px)';
    this.footer.style.fontSize = '8px';
    this.footer.style.lineHeight = '12px';
  }
};



/***/ }),

/***/ "./src/scripts/components/header/menu/animations.js":
/*!**********************************************************!*\
  !*** ./src/scripts/components/header/menu/animations.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modules/animationSettings */ "./src/scripts/modules/animationSettings.js");
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/store */ "./src/scripts/modules/store.js");



var animations = {
  show: function show(_ref) {
    var $dom = _ref.$dom;
    $dom.style.pointerEvents = 'none';
    $dom.parentElement.style.pointerEvents = 'none';
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Duration"].introDuration,
      x: -80,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      onComplete: function onComplete() {
        $dom.style.pointerEvents = 'all';
        $dom.parentElement.style.pointerEvents = 'all';
      }
    });
  },
  hide: function hide(_ref2) {
    var $dom = _ref2.$dom;
    $dom.style.pointerEvents = 'none';
    $dom.parentElement.style.pointerEvents = 'none';
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Duration"].introDuration,
      x: 0,
      opacity: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  },
  fadeIn: function fadeIn(_ref3) {
    var $dom = _ref3.$dom;
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.3,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  },
  fadeOut: function fadeOut(_ref4) {
    var $dom = _ref4.$dom;
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.3,
      opacity: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  },
  setVisible: function setVisible(_ref5) {
    var $dom = _ref5.$dom;
    $dom.style.pointerEvents = 'none';
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.35,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      onComplete: function onComplete() {
        $dom.style.pointerEvents = 'all';
      }
    });
  },
  setHidden: function setHidden(_ref6) {
    var $dom = _ref6.$dom;
    $dom.style.pointerEvents = 'none';
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.35,
      opacity: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      onComplete: function onComplete() {
        $dom.style.pointerEvents = 'all';
      }
    });
  },
  close: function close(_ref7) {
    var $dom = _ref7.$dom,
        $hamburger = _ref7.$hamburger,
        $footerDom = _ref7.$footerDom,
        $backgroundDom = _ref7.$backgroundDom;
    $hamburger.style.pointerEvents = 'none';
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to([$dom, $footerDom], {
      duration: 0.25,
      stagger: -0.1,
      opacity: 0,
      x: '100px',
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    }).then(function () {
      document.body.classList.remove('has-menu');
      $hamburger.style.pointerEvents = 'all';
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($backgroundDom, {
      duration: 0.25,
      delay: 0.25 * 2,
      scale: 0,
      y: -130
    });
  },
  open: function open(_ref8) {
    var $dom = _ref8.$dom,
        $hamburger = _ref8.$hamburger,
        $footerDom = _ref8.$footerDom,
        $backgroundDom = _ref8.$backgroundDom;
    $hamburger.style.pointerEvents = 'none';
    document.body.classList.add('has-menu');
    var delta = 280;
    var elemWidth = 260;
    var scaleX = (window.innerWidth * 2 - delta) / elemWidth;
    var scaleY = (window.innerHeight * 2 - delta) / elemWidth;

    if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isMobile) {
      scaleX = window.innerWidth * 2.5 / elemWidth;
      scaleY = window.innerHeight * 2.5 / elemWidth;
    } else if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isTablet || _modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].hasTouch) {
      if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isPortrait) {
        scaleX = (window.innerWidth * 1.75 - delta) / elemWidth;
        scaleY = (window.innerHeight * 1.75 - delta) / elemWidth;
      } else {
        scaleX = (window.innerWidth * 2 - delta) / elemWidth;
        scaleY = (window.innerHeight * 2 - delta) / elemWidth;
      }
    }

    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to([$dom, $footerDom], {
      duration: 0.25,
      stagger: 0.1,
      // delay: 0.25,
      opacity: 1,
      x: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    }).then(function () {
      $hamburger.style.pointerEvents = 'all';
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($backgroundDom, {
      duration: 0.2,
      scale: Math.max(scaleX, scaleY),
      y: window.innerHeight * 0.35
    });
  },
  mouseOver: function mouseOver(_ref9) {
    var $dom = _ref9.$dom;
    return gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.3,
      scale: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      paused: true
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (animations);

/***/ }),

/***/ "./src/scripts/components/intro/Intro.js":
/*!***********************************************!*\
  !*** ./src/scripts/components/intro/Intro.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Intro; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _modules_animationSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/animationSettings */ "./src/scripts/modules/animationSettings.js");



gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(window.DrawSVGPlugin);

var Intro = function Intro(_ref) {
  var onComplete = _ref.onComplete;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Intro);

  var app = document.querySelector('.js-app');
  var logo = document.querySelector('.js-intro-logo'); // const greenBar = document.querySelector('.js-intro-green-bar')

  logo.style.opacity = 1;
  Promise.resolve([]).then(function () {
    // draw outline
    return gsap__WEBPACK_IMPORTED_MODULE_1__["default"].from(logo.children, {
      duration: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_2__["Duration"].introDuration,
      drawSVG: 0,
      ease: 'none'
    });
  }).then(function () {
    // fill all the white letters and green leaf
    return gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(Object.values(logo.children).splice(1), {
      duration: 0.5,
      fill: '#FFFFFF',
      ease: 'none'
    }) && gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(logo.children[0], {
      duration: 0.5,
      fill: '#0BFFAE',
      ease: 'none'
    });
  }).then(function () {
    // hide logo
    return gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(logo.parentNode, {
      duration: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_2__["Duration"].introDuration,
      opacity: 0,
      y: window.innerHeight * -0.5,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_2__["Ease"].power3InOut,
      onStart: function onStart() {
        // launch the callback so the exit logo animation will execute togheter with the entrance of the first section
        if (typeof onComplete === 'function') {
          onComplete();
        }
      }
    });
  }).then(function () {
    app.removeChild(logo.parentNode);
  });
};



/***/ }),

/***/ "./src/scripts/components/pagination/Pagination.js":
/*!*********************************************************!*\
  !*** ./src/scripts/components/pagination/Pagination.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "./src/scripts/components/pagination/animations.js");
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/store */ "./src/scripts/modules/store.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");





var Pagination = function Pagination(_ref) {
  var _this = this;

  var onClick = _ref.onClick;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Pagination);

  this.show = function () {
    _animations__WEBPACK_IMPORTED_MODULE_1__["default"].show({
      $dom: _this.numbersDomElement,
      $barDom: _this.barDomElement
    });

    _this.update();
  };

  this.hide = function () {
    _animations__WEBPACK_IMPORTED_MODULE_1__["default"].hide({
      $dom: _this.numbersDomElement,
      $barDom: _this.barDomElement
    });

    _this.deselectItem();
  };

  this.update = function () {
    if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].selectedSection.hasPagination) {
      var singleVoiceDom = _this.numbersDomElement.querySelector("[data-id=".concat(_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].selectedSection.id, "]")); // hide previous selection


      _this.deselectItem(); // memorize new selected item


      _this.selectedItemDomElement = singleVoiceDom; // calculate bar height

      var _barScale = (_this.__getItemIndex(_this.selectedItemDomElement) + 1) / _this.items.length;

      _animations__WEBPACK_IMPORTED_MODULE_1__["default"].selectItem({
        $dom: _this.selectedItemDomElement,
        $lineDom: _this.sublineDomElement,
        $barDom: _this.barDomElement,
        height: _barScale
      });
    }
  };

  this.deselectItem = function () {
    if (_this.selectedItemDomElement !== null) {
      _animations__WEBPACK_IMPORTED_MODULE_1__["default"].deselectItem({
        $dom: _this.selectedItemDomElement
      });
    }
  };

  this.__onNumberClick = function (event) {
    var dom = event.target;

    var index = _this.__getItemIndex(dom);

    var previousIndex = _this.selectedItemDomElement !== null ? _this.__getItemIndex(_this.selectedItemDomElement) : -1;
    var direction = previousIndex > index ? 'down' : 'up';
    var section = _modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].getSectionById(dom.getAttribute('data-id'));

    _this.onClick(section, direction);
  };

  this.__getItemIndex = function ($dom) {
    return Array.from($dom.parentElement.children).indexOf($dom);
  };

  this.barDomElement = document.querySelector('.js-bar-filler');
  this.numbersDomElement = document.querySelector('.js-numbers-pagination');
  this.sublineDomElement = document.querySelector('.js-numbers-pagination-line');
  this.selectedItemDomElement = null;
  this.onClick = onClick;
  this.items = this.numbersDomElement.querySelectorAll('.pagination__item');
  Object.values(this.items).map(function (item) {
    item.addEventListener('click', _this.__onNumberClick);
  });
  gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(this.barDomElement.children[0], {
    scaleX: 1,
    scaleY: 0,
    transformOrigin: '0% 0%'
  });
};



/***/ }),

/***/ "./src/scripts/components/pagination/animations.js":
/*!*********************************************************!*\
  !*** ./src/scripts/components/pagination/animations.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/animationSettings */ "./src/scripts/modules/animationSettings.js");


var animations = {
  show: function show(_ref) {
    var $dom = _ref.$dom,
        $barDom = _ref.$barDom;
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($barDom, {
      duration: 0.35,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.35,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    }).then(function () {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set($dom, {
        pointerEvents: 'all'
      });
    });
  },
  hide: function hide(_ref2) {
    var $dom = _ref2.$dom,
        $barDom = _ref2.$barDom;
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($barDom, {
      duration: 0.35,
      opacity: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.35,
      opacity: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      onStart: function onStart() {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set($dom, {
          pointerEvents: 'none'
        });
      }
    });
  },
  selectItem: function selectItem(_ref3) {
    var $dom = _ref3.$dom,
        $lineDom = _ref3.$lineDom,
        $barDom = _ref3.$barDom,
        height = _ref3.height;

    var _lineY = $dom.getBoundingClientRect().y - $dom.parentElement.getBoundingClientRect().y + $dom.getBoundingClientRect().height;

    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.3,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($lineDom, {
      duration: 0.3,
      y: _lineY,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($barDom.children[0], {
      duration: 0.5,
      scaleY: height,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  },
  deselectItem: function deselectItem(_ref4) {
    var $dom = _ref4.$dom;
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.3,
      opacity: 0.2,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (animations);

/***/ }),

/***/ "./src/scripts/components/scroll-suggestion/ScrollSuggestion.js":
/*!**********************************************************************!*\
  !*** ./src/scripts/components/scroll-suggestion/ScrollSuggestion.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollSuggestion; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "./src/scripts/components/scroll-suggestion/animations.js");
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/store */ "./src/scripts/modules/store.js");




var ScrollSuggestion = function ScrollSuggestion(_ref) {
  var _this = this;

  var onClick = _ref.onClick;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ScrollSuggestion);

  this.show = function () {
    _animations__WEBPACK_IMPORTED_MODULE_1__["default"].show({
      $dom: _this.domElement
    }).then(function () {
      _this.domElement.classList.remove('no-events');
    });
  };

  this.hide = function () {
    _animations__WEBPACK_IMPORTED_MODULE_1__["default"].hide({
      $dom: _this.domElement
    }).then(function () {
      _this.domElement.classList.add('no-events');
    });
  };

  this.update = function () {
    switch (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].selectedSection.id) {
      case 'play':
        _animations__WEBPACK_IMPORTED_MODULE_1__["default"].playVersion({
          $dom: _this.domElement,
          $playDom: _this.playDomElement
        });
        _animations__WEBPACK_IMPORTED_MODULE_1__["default"].hide({
          $dom: _this.contactDomElement
        });
        _animations__WEBPACK_IMPORTED_MODULE_1__["default"].hide({
          $dom: _this.standardDomElement
        });
        break;

      case 'connect':
        if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isMobileOrTabletPortrait) {
          _this.hide();
        } else {
          _animations__WEBPACK_IMPORTED_MODULE_1__["default"].connectVersion({
            $dom: _this.domElement,
            $contactDom: _this.contactDomElement,
            $standardDom: _this.standardDomElement,
            $playDom: _this.playDomElement
          });
        }

        break;

      case 'contact':
        _this.hide();

        break;

      default:
        if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isMobileOrTabletPortrait) {
          _this.hide();
        } else {
          _animations__WEBPACK_IMPORTED_MODULE_1__["default"].otherSectionsVersion({
            $dom: _this.domElement,
            $standardDom: _this.standardDomElement
          });
          _animations__WEBPACK_IMPORTED_MODULE_1__["default"].hide({
            $dom: _this.contactDomElement
          });
          _animations__WEBPACK_IMPORTED_MODULE_1__["default"].hide({
            $dom: _this.playDomElement
          });
        }

        break;
    }
  };

  this.domElement = document.querySelector('.js-scroll-suggestion');
  this.playDomElement = this.domElement.querySelector('.js-scroll-suggestion-play');
  this.standardDomElement = this.domElement.querySelector('.js-scroll-suggestion-standard');
  this.contactDomElement = this.domElement.querySelector('.js-scroll-suggestion-contact');
  this.domElement.addEventListener('click', function () {
    onClick(_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].selectedSection.nextSection, 'down');
  });
  Object.values(document.querySelectorAll('.js-fake-scroll')).map(function (item) {
    item.addEventListener('click', function () {
      onClick(_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].selectedSection.nextSection, 'down');
    });
  });
};



/***/ }),

/***/ "./src/scripts/components/scroll-suggestion/animations.js":
/*!****************************************************************!*\
  !*** ./src/scripts/components/scroll-suggestion/animations.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/animationSettings */ "./src/scripts/modules/animationSettings.js");
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/store */ "./src/scripts/modules/store.js");



var animations = {
  show: function show(_ref) {
    var $dom = _ref.$dom;
    return gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Duration"].introDuration,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  },
  hide: function hide(_ref2) {
    var $dom = _ref2.$dom;
    return gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.35,
      opacity: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  },
  playVersion: function playVersion(_ref3) {
    var $dom = _ref3.$dom,
        $playDom = _ref3.$playDom;
    // let y = -135
    var y = -(window.innerHeight / 2) + document.querySelector('.js-title').getBoundingClientRect().height + 30;

    if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isMobile) {
      if (window.innerHeight <= 600) {
        // y = -60
        y = 30;
      } else {
        y = 0;
      }
    } else if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isTablet) {
      if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isPortrait) {
        y = -215;
      } else {
        y = -115;
      }
    } else if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].hasTouch) {
      if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isPortrait) {
        y = -215;
      } else {
        y = -115;
      }
    }

    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.35,
      opacity: 1,
      y: y,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($playDom, {
      duration: 0.35,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  },
  playVersion2: function playVersion2(_ref4) {
    var $dom = _ref4.$dom,
        $playDom = _ref4.$playDom;
    var y = -135;

    if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isMobile) {
      if (window.innerHeight <= 600) {
        y = -60;
      } else {
        y = -100;
      }
    } else if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isTablet) {
      if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isPortrait) {
        y = -215;
      } else {
        y = -115;
      }
    } else {
      if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].hasTouch) {
        if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isPortrait) {
          y = -215;
        } else {
          y = -115;
        }
      }
    }

    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.35,
      opacity: 1,
      y: y,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($playDom, {
      duration: 0.35,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  },
  connectVersion: function connectVersion(_ref5) {
    var $dom = _ref5.$dom,
        $contactDom = _ref5.$contactDom,
        $standardDom = _ref5.$standardDom,
        $playDom = _ref5.$playDom;
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.35,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($contactDom, {
      duration: 0.35,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($standardDom, {
      duration: 0.35,
      opacity: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($playDom, {
      duration: 0.35,
      opacity: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  },
  otherSectionsVersion: function otherSectionsVersion(_ref6) {
    var $dom = _ref6.$dom,
        $standardDom = _ref6.$standardDom;
    var y = -85;

    if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isMobileOrTablet && window.innerHeight <= 600) {
      y = -100;
    }

    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.35,
      opacity: 0.3,
      y: y,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($standardDom, {
      duration: 0.35,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (animations);

/***/ }),

/***/ "./src/scripts/components/sections/Section.js":
/*!****************************************************!*\
  !*** ./src/scripts/components/sections/Section.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./src/scripts/components/sections/animations.js");
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/store */ "./src/scripts/modules/store.js");
/* harmony import */ var _blob_Blob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blob/Blob */ "./src/scripts/components/blob/Blob.js");






var Section = /*#__PURE__*/function () {
  function Section(data) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Section);

    this.showIcons = function () {
      _this.hideIconsAnimation.reverse();
    };

    this.hideIcons = function () {
      _this.hideIconsAnimation.play();
    };

    this.activate = function () {
      if (!_modules_store__WEBPACK_IMPORTED_MODULE_3__["default"].isMobile) {
        switch (_modules_store__WEBPACK_IMPORTED_MODULE_3__["default"].browser.parsedResult.browser.name.toLowerCase()) {
          case 'firefox':
          case 'safari':
            setTimeout(function () {
              _this.domElement.classList.add('is-active');
            }, 700);
            break;

          case 'chrome':
          default:
            _this.domElement.classList.add('is-active');

            break;
        }
      } else {
        _this.domElement.classList.add('is-active');
      }
    };

    this.deactivate = function () {
      _this.domElement.classList.remove('is-active');
    };

    this.resize = function () {
      _this.blob.resize();
    };

    this.data = data;
    this.nextSection = null;
    this.prevSection = null;
    this.domElement = document.querySelector(".js-section[data-id=".concat(this.data.id));
    this.descriptionDomElement = this.domElement.querySelector('.js-description');
    this.hideIconsAnimation = _animations__WEBPACK_IMPORTED_MODULE_2__["default"].hideIcons({
      $dom: this.domElement.querySelector('.background__icons')
    });

    if (this.id !== 'play') {
      this.ico1DomElement = this.domElement.querySelector(".js-icon-".concat(this.id, "-1"));
      this.ico2DomElement = this.domElement.querySelector(".js-icon-".concat(this.id, "-2"));
      this.blob = new _blob_Blob__WEBPACK_IMPORTED_MODULE_4__["default"]({
        $img: this.domElement.querySelector('.js-blob-image'),
        clickCallback: this.data.blobCallback
      });
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Section, [{
    key: "enter",
    value: function enter(callback) {
      // this.domElement.classList.add('is-active')
      if (!_modules_store__WEBPACK_IMPORTED_MODULE_3__["default"].isMobile && this.descriptionDomElement !== null) {
        _animations__WEBPACK_IMPORTED_MODULE_2__["default"].showDescription(this.descriptionDomElement);
      }

      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].fadeIn({
        $dom: this.domElement
      });

      if (this.id !== 'play' && this.id !== 'contact') {
        // if it's the first animation, create animation object. if not restart the old anim objects
        if (typeof this.anim1 == 'undefined') {
          this.anim1 = _animations__WEBPACK_IMPORTED_MODULE_2__["default"].enter({
            $dom: this.ico1DomElement,
            settings: _modules_store__WEBPACK_IMPORTED_MODULE_3__["default"].isMobile ? this.data.background1Animation.mobile : this.data.background1Animation.desktop
          });
          this.anim2 = _animations__WEBPACK_IMPORTED_MODULE_2__["default"].enter({
            $dom: this.ico2DomElement,
            settings: _modules_store__WEBPACK_IMPORTED_MODULE_3__["default"].isMobile ? this.data.background2Animation.mobile : this.data.background2Animation.desktop
          });
        }

        this.anim1.play();
        this.anim2.play().then(function () {
          if (typeof callback !== 'undefined') {
            callback();
          }
        });
      } else {
        if (typeof callback !== 'undefined') {
          callback();
        }
      }
    }
  }, {
    key: "exit",
    value: function exit(callback) {
      var _this2 = this;

      if (!_modules_store__WEBPACK_IMPORTED_MODULE_3__["default"].isMobile && this.descriptionDomElement !== null) {
        _animations__WEBPACK_IMPORTED_MODULE_2__["default"].hideDescription({
          $dom: this.descriptionDomElement
        });
      }

      if (this.id !== 'play' && this.id !== 'contact') {
        if (this.data.animReversable) {
          this.anim1.reverse();
          this.anim2.reverse().then(function () {
            if (typeof callback !== 'undefined') {
              callback();
            }

            _this2.deactivate();
          });
        } else {
          _animations__WEBPACK_IMPORTED_MODULE_2__["default"].exit({
            $dom: this.ico1DomElement,
            settings: _modules_store__WEBPACK_IMPORTED_MODULE_3__["default"].isMobile ? this.data.background1ExitAnimation.mobile : this.data.background1ExitAnimation.desktop
          }).then(function () {
            _this2.anim1.pause(0);
          });
          _animations__WEBPACK_IMPORTED_MODULE_2__["default"].exit({
            $dom: this.ico2DomElement,
            settings: _modules_store__WEBPACK_IMPORTED_MODULE_3__["default"].isMobile ? this.data.background2ExitAnimation.mobile : this.data.background2ExitAnimation.desktop
          }).then(function () {
            if (typeof callback !== 'undefined') {
              callback();
            }

            _this2.anim2.pause(0);

            _this2.deactivate();
          });
        }
      } else {
        if (typeof callback !== 'undefined') {
          callback();
          this.deactivate();
        }
      }
    }
  }, {
    key: "fadeOut",
    value: function fadeOut() {
      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].fadeOut({
        $dom: this.domElement
      });
    }
  }, {
    key: "showBlob",
    value: function showBlob() {
      if (typeof this.blob !== 'undefined') {
        this.blob.show();
        this.hideIcons();
      }
    }
  }, {
    key: "hideBlob",
    value: function hideBlob() {
      if (typeof this.blob !== 'undefined') {
        this.blob.hide();
        this.showIcons();
      }
    }
  }, {
    key: "id",
    get: function get() {
      return this.data.id;
    }
  }, {
    key: "titlePosition",
    get: function get() {
      return this.data.titlePosition;
    }
  }, {
    key: "titleStyle",
    get: function get() {
      return this.data.titleStyle;
    }
  }, {
    key: "theme",
    get: function get() {
      return this.data.theme;
    }
  }, {
    key: "hasPagination",
    get: function get() {
      return this.data.hasPagination;
    }
  }]);

  return Section;
}();



/***/ }),

/***/ "./src/scripts/components/sections/animations.js":
/*!*******************************************************!*\
  !*** ./src/scripts/components/sections/animations.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/animationSettings */ "./src/scripts/modules/animationSettings.js");


var animations = {
  showDescription: function showDescription($domElement) {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($domElement, {
      duration: 0.35,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      onStart: function onStart() {
        $domElement.style.display = 'block';
        $domElement.style.visibility = 'visible';
      }
    });
  },
  hideDescription: function hideDescription(_ref) {
    var $dom = _ref.$dom,
        callback = _ref.callback;
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.35,
      opacity: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    }).then(function () {
      $dom.style.display = 'none';
      $dom.style.visibility = 'hidden';

      if (typeof callback !== 'undefined') {
        callback();
      }
    });
  },
  enter: function enter(_ref2) {
    var $dom = _ref2.$dom,
        settings = _ref2.settings;
    return gsap__WEBPACK_IMPORTED_MODULE_0__["default"].from($dom, {
      duration: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Duration"].changeSectionDuration,
      x: settings.x,
      y: settings.y,
      scale: settings.scale,
      rotation: settings.rotation,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      opacity: settings.opacity,
      onStart: function onStart() {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set($dom, {
          visibility: 'visible'
        });
      },
      paused: true
    });
  },
  // exit animation for the section that is not symmetric
  exit: function exit(_ref3) {
    var $dom = _ref3.$dom,
        settings = _ref3.settings;
    return gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Duration"].changeSectionDuration,
      x: settings.x,
      y: settings.y,
      scale: settings.scale,
      rotation: settings.rotation,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      opacity: settings.opacity
    });
  },
  fadeIn: function fadeIn(_ref4) {
    var $dom = _ref4.$dom;
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.35,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  },
  fadeOut: function fadeOut(_ref5) {
    var $dom = _ref5.$dom;
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.35,
      opacity: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  },
  hideIcons: function hideIcons(_ref6) {
    var $dom = _ref6.$dom;
    return gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.35,
      opacity: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      paused: true
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (animations);

/***/ }),

/***/ "./src/scripts/components/sections/contact/ContactSection.js":
/*!*******************************************************************!*\
  !*** ./src/scripts/components/sections/contact/ContactSection.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactSection; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Section */ "./src/scripts/components/sections/Section.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animations */ "./src/scripts/components/sections/contact/animations.js");







 // import store from '../../../modules/store'

var ContactSection = /*#__PURE__*/function (_Section) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ContactSection, _Section);

  function ContactSection(_ref) {
    var _this;

    var data = _ref.data,
        backHandler = _ref.backHandler;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ContactSection);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ContactSection).call(this, data));

    _this.enter = function (callback) {
      _this.enterAnimation.play();

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ContactSection.prototype), "enter", _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)).call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), callback);
    };

    _this.exit = function (callback) {
      _this.enterAnimation.reverse().then(function () {
        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ContactSection.prototype), "exit", _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)).call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), callback); // if (this.backHandler !== null) {
        //   this.backHandler()
        // }

      });
    };

    _this.backHandler = backHandler;
    _this.enterAnimation = _animations__WEBPACK_IMPORTED_MODULE_7__["default"].enter({
      $dom: _this.domElement
    });
    _this.backDomElement = document.querySelector('.js-contact-back');

    _this.backDomElement.addEventListener('click', _this.backHandler);

    return _this;
  }

  return ContactSection;
}(_Section__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./src/scripts/components/sections/contact/animations.js":
/*!***************************************************************!*\
  !*** ./src/scripts/components/sections/contact/animations.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modules/animationSettings */ "./src/scripts/modules/animationSettings.js");


var animations = {
  enter: function enter(_ref) {
    var $dom = _ref.$dom;
    return gsap__WEBPACK_IMPORTED_MODULE_0__["default"].from($dom, {
      duration: 0.35,
      opacity: 0,
      y: '100%',
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      paused: true,
      onStart: function onStart() {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set($dom, {
          visibility: 'visible'
        });
      }
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (animations);

/***/ }),

/***/ "./src/scripts/components/sections/play/PlaySection.js":
/*!*************************************************************!*\
  !*** ./src/scripts/components/sections/play/PlaySection.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlaySection; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Section */ "./src/scripts/components/sections/Section.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animations */ "./src/scripts/components/sections/play/animations.js");
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/store */ "./src/scripts/modules/store.js");










var PlaySection = /*#__PURE__*/function (_Section) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(PlaySection, _Section);

  function PlaySection(data) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PlaySection);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(PlaySection).call(this, data));

    _this.enter = function (callback) {
      _this.isLeafOpened = false;
      _this.enterAnimation = _animations__WEBPACK_IMPORTED_MODULE_7__["default"].enter({
        $dom: _this.leaf.parentElement
      });

      _this.enterAnimation.play().then(function () {
        _this.activeDomElement.addEventListener('mouseover', _this.__onMouseOver);

        _this.activeDomElement.addEventListener('mouseout', _this.__onMouseOut);

        _this.firstEnter = true;
        setTimeout(function () {
          _this.__repositionFakeTitle();
        }, 200);

        if (callback) {
          callback();
        }
      }); // show white version automatically on mobile


      if (_modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].hasTouch) {
        setTimeout(_this.__onMouseOver, 500);
      }

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(PlaySection.prototype), "enter", _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)).call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    };

    _this.exit = function (callback) {
      _this.activeDomElement.removeEventListener('mouseover', _this.__onMouseOver);

      _this.activeDomElement.removeEventListener('mouseout', _this.__onMouseOut); // exit animation and reset tweend properties


      _this.enterAnimation.reverse().then(function () {
        // restart leafs position on desktop. so once back in play section everything is like the first time
        if (!_modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].isMobile) {
          _this.openLeafAnimation.reverse();
        }
      });

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(PlaySection.prototype), "exit", _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)).call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), callback);
    };

    _this.resize = function () {
      _this.__repositionFakeTitle();

      if (_this.isLeafOpened) {
        _animations__WEBPACK_IMPORTED_MODULE_7__["default"].resizeOpenLeaf({
          $dom: _this.leaf
        });
      }
    };

    _this.__repositionFakeTitle = function () {
      var originalActiveBoundingClient = _this.activeDomElement.getBoundingClientRect();

      var $scroll = document.querySelector('.js-scroll-suggestion');
      var scrollBounding = $scroll.getBoundingClientRect();
      var pos = scrollBounding.y - originalActiveBoundingClient.y + scrollBounding.height;
      var diff = pos - 400;
      diff = 70 + diff / 2;
      _this.activeDomElement.style.height = "".concat(pos, "px");
      _this.activeDomElement.style.top = "calc(50% + ".concat(diff, "px)");
    };

    _this.__onMouseOver = function () {
      _this.mouseOverCallback();

      _this.openLeafAnimation.play().then(function () {
        _this.isLeafOpened = true;
      });
    };

    _this.__onMouseOut = function () {
      _this.mouseOutCallback();

      _this.openLeafAnimation.reverse().then(function () {
        _this.isLeafOpened = true;
      });
    };

    _this.isLeafOpened = false;
    _this.firstEnter = false;
    _this.mouseOverCallback = null;
    _this.mouseOutCallback = null;
    _this.leaf = document.querySelector('.js-leaf');
    _this.activeDomElement = document.querySelector('.js-play-active');
    _this.openLeafAnimation = _animations__WEBPACK_IMPORTED_MODULE_7__["default"].openLeaf({
      $dom: _this.leaf
    });
    _this.enterAnimation = _animations__WEBPACK_IMPORTED_MODULE_7__["default"].enter({
      $dom: _this.leaf.parentElement
    });
    return _this;
  }

  return PlaySection;
}(_Section__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./src/scripts/components/sections/play/animations.js":
/*!************************************************************!*\
  !*** ./src/scripts/components/sections/play/animations.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modules/animationSettings */ "./src/scripts/modules/animationSettings.js");
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/store */ "./src/scripts/modules/store.js");




function getEnterValues() {
  var y = _modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isMobileOrTabletPortrait ? -450 : -806;
  var scale = 1;
  var diff = (100 * scale - 100) / 2;

  if (!_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isMobile) {
    scale = window.innerHeight / 700;
    y = "-".concat(100 + diff, "%");
  }

  if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isTablet && _modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isPortrait) {
    scale = window.innerHeight / 700;
    y = "-".concat(100 + diff - 10, "%");
  }

  return {
    scale: scale,
    y: y
  };
}

function getLeafValues() {
  var leaf1 = {
    rotate: -20,
    x: -70,
    y: 40,
    scale: 0.9
  };
  var leaf2 = {
    rotate: 20,
    x: 50,
    y: 40,
    scale: 0.9
  };
  var leaf3 = {
    rotate: _modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isMobileOrTabletPortrait ? 10 : 20,
    x: _modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isMobileOrTabletPortrait ? 50 : 76,
    y: _modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isMobileOrTabletPortrait ? 60 : 72,
    scale: 0.9
  };
  var leaf4 = {
    rotate: -20,
    x: _modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isMobileOrTabletPortrait ? -50 : -30,
    y: 140,
    scale: 0.9
  };
  return {
    leaf1: leaf1,
    leaf2: leaf2,
    leaf3: leaf3,
    leaf4: leaf4
  };
}

var animations = {
  openLeaf: function openLeaf(_ref) {
    var $dom = _ref.$dom;
    var anim = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
      paused: true
    });
    var leavesValues = getLeafValues();
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set($dom.children[0], {
      transformOrigin: '50% 50%'
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set($dom.children[1], {
      transformOrigin: '50% 50%'
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set($dom.children[2], {
      transformOrigin: '50% 50%'
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set($dom.children[3], {
      transformOrigin: '50% 50%'
    });
    anim.to($dom.children[0], {
      duration: 0.4,
      rotate: leavesValues.leaf1.rotate + 'deg',
      x: leavesValues.leaf1.x,
      y: leavesValues.leaf1.y,
      scale: leavesValues.leaf1.scale,
      fill: '#ffffff',
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    } // '-=0.2'
    ).to($dom.children[1], {
      duration: 0.4,
      rotate: leavesValues.leaf2.rotate + 'deg',
      x: leavesValues.leaf2.x,
      y: leavesValues.leaf2.y,
      scale: leavesValues.leaf2.scale,
      fill: '#ffffff',
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    }, '-=0.4').to($dom.children[2], {
      duration: 0.4,
      rotate: leavesValues.leaf3.rotate + 'deg',
      x: leavesValues.leaf3.x,
      y: leavesValues.leaf3.y,
      scale: leavesValues.leaf3.scale,
      fill: '#ffffff',
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    }, '-=0.4').to($dom.children[3], {
      duration: 0.4,
      rotate: leavesValues.leaf4.rotate + 'deg',
      x: leavesValues.leaf4.x,
      y: leavesValues.leaf4.y,
      scale: leavesValues.leaf4.scale,
      fill: '#ffffff',
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    }, '-=0.4');
    return anim;
  },
  enter: function enter(_ref2) {
    var $dom = _ref2.$dom;
    var y = _modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isMobileOrTabletPortrait ? -450 : -806;
    var scale = 1;
    var diff = (100 * scale - 100) / 2;

    if (!_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isMobile) {
      scale = window.innerHeight / 700;
      y = "-".concat(100 + diff, "%");
    }

    if (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isTablet && _modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isPortrait) {
      scale = window.innerHeight / 700;
      y = "-".concat(100 + diff - 10, "%");
    }

    return gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Duration"].introDuration + 0.05,
      y: y,
      scale: scale,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      paused: true,
      onStart: function onStart() {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set($dom, {
          visibility: 'visible'
        });
      }
    });
  },
  resizeOpenLeaf: function resizeOpenLeaf(_ref3) {
    var $dom = _ref3.$dom;
    var enterValues = getEnterValues();
    var leavesValues = getLeafValues();
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set($dom.parentElement, {
      y: enterValues.y,
      scale: enterValues.scale
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set($dom.children[0], {
      rotate: leavesValues.leaf1.rotate + 'deg',
      x: leavesValues.leaf1.x,
      y: leavesValues.leaf1.y,
      scale: leavesValues.leaf1.scale
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set($dom.children[1], {
      rotate: leavesValues.leaf2.rotate + 'deg',
      x: leavesValues.leaf2.x,
      y: leavesValues.leaf2.y,
      scale: leavesValues.leaf2.scale
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set($dom.children[2], {
      rotate: "".concat(leavesValues.leaf3.rotate, "deg"),
      x: leavesValues.leaf3.x,
      y: leavesValues.leaf3.y,
      scale: leavesValues.leaf3.scale
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set($dom.children[3], {
      rotate: leavesValues.leaf4.rotate + 'deg',
      x: leavesValues.leaf4.x,
      y: leavesValues.leaf4.y,
      scale: leavesValues.leaf4.scale
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (animations);

/***/ }),

/***/ "./src/scripts/components/title/Title.js":
/*!***********************************************!*\
  !*** ./src/scripts/components/title/Title.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Title; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/store */ "./src/scripts/modules/store.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./src/scripts/components/title/animations.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");





var Title = function Title(_ref) {
  var _this = this;

  var overCallback = _ref.overCallback,
      outCallback = _ref.outCallback,
      toggleCallback = _ref.toggleCallback;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Title);

  this.show = function () {
    _animations__WEBPACK_IMPORTED_MODULE_2__["default"].show(_this.domElement);
  };

  this.fadeIn = function () {
    _animations__WEBPACK_IMPORTED_MODULE_2__["default"].fadeIn({
      $dom: _this.domElement
    });
    _this.style = _modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].selectedSection.titleStyle;
  };

  this.fadeOut = function () {
    _animations__WEBPACK_IMPORTED_MODULE_2__["default"].fadeOut({
      $dom: _this.domElement
    });
    _this.style = _modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].selectedSection.titleStyle;
  };

  this.animate = function (direction) {
    // change text alignment only if the request is different from the previous one
    if (_modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].selectedSection.titleStyle != _this.style) {
      switch (_modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].selectedSection.titleStyle) {
        case 'horizontal':
          _this.__horizontalize();

          break;

        case 'vertical':
        default:
          _this.__verticalize();

          break;
      }
    } else {
      _this.__changeWordBySlide(direction);
    }

    _this.updateSubline();
  };

  this.black = function () {
    _animations__WEBPACK_IMPORTED_MODULE_2__["default"].turnColor({
      color1: 0,
      color2: 0
    });
  };

  this.white = function () {
    _animations__WEBPACK_IMPORTED_MODULE_2__["default"].turnColor({
      color1: 0,
      color2: 255
    });
  };

  this.convertToBlobTitle = function () {
    _this.white();

    _animations__WEBPACK_IMPORTED_MODULE_2__["default"].turnColor({
      color1: 255,
      color2: 255
    });
    _animations__WEBPACK_IMPORTED_MODULE_2__["default"].colorizeDynamicWord({
      color: '#0bffae'
    });
    _animations__WEBPACK_IMPORTED_MODULE_2__["default"].hideSublineForBlob({
      $dom: _this.sublineDomElement
    });
  };

  this.convertToStandardTitle = function () {
    _this.black();

    _animations__WEBPACK_IMPORTED_MODULE_2__["default"].colorizeDynamicWord({
      color: '#000000'
    });
    _animations__WEBPACK_IMPORTED_MODULE_2__["default"].updateSubLine({
      $lineDom: _this.sublineDomElement,
      $textDom: document.querySelector(".js-title-vertical-item[data-id=".concat(_modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].selectedSection.id, "] span")),
      isMobile: _modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile
    });
  };

  this.showStaticWords = function () {
    _animations__WEBPACK_IMPORTED_MODULE_2__["default"].showStaticWords();
  };

  this.hideStaticWords = function () {
    if (_modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile) {
      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].hideStaticWords();
    }
  };

  this.bringTo = function (to) {
    setTimeout(function () {
      switch (to) {
        case 'back':
          _this.domElement.classList.remove('maintitle__front');

          break;

        case 'front':
        default:
          _this.domElement.classList.add('maintitle__front');

          break;
      }
    }, 100);
  };

  this.resize = function () {
    if (!_modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile) {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(_this.domElement, {
        x: window.innerWidth / 2
      });
    }
  };

  this.__horizontalize = function () {
    if (_modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile) {
      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].mobileWordsAnimations.letMovement.play();
      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].mobileWordsAnimations.dynMovement.play();
      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].mobileWordsAnimations.outMovement.play();
      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].mobileWordsAnimations.thereMovement.play();
    } else {
      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].desktopWordsAnimations.letMovement.play();
      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].desktopWordsAnimations.dynMovement.play();
      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].desktopWordsAnimations.outMovement.play();
      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].desktopWordsAnimations.thereMovement.play().then(function () {
        // only on mobile update space between words. last section title needs more space
        _animations__WEBPACK_IMPORTED_MODULE_2__["default"].updateWordsSpacing();
      });
    }

    _this.__changeWordByFade();

    _this.style = 'horizontal';
  };

  this.__verticalize = function () {
    if (_modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile) {
      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].mobileWordsAnimations.letMovement.reverse();
      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].mobileWordsAnimations.dynMovement.reverse();
      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].mobileWordsAnimations.outMovement.reverse();
      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].mobileWordsAnimations.thereMovement.reverse();
    } else {
      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].desktopWordsAnimations.letMovement.reverse();
      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].desktopWordsAnimations.dynMovement.reverse();
      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].desktopWordsAnimations.outMovement.reverse();
      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].desktopWordsAnimations.thereMovement.reverse();
    }

    _this.__changeWordByFade();

    _this.style = 'vertical';
  };

  this.__changeWordBySlide = function (direction) {
    var nextWordDomElement = document.querySelector(".js-title-vertical-item[data-id=".concat(_modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].selectedSection.id, "]"));

    if (_this.actualWordDomElement !== nextWordDomElement) {
      // only on mobile update space between words. last section title needs more space
      if (!_modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile) {
        _animations__WEBPACK_IMPORTED_MODULE_2__["default"].updateWordsSpacing();
      } // animate the slide in/out of the section title if there's a next element


      if (nextWordDomElement !== null) {
        _animations__WEBPACK_IMPORTED_MODULE_2__["default"].slideWord({
          $actual: _this.actualWordDomElement,
          $next: nextWordDomElement,
          direction: direction,
          callback: function callback() {
            _this.actualWordDomElement = nextWordDomElement;
          }
        });
      }
    }
  };

  this.__changeWordByFade = function () {
    var nextWordDomElement = document.querySelector(".js-title-vertical-item[data-id=".concat(_modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].selectedSection.id, "]"));

    if (_this.actualWordDomElement !== nextWordDomElement) {
      _animations__WEBPACK_IMPORTED_MODULE_2__["default"].fadeWord({
        $actual: _this.actualWordDomElement,
        $next: nextWordDomElement,
        callback: function callback() {
          _this.actualWordDomElement = nextWordDomElement;
        }
      });
    }
  };

  this.updateSubline = function (forcedSpeed) {
    var nextWordDomElement = document.querySelector(".js-title-vertical-item[data-id=".concat(_modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].selectedSection.id, "] span"));
    _animations__WEBPACK_IMPORTED_MODULE_2__["default"].updateSubLine({
      $lineDom: _this.sublineDomElement,
      $textDom: nextWordDomElement,
      isMobile: _modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile,
      speed: forcedSpeed
    });
  };

  this.style = 'vertical';
  this.domElement = document.querySelector('.js-title');
  this.actualWordDomElement = document.querySelector('.js-title-vertical-item[data-id="play"]');
  this.sublineDomElement = document.querySelector('.js-title-subline');

  if (_modules_store__WEBPACK_IMPORTED_MODULE_1__["default"].isMobileOrTablet) {
    this.domElement.addEventListener('click', toggleCallback);
    Object.values(document.querySelectorAll('.js-fake-blob-title')).map(function (item) {
      item.addEventListener('click', function (e) {
        _this.domElement.classList.toggle('maintitle--blob');

        toggleCallback(e);
      });
    });
  } else {
    Object.values(document.querySelectorAll('.js-fake-blob-title')).map(function (item) {
      item.addEventListener('mouseover', function (e) {
        _this.domElement.classList.add('maintitle--blob');

        e.target.classList.add('is-hidden');
        overCallback(e);
      });
    });
    this.domElement.querySelector('.js-title-dynamic').addEventListener('mouseout', function (e) {
      var fakeTitle = document.querySelector('.js-fake-blob-title.is-hidden');

      _this.domElement.classList.remove('maintitle--blob');

      if (fakeTitle !== null) {
        setTimeout(function () {
          fakeTitle.classList.remove('is-hidden');
        }, 150);
      }

      outCallback(e);
    });
  }
};



/***/ }),

/***/ "./src/scripts/components/title/animations.js":
/*!****************************************************!*\
  !*** ./src/scripts/components/title/animations.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/animationSettings */ "./src/scripts/modules/animationSettings.js");
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/store */ "./src/scripts/modules/store.js");



var ORIGINAL_MOBILE_HEIGHT = 667;
var animations = {
  // title block entrance
  show: function show($domElement) {
    $domElement.style.visibility = 'visible';
    $domElement.style.display = 'block';
    var y = 0;

    switch (_modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].isMobile) {
      case true:
        y = -(window.innerHeight / 2 + $domElement.clientHeight * 0.5) - 66;
        y -= window.innerHeight * -30 / ORIGINAL_MOBILE_HEIGHT;
        break;

      case false:
      default:
        y = $domElement.clientHeight * -0.5;
        break;
    }

    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($domElement, {
      duration: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Duration"].introDuration,
      opacity: 1,
      // y: $domElement.clientHeight * -0.5,
      y: y,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  },
  fadeIn: function fadeIn(_ref) {
    var $dom = _ref.$dom;
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.35,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  },
  fadeOut: function fadeOut(_ref2) {
    var $dom = _ref2.$dom;
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.35,
      opacity: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  },
  // animate title words on desktop
  desktopWordsAnimations: {
    letMovement: gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelector('.js-title-let'), {
      duration: 0.4,
      x: -202,
      y: 70,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      paused: true
    }),
    dynMovement: gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelector('.js-title-dynamic'), {
      duration: 0.4,
      x: -58,
      y: 4,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      paused: true
    }),
    outMovement: gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelector('.js-title-out'), {
      duration: 0.4,
      x: 68,
      y: -66,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      paused: true
    }),
    thereMovement: gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelector('.js-title-there'), {
      duration: 0.4,
      x: 192,
      y: -134,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      paused: true
    })
  },
  // animate title words on mobile
  mobileWordsAnimations: {
    letMovement: gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelector('.js-title-let'), {
      duration: 0.3,
      right: '100px',
      top: '42px',
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      paused: true
    }),
    dynMovement: gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelector('.js-title-dynamic'), {
      duration: 0.3,
      right: '141px',
      top: '108px',
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      paused: true
    }),
    outMovement: gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelector('.js-title-out'), {
      duration: 0.3,
      right: '86px',
      top: '180px',
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      paused: true
    }),
    thereMovement: gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelector('.js-title-there'), {
      duration: 0.3,
      right: '110px',
      top: '246px',
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      paused: true
    })
  },
  updateWordsSpacing: function updateWordsSpacing() {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelector('.js-title-let'), {
      duration: 0.4,
      x: _modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].selectedSection.id == 'connect' ? -236 : -202,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelector('.js-title-out'), {
      duration: 0.4,
      x: _modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].selectedSection.id == 'connect' ? 104 : 68,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelector('.js-title-there'), {
      duration: 0.4,
      x: _modules_store__WEBPACK_IMPORTED_MODULE_2__["default"].selectedSection.id == 'connect' ? 225 : 192,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  },
  fadeWord: function fadeWord(_ref3) {
    var $actual = _ref3.$actual,
        $next = _ref3.$next,
        callback = _ref3.callback;
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($actual, {
      duration: 0.35,
      opacity: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      delay: 0,
      onComplete: function onComplete() {
        $actual.style.visibility = 'hidden';
      }
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($next, {
      duration: 0.35,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      delay: 0,
      onStart: function onStart() {
        $next.style.display = 'block';
        $next.style.visibility = 'visible';
      },
      onComplete: callback
    });
  },
  slideWord: function slideWord(_ref4) {
    var $actual = _ref4.$actual,
        $next = _ref4.$next,
        direction = _ref4.direction,
        callback = _ref4.callback;
    var defaultPosition = direction == 'up' ? -100 : 100;
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($actual, {
      // duration: 0.35,
      duration: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Duration"].changeSectionDuration,
      y: defaultPosition * -1,
      opacity: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      onComplete: function onComplete() {
        // $actual.style.display = 'none'
        $actual.style.visibility = 'hidden';
        $actual.classList.remove('is-visible');
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set($actual, {
          clearProps: 'all'
        });
      }
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set($next, {
      clearProps: 'all'
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set($next, {
      y: defaultPosition
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($next, {
      // duration: 0.35,
      duration: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Duration"].changeSectionDuration,
      y: 0,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      onStart: function onStart() {
        $next.style.display = 'block';
        $next.style.visibility = 'visible';
        $next.classList.add('is-visible');
      },
      onComplete: callback
    });
  },
  turnColor: function turnColor(_ref5) {
    var color1 = _ref5.color1,
        color2 = _ref5.color2;
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(':root', {
      duration: 0.4,
      '--gradientColor1': color1,
      '--gradientColor2': color2,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  },
  colorizeDynamicWord: function colorizeDynamicWord(_ref6) {
    var color = _ref6.color;
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelectorAll('.js-title-dynamic span'), {
      duration: 0.4,
      color: color,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  },
  updateSubLine: function updateSubLine(_ref7) {
    var $lineDom = _ref7.$lineDom,
        $textDom = _ref7.$textDom,
        isMobile = _ref7.isMobile,
        speed = _ref7.speed;
    var textWidth = 0;

    if ($textDom !== null) {
      textWidth = $textDom.clientWidth;
      textWidth += isMobile ? 8 : 17;
    }

    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($lineDom, {
      duration: speed ? speed : 0.35,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut,
      width: textWidth
    });
  },
  hideSublineForBlob: function hideSublineForBlob(_ref8) {
    var $dom = _ref8.$dom;
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($dom, {
      duration: 0.35,
      opacity: 0,
      width: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  },
  hideStaticWords: function hideStaticWords() {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelector('.js-title-let'), {
      duration: 0.35,
      opacity: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelector('.js-title-out'), {
      duration: 0.35,
      opacity: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelector('.js-title-there'), {
      duration: 0.35,
      opacity: 0,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  },
  showStaticWords: function showStaticWords() {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelector('.js-title-let'), {
      duration: 0.35,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelector('.js-title-out'), {
      duration: 0.35,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelector('.js-title-there'), {
      duration: 0.35,
      opacity: 1,
      ease: _modules_animationSettings__WEBPACK_IMPORTED_MODULE_1__["Ease"].power3InOut
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (animations);

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

/***/ "./src/scripts/controllers/pages/Home.js":
/*!***********************************************!*\
  !*** ./src/scripts/controllers/pages/Home.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Page */ "./src/scripts/controllers/Page.js");
/* harmony import */ var _config_SectionSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config/SectionSettings */ "./src/config/SectionSettings.js");
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/store */ "./src/scripts/modules/store.js");
/* harmony import */ var _components_intro_Intro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/intro/Intro */ "./src/scripts/components/intro/Intro.js");
/* harmony import */ var _components_header_menu_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/header/menu/Menu */ "./src/scripts/components/header/menu/Menu.js");
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Slider */ "./src/scripts/components/Slider.js");
/* harmony import */ var _components_title_Title__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/title/Title */ "./src/scripts/components/title/Title.js");
/* harmony import */ var _components_sections_play_PlaySection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/sections/play/PlaySection */ "./src/scripts/components/sections/play/PlaySection.js");
/* harmony import */ var _components_Background__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Background */ "./src/scripts/components/Background.js");
/* harmony import */ var _components_sections_Section__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/sections/Section */ "./src/scripts/components/sections/Section.js");
/* harmony import */ var _components_header_Logo_Logo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/header/Logo/Logo */ "./src/scripts/components/header/Logo/Logo.js");
/* harmony import */ var _components_pagination_Pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/pagination/Pagination */ "./src/scripts/components/pagination/Pagination.js");
/* harmony import */ var _components_scroll_suggestion_ScrollSuggestion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/scroll-suggestion/ScrollSuggestion */ "./src/scripts/components/scroll-suggestion/ScrollSuggestion.js");
/* harmony import */ var _components_sections_contact_ContactSection__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/sections/contact/ContactSection */ "./src/scripts/components/sections/contact/ContactSection.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/Form */ "./src/scripts/components/Form/index.js");
/* harmony import */ var _components_RotateDevice__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/RotateDevice */ "./src/scripts/components/RotateDevice.js");








 // components















var Home = /*#__PURE__*/function (_Page) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Home, _Page);

  function Home() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Home);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Home).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Home, null, [{
    key: "init",
    value: function init() {
      var _this = this;

      // initialize and store all the sections from config objects
      this.__createSections();

      this.prevSection = null;
      this.title = new _components_title_Title__WEBPACK_IMPORTED_MODULE_12__["default"]({
        overCallback: this.showBlob,
        outCallback: this.hideBlob,
        toggleCallback: this.toggleBlobForMobile
      });
      this.background = new _components_Background__WEBPACK_IMPORTED_MODULE_14__["default"]();
      this.slider = new _components_Slider__WEBPACK_IMPORTED_MODULE_11__["default"]({
        onChange: this.goTo
      });
      this.menu = new _components_header_menu_Menu__WEBPACK_IMPORTED_MODULE_10__["default"]({
        onClick: this.goTo,
        onOpen: this.__onMenuOpen,
        onClose: this.__onMenuClose
      });
      this.headerLogo = new _components_header_Logo_Logo__WEBPACK_IMPORTED_MODULE_16__["default"]({
        onClick: function onClick() {
          _this.goTo(_modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].sections[0], 'up');
        }
      });
      this.pagination = new _components_pagination_Pagination__WEBPACK_IMPORTED_MODULE_17__["default"]({
        onClick: this.goTo
      });
      this.scrollSuggestion = new _components_scroll_suggestion_ScrollSuggestion__WEBPACK_IMPORTED_MODULE_18__["default"]({
        onClick: this.goTo
      });
      this.form = new _components_Form__WEBPACK_IMPORTED_MODULE_20__["default"]({
        onResultCallback: this.slider.initEventListeners
      });
      new _components_RotateDevice__WEBPACK_IMPORTED_MODULE_21__["default"](); // init intro animation

      this.intro = new _components_intro_Intro__WEBPACK_IMPORTED_MODULE_9__["default"]({
        onComplete: this.showFirstSection
      });

      window.onbeforeunload = function () {
        this.document.body.innerHTML = '';
      };

      window.onresize = this.resize;
      window.onorientationchange = this.resize; // this.resize()
    }
  }]);

  return Home;
}(_Page__WEBPACK_IMPORTED_MODULE_6__["default"]);

Home.showFirstSection = function () {
  var $domElement = document.querySelector('.js-content');
  document.body.classList.add('app-is-ready');
  $domElement.style.opacity = 1;
  $domElement.style.pointerEvents = 'all';
  $domElement.classList.add('is-active');
  Home.menu.show();
  Home.headerLogo.show();
  Home.title.show(); // show home section

  _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].sections[0].activate();
  _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].sections[0].enter();
  Home.setThemeBlack(); // setup general view

  Home.scrollSuggestion.show();
  Home.scrollSuggestion.update();
  Home.slider.initEventListeners();
};

Home.goTo = function (section, direction) {
  if (section == _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection) {
    return;
  }

  Home.slider.removeEventListeners(); // 1- Update blob

  Home.updateBlobStatus(); // 2- update selected store

  Home.prevSection = _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection;
  _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection = section; // 3- update menu

  Home.menu.selectMenuItem();

  switch (section.id) {
    case 'contact':
      Home.goToContact();
      break;

    case 'play':
      Home.goToPlay(direction);
      break;

    default:
      Home.goToSection(direction);
      break;
  } // 4- update scroll position


  Home.scrollSuggestion.update();
};

Home.goToPlay = function (direction) {
  Home.title.animate(direction);
  Home.title.fadeIn();
  Home.prevSection.exit(function () {
    // update title position, bring to front or back base on the selected section setting
    Home.title.bringTo(_modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection.titlePosition);
  });

  if (_modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].isMobile) {
    Home.setThemeWhite();
  } else {
    Home.setThemeBlack();
  }

  Home.pagination.hide();
  _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection.enter(function () {
    Home.slider.initEventListeners();
    _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection.activate();
  });
  Home.menu.show();
  Home.headerLogo.show();
};

Home.goToContact = function () {
  _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection.prevSection = Home.prevSection;
  Home.slider.removeEventListeners();
  Home.prevSection.fadeOut();
  Home.title.bringTo(_modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection.titlePosition);
  Home.title.fadeOut();
  Home.pagination.hide();
  Home.scrollSuggestion.hide();

  if (_modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].isMobile || _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].isTablet || _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].hasTouch) {
    Home.menu.hide();
    Home.headerLogo.hide();
  }

  Home.setThemeWhite();
  _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection.enter(function () {
    _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection.activate(); // test maz

    Home.prevSection.exit(function () {
      // update title position, bring to front or back base on the selected section setting
      Home.title.bringTo(_modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection.titlePosition);
    });
  });
};

Home.goToSection = function (direction) {
  // update title if the section is not coming from contact
  if (Home.prevSection.id !== 'contact') {
    Home.title.animate(direction);
  } else {
    Home.title.animate(direction);
    Home.title.fadeIn();
    Home.title.updateSubline(0);
  }

  Home.pagination.show(); // enter/exit animations based on the requested section

  Home.prevSection.exit(function () {
    // update title position, bring to front or back base on the selected section setting
    Home.title.bringTo(_modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection.titlePosition);
  });
  _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection.enter(function () {
    Home.slider.initEventListeners();
    _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection.activate();
  });
  Home.menu.show();
  Home.headerLogo.show();
  Home.setThemeWhite();
};

Home.setThemeBlack = function () {
  Home.background.black();
  Home.title.white();
};

Home.setThemeWhite = function () {
  Home.background.white();
  Home.title.black();
};

Home.updateBlobStatus = function () {
  if (_modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].isBlobVisible) {
    switch (_modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].isMobile) {
      case true:
        Home.toggleBlobForMobile();
        break;

      case false:
        Home.hideBlob();
        break;
    }
  }
};

Home.showBlob = function () {
  _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection.showBlob();
  Home.title.convertToBlobTitle();
  Home.pagination.hide();
  Home.slider.removeEventListeners();

  if (!_modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].isMobileOrTabletPortrait) {
    Home.menu.fadeOut();
  }
};

Home.hideBlob = function () {
  _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection.hideBlob();
  Home.title.convertToStandardTitle();
  Home.pagination.show();
  Home.slider.initEventListeners();

  if (!_modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].isMobileOrTabletPortrait) {
    Home.menu.fadeIn();
  }
};

Home.toggleBlobForMobile = function () {
  if (_modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].isBlobVisible) {
    Home.hideBlob();
    Home.title.showStaticWords();
  } else {
    Home.showBlob();
    Home.title.hideStaticWords();
  }

  _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].isBlobVisible = !_modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].isBlobVisible;
};

Home.resize = function () {
  if (Home.title) {
    Home.title.resize();
  }

  document.body.style.maxHeight = "".concat(window.innerHeight, "px"); // fix bug on safari during the rotation of the device

  if (_modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].isMobile && _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].isSafariMobile) {
    setTimeout(function () {
      document.body.style.maxHeight = "".concat(window.innerHeight, "px");
    }, 500);
  }

  _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection.resize();

  if (_modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].isTablet && _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].isBlobVisible) {
    switch (_modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].isPortrait) {
      case true:
        Home.menu.fadeIn();
        break;

      case false:
      default:
        Home.menu.fadeOut();
        break;
    }
  }

  Home.scrollSuggestion.update();
};

Home.__createSections = function () {
  // create sections
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var sectionObj = _step.value;
      var newSection = null;
      sectionObj.blobCallback = Home.updateBlobStatus;

      switch (sectionObj.id) {
        case 'play':
          newSection = new _components_sections_play_PlaySection__WEBPACK_IMPORTED_MODULE_13__["default"](sectionObj);
          newSection.mouseOverCallback = Home.setThemeWhite;
          newSection.mouseOutCallback = Home.setThemeBlack;
          break;

        case 'contact':
          newSection = new _components_sections_contact_ContactSection__WEBPACK_IMPORTED_MODULE_19__["default"]({
            data: sectionObj,
            backHandler: function backHandler() {
              if (Home.form.isLastStep) {
                Home.form.reset();
              }

              Home.goTo(newSection.prevSection, 'up');
            }
          });
          break;

        default:
          newSection = new _components_sections_Section__WEBPACK_IMPORTED_MODULE_15__["default"](sectionObj);
          break;
      }

      _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].sections.push(newSection);
    };

    for (var _iterator = _config_SectionSettings__WEBPACK_IMPORTED_MODULE_7__["default"].sections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    } // create connections between sections

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

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].sections.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step2.value, 2),
          index = _step2$value[0],
          section = _step2$value[1];

      // next
      if (index < _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].sections.length - 1) {
        section.nextSection = _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].sections[index + 1];
      } // prev (set the previous from "think" section)


      if (index > 1) {
        section.prevSection = _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].sections[index - 1];
      }
    } // select first section

  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection = _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].sections[0];
};

Home.__onMenuOpen = function () {
  Home.pagination.hide();
  _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection.hideIcons();
};

Home.__onMenuClose = function () {
  if (_modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection.hasPagination) {
    Home.pagination.show();
  }

  _modules_store__WEBPACK_IMPORTED_MODULE_8__["default"].selectedSection.showIcons();
};



/***/ }),

/***/ "./src/scripts/modules/WheelManager.js":
/*!*********************************************!*\
  !*** ./src/scripts/modules/WheelManager.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WheelManager; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/scripts/modules/store.js");



var WheelManager = function WheelManager(_ref) {
  var _this = this;

  var onWheelStart = _ref.onWheelStart;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, WheelManager);

  this.initEventListener = function () {
    var $dom = document.querySelector(".js-section[data-id=".concat(_store__WEBPACK_IMPORTED_MODULE_1__["default"].selectedSection.id, "]"));

    if ($dom !== null) {
      $dom.addEventListener('wheel', _this.__manageEvent, {
        passive: true
      });
    }
  };

  this.__manageEvent = function (e) {
    e.stopPropagation();

    switch (_this.__getDirection(e)) {
      case 'up':
        if (_store__WEBPACK_IMPORTED_MODULE_1__["default"].selectedSection.prevSection !== null) {
          _this.__dispatchEvent(e);
        }

        break;

      case 'down':
        if (_store__WEBPACK_IMPORTED_MODULE_1__["default"].selectedSection.nextSection !== null) {
          _this.__dispatchEvent(e);
        }

        break;
    }

    return false;
  };

  this.__dispatchEvent = function (e) {
    var $dom = e.target.closest('.js-section');
    $dom.removeEventListener('wheel', _this.__manageEvent);

    if (_this.wheelStartCallback !== null) {
      _this.wheelStartCallback(e);
    }

    return false;
  };

  this.__getDirection = function (e) {
    if (_store__WEBPACK_IMPORTED_MODULE_1__["default"].hasTouch) {
      return e.direction === 16 ? 'up' : 'down';
    }

    return e.deltaY < 0 ? 'up' : 'down';
  };

  this.marker = true;
  this.counter1 = 0;
  this.counter2;
  this.interval = 50;
  this.wheelStartCallback = onWheelStart;
};



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
//# sourceMappingURL=Home.js.map