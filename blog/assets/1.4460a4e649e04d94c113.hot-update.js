webpackHotUpdate(1,{

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__md_testFile_md__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__md_testFile_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__md_testFile_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__passageEntity_js__ = __webpack_require__(5);



const __PASSAGELIST = [
  new __WEBPACK_IMPORTED_MODULE_1__passageEntity_js__["a" /* default */]('Test', __WEBPACK_IMPORTED_MODULE_0__md_testFile_md___default.a, new Date().toDateString())
];

function loadData() {
  const self = this;
  console.log(passageList.length);
};

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Passage;
function Passage(title, content, createDate) {
  this.title = title;
  this.content = content;
  this.createDate = createDate;
  this.updateDate = new Date().toDateString();
}

/***/ })

})
//# sourceMappingURL=1.4460a4e649e04d94c113.hot-update.js.map