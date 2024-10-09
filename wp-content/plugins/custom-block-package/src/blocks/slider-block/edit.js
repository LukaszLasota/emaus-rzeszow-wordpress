import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, Button, PanelRow } from '@wordpress/components';
import { useEffect, useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './editor.scss';

const Edit = (props) => {
    const { attributes, setAttributes } = props;
    const { slides = [] } = attributes;
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && slides.length) {
            new Swiper(swiperRef.current, {
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
        }
    }, [slides]);

    const onSelectImage = (media) => {
        const newSlides = slides ? [...slides, { url: media.url, alt: media.alt, id: media.id }] : [{ url: media.url, alt: media.alt, id: media.id }];
        setAttributes({ slides: newSlides });
    };

    const removeImage = (index) => {
        const newSlides = slides.filter((_, i) => i !== index);
        setAttributes({ slides: newSlides });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Slider Settings', 'slider-block')}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectImage}
                            allowedTypes={['image']}
                            render={({ open }) => (
                                <Button onClick={open} isPrimary>
                                    {__('Add Slide', 'slider-block')}
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>
                </PanelBody>
                <PanelBody title={__('Slides', 'slider-block')}>
                    {slides.length > 0 ? (
                        slides.map((slide, index) => (
                            <PanelRow key={index}>
                                <img src={slide.url} alt={slide.alt} style={{ width: '100px', height: 'auto' }} />
                                <Button onClick={() => removeImage(index)} isSecondary>
                                    {__('Remove', 'slider-block')}
                                </Button>
                            </PanelRow>
                        ))
                    ) : (
                        <PanelRow>
                            {__('No slides added yet.', 'slider-block')}
                        </PanelRow>
                    )}
                </PanelBody>
            </InspectorControls>
            <div {...useBlockProps()}>
                <div className="swiper-container" ref={swiperRef}>
                    <div className="swiper-wrapper">
                        {slides.length > 0 && slides.map((slide, index) => (
                            <div className="swiper-slide" key={index}>
                                <img src={slide.url} alt={slide.alt} data-imageid={slide.id} style={{ width: '100%', height: 'auto' }} />
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            </div>
        </>
    );
};

export default Edit;
