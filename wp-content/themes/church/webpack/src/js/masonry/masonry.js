document.addEventListener("DOMContentLoaded", function () {
    const masonryContainer = document.querySelector(".news");
    if (masonryContainer) {
        new Masonry(masonryContainer, {
            itemSelector: ".news__card",
            percentPosition: true
        });
    }
});

