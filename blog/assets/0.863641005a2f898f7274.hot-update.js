webpackHotUpdate(0,{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = blurImgN;
function blurImgN() {
  var imgs = document.getElementsByTagName("img");
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    img.style.filter = "blur(15px)";
    var full = img.getAttribute("data-full");

    var img_full = document.createElement("img");

    img_full.src = full;

    img_full.onload = function () {
      img.src = full;
    }
  }
}


/***/ })

})
//# sourceMappingURL=0.863641005a2f898f7274.hot-update.js.map