import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, ToggleControl, SelectControl, RadioControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';
import { useRef, useEffect } from '@wordpress/element';
import block from './block.json';

import './index.scss';

// Import funkcji initGlide
import { initGlide } from '../common/glide-init.js';

export default function Edit({ attributes, setAttributes }) {
  const { 
    numberOfPosts, 
    category, 
    autoplay, 
    autoplaySpeed, 
    sliderWidth, 
    mobileWidth, 
    sliderPadding,
    linkDestination 
  } = attributes;
  
  // Referencje
  const editorContainerRef = useRef(null);
  const glideInstanceRef = useRef(null);
  const observerRef = useRef(null);
  const lastInitializedIdRef = useRef(null);
  
  // Pobieranie kategorii
  const categories = useSelect((select) => {
    return select('core').getEntityRecords('taxonomy', 'category', { per_page: -1 });
  }, []);

  // Przygotowanie opcji kategorii
  const categoryOptions = categories ? [
    { value: '', label: __('Wszystkie kategorie', 'custom-block-package') },
    ...categories.map((category) => ({
      value: category.id.toString(),
      label: category.name,
    })),
  ] : [{ value: '', label: __('Ładowanie...', 'custom-block-package') }];

  // Opcje szerokości
  const widthOptions = [
    { value: '100', label: '100% - Pełna szerokość' },
    { value: '75', label: '75% szerokości' },
    { value: '50', label: '50% szerokości' },
  ];
  
  // Opcje linkowania
  const linkOptions = [
    { value: 'post', label: __('Do poszczególnych aktualności', 'custom-block-package') },
    { value: 'news_page', label: __('Do strony aktualności', 'custom-block-package') },
  ];

  // Funkcja do inicjalizacji slidera
  const initializeSlider = (sliderElement) => {
    // Sprawdź czy nie inicjalizujemy tego samego slidera po raz kolejny
    if (lastInitializedIdRef.current === sliderElement.id) {
      console.log('Ten slider został już zainicjalizowany:', sliderElement.id);
      return;
    }
    
    console.log('Inicjalizacja slidera dla elementu:', sliderElement);
    
    // Zniszcz poprzednią instancję jeśli istnieje
    if (glideInstanceRef.current) {
      try {
        glideInstanceRef.current.destroy();
      } catch (e) {
        console.log('Błąd podczas czyszczenia poprzedniej instancji:', e);
      }
      glideInstanceRef.current = null;
    }
    
    // Inicjalizuj nową instancję
    try {
      glideInstanceRef.current = initGlide(sliderElement, {
        type: 'carousel',
        gap: 0,
        autoplay: false,
        perView: 1,
      });
      
      // Zapamiętaj ID zainicjalizowanego slidera
      lastInitializedIdRef.current = sliderElement.id;
      
      console.log('Slider zainicjalizowany pomyślnie');
    } catch (err) {
      console.error('Błąd inicjalizacji slidera:', err);
      lastInitializedIdRef.current = null;
    }
  };

  // Funkcja sprawdzająca DOM i szukająca slidera po różnych selektorach
  const findAndInitSlider = () => {
    if (!editorContainerRef.current) return;
    
    console.log('Szukam slidera w DOM...');
    
    // Spróbuj znaleźć slider po kilku możliwych selektorach
    const possibleSelectors = [
      '.emaus-news-slider',
      '.glide',
      '.wp-block-custom-block-package-emaus-news-slider .glide',
      '[data-glide-el="track"]',
      '.block-editor-server-side-render .glide'
    ];
    
    let sliderElement = null;
    
    for (const selector of possibleSelectors) {
      sliderElement = editorContainerRef.current.querySelector(selector);
      if (sliderElement) {
        console.log(`Znaleziono slider używając selektora: ${selector}`, sliderElement);
        break;
      }
    }
    
    if (sliderElement) {
      initializeSlider(sliderElement);
    } else {
      console.log('Nie znaleziono slidera po żadnym selektorze');
    }
  };

  // Ustawienie obserwatora mutacji DOM
  useEffect(() => {
    if (!editorContainerRef.current) return;
    
    console.log('Ustawiam obserwator DOM...');
    
    // Czyszczenie poprzedniego obserwatora
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    // Resetuj ID zainicjalizowanego slidera po zmianie atrybutów
    lastInitializedIdRef.current = null;
    
    // Funkcja wykonywana przy zmianach w DOM
    const handleDOMMutation = (mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          console.log('Wykryto zmiany w DOM, szukam slidera...');
          
          // Daj trochę czasu na pełne załadowanie DOM
          setTimeout(findAndInitSlider, 500);
          break;
        }
      }
    };
    
    // Tworzenie nowego obserwatora
    observerRef.current = new MutationObserver(handleDOMMutation);
    
    // Rozpoczęcie obserwacji
    observerRef.current.observe(editorContainerRef.current, {
      childList: true,
      subtree: true
    });
    
    // Spróbuj od razu (może slider jest już w DOM)
    setTimeout(findAndInitSlider, 200);
    
    // Dodatkowa próba po dłuższym czasie
    const extraTimeout = setTimeout(findAndInitSlider, 2000);
    
    return () => {
      // Czyszczenie przy odmontowaniu
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearTimeout(extraTimeout);
      
      // Zniszcz instancję slidera
      if (glideInstanceRef.current) {
        try {
          glideInstanceRef.current.destroy();
        } catch (e) {}
        glideInstanceRef.current = null;
      }
    };
  }, [attributes]); // Zależność od attributes zapewnia reset przy zmianie parametrów

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__('Ustawienia slidera aktualności', 'custom-block-package')}>
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
          
          <PanelBody title={__('Ustawienia szerokości', 'custom-block-package')} initialOpen={true}>
            <RadioControl
              label={__('Szerokość na komputerach', 'custom-block-package')}
              selected={sliderWidth}
              options={widthOptions}
              onChange={(value) => setAttributes({ sliderWidth: value })}
              __nextHasNoMarginBottom={true}
            />
            
            <RadioControl
              label={__('Szerokość na telefonach', 'custom-block-package')}
              selected={mobileWidth}
              options={widthOptions}
              onChange={(value) => setAttributes({ mobileWidth: value })}
              help={__('Ustawienia dla urządzeń z ekranem poniżej 768px', 'custom-block-package')}
              __nextHasNoMarginBottom={true}
            />
            
            <RangeControl
              label={__('Wewnętrzny padding slidera (rem)', 'custom-block-package')}
              value={sliderPadding}
              onChange={(value) => setAttributes({ sliderPadding: value })}
              min={0}
              max={5}
              step={0.5}
              __nextHasNoMarginBottom={true}
            />
          </PanelBody>
        </PanelBody>
      </InspectorControls>
      
      <div className="emaus-news-slider-editor" ref={editorContainerRef}>
        <ServerSideRender
          block={block.name}
          attributes={attributes}
          EmptyResponsePlaceholder={() => <p>Ładowanie slidera...</p>}
        />
      </div>
    </div>
  );
}