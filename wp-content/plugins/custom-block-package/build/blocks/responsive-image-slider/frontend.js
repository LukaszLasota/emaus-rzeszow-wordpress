/******/ (() => { // webpackBootstrap
/*!********************************************************!*\
  !*** ./src/blocks/responsive-image-slider/frontend.js ***!
  \********************************************************/
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.wp-block-custom-block-package-responsive-image-slider').forEach(slider => {
    const autoplaySpeed = 3000;
    const glideInstance = window.initGlide(slider, {
      autoplay: autoplaySpeed
    });

    // Pause button — always present (autoplay is always enabled).
    const pauseBtn = slider.querySelector('.responsive-slider__pause');
    if (pauseBtn) {
      let isPaused = false;
      pauseBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        if (isPaused) {
          glideInstance.pause();
          pauseBtn.setAttribute('aria-label', pauseBtn.dataset.labelPlay);
          pauseBtn.classList.add('is-paused');
        } else {
          glideInstance.play(autoplaySpeed);
          pauseBtn.setAttribute('aria-label', pauseBtn.dataset.labelPause);
          pauseBtn.classList.remove('is-paused');
        }
      });
    }
  });
});
/******/ })()
;
//# sourceMappingURL=frontend.js.map