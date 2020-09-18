(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/main.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/styles/main.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../fonts/DINCondensed-Bold.woff */ "./src/fonts/DINCondensed-Bold.woff"));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../fonts/HKGrotesk-Regular.woff */ "./src/fonts/HKGrotesk-Regular.woff"));
var ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../fonts/HKGrotesk-SemiBold.woff */ "./src/fonts/HKGrotesk-SemiBold.woff"));
var ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ../fonts/HKGrotesk-Bold.woff */ "./src/fonts/HKGrotesk-Bold.woff"));
var ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(/*! ../images/mobile/study.jpg */ "./src/images/mobile/study.jpg"));
var ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(/*! ../images/desktop/study@2x.jpg */ "./src/images/desktop/study@2x.jpg"));
var ___CSS_LOADER_URL___6___ = getUrl(__webpack_require__(/*! ../images/mobile/think.jpg */ "./src/images/mobile/think.jpg"));
var ___CSS_LOADER_URL___7___ = getUrl(__webpack_require__(/*! ../images/desktop/think@2x.jpg */ "./src/images/desktop/think@2x.jpg"));
var ___CSS_LOADER_URL___8___ = getUrl(__webpack_require__(/*! ../images/mobile/move.jpg */ "./src/images/mobile/move.jpg"));
var ___CSS_LOADER_URL___9___ = getUrl(__webpack_require__(/*! ../images/desktop/move@2x.jpg */ "./src/images/desktop/move@2x.jpg"));
var ___CSS_LOADER_URL___10___ = getUrl(__webpack_require__(/*! ../images/mobile/connect.jpg */ "./src/images/mobile/connect.jpg"));
var ___CSS_LOADER_URL___11___ = getUrl(__webpack_require__(/*! ../images/desktop/connect@2x.jpg */ "./src/images/desktop/connect@2x.jpg"));
var ___CSS_LOADER_URL___12___ = getUrl(__webpack_require__(/*! ../images/arrow.svg */ "./src/images/arrow.svg"));
var ___CSS_LOADER_URL___13___ = getUrl(__webpack_require__(/*! ../images/checkbox.svg */ "./src/images/checkbox.svg"));
var ___CSS_LOADER_URL___14___ = getUrl(__webpack_require__(/*! ../images/smile_mini.svg */ "./src/images/smile_mini.svg"));
var ___CSS_LOADER_URL___15___ = getUrl(__webpack_require__(/*! ../images/smile.svg */ "./src/images/smile.svg"));
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block; }\n\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n  display: none; }\n\nbody {\n  line-height: 1; }\n\nmenu, ol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n@font-face {\n  font-family: 'DINCondensed-Bold';\n  font-style: normal;\n  font-weight: normal;\n  src: local(\"DINCondensed-Bold\"), url(" + ___CSS_LOADER_URL___0___ + ") format(\"woff\"); }\n\n@font-face {\n  font-family: 'HKGrotesk-Regular';\n  font-style: normal;\n  font-weight: normal;\n  src: local(\"HKGrotesk-Regular\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"woff\"); }\n\n@font-face {\n  font-family: 'HKGrotesk-Regular';\n  font-style: normal;\n  font-weight: 600;\n  src: local(\"HKGrotesk-SemiBold\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff\"); }\n\n@font-face {\n  font-family: 'HKGrotesk-Regular';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"HKGrotesk-Bold\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"); }\n\n.grid {\n  width: 100%;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0;\n  overflow: hidden; }\n\n.grid--no-overflow {\n  overflow: initial; }\n\n.col {\n  float: left; }\n  @media (min-width: 1024px) {\n    .col {\n      padding-left: 20px;\n      padding-right: 20px; } }\n  .col:first-child:not(:last-child) {\n    padding-left: 0; }\n  .col:last-child:not(:first-child) {\n    padding-right: 0; }\n\n.col--no-padding {\n  padding-left: 0;\n  padding-right: 0; }\n\n.col--0 {\n  width: calc((100% / 12) * 0); }\n\n.col-gap--0 {\n  margin-left: calc((100% / 12) * 0); }\n\n@media (min-width: 1024px) {\n  .col--0--desk {\n    width: calc((100% / 12) * 0) !important; } }\n\n@media (min-width: 1024px) {\n  .col-gap--0--desk {\n    margin-left: calc((100% / 12) * 0) !important; } }\n\n.col--1 {\n  width: calc((100% / 12) * 1); }\n\n.col-gap--1 {\n  margin-left: calc((100% / 12) * 1); }\n\n@media (min-width: 1024px) {\n  .col--1--desk {\n    width: calc((100% / 12) * 1) !important; } }\n\n@media (min-width: 1024px) {\n  .col-gap--1--desk {\n    margin-left: calc((100% / 12) * 1) !important; } }\n\n.col--2 {\n  width: calc((100% / 12) * 2); }\n\n.col-gap--2 {\n  margin-left: calc((100% / 12) * 2); }\n\n@media (min-width: 1024px) {\n  .col--2--desk {\n    width: calc((100% / 12) * 2) !important; } }\n\n@media (min-width: 1024px) {\n  .col-gap--2--desk {\n    margin-left: calc((100% / 12) * 2) !important; } }\n\n.col--3 {\n  width: calc((100% / 12) * 3); }\n\n.col-gap--3 {\n  margin-left: calc((100% / 12) * 3); }\n\n@media (min-width: 1024px) {\n  .col--3--desk {\n    width: calc((100% / 12) * 3) !important; } }\n\n@media (min-width: 1024px) {\n  .col-gap--3--desk {\n    margin-left: calc((100% / 12) * 3) !important; } }\n\n.col--4 {\n  width: calc((100% / 12) * 4); }\n\n.col-gap--4 {\n  margin-left: calc((100% / 12) * 4); }\n\n@media (min-width: 1024px) {\n  .col--4--desk {\n    width: calc((100% / 12) * 4) !important; } }\n\n@media (min-width: 1024px) {\n  .col-gap--4--desk {\n    margin-left: calc((100% / 12) * 4) !important; } }\n\n.col--5 {\n  width: calc((100% / 12) * 5); }\n\n.col-gap--5 {\n  margin-left: calc((100% / 12) * 5); }\n\n@media (min-width: 1024px) {\n  .col--5--desk {\n    width: calc((100% / 12) * 5) !important; } }\n\n@media (min-width: 1024px) {\n  .col-gap--5--desk {\n    margin-left: calc((100% / 12) * 5) !important; } }\n\n.col--6 {\n  width: calc((100% / 12) * 6); }\n\n.col-gap--6 {\n  margin-left: calc((100% / 12) * 6); }\n\n@media (min-width: 1024px) {\n  .col--6--desk {\n    width: calc((100% / 12) * 6) !important; } }\n\n@media (min-width: 1024px) {\n  .col-gap--6--desk {\n    margin-left: calc((100% / 12) * 6) !important; } }\n\n.col--7 {\n  width: calc((100% / 12) * 7); }\n\n.col-gap--7 {\n  margin-left: calc((100% / 12) * 7); }\n\n@media (min-width: 1024px) {\n  .col--7--desk {\n    width: calc((100% / 12) * 7) !important; } }\n\n@media (min-width: 1024px) {\n  .col-gap--7--desk {\n    margin-left: calc((100% / 12) * 7) !important; } }\n\n.col--8 {\n  width: calc((100% / 12) * 8); }\n\n.col-gap--8 {\n  margin-left: calc((100% / 12) * 8); }\n\n@media (min-width: 1024px) {\n  .col--8--desk {\n    width: calc((100% / 12) * 8) !important; } }\n\n@media (min-width: 1024px) {\n  .col-gap--8--desk {\n    margin-left: calc((100% / 12) * 8) !important; } }\n\n.col--9 {\n  width: calc((100% / 12) * 9); }\n\n.col-gap--9 {\n  margin-left: calc((100% / 12) * 9); }\n\n@media (min-width: 1024px) {\n  .col--9--desk {\n    width: calc((100% / 12) * 9) !important; } }\n\n@media (min-width: 1024px) {\n  .col-gap--9--desk {\n    margin-left: calc((100% / 12) * 9) !important; } }\n\n.col--10 {\n  width: calc((100% / 12) * 10); }\n\n.col-gap--10 {\n  margin-left: calc((100% / 12) * 10); }\n\n@media (min-width: 1024px) {\n  .col--10--desk {\n    width: calc((100% / 12) * 10) !important; } }\n\n@media (min-width: 1024px) {\n  .col-gap--10--desk {\n    margin-left: calc((100% / 12) * 10) !important; } }\n\n.col--11 {\n  width: calc((100% / 12) * 11); }\n\n.col-gap--11 {\n  margin-left: calc((100% / 12) * 11); }\n\n@media (min-width: 1024px) {\n  .col--11--desk {\n    width: calc((100% / 12) * 11) !important; } }\n\n@media (min-width: 1024px) {\n  .col-gap--11--desk {\n    margin-left: calc((100% / 12) * 11) !important; } }\n\n.col--12 {\n  width: calc((100% / 12) * 12); }\n\n.col-gap--12 {\n  margin-left: calc((100% / 12) * 12); }\n\n@media (min-width: 1024px) {\n  .col--12--desk {\n    width: calc((100% / 12) * 12) !important; } }\n\n@media (min-width: 1024px) {\n  .col-gap--12--desk {\n    margin-left: calc((100% / 12) * 12) !important; } }\n\nhtml {\n  font-size: 100%;\n  font-weight: 400; }\n\n.page-paragraph {\n  font-family: \"HKGrotesk-Regular\", sans-serif; }\n\nstrong {\n  font-weight: 700; }\n\n.hamburger {\n  position: fixed;\n  width: 16.25rem;\n  height: 16.25rem;\n  border-radius: 50%;\n  top: 0;\n  right: 0;\n  overflow: hidden;\n  -webkit-transform: translate(50%, -50%);\n      -ms-transform: translate(50%, -50%);\n          transform: translate(50%, -50%);\n  z-index: 200;\n  opacity: 1;\n  cursor: pointer; }\n  .hamburger span {\n    position: absolute;\n    display: block;\n    width: 1.875rem;\n    height: 0.125rem;\n    background-color: #ffffff;\n    -webkit-transition: all 0.25s ease-out 0s;\n    -o-transition: all 0.25s ease-out 0s;\n    transition: all 0.25s ease-out 0s; }\n    .is-white .hamburger span {\n      background-color: #000000; }\n    .hamburger span:nth-child(1) {\n      top: 0; }\n    .hamburger span:nth-child(2) {\n      top: 50%;\n      -webkit-transform: translate(0, -50%);\n          -ms-transform: translate(0, -50%);\n              transform: translate(0, -50%); }\n    .hamburger span:nth-child(3) {\n      bottom: 0; }\n  .no-touch body:not(.has-menu) .hamburger:hover span {\n    background-color: #000000; }\n  .has-menu .hamburger span {\n    background-color: #000000; }\n    .has-menu .hamburger span:nth-child(1) {\n      top: 50%;\n      -webkit-transform: translate(0, -50%) rotate(45deg);\n          -ms-transform: translate(0, -50%) rotate(45deg);\n              transform: translate(0, -50%) rotate(45deg); }\n    .has-menu .hamburger span:nth-child(2) {\n      opacity: 0; }\n    .has-menu .hamburger span:nth-child(3) {\n      bottom: 50%;\n      -webkit-transform: translate(0, 50%) rotate(-45deg);\n          -ms-transform: translate(0, 50%) rotate(-45deg);\n              transform: translate(0, 50%) rotate(-45deg); }\n\n.hamburger__wrapper {\n  position: absolute;\n  width: 1.875rem;\n  height: 1.125rem;\n  top: calc(50% + 2.375rem);\n  right: calc(50% - 2.5rem);\n  cursor: pointer; }\n\n.main-menu {\n  position: fixed;\n  width: 16.25rem;\n  height: 16.25rem;\n  border-radius: 50%;\n  top: 0;\n  right: 0;\n  background-color: transparent;\n  overflow: hidden;\n  -webkit-transform: translate(50%, -50%) scale(0);\n      -ms-transform: translate(50%, -50%) scale(0);\n          transform: translate(50%, -50%) scale(0);\n  z-index: 102; }\n  .has-menu .main-menu {\n    width: 200vh;\n    height: 200vh;\n    top: 50%;\n    right: 50%;\n    -webkit-transform: translate(50%, -50%);\n        -ms-transform: translate(50%, -50%);\n            transform: translate(50%, -50%);\n    border-radius: 50%; }\n    @media (min-width: 1024px) {\n      .has-menu .main-menu {\n        width: calc((100vw * 2) - 8.75rem);\n        height: calc((100vw * 2) - 8.75rem);\n        top: 50%;\n        right: 0;\n        -webkit-transform: translate(100vw, -50%);\n            -ms-transform: translate(100vw, -50%);\n                transform: translate(100vw, -50%);\n        border-radius: 50%; } }\n\n.main-menu__nav {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  top: calc(50% - 40px);\n  right: calc(50% + 2.8125rem);\n  -webkit-transform: translate(50vw, -50%);\n      -ms-transform: translate(50vw, -50%);\n          transform: translate(50vw, -50%);\n  text-align: right;\n  width: 9.375rem; }\n  @media (min-width: 1024px) {\n    .main-menu__nav {\n      top: calc(50% - 78px);\n      right: calc(100vw + 12.5rem);\n      -webkit-transform: translate(0, -50%);\n          -ms-transform: translate(0, -50%);\n              transform: translate(0, -50%); } }\n\n.main-menu__item {\n  position: relative;\n  display: inline-block;\n  -webkit-transform: translateX(6.25rem);\n      -ms-transform: translateX(6.25rem);\n          transform: translateX(6.25rem);\n  opacity: 0;\n  margin-bottom: 1.25rem;\n  cursor: pointer;\n  font-family: \"DINCondensed-Bold\", sans-serif;\n  font-size: 2.5rem; }\n  @media (min-width: 1024px) {\n    .main-menu__item {\n      margin-bottom: 2rem; } }\n  .main-menu__item:after {\n    content: '';\n    display: block;\n    height: 0.125rem;\n    background-color: #000000;\n    width: 100%;\n    -webkit-transform: scale(0, 1);\n        -ms-transform: scale(0, 1);\n            transform: scale(0, 1);\n    -webkit-transition: all 0.15s ease-in-out;\n    -o-transition: all 0.15s ease-in-out;\n    transition: all 0.15s ease-in-out; }\n  .main-menu__item:hover:after {\n    -webkit-transform: scale(1, 1);\n        -ms-transform: scale(1, 1);\n            transform: scale(1, 1); }\n  .main-menu__item:last-child {\n    margin-bottom: 0; }\n\n.main-menu__bottom {\n  font-family: \"HKGrotesk-Regular\", sans-serif;\n  color: #000000;\n  display: block;\n  text-align: right;\n  opacity: 0;\n  position: absolute;\n  right: calc(50% - 50vw + 2.8125rem);\n  width: 100%;\n  text-align: right;\n  -webkit-transform: translateX(6.25rem);\n      -ms-transform: translateX(6.25rem);\n          transform: translateX(6.25rem);\n  bottom: calc(50vh + 80px);\n  font-size: 0.8125rem;\n  line-height: 1.125rem;\n  font-size: 0.5625rem;\n  line-height: 0.875rem; }\n  @media (min-width: 768px) {\n    .main-menu__bottom {\n      font-size: 0.8125rem;\n      line-height: 1.125rem; } }\n  @media (min-width: 1024px) {\n    .main-menu__bottom {\n      font-size: 0.875rem;\n      bottom: calc(50% - 50vh + 4.375rem);\n      right: calc(100vw + 196px);\n      -webkit-transform: translateX(6.25rem);\n          -ms-transform: translateX(6.25rem);\n              transform: translateX(6.25rem);\n      width: auto; } }\n  .main-menu__bottom:before {\n    content: '';\n    position: absolute;\n    top: -20px;\n    right: 0;\n    width: 100%;\n    height: 1px;\n    background: #000000;\n    opacity: 0.2;\n    display: none; }\n    @media (min-width: 1024px) {\n      .main-menu__bottom:before {\n        width: 30.875rem;\n        display: block; } }\n  .main-menu__bottom a {\n    color: #000000; }\n\n.main-menu__contact {\n  display: inline-block;\n  cursor: pointer;\n  text-decoration: underline; }\n\n.main-menu__social {\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 6px; }\n\n.main-menu__socialicon {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  margin-right: 24px; }\n  @media (min-width: 1024px) {\n    .main-menu__socialicon {\n      height: 18px; } }\n  .main-menu__socialicon:last-child {\n    margin-right: 0;\n    width: auto; }\n    .main-menu__socialicon:last-child img {\n      min-height: 24px; }\n\n.main-menu-background {\n  background: #0bffae;\n  width: 16.25rem;\n  height: 16.25rem;\n  border-radius: 50%;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 101;\n  display: none; }\n\n.maintitle {\n  font-family: \"DINCondensed-Bold\", sans-serif;\n  display: none;\n  visibility: hidden;\n  opacity: 0;\n  position: absolute;\n  text-align: right;\n  font-size: 4.375rem;\n  color: #fff;\n  width: 100%;\n  height: 256px;\n  bottom: -256px;\n  z-index: 0;\n  pointer-events: none;\n  cursor: pointer; }\n  @media (min-width: 768px) {\n    .maintitle {\n      right: 50%;\n      bottom: auto;\n      top: calc(50% + 34px);\n      -webkit-transform: translate(50%, 50vh);\n          -ms-transform: translate(50%, 50vh);\n              transform: translate(50%, 50vh);\n      text-align: center;\n      height: 254px; } }\n\n.maintitle--blob {\n  z-index: 200 !important;\n  pointer-events: all; }\n\n.maintitle__front {\n  z-index: 200;\n  pointer-events: all; }\n  @media (min-width: 768px) {\n    .maintitle__front {\n      z-index: 0; } }\n\n.maintitle__word {\n  position: absolute;\n  right: 50%;\n  width: auto;\n  text-align: right;\n  -webkit-transform: translateX(50%);\n      -ms-transform: translateX(50%);\n          transform: translateX(50%); }\n  @media (min-width: 768px) {\n    .maintitle__word {\n      width: 200px;\n      -webkit-transform: none;\n          -ms-transform: none;\n              transform: none;\n      text-align: center;\n      right: auto;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n          -ms-transform: translateX(-50%);\n              transform: translateX(-50%);\n      z-index: 10; } }\n\n.maintitle__word--let {\n  top: 0;\n  color: rgb(var(--gradientColor2), var(--gradientColor2), var(--gradientColor2)); }\n  @media (min-width: 768px) {\n    .maintitle__word--let {\n      top: -36px;\n      left: 50%; } }\n\n.maintitle__word--dynamic {\n  top: 66px;\n  right: calc(50% + 46px);\n  width: 200px;\n  height: 70px; }\n  @media (min-width: 768px) {\n    .maintitle__word--dynamic {\n      top: 30px;\n      left: 50%;\n      z-index: 20; } }\n\n.maintitle__word--out {\n  top: 137px;\n  color: rgb(var(--gradientColor2), var(--gradientColor2), var(--gradientColor2)); }\n  @media (min-width: 768px) {\n    .maintitle__word--out {\n      top: 100px;\n      left: 50%;\n      background: -o-linear-gradient(69.31deg, rgba(var(--gradientColor1), var(--gradientColor1), var(--gradientColor1), 1) 37%, rgba(var(--gradientColor2), var(--gradientColor2), var(--gradientColor2), 1) 130%);\n      background: linear-gradient(20.69deg, rgba(var(--gradientColor1), var(--gradientColor1), var(--gradientColor1), 1) 37%, rgba(var(--gradientColor2), var(--gradientColor2), var(--gradientColor2), 1) 130%);\n      -webkit-background-clip: text;\n      background-clip: text;\n      color: transparent; } }\n\n.maintitle__word--there {\n  top: 202px;\n  color: rgb(var(--gradientColor2), var(--gradientColor2), var(--gradientColor2)); }\n  @media (min-width: 768px) {\n    .maintitle__word--there {\n      top: 168px;\n      left: 50%;\n      background: -webkit-gradient(linear, left bottom, left top, color-stop(20%, rgba(var(--gradientColor1), var(--gradientColor1), var(--gradientColor1), 1)), color-stop(250%, rgba(var(--gradientColor2), var(--gradientColor2), var(--gradientColor2), 1)));\n      background: -o-linear-gradient(bottom, rgba(var(--gradientColor1), var(--gradientColor1), var(--gradientColor1), 1) 20%, rgba(var(--gradientColor2), var(--gradientColor2), var(--gradientColor2), 1) 250%);\n      background: linear-gradient(0deg, rgba(var(--gradientColor1), var(--gradientColor1), var(--gradientColor1), 1) 20%, rgba(var(--gradientColor2), var(--gradientColor2), var(--gradientColor2), 1) 250%);\n      -webkit-background-clip: text;\n      background-clip: text;\n      color: transparent; } }\n\n.maintitle__animatable {\n  position: absolute;\n  top: 0;\n  width: 200px;\n  color: rgb(var(--gradientColor2), var(--gradientColor2), var(--gradientColor2)); }\n  @media (min-width: 768px) {\n    .maintitle__animatable {\n      background: -o-linear-gradient(46.85deg, rgba(var(--gradientColor1), var(--gradientColor1), var(--gradientColor1), 1) 31%, rgba(var(--gradientColor2), var(--gradientColor2), var(--gradientColor2), 1) 70%);\n      background: linear-gradient(43.15deg, rgba(var(--gradientColor1), var(--gradientColor1), var(--gradientColor1), 1) 31%, rgba(var(--gradientColor2), var(--gradientColor2), var(--gradientColor2), 1) 70%);\n      -webkit-background-clip: text;\n      background-clip: text;\n      color: transparent; } }\n  .maintitle__animatable span {\n    display: inline-block;\n    background: transparent;\n    -webkit-background-clip: unset;\n    background-clip: unset;\n    color: #000; }\n\n@-moz-document url-prefix() {\n  .maintitle__word--out {\n    background: transparent;\n    -webkit-background-clip: unset;\n    background-clip: unset;\n    color: rgb(var(--gradientColor2), var(--gradientColor2), var(--gradientColor2)); }\n  .maintitle__word--there {\n    background: transparent;\n    -webkit-background-clip: unset;\n    background-clip: unset;\n    color: rgb(var(--gradientColor2), var(--gradientColor2), var(--gradientColor2)); }\n  .maintitle__animatable {\n    background: transparent;\n    -webkit-background-clip: unset;\n    background-clip: unset;\n    color: rgb(var(--gradientColor2), var(--gradientColor2), var(--gradientColor2)); }\n    .maintitle__animatable span {\n      background: transparent;\n      -webkit-background-clip: unset;\n      background-clip: unset;\n      color: rgb(var(--gradientColor2), var(--gradientColor2), var(--gradientColor2)); } }\n\n.maintitle__animatable--hidden {\n  opacity: 0;\n  visibility: hidden; }\n\n.maintitle__subline {\n  position: absolute;\n  width: 154px;\n  height: 4px;\n  background-color: #0bffae;\n  right: -9px;\n  top: 57px;\n  border-radius: 8px;\n  opacity: 0; }\n  @media (min-width: 768px) {\n    .maintitle__subline {\n      right: auto;\n      left: 50%;\n      top: 58px;\n      -webkit-transform: translateX(-50%);\n          -ms-transform: translateX(-50%);\n              transform: translateX(-50%); } }\n\n.description {\n  display: none;\n  opacity: 0;\n  visibility: hidden;\n  text-align: left;\n  font-family: \"HKGrotesk-Regular\", sans-serif;\n  font-size: 18px;\n  line-height: 24px;\n  width: 400px;\n  height: auto;\n  position: absolute;\n  top: calc(50% + 31px);\n  left: calc(50% - 130px); }\n\n.description--blob {\n  display: block;\n  visibility: visible;\n  opacity: 1;\n  color: #fff;\n  z-index: 20;\n  display: none; }\n  @media (min-width: 768px) {\n    .description--blob {\n      display: block; } }\n\n.description--blob-mobile {\n  display: block;\n  top: calc(50% + 23px);\n  width: 100%;\n  left: auto;\n  right: 0;\n  text-align: right;\n  padding-right: 32px;\n  padding-left: 0; }\n  @media (min-width: 768px) {\n    .description--blob-mobile {\n      display: none; } }\n\n.background {\n  z-index: 0; }\n\n.background__icons {\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n  .background__icons svg {\n    position: absolute; }\n\n.background__icons--leaf {\n  position: absolute;\n  width: 34.375rem;\n  left: 50%;\n  bottom: -36rem;\n  -webkit-transform: translate(-50%, 0) scale(0.8);\n      -ms-transform: translate(-50%, 0) scale(0.8);\n          transform: translate(-50%, 0) scale(0.8);\n  height: 36rem; }\n  @media (min-width: 1024px) {\n    .background__icons--leaf {\n      width: 46.875rem;\n      bottom: auto;\n      top: 100%;\n      left: calc(50% - 28px); } }\n  .background__icons--leaf svg:not(:root) {\n    overflow: visible; }\n  .background__icons--leaf svg {\n    transform-box: fill-box; }\n  .background__icons--leaf path {\n    fill: #000000;\n    stroke: #0bffae;\n    stroke-width: 0.1875rem; }\n\n.background__icons--study svg:first-child {\n  top: 1.25rem;\n  left: -5.625rem;\n  -webkit-transform: scale(0.54) rotate(-60deg);\n      -ms-transform: scale(0.54) rotate(-60deg);\n          transform: scale(0.54) rotate(-60deg); }\n  @media (min-width: 768px) {\n    .background__icons--study svg:first-child {\n      top: 2.625rem;\n      left: 1rem;\n      -webkit-transform: scale(1) rotate(0deg);\n          -ms-transform: scale(1) rotate(0deg);\n              transform: scale(1) rotate(0deg); } }\n  @media (min-width: 1024px) {\n    .background__icons--study svg:first-child {\n      top: -1.75rem;\n      left: 1rem;\n      -webkit-transform: scale(1) rotate(0deg);\n          -ms-transform: scale(1) rotate(0deg);\n              transform: scale(1) rotate(0deg); } }\n  @media (min-width: 1025px) {\n    .background__icons--study svg:first-child {\n      top: 1.375rem;\n      left: 6.625rem;\n      -webkit-transform: scale(1) rotate(0deg);\n          -ms-transform: scale(1) rotate(0deg);\n              transform: scale(1) rotate(0deg); } }\n\n.background__icons--study svg:last-child {\n  bottom: -5.625rem;\n  right: -3.125rem;\n  -webkit-transform: scale(0.6) rotate(0deg);\n      -ms-transform: scale(0.6) rotate(0deg);\n          transform: scale(0.6) rotate(0deg); }\n  @media (min-width: 768px) {\n    .background__icons--study svg:last-child {\n      bottom: 2.375rem;\n      right: 1.25rem;\n      -webkit-transform: scale(1) rotate(-60deg);\n          -ms-transform: scale(1) rotate(-60deg);\n              transform: scale(1) rotate(-60deg); } }\n  @media (min-width: 1024px) {\n    .background__icons--study svg:last-child {\n      bottom: -2rem;\n      right: 0.375rem;\n      -webkit-transform: scale(1) rotate(-60deg);\n          -ms-transform: scale(1) rotate(-60deg);\n              transform: scale(1) rotate(-60deg); } }\n  @media (min-width: 1025px) {\n    .background__icons--study svg:last-child {\n      bottom: 2.375rem;\n      right: 6.625rem;\n      -webkit-transform: scale(1) rotate(-60deg);\n          -ms-transform: scale(1) rotate(-60deg);\n              transform: scale(1) rotate(-60deg); } }\n\n.background__icons--think svg:first-child {\n  top: 2.25rem;\n  left: -3.3125rem;\n  -webkit-transform: scale(0.68);\n      -ms-transform: scale(0.68);\n          transform: scale(0.68); }\n  @media (min-width: 768px) {\n    .background__icons--think svg:first-child {\n      top: 0rem;\n      left: 5.375rem;\n      -webkit-transform: scale(1);\n          -ms-transform: scale(1);\n              transform: scale(1); } }\n  @media (min-width: 1024px) {\n    .background__icons--think svg:first-child {\n      top: 0rem;\n      left: 7rem; } }\n\n.background__icons--think svg:last-child {\n  bottom: -4.625rem;\n  right: -4.375rem;\n  -webkit-transform: scale(0.6) rotate(180deg);\n      -ms-transform: scale(0.6) rotate(180deg);\n          transform: scale(0.6) rotate(180deg); }\n  @media (min-width: 768px) {\n    .background__icons--think svg:last-child {\n      bottom: -0.4375rem;\n      right: 2.5rem;\n      -webkit-transform: scale(1) rotate(180deg);\n          -ms-transform: scale(1) rotate(180deg);\n              transform: scale(1) rotate(180deg); } }\n  @media (min-width: 1024px) {\n    .background__icons--think svg:last-child {\n      bottom: 0rem;\n      right: 6.875rem; } }\n\n.background__icons--move svg:first-child {\n  top: -3.625rem;\n  left: -9.375rem;\n  -webkit-transform: scale(0.47);\n      -ms-transform: scale(0.47);\n          transform: scale(0.47); }\n  @media (min-width: 768px) {\n    .background__icons--move svg:first-child {\n      top: -2.25rem;\n      left: -3.75rem;\n      -webkit-transform: scale(0.7);\n          -ms-transform: scale(0.7);\n              transform: scale(0.7); } }\n  @media (min-width: 1024px) {\n    .background__icons--move svg:first-child {\n      top: -4.125rem;\n      left: -0.625rem;\n      -webkit-transform: scale(1);\n          -ms-transform: scale(1);\n              transform: scale(1); } }\n\n.background__icons--move svg:last-child {\n  bottom: -12.75rem;\n  right: -6rem;\n  -webkit-transform: scale(0.47) rotate(180deg);\n      -ms-transform: scale(0.47) rotate(180deg);\n          transform: scale(0.47) rotate(180deg); }\n  @media (min-width: 768px) {\n    .background__icons--move svg:last-child {\n      bottom: -2.375rem;\n      right: -2.25rem;\n      -webkit-transform: scale(0.7) rotate(180deg);\n          -ms-transform: scale(0.7) rotate(180deg);\n              transform: scale(0.7) rotate(180deg); } }\n  @media (min-width: 1024px) {\n    .background__icons--move svg:last-child {\n      bottom: -4.875rem;\n      right: 1.5rem;\n      -webkit-transform: scale(0.88) rotate(180deg);\n          -ms-transform: scale(0.88) rotate(180deg);\n              transform: scale(0.88) rotate(180deg); } }\n\n.background__icons--connect svg:first-child {\n  top: 2rem;\n  left: -2rem;\n  -webkit-transform: scale(0.57);\n      -ms-transform: scale(0.57);\n          transform: scale(0.57); }\n  @media (min-width: 768px) {\n    .background__icons--connect svg:first-child {\n      top: 5.625rem;\n      left: 0.625rem;\n      -webkit-transform: scale(1);\n          -ms-transform: scale(1);\n              transform: scale(1); } }\n  @media (min-width: 1024px) {\n    .background__icons--connect svg:first-child {\n      top: 0.625rem;\n      left: 6.875rem; } }\n  @media (min-width: 1025px) {\n    .background__icons--connect svg:first-child {\n      top: 1.875rem;\n      left: 9.625rem;\n      -webkit-transform: scale(1);\n          -ms-transform: scale(1);\n              transform: scale(1); } }\n\n.background__icons--connect svg:last-child {\n  bottom: -4.25rem;\n  right: -2.1875rem;\n  -webkit-transform: scale(0.6);\n      -ms-transform: scale(0.6);\n          transform: scale(0.6); }\n  @media (min-width: 768px) {\n    .background__icons--connect svg:last-child {\n      bottom: 3.125rem;\n      right: 4.375rem;\n      -webkit-transform: scale(1);\n          -ms-transform: scale(1);\n              transform: scale(1); } }\n  @media (min-width: 1024px) {\n    .background__icons--connect svg:last-child {\n      bottom: 1.25rem;\n      right: 6.875rem; } }\n  @media (min-width: 1025px) {\n    .background__icons--connect svg:last-child {\n      bottom: 4.125rem;\n      right: 10rem;\n      -webkit-transform: scale(1);\n          -ms-transform: scale(1);\n              transform: scale(1); } }\n\n.pagination {\n  position: absolute;\n  bottom: 2.5rem;\n  left: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 3.375rem;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 200; }\n  @media (min-width: 1024px) {\n    .pagination {\n      bottom: 5.125rem;\n      left: 3rem; } }\n\n.pagination__item {\n  position: relative;\n  width: 100%;\n  cursor: pointer;\n  font-family: \"DINCondensed-Bold\", sans-serif;\n  font-size: 1rem;\n  margin-bottom: 0.5rem;\n  text-align: center;\n  color: #000;\n  opacity: 0.2;\n  -webkit-transition: color 0.6s ease-out 0s;\n  -o-transition: color 0.6s ease-out 0s;\n  transition: color 0.6s ease-out 0s;\n  z-index: 10; }\n  .pagination__item:last-child {\n    margin-bottom: 0; }\n\n.pagination__subline {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 0.125rem;\n  background-color: #0bffae;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n      -ms-transform: translateX(-50%);\n          transform: translateX(-50%);\n  z-index: 0; }\n\n.bar {\n  display: none;\n  position: absolute;\n  width: 0.25rem;\n  height: 7.5rem;\n  bottom: 3rem;\n  right: 3.375rem;\n  background-color: #cdcdcd;\n  border-radius: 1.25rem;\n  overflow: hidden;\n  opacity: 0; }\n  @media (min-width: 768px) {\n    .bar {\n      display: block; } }\n  @media (min-width: 1024px) {\n    .bar {\n      bottom: 5.5rem;\n      z-index: 100; } }\n\n.bar__filler {\n  background-color: black;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 1.25rem; }\n\n.blob {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 10;\n  width: 100%;\n  height: 100%; }\n  .blob svg {\n    position: absolute;\n    top: -99999px;\n    right: -999999px; }\n\n.blob__image {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  opacity: 0;\n  -webkit-clip-path: url(\"#blob\");\n          clip-path: url(\"#blob\");\n  z-index: 0; }\n  .blob__image:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 10;\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.56)), color-stop(99%, #000), to(#000));\n    background: -o-linear-gradient(top, rgba(0, 0, 0, 0.56) 0%, #000 99%, #000 100%);\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0.56) 0%, #000 99%, #000 100%); }\n\n.blob__image--study {\n  background-image: url(" + ___CSS_LOADER_URL___4___ + "); }\n  @media (min-width: 1024px) {\n    .blob__image--study {\n      background-image: url(" + ___CSS_LOADER_URL___5___ + "); } }\n\n.blob__image--think {\n  background-image: url(" + ___CSS_LOADER_URL___6___ + "); }\n  @media (min-width: 1024px) {\n    .blob__image--think {\n      background-image: url(" + ___CSS_LOADER_URL___7___ + "); } }\n\n.blob__image--move {\n  background-image: url(" + ___CSS_LOADER_URL___8___ + "); }\n  @media (min-width: 1024px) {\n    .blob__image--move {\n      background-image: url(" + ___CSS_LOADER_URL___9___ + "); } }\n\n.blob__image--connect {\n  background-image: url(" + ___CSS_LOADER_URL___10___ + "); }\n  @media (min-width: 1024px) {\n    .blob__image--connect {\n      background-image: url(" + ___CSS_LOADER_URL___11___ + "); } }\n\n.scroll-suggestion {\n  opacity: 0;\n  z-index: 50;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  cursor: pointer;\n  z-index: 0; }\n  @media (min-width: 768px) {\n    .scroll-suggestion {\n      display: block;\n      height: 5.5rem; } }\n  .scroll-suggestion.no-events {\n    pointer-events: none; }\n  .scroll-suggestion.is-tablet {\n    display: none !important; }\n\n.scroll-suggestion__text {\n  display: inline-block;\n  font-size: 1rem;\n  margin-bottom: 0.75rem; }\n\n@media (min-width: 1024px) {\n  .scroll-suggestion__contact {\n    display: block;\n    position: absolute;\n    opacity: 0;\n    top: 2.375rem;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%); } }\n\n@media (min-width: 1024px) {\n  .scroll-suggestion__standard {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%); } }\n\n@media (min-width: 1024px) {\n  .scroll-suggestion__play {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%); } }\n\n.scroll-suggestion__text--contact {\n  font-family: \"DINCondensed-Bold\", sans-serif; }\n\n.scroll-suggestion__back {\n  -webkit-transform: rotate(180deg);\n      -ms-transform: rotate(180deg);\n          transform: rotate(180deg);\n  position: relative;\n  top: -10px;\n  display: block; }\n\n.rotate-device {\n  background-color: #000000;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99999;\n  display: none;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: opacity 0.2s ease-in 0s, visibility 0.2s ease-in 0s;\n  -o-transition: opacity 0.2s ease-in 0s, visibility 0.2s ease-in 0s;\n  transition: opacity 0.2s ease-in 0s, visibility 0.2s ease-in 0s; }\n  .rotate-device.is-visible {\n    display: block;\n    opacity: 1;\n    visibility: visible; }\n\n.rotate-device__content {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 100%; }\n\n.rotate-device__icon {\n  width: 90px;\n  height: auto;\n  margin: 0 auto 1.25rem;\n  display: block; }\n  .rotate-device__icon path {\n    fill: #ffffff; }\n\n.rotate-device__text {\n  color: #ffffff;\n  background: #000000;\n  width: 100%;\n  font-size: 1.125rem;\n  text-align: center;\n  font-family: \"DINCondensed-Bold\", sans-serif;\n  text-transform: uppercase; }\n\n:root {\n  --gradientColor1: 255;\n  --gradientColor2: 0;\n  --animatableColor1: 0;\n  --animatableColor2: 255; }\n\n* {\n  outline: none !important;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\nhtml {\n  width: 100%;\n  height: 100%;\n  min-width: 100%;\n  max-width: 100%;\n  height: 100vh;\n  max-height: 100%;\n  margin: 0 auto;\n  padding: 0;\n  cursor: default;\n  overflow: hidden; }\n\nbody {\n  position: relative;\n  width: 100%;\n  height: auto;\n  height: 100vh;\n  min-height: -webkit-fill-available;\n  max-height: 100%;\n  margin: 0 auto;\n  padding: 0;\n  background-color: #ffffff;\n  -webkit-transition: opacity 0.25s ease-out 0s;\n  -o-transition: opacity 0.25s ease-out 0s;\n  transition: opacity 0.25s ease-out 0s;\n  overflow: hidden; }\n  body[data-page='index_site'] {\n    background-color: #000000; }\n  body.is-scollable {\n    overflow-x: hidden;\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch; }\n\n.main {\n  height: 100vh;\n  max-height: 100%; }\n\n.js-gesture,\n.js-slider {\n  height: 100vh;\n  max-height: 100%; }\n\n.section {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  max-height: 100%;\n  opacity: 0;\n  visibility: hidden;\n  display: none;\n  z-index: 100; }\n  .no-touch .section.is-active {\n    opacity: 1;\n    pointer-events: all;\n    visibility: visible;\n    display: block; }\n  .touch .section.is-active {\n    visibility: visible;\n    display: block; }\n\n.clear {\n  clear: both; }\n\n.dg.ac {\n  z-index: 99999 !important; }\n\n.header {\n  position: fixed;\n  opacity: 0;\n  z-index: 300;\n  width: 100%; }\n  .app-is-ready .header {\n    opacity: 1; }\n  .header .logo {\n    position: absolute;\n    opacity: 0;\n    left: -82px;\n    top: 36px;\n    width: 76px;\n    margin-bottom: 0;\n    cursor: pointer; }\n    .header .logo .fillable {\n      fill: #ffffff !important; }\n    .header .logo .foglia {\n      fill: #0bffae; }\n    .is-white .header .logo .fillable {\n      fill: #000000 !important;\n      stroke: #000000 !important; }\n\n.intro {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.logo {\n  width: 12.8125rem;\n  opacity: 0;\n  margin-bottom: 1.5rem; }\n  .is-white .logo .fillable {\n    fill: #000000 !important; }\n\n.intro__green-bar {\n  width: 0;\n  height: 4px;\n  background-color: #0bffae;\n  border-radius: 0.5rem; }\n\n.main-viewer {\n  position: relative;\n  background-color: #000000;\n  color: #ffffff;\n  opacity: 0;\n  pointer-events: none;\n  -webkit-transition: background 0.4s ease-out 0s;\n  -o-transition: background 0.4s ease-out 0s;\n  transition: background 0.4s ease-out 0s; }\n  .no-touch .main-viewer.is-active {\n    opacity: 1;\n    pointer-events: all; }\n  .touch .main-viewer.is-active {\n    background-color: #ffffff;\n    color: #000000; }\n\n.main-viewer__content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.slider {\n  position: relative;\n  z-index: 1; }\n\n.content {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  -webkit-transition: background 0.4s ease-out 0s;\n  -o-transition: background 0.4s ease-out 0s;\n  transition: background 0.4s ease-out 0s;\n  width: 100%;\n  height: 100vh;\n  max-height: 100%;\n  visibility: hidden; }\n  .content.is-active {\n    pointer-events: all;\n    visibility: visible; }\n\n.content--contact {\n  z-index: 10; }\n\n.content__faketitle {\n  z-index: 500;\n  position: absolute;\n  pointer-events: none;\n  cursor: pointer; }\n  @media (min-width: 768px) {\n    .content__faketitle {\n      display: block;\n      pointer-events: all; } }\n  .content__faketitle.is-hidden {\n    display: none;\n    pointer-events: none; }\n\n.content__faketitle--play {\n  top: calc(50% + 70px);\n  left: 50%;\n  width: 250px;\n  height: 400px;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.content__faketitle--internal {\n  width: 11.25rem;\n  height: 16.875rem;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(0, -50%);\n      -ms-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  pointer-events: none;\n  display: none; }\n  @media (min-width: 768px) {\n    .content__faketitle--internal {\n      width: 180px;\n      height: 52px;\n      top: calc(50% - 30px);\n      left: calc(50% - 60px);\n      -webkit-transform: translate(-50%, -50%);\n          -ms-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      pointer-events: all;\n      display: block; } }\n\n.content__faketitle--connect {\n  width: 11.25rem;\n  height: 16.875rem;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(0, -50%);\n      -ms-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  pointer-events: none;\n  display: none; }\n  @media (min-width: 768px) {\n    .content__faketitle--connect {\n      width: 180px;\n      height: 80px;\n      top: calc(50% - 30px);\n      left: calc(50% - 60px);\n      -webkit-transform: translate(-50%, -50%);\n          -ms-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      pointer-events: all;\n      display: block; } }\n\n.content__fakescroll {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  bottom: 80px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n      -ms-transform: translateX(-50%);\n          transform: translateX(-50%);\n  cursor: pointer;\n  display: none; }\n  @media (min-width: 1024px) {\n    .content__fakescroll {\n      display: block;\n      z-index: 500; } }\n\n.content__fakescroll--play {\n  bottom: 130px;\n  z-index: 0; }\n\n.content__fakescroll--connect {\n  height: 80px; }\n\n.editorial {\n  padding-top: 7.5rem;\n  -webkit-transition: opacity 0.3s ease-out 0s;\n  -o-transition: opacity 0.3s ease-out 0s;\n  transition: opacity 0.3s ease-out 0s; }\n  .has-menu .editorial {\n    opacity: 0; }\n\n.editorial__nav {\n  background-color: #f8f8f8; }\n\n.editorial__nav__list {\n  font-family: \"HKGrotesk-Regular\", sans-serif;\n  width: 100%;\n  height: 6.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.editorial__nav__item {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 1.25rem; }\n\n.editorial__nav__label {\n  display: inline-block;\n  cursor: pointer;\n  color: #000000;\n  text-decoration: none; }\n  .editorial__nav__label:after {\n    position: absolute;\n    display: block;\n    content: '';\n    width: 3.125rem;\n    height: 3.125rem;\n    background-color: #ffffff;\n    top: 100%;\n    left: 50%;\n    -webkit-transform: translate(-50%, 20%) rotate(-45deg);\n        -ms-transform: translate(-50%, 20%) rotate(-45deg);\n            transform: translate(-50%, 20%) rotate(-45deg);\n    -webkit-transition: -webkit-transform 0.3s ease-out 0s;\n    transition: -webkit-transform 0.3s ease-out 0s;\n    -o-transition: transform 0.3s ease-out 0s;\n    transition: transform 0.3s ease-out 0s;\n    transition: transform 0.3s ease-out 0s, -webkit-transform 0.3s ease-out 0s; }\n  .is-active > .editorial__nav__label:after {\n    -webkit-transform: translate(-50%, -20%) rotate(-45deg);\n        -ms-transform: translate(-50%, -20%) rotate(-45deg);\n            transform: translate(-50%, -20%) rotate(-45deg); }\n\n.editorial__content {\n  position: relative;\n  z-index: 2;\n  background-color: #ffffff;\n  overflow: hidden; }\n  .editorial__content > * {\n    width: 100%;\n    padding: 6.25rem 2.25rem;\n    position: absolute;\n    opacity: 0;\n    pointer-events: none;\n    top: 0;\n    left: 0; }\n    @media (min-width: 1024px) {\n      .editorial__content > * {\n        padding: 6.25rem 6.125rem; } }\n  .editorial__content .is-active {\n    opacity: 1;\n    pointer-events: all; }\n\n.editorial__content--cookie > * {\n  width: 100%;\n  padding: 6.25rem 6.125rem;\n  position: relative;\n  opacity: 1;\n  pointer-events: all;\n  top: 0;\n  left: 0; }\n\n.editorial__title {\n  font-family: \"DINCondensed-Bold\", sans-serif;\n  font-size: 2.5rem;\n  padding-bottom: 5rem; }\n\n.editorial__block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-bottom: 2.5rem; }\n  @media (min-width: 1024px) {\n    .editorial__block {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .editorial__block > :first-child {\n        width: 28.125rem;\n        padding-right: 3.125rem; }\n      .editorial__block > :last-child {\n        width: 100%; } }\n\n.editorial__subtitle {\n  font-family: \"DINCondensed-Bold\", sans-serif;\n  font-size: 1.25rem;\n  padding-bottom: 1.5rem; }\n\n.editorial__paragraph {\n  font-family: \"HKGrotesk-Regular\", sans-serif;\n  line-height: 1.25rem; }\n  .editorial__list + .editorial__paragraph,\n  .editorial__table + .editorial__paragraph {\n    padding-top: 1.5rem; }\n\n.editorial__list {\n  font-family: \"HKGrotesk-Regular\", sans-serif;\n  padding-top: 1.25rem;\n  padding-left: 2.25rem;\n  line-height: 1.25rem; }\n\n.editorial__list__item {\n  font-family: \"HKGrotesk-Regular\", sans-serif;\n  padding-bottom: 1.25rem; }\n  .editorial__list__item:last-child {\n    padding-bottom: 0; }\n\n.editorial__table {\n  font-family: \"HKGrotesk-Regular\", sans-serif; }\n\n.editorial__table__row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  @media (min-width: 1024px) {\n    .editorial__table__row {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      border-right: 1px solid #f8f8f8; } }\n  .editorial__table__row:first-child {\n    display: none; }\n    @media (min-width: 1024px) {\n      .editorial__table__row:first-child {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; } }\n  .editorial__table__row:nth-child(odd) {\n    background-color: #f8f8f8; }\n\n.editorial__table__col {\n  width: 100%;\n  padding: 1rem;\n  text-align: center; }\n  @media (min-width: 1024px) {\n    .editorial__table__col {\n      width: calc(100% / 3);\n      text-align: left;\n      border-left: 1px solid #f8f8f8; } }\n  @media (min-width: 1024px) {\n    .editorial__table__col.hide-desk {\n      display: none; } }\n  .editorial__table__col:before {\n    display: block;\n    content: attr(data-head);\n    font-weight: 700;\n    padding-bottom: 0.5rem; }\n    @media (min-width: 1024px) {\n      .editorial__table__col:before {\n        display: none; } }\n\n.form {\n  background-color: #221259;\n  padding: 2.5rem 1.5rem 2.5rem; }\n\n.form__legend {\n  text-align: center;\n  padding-bottom: 2rem;\n  margin: 0 auto;\n  -webkit-transition: padding 0.3s ease-out 0s;\n  -o-transition: padding 0.3s ease-out 0s;\n  transition: padding 0.3s ease-out 0s; }\n  @media (min-width: 768px) {\n    .form__legend {\n      padding-bottom: 4.375rem; } }\n  .is-last-step .form__legend {\n    padding-bottom: 1.5rem; }\n\n.form__title {\n  font-family: \"DINCondensed-Bold\", sans-serif;\n  font-size: 2.25rem;\n  color: #0bffae;\n  padding-bottom: 1.125rem; }\n  @media (min-width: 768px) {\n    .form__title {\n      font-size: 2.75rem;\n      padding-bottom: 1.5rem; } }\n\n.form__paragraph {\n  font-family: \"HKGrotesk-Regular\", sans-serif;\n  font-size: 0.875rem;\n  line-height: 1.125rem;\n  color: #ffffff;\n  max-width: 30.625rem;\n  margin: 0 auto; }\n  @media (min-width: 768px) {\n    .form__paragraph {\n      font-size: 1.25rem;\n      line-height: 1.5625rem; } }\n\n.form__fieldset {\n  position: relative;\n  width: 100%;\n  max-width: 42.375rem;\n  margin: 0 auto 1rem; }\n  @media (min-width: 768px) {\n    .form__fieldset {\n      margin: 0 auto 2rem; } }\n\n.form__labels {\n  height: 1.875rem;\n  margin-bottom: 0.625rem;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease-out 0s;\n  -o-transition: height 0.3s ease-out 0s;\n  transition: height 0.3s ease-out 0s; }\n  .is-last-step .form__labels {\n    height: 0rem; }\n  @media (min-width: 768px) {\n    .form__labels {\n      height: 1.875rem; } }\n\n.form__labels__scroller {\n  position: relative; }\n\n.form__label {\n  display: block;\n  font-family: \"HKGrotesk-Regular\", sans-serif;\n  font-weight: 700;\n  font-size: 1.125rem;\n  color: #ffffff;\n  padding-bottom: 1rem;\n  padding-left: 2rem; }\n  @media (min-width: 768px) {\n    .form__label {\n      font-size: 1.375rem; } }\n\n.form__inputs {\n  width: 100%;\n  position: relative; }\n\n.form__input {\n  position: absolute;\n  width: 100%;\n  height: 3.75rem;\n  top: 0;\n  left: 0;\n  border-radius: 1.875rem;\n  background-color: #ffffff;\n  border: 1px solid #ffffff;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-size: 1rem;\n  font-family: \"HKGrotesk-Regular\", sans-serif;\n  font-weight: 600;\n  padding-left: 2rem;\n  padding-right: 8.25rem;\n  -webkit-transition: all 0.3s ease-out 0s;\n  -o-transition: all 0.3s ease-out 0s;\n  transition: all 0.3s ease-out 0s;\n  z-index: 2;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n  .has-textarea .form__input {\n    pointer-events: none;\n    z-index: 1;\n    display: none; }\n  .has-error .form__input {\n    background-color: #ffd6d6;\n    border-color: red; }\n  @media (min-width: 768px) {\n    .form__input {\n      font-size: 1.375rem; } }\n\n.form__textarea {\n  position: relative;\n  width: 100%;\n  height: 3.75rem;\n  top: 0;\n  left: 0;\n  border-radius: 1.875rem;\n  border: 1px solid #ffffff;\n  padding: 1rem 8.25rem 1rem 2rem;\n  margin-bottom: 0.75rem;\n  font-family: \"HKGrotesk-Regular\", sans-serif;\n  font-size: 1rem;\n  resize: none;\n  pointer-events: none;\n  z-index: 1;\n  -webkit-transition: height 0.3s ease-out 0s;\n  -o-transition: height 0.3s ease-out 0s;\n  transition: height 0.3s ease-out 0s;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n  @media (min-width: 768px) {\n    .form__textarea {\n      font-size: 1.375rem;\n      overflow: hidden; } }\n  .has-textarea .form__textarea {\n    z-index: 2;\n    height: 8.75rem;\n    pointer-events: all; }\n  .has-error .form__textarea {\n    background-color: #ffd6d6;\n    border-color: red; }\n\n.form__submit {\n  position: absolute;\n  display: block;\n  width: 1.875rem;\n  height: 1.875rem;\n  top: 0.9375rem;\n  right: 1.5rem;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  z-index: 3;\n  background: url(" + ___CSS_LOADER_URL___12___ + ") no-repeat right center;\n  background-size: contain;\n  cursor: pointer;\n  -webkit-transition: opacity 0.2s linear;\n  -o-transition: opacity 0.2s linear;\n  transition: opacity 0.2s linear; }\n  .form__submit:hover {\n    opacity: 0.6; }\n\n.form__error {\n  position: relative;\n  font-family: \"HKGrotesk-Regular\", sans-serif;\n  font-size: 0.875rem;\n  display: inline-block;\n  padding-left: 2rem;\n  color: red;\n  opacity: 0;\n  pointer-events: none;\n  -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0);\n  -webkit-transition: all 0.3s ease-in-out 0s;\n  -o-transition: all 0.3s ease-in-out 0s;\n  transition: all 0.3s ease-in-out 0s; }\n  @media (min-width: 768px) {\n    .form__error {\n      font-size: 1rem; } }\n  .has-error .form__error {\n    opacity: 1;\n    pointer-events: all;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n  .is-last-step .form__error {\n    bottom: -5.125rem;\n    display: block;\n    text-align: center;\n    padding-left: 0; }\n    @media (min-width: 768px) {\n      .is-last-step .form__error {\n        bottom: -1.25rem; } }\n\n.form__last-step {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: calc(100% - 4rem);\n  left: 2rem;\n  padding-bottom: 6.25rem;\n  opacity: 0;\n  pointer-events: none; }\n  @media (min-width: 768px) {\n    .form__last-step {\n      padding-bottom: 7.5rem; } }\n\n.form__last-step__block {\n  text-align: center; }\n  .form__last-step__block + .form__last-step__block {\n    padding-top: 1rem; }\n    @media (min-width: 768px) {\n      .form__last-step__block + .form__last-step__block {\n        padding-top: 1.75rem; } }\n\n.form__checkbox {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-bottom: 1rem;\n  max-width: 25rem; }\n  @media (min-width: 1024px) {\n    .form__checkbox {\n      margin-bottom: 1.25rem; } }\n\n.form__checkbox__input {\n  position: absolute;\n  opacity: 0; }\n\n.form__checkbox__custom-input {\n  position: relative;\n  display: block;\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 0.3125rem;\n  background-color: #ffffff;\n  border: 1px solid transparent;\n  margin-right: 0.75rem;\n  overflow: hidden;\n  cursor: pointer;\n  border: none; }\n  .form__checkbox__custom-input:before {\n    content: '';\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 100%;\n    top: 50%;\n    left: 50%;\n    background: url(" + ___CSS_LOADER_URL___13___ + ") no-repeat center center #0bffae;\n    background-size: 70%;\n    border: none;\n    -webkit-transform: translate3d(-50%, -50%, 0) scale(0);\n            transform: translate3d(-50%, -50%, 0) scale(0);\n    -webkit-transition: -webkit-transform 0.3s ease-out 0s;\n    transition: -webkit-transform 0.3s ease-out 0s;\n    -o-transition: transform 0.3s ease-out 0s;\n    transition: transform 0.3s ease-out 0s;\n    transition: transform 0.3s ease-out 0s, -webkit-transform 0.3s ease-out 0s; }\n  :checked + .form__checkbox__custom-input:before {\n    -webkit-transform: translate3d(-50%, -50%, 0) scale(1);\n            transform: translate3d(-50%, -50%, 0) scale(1); }\n  .has-error .form__checkbox__custom-input {\n    background-color: #ffd6d6;\n    border-color: red; }\n\n.form__checkbox__label {\n  display: inline-block;\n  font-family: \"HKGrotesk-Regular\", sans-serif;\n  color: #ffffff;\n  font-size: 0.875rem;\n  width: calc(100% - 2.5rem);\n  text-align: left; }\n  @media (min-width: 768px) {\n    .form__checkbox__label {\n      font-size: 1.125rem;\n      text-align: center; } }\n\n.form__link {\n  display: inline-block;\n  font-family: \"HKGrotesk-Regular\", sans-serif;\n  color: #0bffae;\n  font-size: 1.125rem; }\n\n.form__captcha-text {\n  text-align: left; }\n  .form__captcha-text a {\n    color: #0bffae; }\n\n.form__captcha {\n  color: #ffffff;\n  height: 0;\n  overflow: hidden; }\n\n.form__send {\n  position: absolute;\n  display: inline-block;\n  width: 100%;\n  max-width: 28rem;\n  height: 3.75rem;\n  bottom: 0.375rem;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n      -ms-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  border-radius: 1.875rem;\n  font-family: \"HKGrotesk-Regular\", sans-serif;\n  font-size: 1.375rem;\n  font-weight: 600;\n  line-height: 4.125rem;\n  color: #221259;\n  background-color: #0bffae;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-transition: all 0.3s ease-out 0s;\n  -o-transition: all 0.3s ease-out 0s;\n  transition: all 0.3s ease-out 0s;\n  cursor: pointer; }\n  @media (min-width: 768px) {\n    .form__send {\n      bottom: 0; } }\n  .form__send[disabled] {\n    opacity: 30%;\n    pointer-events: none;\n    background-color: #ffffff; }\n\n.form__pagination {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-bottom: 28px; }\n  @media (min-width: 768px) {\n    .form__pagination {\n      margin-bottom: 80px; } }\n\n.form__pagination__item {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.form__pagination__dot {\n  position: relative;\n  width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 50%;\n  margin-left: 1rem;\n  margin-right: 1rem;\n  cursor: pointer; }\n  :first-child > .form__pagination__dot {\n    margin-left: 0; }\n  .form__pagination__dot:after {\n    position: absolute;\n    content: '';\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    border-radius: 50%;\n    border: 1px solid transparent;\n    top: 50%;\n    left: 50%;\n    background-color: #ffffff;\n    -webkit-transform: translate3d(-50%, -50%, 0);\n            transform: translate3d(-50%, -50%, 0);\n    -webkit-transition: all 0.3s ease-out 0s;\n    -o-transition: all 0.3s ease-out 0s;\n    transition: all 0.3s ease-out 0s; }\n  .is-active > .form__pagination__dot:after {\n    width: 100%;\n    height: 100%;\n    background-color: #0bffae; }\n  .has-error .is-active > .form__pagination__dot:after {\n    background-color: red; }\n  .is-active ~ * > .form__pagination__dot:after {\n    background-color: transparent;\n    border-color: #ffffff;\n    opacity: 0.4; }\n  .is-active + * > .form__pagination__dot:after {\n    background-color: transparent;\n    border-color: #ffffff;\n    opacity: 0.4; }\n  .is-submitted .form__pagination__dot {\n    width: 1rem;\n    height: 1rem;\n    background-color: #ffffff;\n    opacity: 0.2; }\n    .is-submitted .form__pagination__dot:after {\n      background-color: transparent !important;\n      border-color: transparent !important; }\n\n.form__pagination__dot--last {\n  margin-right: 0;\n  border-color: transparent;\n  background: url(" + ___CSS_LOADER_URL___14___ + ") center center;\n  background-size: cover; }\n  @media (min-width: 768px) {\n    .form__pagination__dot--last {\n      margin-right: 1rem; } }\n  .is-active > .form__pagination__dot--last {\n    background: url(" + ___CSS_LOADER_URL___15___ + ") center center;\n    background-color: transparent; }\n    .is-active > .form__pagination__dot--last:after {\n      background-color: transparent; }\n\n.form__pagination__text {\n  width: 0;\n  font-family: \"HKGrotesk-Regular\", sans-serif;\n  font-size: 1.375rem;\n  color: #ffffff;\n  -webkit-transition: opacity 0.3s ease-out 0s;\n  -o-transition: opacity 0.3s ease-out 0s;\n  transition: opacity 0.3s ease-out 0s;\n  white-space: nowrap;\n  overflow: hidden;\n  opacity: 0.4; }\n\n.form__result {\n  position: absolute;\n  width: 100%;\n  opacity: 0;\n  pointer-events: none;\n  top: 0;\n  -webkit-transform: translateY(6.25rem);\n      -ms-transform: translateY(6.25rem);\n          transform: translateY(6.25rem);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  @media (min-width: 768px) {\n    .form__result {\n      margin-top: 20px; } }\n\n.form__result__smile {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: red;\n  margin-bottom: 1.375rem;\n  background: url(" + ___CSS_LOADER_URL___15___ + ") no-repeat center center;\n  background-size: cover; }\n\n.form__result__text {\n  text-align: center; }\n\n.form__result__title {\n  font-family: \"HKGrotesk-Regular\", sans-serif;\n  font-weight: 600;\n  color: #0bffae;\n  font-size: 1.625rem;\n  padding-bottom: 1rem; }\n\n.form__result__paragraph {\n  font-family: \"HKGrotesk-Regular\", sans-serif;\n  font-weight: 600;\n  color: #ffffff;\n  font-size: 1.375rem;\n  line-height: 1.25rem; }\n  @media (min-width: 768px) {\n    .form__result__paragraph {\n      line-height: 1.5625rem; } }\n\n.form__advice {\n  color: #ffffff;\n  text-align: center; }\n\n.form__advicebold {\n  display: block; }\n\n.form__advicelink {\n  color: #ffffff;\n  text-decoration: underline;\n  -webkit-text-decoration-color: #0bffae;\n          text-decoration-color: #0bffae; }\n\n.contact {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.contact__back {\n  opacity: 1;\n  z-index: 50;\n  text-align: center;\n  width: 100%;\n  color: #000;\n  font-size: 1rem;\n  margin-bottom: 0.75rem;\n  font-family: \"DINCondensed-Bold\", sans-serif;\n  cursor: pointer;\n  z-index: 200;\n  top: 0;\n  left: 0;\n  height: 80px;\n  background: #ffffff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  @media (min-width: 1024px) {\n    .contact__back {\n      height: 98px;\n      padding-top: 1rem; } }\n\n.contact__backcontent {\n  width: 80px;\n  height: 40px;\n  padding-top: 6px; }\n\n.contact__background {\n  width: 100%;\n  height: calc(100vh - 88px);\n  background: #221259;\n  left: 0;\n  bottom: 0;\n  overflow: scroll; }\n  @media (min-width: 1024px) {\n    .contact__background {\n      height: calc(100% - 98px); } }\n\n.contact__footer {\n  width: 100%;\n  background: #ffff;\n  border-top: 2px solid #0bffae;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font-family: 'HKGrotesk-Regular', sans-serif; }\n\n.footer__main {\n  width: 100%;\n  margin: 60px auto 0px; }\n  @media (min-width: 768px) {\n    .footer__main {\n      margin: 40px; } }\n\n.footer__sub {\n  width: 100%;\n  border-top: 1px solid #efefef;\n  padding: 28px 0; }\n  .footer__sub .footer__container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse; }\n    @media (min-width: 768px) {\n      .footer__sub .footer__container {\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row; } }\n\n.footer__container {\n  max-width: calc(1200px+24px);\n  padding: 0 24px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n  @media (min-width: 768px) {\n    .footer__container {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; } }\n\n.footer__desc {\n  max-width: 310px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-bottom: 40px;\n  margin-bottom: 40px;\n  border-bottom: 1px solid #efefef; }\n  @media (min-width: 768px) {\n    .footer__desc {\n      border-bottom: none;\n      padding-bottom: 0;\n      margin-bottom: 0; } }\n  .footer__desc .footer_desc_cont {\n    padding: 20px 0 0 10px;\n    font-size: 16px;\n    letter-spacing: 0;\n    line-height: 23px; }\n  .footer__desc svg {\n    width: 110px;\n    height: 40px; }\n\n.footer__resr,\n.footer__follow,\n.footer__support {\n  width: 160px;\n  margin-right: 40px;\n  margin-bottom: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .footer__resr h3,\n  .footer__follow h3,\n  .footer__support h3 {\n    font-family: 'DIN Condensed';\n    font-size: 21px;\n    font-weight: bold;\n    text-transform: capitalize;\n    margin-bottom: 32px; }\n  .footer__resr a,\n  .footer__follow a,\n  .footer__support a {\n    color: #000000;\n    margin-bottom: 16px;\n    font-size: 16px;\n    letter-spacing: 0;\n    line-height: 19px;\n    text-decoration: none; }\n    .footer__resr a:hover,\n    .footer__follow a:hover,\n    .footer__support a:hover {\n      text-decoration: underline; }\n\n.footer__icons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n  .footer__icons a {\n    margin-right: 16px; }\n\n@media (min-width: 768px) {\n  .footer__resr {\n    margin-left: auto; } }\n\n.footer__logo {\n  opacity: 1; }\n  .footer__logo .fillable {\n    fill: #000000 !important;\n    stroke: #000000 !important; }\n  .footer__logo .foglia {\n    fill: #0bffae !important; }\n\n.footer__dotafter::after {\n  content: ' ・ '; }\n\n.footer__spacerafter {\n  margin-right: auto; }\n\n.footer__lang {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 32px; }\n  .footer__lang svg {\n    margin-right: 16px; }\n  @media (min-width: 768px) {\n    .footer__lang {\n      margin-bottom: 0; } }\n  .footer__lang .footer__bold {\n    font-size: 16px;\n    font-weight: bold;\n    letter-spacing: 0;\n    line-height: 19px; }\n  .footer__lang .footer__underline {\n    font-size: 16px;\n    text-decoration: underline; }\n\n.privacy-user {\n  font-family: \"HKGrotesk-Regular\", sans-serif;\n  padding: 2.5rem 0; }\n  @media (min-width: 1024px) {\n    .privacy-user .container {\n      max-width: 71.25rem;\n      margin: 0 auto; } }\n  .privacy-user hr {\n    display: none;\n    border-color: #000000; }\n  .privacy-user.is-printable hr {\n    display: block; }\n\n.privacy-user__logo .logo {\n  opacity: 1; }\n  .privacy-user__logo .logo path {\n    fill: #000000;\n    stroke: #000000; }\n  .privacy-user__logo .logo .foglia {\n    fill: #0bffae;\n    stroke: #0bffae; }\n\n.privacy-user__title {\n  font-family: \"DINCondensed-Bold\", sans-serif;\n  font-size: 1.25rem;\n  line-height: 1.5; }\n  @media (min-width: 1024px) {\n    .privacy-user__title {\n      font-size: 1.75rem; } }\n  .privacy-user--typ .privacy-user__title {\n    padding-top: 20vh; }\n  .is-printable .privacy-user__title {\n    font-weight: bold; }\n\n.privacy-user__title--main {\n  text-align: center; }\n\n.privacy-user__section {\n  padding: 1.25rem 0.625rem;\n  border-bottom: 1px solid #000000;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n  .is-printable .privacy-user__section {\n    display: block; }\n\n.privacy-user__section--no-border {\n  border-bottom: none; }\n\n.privacy-user__section__title {\n  width: 100%;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  font-family: \"DINCondensed-Bold\", sans-serif;\n  font-size: 1.125rem;\n  padding-right: 0.9375rem;\n  line-height: 1.5; }\n  @media (min-width: 1024px) {\n    .privacy-user__section__title {\n      width: 25%;\n      -ms-flex-preferred-size: 25%;\n          flex-basis: 25%;\n      font-size: 1.375rem; }\n      .privacy-user__section--full .privacy-user__section__title {\n        width: 100%;\n        -ms-flex-preferred-size: 100%;\n            flex-basis: 100%;\n        text-align: center; } }\n  .is-printable .privacy-user__section__title {\n    width: 100% !important;\n    -ms-flex-preferred-size: 100% !important;\n        flex-basis: 100% !important;\n    text-align: center !important;\n    padding: 0;\n    font-weight: bold !important; }\n\n.privacy-user__section__content {\n  width: 100%;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%; }\n  @media (min-width: 1024px) {\n    .privacy-user__section__content {\n      width: 75%;\n      -ms-flex-preferred-size: 75%;\n          flex-basis: 75%; }\n      .privacy-user__section--full .privacy-user__section__content {\n        width: 100%;\n        -ms-flex-preferred-size: 100%;\n            flex-basis: 100%; } }\n  .privacy-user__section__content p {\n    font-size: 1rem;\n    margin-bottom: 0.3125rem;\n    line-height: 1.5; }\n    @media (min-width: 1024px) {\n      .privacy-user__section__content p {\n        font-size: 1.125rem; } }\n  .is-printable .privacy-user__section__content {\n    width: 100% !important;\n    -ms-flex-preferred-size: 100% !important;\n        flex-basis: 100% !important; }\n\n.privacy-user__list {\n  padding: 0.625rem 0; }\n  .privacy-user__list li {\n    padding-left: 1.25rem;\n    position: relative;\n    line-height: 1.5;\n    font-size: 1rem; }\n    @media (min-width: 1024px) {\n      .privacy-user__list li {\n        font-size: 1.125rem; } }\n    .privacy-user__list li:not(:last-child) {\n      margin-bottom: 0.3125rem; }\n    .privacy-user__list li:before {\n      content: '-';\n      position: absolute;\n      left: 0; }\n\n.privacy-user__table thead {\n  font-size: 1.125rem;\n  font-family: \"DINCondensed-Bold\", sans-serif;\n  border-bottom: 1px solid #000000;\n  background-color: #eaeaea; }\n  @media (min-width: 1024px) {\n    .privacy-user__table thead {\n      font-size: 1.375rem; } }\n  .privacy-user__table thead th {\n    height: 2.8125rem;\n    vertical-align: middle; }\n    @media (min-width: 1024px) {\n      .privacy-user__table thead th {\n        width: 33.333%; } }\n\n.privacy-user__table tbody {\n  font-size: 1rem;\n  line-height: 1.5; }\n  @media (min-width: 1024px) {\n    .privacy-user__table tbody {\n      font-size: 1.125rem; } }\n  .privacy-user__table tbody td {\n    margin-bottom: 0.625rem;\n    padding: 0.3125rem; }\n    @media (min-width: 1024px) {\n      .privacy-user__table tbody td {\n        padding: 0.625rem; } }\n  .privacy-user__table tbody tr:nth-child(even) {\n    background-color: #f6f6f6; }\n\n.is-printable .privacy-user__table {\n  width: 100% !important; }\n\n.is-printable .privacy-user__table table {\n  width: 100% !important; }\n\n@media (min-width: 1024px) {\n  .privacy-user__table--mobile {\n    display: none; } }\n\n.is-printable .privacy-user__table--mobile {\n  display: none !important; }\n\n.privacy-user__table--desktop {\n  display: none; }\n  .privacy-user__table--desktop br {\n    display: none; }\n    .is-printable .privacy-user__table--desktop br {\n      display: block; }\n  @media (min-width: 1024px) {\n    .privacy-user__table--desktop {\n      display: block; } }\n\n.privacy-user__form {\n  font-size: 1rem;\n  font-family: \"HKGrotesk-Regular\", sans-serif; }\n  @media (min-width: 1024px) {\n    .privacy-user__form {\n      font-size: 1.125rem; } }\n  .privacy-user__form input[type='text'] {\n    font-family: \"HKGrotesk-Regular\", sans-serif;\n    font-size: 1rem;\n    -webkit-appearance: none;\n    border: none;\n    border-bottom: 1px solid #000000;\n    position: relative;\n    width: 12.5rem;\n    margin: 0 0.1875rem; }\n    @media (min-width: 1024px) {\n      .privacy-user__form input[type='text'] {\n        font-size: 1.125rem; } }\n    .is-printable .privacy-user__form input[type='text'] {\n      display: none; }\n  .privacy-user__form input[type='email'] {\n    font-family: \"HKGrotesk-Regular\", sans-serif;\n    font-size: 1rem;\n    -webkit-appearance: none;\n    border: none;\n    border-bottom: 1px solid #000000;\n    position: relative;\n    width: 100% !important;\n    margin: 0 0.1875rem; }\n    @media (min-width: 768px) {\n      .privacy-user__form input[type='email'] {\n        width: 18.75rem !important; } }\n    @media (min-width: 1024px) {\n      .privacy-user__form input[type='email'] {\n        font-size: 1.125rem;\n        width: 25rem !important; } }\n    .is-printable .privacy-user__form input[type='email'] {\n      display: none; }\n  .privacy-user__form label,\n  .privacy-user__form input[type='checkbox'] {\n    margin-right: 0.625rem;\n    margin-bottom: 0.625rem; }\n  .privacy-user__form input[type='radio'] {\n    margin-right: 0.625rem;\n    margin-bottom: 0.625rem; }\n  .privacy-user__form p {\n    font-size: 1rem;\n    margin-bottom: 0.3125rem;\n    line-height: 1.5; }\n    @media (min-width: 1024px) {\n      .privacy-user__form p {\n        font-size: 1.125rem; } }\n\n.privacy-user__form__errors {\n  color: #f00;\n  font-size: 1rem; }\n  @media (min-width: 1024px) {\n    .privacy-user__form__errors {\n      font-size: 1.125rem; } }\n\n.privacy-user__form__submit {\n  padding: 1.25rem 0; }\n  @media (min-width: 1024px) {\n    .privacy-user__form__submit {\n      padding: 2.1875rem 0; } }\n  .privacy-user__form__submit button {\n    width: 12.5rem;\n    height: 2.8125rem;\n    margin: 0 auto;\n    padding-top: 0.625rem;\n    background-color: #0bffae;\n    color: #000000;\n    font-family: \"DINCondensed-Bold\", sans-serif;\n    font-size: 1rem;\n    -webkit-appearance: none;\n    border: none;\n    display: block;\n    cursor: pointer;\n    -webkit-transition: color 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s;\n    -o-transition: color 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s;\n    transition: color 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s; }\n    .no-touch .privacy-user__form__submit button:hover {\n      color: #ffffff;\n      background-color: #09d692; }\n    @media (min-width: 1024px) {\n      .privacy-user__form__submit button {\n        font-size: 1.25rem; } }\n  .is-printable .privacy-user__form__submit {\n    display: none !important; }\n\n.privacy-user__footer {\n  text-align: center;\n  font-size: 0.875rem;\n  padding: 0.625rem;\n  line-height: 1.5; }\n  @media (min-width: 1024px) {\n    .privacy-user__footer {\n      padding: 1.25rem;\n      font-size: 1rem; } }\n  .is-printable .privacy-user__footer {\n    width: 100%; }\n\n.privacy-user__mail {\n  display: inline-block;\n  height: 23px; }\n  .privacy-user__mail img {\n    height: 100%;\n    vertical-align: middle; }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/fonts/DINCondensed-Bold.woff":
/*!******************************************!*\
  !*** ./src/fonts/DINCondensed-Bold.woff ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/DINCondensed-Bold.woff");

/***/ }),

/***/ "./src/fonts/HKGrotesk-Bold.woff":
/*!***************************************!*\
  !*** ./src/fonts/HKGrotesk-Bold.woff ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/HKGrotesk-Bold.woff");

/***/ }),

/***/ "./src/fonts/HKGrotesk-Regular.woff":
/*!******************************************!*\
  !*** ./src/fonts/HKGrotesk-Regular.woff ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/HKGrotesk-Regular.woff");

/***/ }),

/***/ "./src/fonts/HKGrotesk-SemiBold.woff":
/*!*******************************************!*\
  !*** ./src/fonts/HKGrotesk-SemiBold.woff ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/HKGrotesk-SemiBold.woff");

/***/ }),

/***/ "./src/images/arrow.svg":
/*!******************************!*\
  !*** ./src/images/arrow.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/arrow.svg");

/***/ }),

/***/ "./src/images/checkbox.svg":
/*!*********************************!*\
  !*** ./src/images/checkbox.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/checkbox.svg");

/***/ }),

/***/ "./src/images/desktop/connect@2x.jpg":
/*!*******************************************!*\
  !*** ./src/images/desktop/connect@2x.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/desktop/connect@2x.jpg");

/***/ }),

/***/ "./src/images/desktop/move@2x.jpg":
/*!****************************************!*\
  !*** ./src/images/desktop/move@2x.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/desktop/move@2x.jpg");

/***/ }),

/***/ "./src/images/desktop/study@2x.jpg":
/*!*****************************************!*\
  !*** ./src/images/desktop/study@2x.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/desktop/study@2x.jpg");

/***/ }),

/***/ "./src/images/desktop/think@2x.jpg":
/*!*****************************************!*\
  !*** ./src/images/desktop/think@2x.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/desktop/think@2x.jpg");

/***/ }),

/***/ "./src/images/mobile/connect.jpg":
/*!***************************************!*\
  !*** ./src/images/mobile/connect.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/mobile/connect.jpg");

/***/ }),

/***/ "./src/images/mobile/move.jpg":
/*!************************************!*\
  !*** ./src/images/mobile/move.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/mobile/move.jpg");

/***/ }),

/***/ "./src/images/mobile/study.jpg":
/*!*************************************!*\
  !*** ./src/images/mobile/study.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/mobile/study.jpg");

/***/ }),

/***/ "./src/images/mobile/think.jpg":
/*!*************************************!*\
  !*** ./src/images/mobile/think.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/mobile/think.jpg");

/***/ }),

/***/ "./src/images/smile.svg":
/*!******************************!*\
  !*** ./src/images/smile.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/smile.svg");

/***/ }),

/***/ "./src/images/smile_mini.svg":
/*!***********************************!*\
  !*** ./src/images/smile_mini.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/smile_mini.svg");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/main.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = element => {
  const parent = document.querySelector('head')
  const lastInsertedElement = window._lastElementInsertedByStyleLoader
  if (!lastInsertedElement) {
    parent.insertBefore(element, parent.firstChild)
  } else if (lastInsertedElement.nextSibling) {
    parent.insertBefore(element, lastInsertedElement.nextSibling)
  } else {
    parent.appendChild(element)
  }
  window._lastElementInsertedByStyleLoader = element
};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

}]);
//# sourceMappingURL=Styles.js.map