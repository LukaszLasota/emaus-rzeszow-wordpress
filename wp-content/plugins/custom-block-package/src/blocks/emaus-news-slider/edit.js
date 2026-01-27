import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, ToggleControl, SelectControl, TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import './index.scss';

export default function Edit({ attributes, setAttributes }) {
  const {
    numberOfPosts,
    category,
    autoplay,
    autoplaySpeed,
    linkDestination,
    headingText
  } = attributes;

  // Fetch categories for select control
  const categories = useSelect((select) => {
    return select('core').getEntityRecords('taxonomy', 'category', { per_page: -1 });
  }, []);

  // Fetch latest post (independent of category selection)
  const latestPost = useSelect((select) => {
    const posts = select('core').getEntityRecords('postType', 'post', {
      per_page: 1,
      _embed: true,
      status: 'publish'
    });
    return posts && posts.length > 0 ? posts[0] : null;
  }, []);

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

  // Extract post data for preview
  const getPostData = () => {
    if (!latestPost) {
      return null;
    }

    const title = latestPost.title?.rendered || '';
    const excerpt = latestPost.excerpt?.rendered
      ? latestPost.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 100) + '...'
      : '';

    // Get featured image
    let featuredImage = null;
    if (latestPost._embedded && latestPost._embedded['wp:featuredmedia']) {
      const media = latestPost._embedded['wp:featuredmedia'][0];
      if (media && media.source_url) {
        featuredImage = media.source_url;
      }
    }

    return { title, excerpt, featuredImage };
  };

  const postData = getPostData();

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

      {/* Editor preview container - matches render.php structure */}
      <div className="emaus-news-slider-editor">
        <div className="emaus-news-slider">
          <h2 className="emaus-news-heading">{headingText}</h2>

          {!postData ? (
            <p>{__('Ładowanie...', 'custom-block-package')}</p>
          ) : (
            <div className="slider-content-wrapper">
              <div className="news-slide">
                <div className="news-image">
                  {postData.featuredImage ? (
                    <img
                      src={postData.featuredImage}
                      alt={postData.title}
                      className="news-thumbnail"
                    />
                  ) : (
                    <div className="news-image-placeholder">
                      {__('Brak obrazka', 'custom-block-package')}
                    </div>
                  )}
                </div>
                <div className="news-content">
                  <h3 dangerouslySetInnerHTML={{ __html: postData.title }} />
                  <p className="news-short-content">{postData.excerpt}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}