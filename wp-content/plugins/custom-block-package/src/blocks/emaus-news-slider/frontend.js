document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('.emaus-news-slider')
    .forEach((slider) => {
      const autoplay = slider.dataset.autoplay === 'true';
      const autoplaySpeed = parseInt(slider.dataset.autoplaySpeed, 10) || 300000;

      window.initGlide(slider, {
        autoplay: autoplay ? autoplaySpeed : false,
        perView: 1,
      });
    });
});
