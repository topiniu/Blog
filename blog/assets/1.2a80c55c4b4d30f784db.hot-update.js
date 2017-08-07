webpackHotUpdate(1,[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadData_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__less_navigationBar_less__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__less_navigationBar_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__less_navigationBar_less__);



$(function () {
  // $('.j_test-btn').on('click', loadData);
  $('.j_top-navigation-bar-container').css('display', 'flex');
  $('.j_ani-nav-background').css('left', '0');
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__md_testFile_md__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__md_testFile_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__md_testFile_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__passageEntity_js__ = __webpack_require__(5);



const __PASSAGELIST = [
  new __WEBPACK_IMPORTED_MODULE_1__passageEntity_js__["a" /* default */]('Test', __WEBPACK_IMPORTED_MODULE_0__md_testFile_md___default.a, new Date().toDateString())
];

function loadData() {
  const self = this;
  console.log(__PASSAGELIST.length);
  for (let i = 0; i < __PASSAGELIST.length; i++) {
    console.log(`title=${__PASSAGELIST[i].title} content=${__PASSAGELIST[i].content} createDate=${__PASSAGELIST[i].createDate}  updateDate=${__PASSAGELIST[i].updateDate}`)
  }
};

/***/ })
])
//# sourceMappingURL=1.2a80c55c4b4d30f784db.hot-update.js.map