document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('.wp-block-custom-block-package-responsive-image-slider')
    .forEach((slider) => {
      window.initGlide(slider);
    });
});
