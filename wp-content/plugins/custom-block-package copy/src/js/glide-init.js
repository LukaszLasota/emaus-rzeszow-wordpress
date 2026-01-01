import Glide from '@glidejs/glide';

export function initGlide(selector, options = {}) {
  return new Glide(selector, {
    type: 'carousel',
    gap: 0,
    autoplay: 3000,
    keyboard: true,
    ...options,
  }).mount();
}

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('.wp-block-custom-block-package-responsive-image-slider')
    .forEach((slider) => {
      initGlide(slider, {
        type: 'carousel',
        gap: 0,
        autoplay: 3000,
        keyboard: true,
      });
    });


  // Inicjalizacja drugiego typu slidera (slider aktualności)
  document
    .querySelectorAll('.emaus-news-slider')
    .forEach((slider) => {
      const autoplay = slider.dataset.autoplay === 'true';
      const autoplaySpeed = parseInt(slider.dataset.autoplaySpeed) || 300000;
      
      initGlide(slider, {
        type: 'carousel',
        gap: 0,
        autoplay: autoplay ? autoplaySpeed : false,
        perView: 1,
      });
    });

});