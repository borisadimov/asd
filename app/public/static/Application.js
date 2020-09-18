(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Application"],{

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@ciffi-js/device/device.js":
/*!*************************************************!*\
  !*** ./node_modules/@ciffi-js/device/device.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (function() {
  var _html = document.querySelector('html')
  _html.className += ' ' + checkIe()
  _html.className += ' ' + checkSafari()
  _html.className += ' ' + checkPlatform()
  _html.className += ' ' + checkTouch()
  _html.className += ' ' + androidVersion()

  return {
    websocket: typeof window.WebSocket === 'function',
    webgl: detectWebGLContext(),
    touch: 'ontouchstart' in document.documentElement,
    isIe: checkIe()
  }

  function detectWebGLContext() {
    var canvas = document.createElement('canvas')
    var gl =
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    return gl && gl instanceof WebGLRenderingContext
  }

  function checkSafari() {
    var _ua = window.navigator.userAgent
    if (
      _ua.indexOf('Safari') != -1 &&
      _ua.indexOf('Chrome') === -1 &&
      _ua.indexOf('Mobile') === -1 &&
      _ua.indexOf('iPhone') === -1
    ) {
      return 'safari'
    } else {
      return ''
    }
  }

  function checkIe() {
    var _ua = window.navigator.userAgent
    var _version
    var _msie
    var _trident
    var _edge

    _msie = _ua.indexOf('MSIE ')
    if (_msie > 0) {
      _version = parseInt(_ua.substring(_msie + 5, _ua.indexOf('.', _msie)), 10)
      return 'ie' + _version
    }

    _trident = _ua.indexOf('Trident/')
    if (_trident > 0) {
      var _rv = _ua.indexOf('rv:')
      _version = parseInt(_ua.substring(_rv + 3, _ua.indexOf('.', _rv)), 10)
      return 'ie' + _version
    }

    _edge = _ua.indexOf('Edge/')
    if (_edge > 0) {
      _version = parseInt(_ua.substring(_edge + 5, _ua.indexOf('.', _edge)), 10)
      return 'edge' + _version
    }

    // return 'ie11';
    return 'not-ie'
  }

  function androidVersion() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera
    var _version = 'no-android'

    if (/android/i.test(userAgent)) {
      if (userAgent.indexOf('Android 5.') >= 0) {
        _version = 'android-5'
      } else {
        _version = 'android-4'
      }

      if (userAgent.indexOf('Chrome') >= 0 && userAgent.indexOf('Safari')) {
        _version += ' android-chrome'
      }
    }

    return _version
  }

  function checkPlatform() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera

    // Windows Phone must come first because its UA also contains 'Android'
    if (/windows phone/i.test(userAgent)) {
      return 'Windows Phone'
    }

    if (/android/i.test(userAgent)) {
      return 'Android'
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'iOS'
    }

    return 'no-device'
  }

  function checkTouch() {
    if (
      checkPlatform() === 'no-device' &&
      'ontouchstart' in document.documentElement
    ) {
      return 'no-touch'
    } else if ('ontouchstart' in document.documentElement) {
      return 'touch'
    } else {
      return 'no-touch'
    }
  }
})()


/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Config = {
  projectName: 'jungles-site',
  env: 'dev',
  baseUrl: "".concat(window.location.protocol, "//").concat(window.location.host),
  apiUrl: "".concat(window.location.protocol, "//").concat(window.location.host, "/"),
  shareUrl: "".concat(window.location.protocol, "//").concat(window.location.host, "/"),
  assetsUrl: "".concat(window.location.protocol, "//").concat(window.location.host, "/static/")
};
/* harmony default export */ __webpack_exports__["default"] = (Config);

/***/ }),

/***/ "./src/config/routes.js":
/*!******************************!*\
  !*** ./src/config/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Routes; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Routes = /*#__PURE__*/function () {
  function Routes() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Routes);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Routes, null, [{
    key: "load",
    value: function load(currentRoute, pageProps) {
      switch (currentRoute) {
        case 'editorial':
          Promise.all(/*! import() | Editorial */[__webpack_require__.e("vendors~Editorial~Home"), __webpack_require__.e("Editorial")]).then(__webpack_require__.bind(null, /*! ../scripts/controllers/pages/Editorial */ "./src/scripts/controllers/pages/Editorial.js")).then(function (module) {
            return module["default"].init(pageProps);
          });
          break;

        case 'privacy':
          Promise.all(/*! import() | Editorial */[__webpack_require__.e("vendors~Editorial~Home"), __webpack_require__.e("Editorial")]).then(__webpack_require__.bind(null, /*! ../scripts/controllers/pages/Privacy */ "./src/scripts/controllers/pages/Privacy.js")).then(function (module) {
            return module["default"].init(pageProps);
          });
          break;

        default:
          Promise.all(/*! import() | Home */[__webpack_require__.e("vendors~Editorial~Home"), __webpack_require__.e("vendors~Home"), __webpack_require__.e("Home")]).then(__webpack_require__.bind(null, /*! ../scripts/controllers/pages/Home */ "./src/scripts/controllers/pages/Home.js")).then(function (module) {
            return module["default"].init(pageProps);
          });
      }
    }
  }]);

  return Routes;
}();



/***/ }),

/***/ "./src/scripts/controllers/Application.js":
/*!************************************************!*\
  !*** ./src/scripts/controllers/Application.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config.js */ "./src/config/config.js");
/* harmony import */ var _ciffi_js_device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ciffi-js/device */ "./node_modules/@ciffi-js/device/device.js");
/* harmony import */ var _ciffi_js_device__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ciffi_js_device__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/Router */ "./src/scripts/modules/Router.js");

// config

 // router


/* harmony default export */ __webpack_exports__["default"] = (new function Application() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Application);

  this.config = _config_config_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  new _modules_Router__WEBPACK_IMPORTED_MODULE_3__["default"]({
    config: this.config
  });
}());

/***/ }),

/***/ "./src/scripts/modules/Router.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/Router.js ***!
  \***************************************/
/*! exports provided: getCurrentRoute, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentRoute", function() { return getCurrentRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Router; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_routes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/routes.js */ "./src/config/routes.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/*export const getMainRoute = el => {
  const _el = document.querySelector(el)
  if (!_el) {
    return ''
  }
  return _el.dataset.route.split('/')[0]
}*/

var getCurrentRoute = function getCurrentRoute(el) {
  var _el = document.querySelector(el);

  if (!_el) {
    return '';
  }

  return _el.dataset.route;
};

var Router = function Router() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Router);

  var _props$el = props.el,
      el = _props$el === void 0 ? '.js-app' : _props$el,
      currentRoute = props.currentRoute;
  this.el = el;
  this.currentRoute = currentRoute || getCurrentRoute(this.el);

  var pageProps = _objectSpread({}, props, {
    el: this.el,
    currentRoute: this.currentRoute
  });

  _config_routes_js__WEBPACK_IMPORTED_MODULE_2__["default"].load(this.currentRoute, pageProps);
};



/***/ })

}]);
//# sourceMappingURL=Application.js.map