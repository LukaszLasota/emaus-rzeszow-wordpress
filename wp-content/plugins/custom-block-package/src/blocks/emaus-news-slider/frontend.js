document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('.emaus-news-slider')
    .forEach((wrapper) => {
      const glideEl = wrapper.querySelector('.glide');
      if (!glideEl) return;

      const autoplay = wrapper.dataset.autoplay === 'true';
      const autoplaySpeed = parseInt(wrapper.dataset.autoplaySpeed, 10) || 300000;

      window.initGlide(glideEl, {
        autoplay: autoplay ? autoplaySpeed : false,
        perView: 1,
        focusAt: 'center',
        peek: { before: 0, after: 0 },
      });
    });
});
