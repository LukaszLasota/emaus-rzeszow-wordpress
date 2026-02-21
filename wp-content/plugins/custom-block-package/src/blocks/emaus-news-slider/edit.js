import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, ToggleControl, SelectControl, TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useRef, useEffect } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { initGlide } from '../../js/glide-init.js';

import './index.scss';

export default function Edit({ attributes, setAttributes }) {
  const {
    numberOfPosts,
    category,
    autoplay,
    autoplaySpeed,
    linkDestination,
    headingText,
    perView
  } = attributes;

  const sliderRef = useRef(null);
  const glideInstanceRef = useRef(null);

  // Fetch categories for select control
  const categories = useSelect((select) => {
    return select('core').getEntityRecords('taxonomy', 'category', { per_page: -1 });
  }, []);

  // Fetch posts based on numberOfPosts and category
  const posts = useSelect((select) => {
    const query = {
      per_page: numberOfPosts,
      _embed: true, // Embed featured media
      status: 'publish',
      order: 'desc',
      orderby: 'date'
    };

    // Add category filter if selected
    if (category && category !== '') {
      query.categories = category;
    }

    return select('core').getEntityRecords('postType', 'post', query);
  }, [numberOfPosts, category]);

  // Prepare category options for select
  const categoryOptions = categories ? [
    { value: '', label: __('Wszystkie kategorie', 'custom-block-package') },
    ...categories.map((cat) => ({
      value: cat.id.toString(),
      label: cat.name,
    })),
  ] : [{ value: '', label: __('Ładowanie...', 'custom-block-package') }];

  // Link destination options
  const linkOptions = [
    { value: 'post', label: __('Do poszczególnych aktualności', 'custom-block-package') },
    { value: 'news_page', label: __('Do strony aktualności', 'custom-block-package') },
  ];

  /**
   * Initialize Glide slider when posts are loaded or settings change
   */
  useEffect(() => {
    if (!sliderRef.current || !posts || posts.length === 0) return;

    // Destroy previous instance if exists
    if (glideInstanceRef.current) {
      glideInstanceRef.current.destroy();
      glideInstanceRef.current = null;
    }

    // Initialize Glide with configuration
    glideInstanceRef.current = initGlide(sliderRef.current, {
      type: 'carousel',
      autoplay: autoplay ? autoplaySpeed : false,
      hoverpause: true,
      perView: perView || 1,
      gap: perView > 1 ? 20 : 0
    });

    // Cleanup on unmount
    return () => {
      if (glideInstanceRef.current) {
        glideInstanceRef.current.destroy();
        glideInstanceRef.current = null;
      }
    };
  }, [posts?.length, autoplay, autoplaySpeed, perView]);

  /**
   * ResizeObserver to update Glide on container size changes
   */
  useEffect(() => {
    if (!sliderRef.current) return;

    const wrapper = sliderRef.current.closest('.wp-block-custom-block-package-emaus-news-slider');
    if (!wrapper) return;

    let delayedUpdate = null;

    const observer = new ResizeObserver(() => {
      requestAnimationFrame(() => {
        if (glideInstanceRef.current) {
          glideInstanceRef.current.update();
        }
      });

      // Second update after sidebar animation completes
      clearTimeout(delayedUpdate);
      delayedUpdate = setTimeout(() => {
        if (glideInstanceRef.current) {
          glideInstanceRef.current.update();
        }
      }, 350);
    });

    observer.observe(wrapper);

    return () => {
      clearTimeout(delayedUpdate);
      observer.disconnect();
    };
  }, [!!posts?.length]);

  // Helper function to get featured image URL
  const getFeaturedImageUrl = (post) => {
    if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return null;
  };

  // Helper function to get link URL
  const getLinkUrl = (post) => {
    if (linkDestination === 'news_page') {
      return '/aktualnosci/';
    }
    return post.link;
  };

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__('Ustawienia slidera aktualności', 'custom-block-package')}>
          <TextControl
            label={__('Nagłówek', 'custom-block-package')}
            value={headingText}
            onChange={(value) => setAttributes({ headingText: value })}
            __nextHasNoMarginBottom={true}
          />

          <RangeControl
            label={__('Liczba aktualności', 'custom-block-package')}
            value={numberOfPosts}
            onChange={(value) => setAttributes({ numberOfPosts: value })}
            min={1}
            max={10}
            __nextHasNoMarginBottom={true}
          />

          <RangeControl
            label={__('Slajdy widoczne jednocześnie', 'custom-block-package')}
            value={perView}
            onChange={(value) => setAttributes({ perView: value })}
            min={1}
            max={3}
            __nextHasNoMarginBottom={true}
          />

          <SelectControl
            label={__('Kategoria', 'custom-block-package')}
            value={category}
            options={categoryOptions}
            onChange={(value) => setAttributes({ category: value })}
            __nextHasNoMarginBottom={true}
          />

          <SelectControl
            label={__('Cel linków', 'custom-block-package')}
            value={linkDestination || 'post'}
            options={linkOptions}
            onChange={(value) => setAttributes({ linkDestination: value })}
            help={__('Wybierz, czy linki powinny prowadzić do poszczególnych aktualności, czy do strony z aktualnościami', 'custom-block-package')}
            __nextHasNoMarginBottom={true}
          />

          <ToggleControl
            label={__('Automatyczne przewijanie', 'custom-block-package')}
            checked={autoplay}
            onChange={(value) => setAttributes({ autoplay: value })}
            __nextHasNoMarginBottom={true}
          />

          {autoplay && (
            <RangeControl
              label={__('Czas pomiędzy slajdami (ms)', 'custom-block-package')}
              value={autoplaySpeed}
              onChange={(value) => setAttributes({ autoplaySpeed: value })}
              min={1000}
              max={10000}
              step={500}
              __nextHasNoMarginBottom={true}
            />
          )}
        </PanelBody>
      </InspectorControls>

      {/* Interactive Glide slider preview */}
      {!posts ? (
        <div className="emaus-news-slider-loading">
          <p>{__('Ładowanie aktualności...', 'custom-block-package')}</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="emaus-news-slider-empty">
          <p>{__('Brak aktualności do wyświetlenia.', 'custom-block-package')}</p>
        </div>
      ) : (
        <div className="emaus-news-slider-editor">
          <div className="emaus-news-slider">
            {/* Heading */}
            {headingText && (
              <h2 className="emaus-news-heading">{headingText}</h2>
            )}

            {/* Glide slider structure */}
            <div className="slider-content-wrapper">
              <div ref={sliderRef} className="glide">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides">
                    {posts.map((post) => {
                      const imageUrl = getFeaturedImageUrl(post);
                      const linkUrl = getLinkUrl(post);

                      return (
                        <li key={post.id} className="glide__slide">
                          <a href={linkUrl} className="news-slide" onClick={(e) => e.preventDefault()}>
                            {imageUrl && (
                              <div className="news-image">
                                <img src={imageUrl} alt={post.title.rendered} loading="lazy" />
                              </div>
                            )}
                            <div className="news-content">
                              <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                              <div className="news-short-content" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                            </div>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Navigation arrows */}
                <div className="glide__arrows" data-glide-el="controls">
                  <button
                    className="glide__arrow glide__arrow--left"
                    data-glide-dir="<"
                    aria-label={__('Poprzedni slajd', 'custom-block-package')}
                  >
                    <span className="screen-reader-text">{__('Poprzedni', 'custom-block-package')}</span>
                  </button>
                  <button
                    className="glide__arrow glide__arrow--right"
                    data-glide-dir=">"
                    aria-label={__('Następny slajd', 'custom-block-package')}
                  >
                    <span className="screen-reader-text">{__('Następny', 'custom-block-package')}</span>
                  </button>
                </div>
              </div>

              {/* Bullet navigation */}
              <div className="slider-nav">
                <div className="glide__bullets" data-glide-el="controls[nav]">
                  {posts.map((_, i) => (
                    <button
                      key={i}
                      className={`glide__bullet${i === 0 ? ' glide__bullet--active' : ''}`}
                      data-glide-dir={`=${i}`}
                      aria-label={sprintf(__('Slajd %d', 'custom-block-package'), i + 1)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}