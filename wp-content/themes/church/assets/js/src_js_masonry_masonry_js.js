(self["webpackChunkchurch"] = self["webpackChunkchurch"] || []).push([["src_js_masonry_masonry_js"],{

/***/ "./src/js/masonry/masonry.js":
/*!***********************************!*\
  !*** ./src/js/masonry/masonry.js ***!
  \***********************************/
/***/ (() => {

// Self-invoking: DOM is already ready when loaded via dynamic import.
(function () {
  var masonryContainer = document.querySelector(".news");
  if (!masonryContainer) return;

  // Feature detection
  if (typeof Masonry === 'undefined' || typeof imagesLoaded === 'undefined') {
    console.warn('Masonry or imagesLoaded not loaded');
    return;
  }
  var msnry = null;
  function initMasonry() {
    var isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (isDesktop && !msnry) {
      // Initialize masonry - minimal config
      msnry = new Masonry(masonryContainer, {
        itemSelector: '.news__card',
        gutter: 25
      });

      // Wait for images to load before layout
      imagesLoaded(masonryContainer, function () {
        msnry.layout();
      });
    } else if (!isDesktop && msnry) {
      msnry.destroy();
      msnry = null;
    }
  }
  initMasonry();

  // Reinit on window resize
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initMasonry, 250);
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_js_masonry_masonry_js.js.map?464f2e3c561693f01db6