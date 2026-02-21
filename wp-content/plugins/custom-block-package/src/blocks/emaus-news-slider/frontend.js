document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('.emaus-news-slider')
    .forEach((wrapper) => {
      const glideEl = wrapper.querySelector('.glide');
      if (!glideEl) return;

      const autoplay = wrapper.dataset.autoplay === 'true';
      const autoplaySpeed = parseInt(wrapper.dataset.autoplaySpeed, 10) || 3000;
      const perView = parseInt(wrapper.dataset.perView, 10) || 1;

      const glideInstance = window.initGlide(glideEl, {
        autoplay: autoplay ? autoplaySpeed : false,
        perView,
        gap: perView > 1 ? 20 : 0,
        focusAt: 'center',
        peek: { before: 0, after: 0 },
      });

      // Pause button — only present in DOM when autoplay is enabled.
      const pauseBtn = wrapper.querySelector('.emaus-news-slider__pause');
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