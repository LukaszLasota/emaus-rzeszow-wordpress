import { initGlide } from './glide-init-export.js';

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
});
