webpackHotUpdate(0,{

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadData_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blurImg_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__less_navigationBar_less__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__less_navigationBar_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__less_navigationBar_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__less_main_less__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__less_main_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__less_main_less__);






$(function () {
  console.log('Greetings!! Hello there!');
  // 动画效果显示导航栏
  $('.j_top-navigation-bar-container').css('display', 'flex');
  $('.j_ani-nav-background').css('left', '0');

  $('.j_opacity-cover').on('click', function () {
    console.log('hello');
    let height = $('.j_passage-item').height();
    if (height === 500) {
      if ($('.j_passage-content').height() < 500) {
        $('.j_passage-item').css('height', $('.j_passage-content').height() + 62 + 50);

        setTimeout(function () {
          $('.j_passage-item').css('height', 500);
        }, 500);
        return;
      }
      $('.j_passage-content').css('height', 'auto');
      $('.j_passage-item').css('height', $('.j_passage-content').height() + 62 + 50);
      $('.j_tip-text').text('收起来');
    } else {
      $('.j_passage-item').css('height', 500);
      $('.j_tip-text').text('显示全部');
      setTimeout(function () {
        $('.j_passage-content').css('height', 438);
      }, 1000);
    }

  })

  Object(__WEBPACK_IMPORTED_MODULE_1__blurImg_js__["a" /* default */])();
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=0.34284571ecd51c2a5bdf.hot-update.js.map