import { __, sprintf } from '@wordpress/i18n';
import {
  useBlockProps,
  InspectorControls,
  MediaUpload
} from '@wordpress/block-editor';
import { PanelBody, Button, RangeControl } from '@wordpress/components';
import { useRef, useEffect } from '@wordpress/element';
import { initGlide } from '../../js/glide-init.js';

export default function Edit({ attributes, setAttributes }) {
  const { desktopImages = [], mobileImages = [], mobileBreakpoint = 767 } = attributes;

  const sliderRef = useRef(null);
  const glideInstanceRef = useRef(null);

  /**
   * 1. Handle slider initialization / destruction on attribute changes (desktopImages, mobileImages)
   */
  useEffect(() => {
    if (!sliderRef.current) return;

    const hasSlides = (desktopImages.length > 0) || (mobileImages.length > 0);

    if (hasSlides) {
      if (glideInstanceRef.current) {
        glideInstanceRef.current.destroy();
        glideInstanceRef.current = null;
      }
      glideInstanceRef.current = initGlide(sliderRef.current /*, dodatkowe opcje */);
    } else {
      if (glideInstanceRef.current) {
        glideInstanceRef.current.destroy();
        glideInstanceRef.current = null;
      }
    }

    return () => {
      if (glideInstanceRef.current) {
        glideInstanceRef.current.destroy();
        glideInstanceRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desktopImages.length, mobileImages.length]);

  /**
   * 2. ResizeObserver handling - update slider on container size changes
   */
  useEffect(() => {
    if (!sliderRef.current) return;

    const wrapper = sliderRef.current.parentElement;
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
  }, []);

  /**
   * 3. Functions handling new image selection in MediaUpload
   */
  const onSelectDesktopImages = (media) => {
    const newImages = media.map((m) => ({
      id: m.id,
      url: m.url,
    }));
    setAttributes({ desktopImages: newImages });
  };

  const onSelectMobileImages = (media) => {
    const newImages = media.map((m) => ({
      id: m.id,
      url: m.url,
    }));
    setAttributes({ mobileImages: newImages });
  };

  /**
   * 4. Functions for removing individual images
   */
  const removeDesktopImage = (index) => {
    const updated = [...desktopImages];
    updated.splice(index, 1);
    setAttributes({ desktopImages: updated });
  };

  const removeMobileImage = (index) => {
    const updated = [...mobileImages];
    updated.splice(index, 1);
    setAttributes({ mobileImages: updated });
  };

  /**
   * 5. Calculate maxSlides (number of slides in editor, combining desktop and mobile)
   */
  const maxSlides = Math.max(desktopImages.length, mobileImages.length);

  /**
   * 6. Render
   */
  return (
    <div {...useBlockProps()}>

      <InspectorControls>
        {/* PanelBody: Settings */}
        <PanelBody title={__('Ustawienia', 'custom-block-package')} initialOpen={true}>
          <RangeControl
            label={__('Mobile breakpoint (px)', 'custom-block-package')}
            help={__('Maksymalna szerokość ekranu dla wersji mobilnej', 'custom-block-package')}
            value={mobileBreakpoint}
            onChange={(value) => setAttributes({ mobileBreakpoint: value })}
            min={0}
            max={1200}
            step={1}
          />
        </PanelBody>

        {/* PanelBody: Desktop */}
        <PanelBody title={__('Obrazy dla Desktop', 'custom-block-package')} initialOpen={false}>
          {/* Button to open Media Library */}
          <MediaUpload
            onSelect={onSelectDesktopImages}
            allowedTypes={['image']}
            multiple={true}
            gallery={true}
            value={desktopImages.map((img) => img.id)}
            render={({ open }) => (
              <Button variant="primary" onClick={open}>
                {__('Wybierz obrazy (desktop)', 'custom-block-package')}
              </Button>
            )}
          />

          {/* List of selected images - thumbnails + remove button */}
          {desktopImages.length > 0 && (
            <div style={{ marginTop: '1em' }}>
              <p>{sprintf(__('Wybrane obrazy desktop: %d', 'custom-block-package'), desktopImages.length)}</p>
              {desktopImages.map((img, index) => (
                <div
                  key={img.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.5em'
                  }}
                >
                  <img
                    src={img.url}
                    alt=""
                    style={{ width: '60px', marginRight: '0.5em' }}
                  />
                  <Button
                    variant="secondary"
                    onClick={() => removeDesktopImage(index)}
                  >
                    {__('Usuń', 'custom-block-package')}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </PanelBody>

        {/* PanelBody: Mobile */}
        <PanelBody title={__('Obrazy dla Mobile', 'custom-block-package')} initialOpen={false}>
          <MediaUpload
            onSelect={onSelectMobileImages}
            allowedTypes={['image']}
            multiple={true}
            gallery={true}
            value={mobileImages.map((img) => img.id)}
            render={({ open }) => (
              <Button variant="primary" onClick={open}>
                {__('Wybierz obrazy (mobile)', 'custom-block-package')}
              </Button>
            )}
          />

          {mobileImages.length > 0 && (
            <div style={{ marginTop: '1em' }}>
              <p>{sprintf(__('Wybrane obrazy mobile: %d', 'custom-block-package'), mobileImages.length)}</p>
              {mobileImages.map((img, index) => (
                <div
                  key={img.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.5em'
                  }}
                >
                  <img
                    src={img.url}
                    alt=""
                    style={{ width: '60px', marginRight: '0.5em' }}
                  />
                  <Button
                    variant="secondary"
                    onClick={() => removeMobileImage(index)}
                  >
                    {__('Usuń', 'custom-block-package')}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </PanelBody>
      </InspectorControls>

      {/* Slider preview in editor */}
      {(desktopImages.length === 0 && mobileImages.length === 0) ? (
        <p>{__('Brak obrazów. Wybierz je w panelu bocznym.', 'custom-block-package')}</p>
      ) : (
        <div ref={sliderRef} className="editor-glide-container glide">
          <div className="glide__track" data-glide-el="track">
            <div className="glide__slides">
              {Array.from({ length: maxSlides }).map((_, i) => {
                const desktopImg = desktopImages[i]?.url;
                const mobileImg = mobileImages[i]?.url;
                const fallbackSrc = desktopImg || mobileImg;
                const desktopBreakpoint = mobileBreakpoint + 1;

                return (
                  <div key={i} className="glide__slide">
                    <picture>
                      {mobileImg && (
                        <source
                          media={`(max-width: ${mobileBreakpoint}px)`}
                          srcSet={mobileImg}
                        />
                      )}
                      {desktopImg && (
                        <source
                          media={`(min-width: ${desktopBreakpoint}px)`}
                          srcSet={desktopImg}
                        />
                      )}
                      <img
                        src={fallbackSrc}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </picture>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="glide__arrows" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--left" data-glide-dir="<">←</button>
            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">→</button>
          </div>

          <div className="glide__bullets" data-glide-el="controls[nav]">
            {Array.from({ length: maxSlides }).map((_, i) => (
              <button
                key={i}
                className="glide__bullet"
                data-glide-dir={`=${i}`}
                aria-label={sprintf(__('Przejdź do slajdu %d', 'custom-block-package'), i + 1)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
