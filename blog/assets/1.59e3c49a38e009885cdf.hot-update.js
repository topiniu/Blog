webpackHotUpdate(1,{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n}\n.content-container {\n  display: flex;\n  background: #7B90D2;\n  min-height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(9)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(11, function() {
			var newContent = __webpack_require__(11);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadData_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__less_navigationBar_less__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__less_navigationBar_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__less_navigationBar_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__less_main_less__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__less_main_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__less_main_less__);





$(function () {
  // 动画效果显示导航栏
  $('.j_top-navigation-bar-container').css('display', 'flex');
  $('.j_ani-nav-background').css('left', '0');
});

/***/ })

})
//# sourceMappingURL=1.59e3c49a38e009885cdf.hot-update.js.map