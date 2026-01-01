import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { desktopImages = [], mobileImages = [] } = attributes;

  const maxSlides = Math.max(desktopImages.length, mobileImages.length);

  return (
    <div {...useBlockProps.save()}>
      {maxSlides === 0 ? (
        <p>Brak obrazów do wyświetlenia</p>
      ) : (
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
                    <img src={fallbackSrc} alt="" />
                  </picture>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">←</button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">→</button>
      </div>
    </div>
  );
}
