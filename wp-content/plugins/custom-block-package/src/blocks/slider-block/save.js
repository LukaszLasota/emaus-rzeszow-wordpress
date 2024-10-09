import { useBlockProps } from '@wordpress/block-editor';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

Swiper.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Save = (props) => {
    const { attributes } = props;
    const { slides = [] } = attributes;

    useEffect(() => {
        const swiperContainers = document.querySelectorAll('.swiper-container');
        swiperContainers.forEach((container) => {
            new Swiper(container, {
                modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
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
    }, []);

    return (
        <div {...useBlockProps.save()} style={{ position: 'relative' }}>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {slides.length > 0 && slides.map((slide, index) => (
                        <div className="swiper-slide" key={index}>
                            <img
                                key={index}
                                src={slide.url}
                                alt={slide.alt}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    ))}
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </div>
    );
};

export default Save;
