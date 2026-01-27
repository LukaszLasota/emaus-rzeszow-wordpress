document.addEventListener("DOMContentLoaded", function () {
    const masonryContainer = document.querySelector(".news");

    if (!masonryContainer) return;

    // Feature detection
    if (typeof Masonry === 'undefined' || typeof imagesLoaded === 'undefined') {
        console.warn('Masonry or imagesLoaded not loaded');
        return;
    }

    let msnry = null;

    function initMasonry() {
        const isDesktop = window.matchMedia('(min-width: 768px)').matches;

        if (isDesktop && !msnry) {
            // Initialize masonry - minimal config
            msnry = new Masonry(masonryContainer, {
                itemSelector: '.news__card',
                gutter: 25
            });

            // Wait for images to load before layout
            imagesLoaded(masonryContainer, function() {
                msnry.layout();
            });
        } else if (!isDesktop && msnry) {
            msnry.destroy();
            msnry = null;
        }
    }

    initMasonry();

    // Reinit on window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(initMasonry, 250);
    });
});