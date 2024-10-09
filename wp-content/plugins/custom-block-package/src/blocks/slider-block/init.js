document.addEventListener('DOMContentLoaded', function () {
    var swiperContainers = document.querySelectorAll('.swiper-container');

    swiperContainers.forEach(function (container) {
        new Swiper(container, {
            modules: [Swiper.Navigation, Swiper.Pagination, Swiper.Scrollbar, Swiper.Autoplay],
            slidesPerView: 1,
            speed: 500,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 2000,
            },
        });
    });
});
