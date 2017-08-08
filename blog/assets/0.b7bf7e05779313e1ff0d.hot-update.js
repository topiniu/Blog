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
    // console.log('hello');
    var jPassageItem = $(this).parents('.j_passage-item');
    var jPassageContent = $(this).siblings('.j_passage-content');
    var jTipText = $(this).children('.j_tip-text');

    let height = jPassageItem.height();
    if (height === 500) {

      jPassageContent.css('height', 'auto');
      if (jPassageContent.height() < 500) {
        jPassageItem.css('height', jPassageContent.height() + 62 + 50);

        setTimeout(function () {
          jPassageItem.css('height', 500);
        }, 300);
        return;
      }

      jPassageItem.css('height', jPassageContent.height() + 62 + 50);
      jTipText.text('收起来');
    } else {
      jPassageItem.css('height', 500);
      jTipText.text('显示全部');
      setTimeout(function () {
        jPassageContent.css('height', 438);
      }, 1000);
    }

  })

  Object(__WEBPACK_IMPORTED_MODULE_1__blurImg_js__["a" /* default */])();
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=0.b7bf7e05779313e1ff0d.hot-update.js.map