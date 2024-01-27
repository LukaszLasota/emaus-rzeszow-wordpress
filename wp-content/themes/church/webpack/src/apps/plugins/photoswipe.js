import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';
import PhotoSwipe from 'photoswipe';
import 'photoswipe/style.css';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';

export function initPhotoSwipe() {
    const lightboxImgEls = document.querySelectorAll('.lightbox-img');
    const lightboxGalleryEls = document.querySelectorAll('.lightbox-gallery');
    if (!lightboxImgEls.length && !lightboxGalleryEls.length) return;

    lightboxImgEls?.forEach((imgEl) => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: imgEl,
            children: 'a',
            showHideAnimationType: 'fade',
            pswpModule: PhotoSwipe
        });

        lightbox.addFilter('placeholderSrc', (placeholderSrc,
        content) => {
            return;
        });

        const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
        // Plugins options, for example:
            type: 'aside',
        });

        lightbox.init();
    });

    lightboxGalleryEls?.forEach((galleryEl) => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: galleryEl,
            children: 'a',
            showHideAnimationType: 'fade',
            pswpModule: PhotoSwipe
        });

        lightbox.addFilter('placeholderSrc', (placeholderSrc,
        content) => {
            return;
        });

        const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
        // Plugins options, for example:
            type: 'aside',
        });

        lightbox.init()
    })
}
