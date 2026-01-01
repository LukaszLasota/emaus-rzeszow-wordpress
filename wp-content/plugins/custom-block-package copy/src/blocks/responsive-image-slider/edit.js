import { __ } from '@wordpress/i18n';
import { 
  useBlockProps,
  InspectorControls,
  MediaUpload 
} from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import { useRef, useEffect } from '@wordpress/element';
import { initGlide } from '../common/glide-init.js';

export default function Edit({ attributes, setAttributes }) {
  const { desktopImages = [], mobileImages = [] } = attributes;

  const sliderRef = useRef(null);
  const glideInstanceRef = useRef(null);

  /**
   * 1. Obsługa inicjalizacji / niszczenia slidera przy zmianie atrybutów (desktopImages, mobileImages)
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
  }, [desktopImages, mobileImages]);

  /**
   * 2. Obsługa ResizeObserver – aktualizacja slidera przy zmianach rozmiaru kontenera
   */
  useEffect(() => {
    if (!sliderRef.current) return;

    const updateGlide = () => {
      if (glideInstanceRef.current) {
        glideInstanceRef.current.update();
      }
    };

    const observer = new ResizeObserver(() => {
      requestAnimationFrame(() => {
        updateGlide();
      });
    });

    observer.observe(sliderRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  /**
   * 3. Funkcje obsługujące wybór nowych obrazów w MediaUpload
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
   * 4. Funkcje do usuwania pojedynczych obrazów
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
   * 5. Obliczamy maxSlides (liczbę slajdów w edytorze, łącząc desktop i mobile)
   */
  const maxSlides = Math.max(desktopImages.length, mobileImages.length);

  /**
   * 6. Render
   */
  return (
    <div {...useBlockProps()}>

      <InspectorControls>
        {/* PanelBody: Desktop */}
        <PanelBody title={__('Obrazy dla Desktop', 'text-domain')}>
          {/* Przycisk do otwierania Media Library */}
          <MediaUpload
            onSelect={onSelectDesktopImages}
            allowedTypes={['image']}
            multiple={true}
            gallery={true}
            value={desktopImages.map((img) => img.id)}
            render={({ open }) => (
              <Button variant="primary" onClick={open}>
                {__('Wybierz obrazy (desktop)', 'text-domain')}
              </Button>
            )}
          />

          {/* Lista wybranych obrazów - miniaturki + przycisk do usuwania */}
          {desktopImages.length > 0 && (
            <div style={{ marginTop: '1em' }}>
              <p>{__('Wybrane obrazy desktop:', 'text-domain')} {desktopImages.length}</p>
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
                    {__('Usuń', 'text-domain')}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </PanelBody>

        {/* PanelBody: Mobile */}
        <PanelBody title={__('Obrazy dla Mobile', 'text-domain')} initialOpen={false}>
          <MediaUpload
            onSelect={onSelectMobileImages}
            allowedTypes={['image']}
            multiple={true}
            gallery={true}
            value={mobileImages.map((img) => img.id)}
            render={({ open }) => (
              <Button variant="primary" onClick={open}>
                {__('Wybierz obrazy (mobile)', 'text-domain')}
              </Button>
            )}
          />

          {mobileImages.length > 0 && (
            <div style={{ marginTop: '1em' }}>
              <p>{__('Wybrane obrazy mobile:', 'text-domain')} {mobileImages.length}</p>
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
                    {__('Usuń', 'text-domain')}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </PanelBody>
      </InspectorControls>

      {/* Podgląd slidera w edytorze */}
      {(desktopImages.length === 0 && mobileImages.length === 0) ? (
        <p>Brak obrazów. Wybierz je w panelu bocznym.</p>
      ) : (
        <div ref={sliderRef} className="editor-glide-container glide">
          <div className="glide__track" data-glide-el="track">
            <div className="glide__slides">
              {Array.from({ length: maxSlides }).map((_, i) => {
                const desktopImg = desktopImages[i]?.url;
                const mobileImg = mobileImages[i]?.url;
                const fallbackSrc = desktopImg || mobileImg;

                return (
                  <div key={i} className="glide__slide">
                    <picture>
                      {mobileImg && (
                        <source
                          media="(max-width: 767px)"
                          srcSet={mobileImg}
                        />
                      )}
                      {desktopImg && (
                        <source
                          media="(min-width: 768px)"
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
        </div>
      )}
    </div>
  );
}
