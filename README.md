# Emaus Rzeszow - WordPress

Parish website for Emaus Rzeszow, built on WordPress with a custom theme, custom Gutenberg blocks, and a modern build pipeline.

## Tech Stack

- **WordPress** with PHP 8.2
- **Custom theme** (`church`) — webpack, SCSS, TypeScript
- **Custom blocks plugin** (`custom-block-package`) — `@wordpress/scripts`, Leaflet, Glide.js
- **Comparison plugin** (`comparison-of-religions`) — CPT-based accordion block
- **Custom posts plugin** (`custom-posts`) — reusable CPT builder, meetings post type
- **DDEV** for local development (nginx, MariaDB 10.11)
- **Code quality**: PHPStan, PHPCS (WordPress standards), ESLint

## Project Structure

```
.
├── .ddev/                          # DDEV config & custom commands
├── .githooks/                      # Pre-commit hook (stale asset check)
├── wp-content/
│   ├── themes/church/              # Custom theme
│   │   ├── App/                    # PHP classes (autoloaded)
│   │   │   ├── BasicTheme/         # RegisterAssets, Setup
│   │   │   ├── Core/               # PerformanceOptimizer
│   │   │   ├── Admin/              # Admin panel
│   │   │   └── Widgets/            # Custom widgets
│   │   ├── webpack/                # Build system
│   │   │   ├── src/                # Source (TS, SCSS, patterns)
│   │   │   ├── webpack.dev.js      # Dev config  → assets/*.js, *.css
│   │   │   └── webpack.prod.js     # Prod config → assets/*.min.js, *.min.css
│   │   ├── assets/                 # Compiled output
│   │   ├── patterns/               # Block patterns (PHP)
│   │   ├── template-parts/         # Template partials
│   │   └── theme.json              # Block editor settings
│   └── plugins/
│       ├── custom-block-package/   # Custom Gutenberg blocks
│       │   ├── src/blocks/         # Block source (JS, SCSS, PHP)
│       │   └── build/              # Compiled blocks
│       ├── custom-posts/           # Custom post types (meetings)
│       │   └── src/                # PHP classes (CptBuilder, RegisterPosts)
│       └── comparison-of-religions/# Comparison accordion block
│           ├── app/                # PHP (CPT, taxonomies, meta)
│           ├── src/                # Block source
│           └── build/              # Compiled block
└── package.json                    # Root scripts (build, dev, install)
```

## Custom Theme (`church`)

Custom WordPress theme with OOP architecture, webpack build pipeline, and block pattern support.

**Architecture:**
- `App/` — PSR-4 autoloaded PHP classes with interface-based hook registration
- `App/BasicTheme/` — `RegisterAssets` (environment-aware `.min` loading), `Setup` (theme supports, menus, image sizes)
- `App/Core/PerformanceOptimizer` — Forminator footer deferral, reCAPTCHA lazy-load, emoji removal, EWWW exclusions
- `App/Admin/` — Custom logo settings page, admin panel customizations
- `App/Widgets/` — Custom sidebar widgets

**Build system:**
- Webpack with separate dev/prod configs outputting to `assets/`
- Dev: `frontend.js` + `frontend.css` (with source maps)
- Prod: `frontend.min.js` + `frontend.min.css` (minified, tree-shaken)
- SCSS with BEM methodology, TypeScript entry points
- Dynamic import for masonry (code splitting, loaded only on blog pages)

**Block patterns:**
- `contact-section` — Contact form layout with Forminator integration
- `hello-section-main-page` — Hero greeting section for the front page

## Custom Plugins

### Custom Block Package (`custom-block-package`)

A collection of custom Gutenberg blocks built with `@wordpress/scripts`. Each block uses server-side rendering (`render.php`) and registers via `block.json`. The plugin includes transient caching for dynamic blocks (news slider, meeting list) with automatic cache invalidation on post save.

**Key features:**
- Responsive images with `<picture>` element and breakpoint-specific sources
- Leaflet.js map with lazy-loaded tiles via IntersectionObserver
- Glide.js-powered image sliders with responsive breakpoints and autoplay
- PDF embed block
- Accordion with nested inner blocks
- Section wrapper block with customizable layout

### Custom Posts (`custom-posts`)

Registers custom post types using a reusable `CptBuilder` class. Currently registers the `meetings` CPT (Spotkania) for parish meeting announcements.

- **CPT**: `meetings` — hierarchical, REST-enabled, uses standard categories
- **CptBuilder**: reusable class that wraps `register_post_type()` with sensible defaults
- **Custom admin columns**: title, author, categories, tags, date, last modified

### Comparison of Religions (`comparison-of-religions`)

Side-by-side comparison of Christian denominations displayed as a responsive accordion. Built on a Custom Post Type architecture:

- **CPT**: `comparison_topic` — one post per sub-topic (e.g. "Baptism", "Holy Scripture")
- **Taxonomy**: `comparison_category` — groups topics into accordion panels (e.g. "Sacraments", "Eschatology")
- **Meta**: repeatable `churches` field — array of `{church_name, description}` per topic

**Key features:**
- Desktop: CSS Grid table with aligned paragraphs across denominations
- Mobile: stacked layout per topic
- Admin repeater meta box for editing church data
- JSON import/export for data migration between environments
- Transient caching with auto-invalidation on post/term save
- Custom admin columns (church count, sort order)

## Custom Blocks

| Block | Description |
|-------|-------------|
| `dynamic-images` | Responsive `<picture>` with desktop/tablet/mobile sources |
| `responsive-image-slider` | Image carousel with Glide.js |
| `emaus-news-slider` | News post carousel |
| `map-block` | Leaflet.js map with lazy-loaded tiles |
| `image-text` | Image with text overlay and link |
| `section-block` | Flexible section container |
| `custom-accordion` / `accordion-item` | Expandable accordion |
| `pdf-block` | PDF file embed |
| `meeting-list` | Dynamic meeting list from CPT |
| `comparison-accordion` | Religious denomination comparison (separate plugin) |

## Setup

### Prerequisites

- [DDEV](https://ddev.readthedocs.io/) (Docker-based)
- Node.js 18+

### Quick Start

```bash
# 1. Start DDEV
ddev start

# 2. Install dependencies (also configures git hooks)
ddev install-deps

# 3. Import database
ddev import-db --file=produkcja.sql

# 4. Build all assets (production)
ddev build-all

# 5. Open site
ddev launch
```

### Without DDEV

```bash
npm install          # Installs all deps + configures git hooks
npm run build:all    # Production build for theme + plugins
```

## Development

### Watch Mode (auto-rebuild on save)

```bash
# All projects at once
ddev exec npm run dev:all

# Or individually
ddev exec npm run dev:theme       # Theme only
ddev exec npm run dev:blocks      # Blocks plugin only
ddev exec npm run dev:comparison  # Comparison plugin only
```

### Production Build

```bash
ddev build-all
# or: npm run build:all
```

### Asset Loading

The theme loads minified or unminified assets based on `wp_get_environment_type()`:

- **Production** (`production`) — loads `frontend.min.js`, `frontend.min.css`
- **Development** (default) — loads `frontend.js`, `frontend.css`

Watch and production builds generate separate files and do not overwrite each other.

## Pre-commit Hook

A git hook (`.githooks/pre-commit`) blocks commits when build assets are stale:

- **Theme**: checks if `.min` files are older than `webpack/src/`
- **Plugins**: checks if `build/` files are older than `src/`

If blocked, run `ddev build-all` (or `npm run build:all`) and re-stage.

The hook is auto-configured on `npm install` via `postinstall` scripts.

## Performance Optimizations

- **Local fonts** — Raleway self-hosted (no Google Fonts CDN)
- **Font preload** — `<link rel="preload">` for primary woff2
- **Forminator scripts** moved to footer via `wp_script_add_data`
- **reCAPTCHA lazy-loaded** — IntersectionObserver loads ~800KB script only near form
- **Leaflet map lazy-loaded** — tiles fetched only when map scrolls into view
- **Masonry dynamic import** — loaded only on blog pages via `import()`
- **Tree-shaking** enabled in webpack production build
- **WordPress emoji disabled** — modern browsers handle emoji natively
- **EWWW exclusion** for `fetchpriority="high"` images (prevents CLS)
