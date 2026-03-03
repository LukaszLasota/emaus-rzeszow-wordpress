# Emaus News Slider - Client-Side Rendering Implementation

## Data implementacji: 2026-01-27

## Problem
Editor WordPress (Gutenberg) pokazywał tylko statyczny HTML preview slidera. Strzałki nawigacji nie działały, autoplay nie działał.

## Rozwiązanie
Przepisano `edit.js` z Server-Side Rendering na Client-Side Rendering z pełną interaktywnością Glide.js.

---

## Zmodyfikowane pliki

### 1. edit.js
**Ścieżka:** `src/blocks/emaus-news-slider/edit.js`

#### Nowe importy:
```javascript
import { useRef, useEffect } from '@wordpress/element';
import { initGlide } from '../../js/glide-init.js';
```

#### Nowe refs:
```javascript
const sliderRef = useRef(null);
const glideInstanceRef = useRef(null);
```

#### Nowy useSelect dla postów:
```javascript
const posts = useSelect((select) => {
  const query = {
    per_page: numberOfPosts,
    _embed: true,
    status: 'publish',
    order: 'desc',
    orderby: 'date'
  };
  if (category && category !== '') {
    query.categories = category;
  }
  return select('core').getEntityRecords('postType', 'post', query);
}, [numberOfPosts, category]);
```

#### useEffect - inicjalizacja Glide:
```javascript
useEffect(() => {
  if (!sliderRef.current || !posts || posts.length === 0) return;

  if (glideInstanceRef.current) {
    glideInstanceRef.current.destroy();
    glideInstanceRef.current = null;
  }

  glideInstanceRef.current = initGlide(sliderRef.current, {
    type: 'carousel',
    autoplay: autoplay ? autoplaySpeed : false,
    hoverpause: true,
    perView: 1,
    gap: 0
  });

  return () => {
    if (glideInstanceRef.current) {
      glideInstanceRef.current.destroy();
      glideInstanceRef.current = null;
    }
  };
}, [posts?.length, autoplay, autoplaySpeed]);
```

#### useEffect - ResizeObserver:
```javascript
useEffect(() => {
  if (!sliderRef.current) return;

  const observer = new ResizeObserver(() => {
    requestAnimationFrame(() => {
      if (glideInstanceRef.current) {
        glideInstanceRef.current.update();
      }
    });
  });

  observer.observe(sliderRef.current);
  return () => observer.disconnect();
}, []);
```

#### Helper functions:
```javascript
const getFeaturedImageUrl = (post) => {
  if (post._embedded?.['wp:featuredmedia']?.[0]) {
    return post._embedded['wp:featuredmedia'][0].source_url;
  }
  return null;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const getLinkUrl = (post) => {
  if (linkDestination === 'news_page') {
    return '/aktualnosci/';
  }
  return post.link;
};
```

### 2. index.scss
**Ścieżka:** `src/blocks/emaus-news-slider/index.scss`

#### Dodane importy Glide CSS:
```scss
@import '~@glidejs/glide/dist/css/glide.core.min.css';
@import '~@glidejs/glide/dist/css/glide.theme.min.css';
```

---

## Struktura JSX slidera w edytorze

```jsx
<div className="emaus-news-slider-editor">
  <div className="emaus-news-slider">
    {headingText && <h2 className="emaus-news-heading">{headingText}</h2>}

    <div className="slider-content-wrapper">
      <div ref={sliderRef} className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {posts.map((post) => (
              <li key={post.id} className="glide__slide">
                <a href={linkUrl} className="news-slide" onClick={(e) => e.preventDefault()}>
                  <div className="news-image">
                    <img src={imageUrl} alt={post.title.rendered} />
                  </div>
                  <div className="news-content">
                    <h3>{post.title.rendered}</h3>
                    <p>{post.excerpt.rendered}</p>
                    <span className="news-date">{formatDate(post.date)}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="glide__arrows" data-glide-el="controls">
          <button className="glide__arrow glide__arrow--left" data-glide-dir="<">←</button>
          <button className="glide__arrow glide__arrow--right" data-glide-dir=">">→</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## Funkcjonalność

### W edytorze (Block Editor):
- Slider pokazuje wszystkie posty (1-10 zgodnie z numberOfPosts)
- Strzałki DZIAŁAJĄ - można klikać i przełączać slajdy
- Autoplay DZIAŁA - slider automatycznie przewija
- Zmiana numberOfPosts - natychmiast pobiera nowe posty
- Zmiana kategorii - natychmiast filtruje posty
- Zmiana nagłówka - natychmiast aktualizuje h2
- Featured images wyświetlane
- Excerpt i data postu wyświetlane

### Na frontendzie:
- Bez zmian - używa render.php + frontend.js

---

## Wzorzec implementacji

Implementacja wzorowana na `responsive-image-slider/edit.js`:
- Identyczna struktura useRef + useEffect
- Identyczny pattern destroy() → re-init
- Identyczna struktura HTML Glide
- Identyczny ResizeObserver pattern

---

## Build

```bash
cd wp-content/plugins/custom-block-package
npm run build
```

Webpack build: 4940ms