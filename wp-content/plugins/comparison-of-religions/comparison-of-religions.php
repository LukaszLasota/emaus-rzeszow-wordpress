<?php
/**
 * Plugin Name: Comparison of Religions - Porównanie wyznań
 * Description: React + CPT + strona opcji.
 * Version: 1.0.0
 * Author: Łukasz Lasota
 * License: GPL2
 * Text Domain: comparison-of-religions
 */

defined('ABSPATH') || exit;


class ComparisonOfReligionsPlugin {

    public static function init() {
        // Rejestrujemy CPT
        add_action('init', [self::class, 'register_comparison_cpt']);
    
        // Dodajemy stronę opcji (menu page)
        add_action('admin_menu', [self::class, 'add_options_page']);
    
        // Enqueue skryptu React tylko na stronie opcji
        add_action('admin_enqueue_scripts', [self::class, 'enqueue_admin_assets']);
    
        // Enqueue skryptów dla bloków Gutenberga w edytorze
        // add_action('enqueue_block_editor_assets', [self::class, 'enqueue_block_editor_assets']);
    
        // Rejestrujemy niestandardowe endpointy do zarządzania CPT
        add_action('rest_api_init', [self::class, 'register_rest_routes']);
    }

    public static function register_comparison_cpt() {
        register_post_type('comparison', [
            'labels' => [
                'name' => 'Comparisons',
                'singular_name' => 'Comparison',
            ],
            'public'              => true,    // Bo chcesz wyszukiwać
            'exclude_from_search' => false,   // Ujmuje w wynikach search
            'show_ui'            => true,    // Ukrywamy w standardowym menu
            'show_in_rest'       => true,     // Integracja z REST
            'supports'           => ['title','editor'],
            'rewrite'            => ['slug' => 'comparison'],
            'capability_type'    => 'post',
            'map_meta_cap'       => true,
        ]);
    }

    public static function add_options_page() {
        add_menu_page(
            'Comparison Options',      // Tytuł zakładki
            'Comparison Options',      // Nazwa w menu
            'manage_options',          // Uprawnienia
            'comparison-options',      // Slug w URL
            [self::class, 'render_options_page'], // Callback
            'dashicons-admin-generic', // Ikona
            25
        );
    }

    public static function render_options_page() {
        echo '<div class="wrap">';
        echo '<h1>Comparison of Religions - Options</h1>';
        echo '<div id="cor-react-root"></div>'; 
        echo '</div>';
    }

    public static function enqueue_admin_assets($hook) {
        // Sprawdź, czy jesteś na odpowiedniej stronie w panelu administracyjnym
        if ($hook === 'toplevel_page_comparison-options') {
            // Ładuj React App
            wp_enqueue_script(
                'cor-react-app', // Unikalny uchwyt skryptu
                plugin_dir_url(__FILE__) . 'build/react-app/index.js', // Ścieżka do pliku Reacta
                array('react', 'react-dom', 'wp-element'), // Zależności, np. React i React-DOM wbudowane w WordPress
                filemtime(plugin_dir_path(__FILE__) . 'build/react-app/index.js'), // Automatyczne wersjonowanie na podstawie czasu modyfikacji pliku
                true // Ładowanie w stopce strony
            );
    
            // Przekazywanie zmiennych do skryptu React
            wp_localize_script(
                'cor-react-app', // Uchwyt skryptu
                'ComparisonData', // Nazwa globalnej zmiennej JavaScript
                [
                    'restUrl' => esc_url_raw(rest_url('comparison-of-religions/v1/')), // URL do API REST
                    'nonce'   => wp_create_nonce('wp_rest'), // Nonce do uwierzytelnienia w API
                ]
            );
        }
    }
    
    // public static function enqueue_block_editor_assets() {
    //     // Ładuj skrypty dla bloku Gutenberga
    //     wp_enqueue_script(
    //         'cor-block-editor', // Unikalny uchwyt skryptu
    //         plugin_dir_url(__FILE__) . 'build/blocks/editor.js', // Ścieżka do pliku edytora bloku
    //         array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components'), // Zależności Gutenberga
    //         filemtime(plugin_dir_path(__FILE__) . 'build/blocks/editor.js'), // Automatyczne wersjonowanie na podstawie czasu modyfikacji pliku
    //         true // Ładowanie w stopce strony
    //     );
    
    //     // Możesz też załadować style dla edytora bloku, jeśli są potrzebne
    //     wp_enqueue_style(
    //         'cor-block-editor-style',
    //         plugin_dir_url(__FILE__) . 'build/blocks/editor.css', // Ścieżka do CSS edytora
    //         array('wp-edit-blocks'), // Zależności stylów Gutenberga
    //         filemtime(plugin_dir_path(__FILE__) . 'build/blocks/editor.css') // Automatyczne wersjonowanie na podstawie czasu modyfikacji pliku
    //     );
    // }

    /**
     * GET /comparison-of-religions/v1/comparison
     * Zwraca listę wszystkich postów typu 'comparison'.
     */
    public static function get_comparison_items($request) {
        $args = [
            'post_type'      => 'comparison',
            'posts_per_page' => -1,
            'post_status'    => 'any',
        ];
        $query = new \WP_Query($args);
        $results = [];

        while ($query->have_posts()) {
            $query->the_post();
            $results[] = [
                'ID'      => get_the_ID(),
                'title'   => get_the_title(),
                'content' => \wp_kses_post(get_the_content()),
            ];
        }
        \wp_reset_postdata();

        return $results;
    }

    /**
     * POST /comparison-of-religions/v1/comparison
     * Tworzy nowy post 'comparison'.
     */
    public static function create_comparison_item($request) {
        $params = $request->get_json_params();

        $post_id = \wp_insert_post([
            'post_type'    => 'comparison',
            'post_status'  => 'publish',
            'post_title'   => sanitize_text_field($params['title'] ?? 'Untitled'),
            'post_content' => \wp_kses_post($params['content'] ?? ''),
        ], true);

        if (\is_wp_error($post_id)) {
            return $post_id; // WordPress automatycznie sformatuje to w JSON
        }
        return ['success' => true, 'ID' => $post_id];
    }

    /**
     * POST /comparison-of-religions/v1/comparison/(?P<id>\d+)
     * Aktualizuje istniejący post 'comparison' o ID = {id}.
     */
    public static function update_comparison_item($request) {
        $params = $request->get_json_params();
        $id = (int) $request['id'];

        $post = \get_post($id);
        if (!$post || $post->post_type !== 'comparison') {
            return new \WP_Error('not_found', 'No comparison found', ['status' => 404]);
        }
        // Uaktualniamy
        $updated_id = \wp_update_post([
            'ID'           => $id,
            'post_title'   => sanitize_text_field($params['title'] ?? $post->post_title),
            'post_content' => \wp_kses_post($params['content'] ?? $post->post_content),
        ], true);

        if (\is_wp_error($updated_id)) {
            return $updated_id;
        }
        return ['success' => true, 'ID' => $updated_id];
    }

    /**
     * DELETE /comparison-of-religions/v1/comparison/(?P<id>\d+)
     * Usuwa post 'comparison' o danym ID.
     */
    public static function delete_comparison_item($request) {
        $id = (int) $request['id'];
        $deleted = \wp_delete_post($id, true); // force_delete = true

        if (!$deleted) {
            return new \WP_Error('not_found', 'No comparison found or unable to delete', ['status' => 404]);
        }
        return ['success' => true, 'ID' => $id];
    }

    

    public static function register_rest_routes() {
        // 1) GET /wp-json/comparison-of-religions/v1/comparison
        register_rest_route('comparison-of-religions/v1', '/comparison', [
            'methods'  => 'GET',
            'callback' => [self::class, 'get_comparison_items'],
            'permission_callback' => function() {
                // do przeglądania wystarczy "read" lub "edit_posts" – zależy od potrzeb
                return current_user_can('edit_posts');
            },
        ]);
    
        // 2) POST /wp-json/comparison-of-religions/v1/comparison (tworzenie nowego)
        register_rest_route('comparison-of-religions/v1', '/comparison', [
            'methods'  => 'POST',
            'callback' => [self::class, 'create_comparison_item'],
            'permission_callback' => function() {
                // do tworzenia – "publish_posts" lub "edit_posts"
                return current_user_can('publish_posts');
            },
        ]);
    
        // 3) POST /wp-json/comparison-of-religions/v1/comparison/(?P<id>\d+) (aktualizacja)
        //   Można też użyć metody 'PUT' – ale WP najczęściej pozwala "POST" z parametrem _method=PUT, zależy od preferencji
        register_rest_route('comparison-of-religions/v1', '/comparison/(?P<id>\d+)', [
            'methods'  => 'POST',
            'callback' => [self::class, 'update_comparison_item'],
            'permission_callback' => function($request) {
                // Sprawdź, czy user może edytować post
                $post_id = (int) $request['id'];
                if (!$post_id) {
                    return false;
                }
                // Weryfikujemy, czy current_user_can('edit_post', $post_id)
                return current_user_can('edit_post', $post_id);
            },
        ]);
    
        // 4) DELETE /wp-json/comparison-of-religions/v1/comparison/(?P<id>\d+) (usunięcie)
        register_rest_route('comparison-of-religions/v1', '/comparison/(?P<id>\d+)', [
            'methods'  => 'DELETE',
            'callback' => [self::class, 'delete_comparison_item'],
            'permission_callback' => function($request) {
                $post_id = (int) $request['id'];
                if (!$post_id) {
                    return false;
                }
                // Np. user musi mieć prawo do kasowania
                return current_user_can('delete_post', $post_id);
            },
        ]);
    }

    // analogicznie definicje: get_comparison_items, create_comparison_item, update, delete ...
}

ComparisonOfReligionsPlugin::init();

function cr_register_blocks() {
    $blocks = [
        // ['name' => 'accordion-cpt'],
        ['name' => 'accordion-cpt', 'options' => [
            'render_callback' => 'render_comparison_block'
        ]],
    ];

    foreach ($blocks as $block) {
        $block_dir = CR_PLUGIN_DIR . 'build/blocks/' . $block['name'];

        if (file_exists($block_dir)) {
            register_block_type(
                $block_dir,
                isset($block['options']) ? $block['options'] : []
            );
        }
    }
}

add_action('init', 'cr_register_blocks');



define('CR_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('CR_PLUGIN_FILE', __FILE__);
define('CR_PLUGIN_URL', plugin_dir_url(__FILE__));



function render_comparison_block($attributes) {
    
    $headerBackground   = $attributes['headerBackground']   ?? '#ffffff';
    $headerBorderColor  = $attributes['headerBorderColor']  ?? '#000000';
    $headerTextColor    = $attributes['headerTextColor']    ?? '#000000';

    $unique_id = 'comparison-accordion-' . uniqid();
    echo '<div id="' . esc_attr($unique_id) . '" class="comparison-accordion">';
    echo '<style>
    #' . esc_attr($unique_id) . ' {
        --accordion-border-color: ' . esc_attr($headerBorderColor) . ';
    }
    </style>';

    $comparisons = get_posts([
        'post_type'      => 'comparison',
        'posts_per_page' => -1,
        'orderby'        => 'date',
        'order'          => 'ASC',
    ]);

    if (empty($comparisons)) {
        return '<p>' . __('Brak postów', 'comparison-of-religions') . '</p>';
    }

    ob_start();
    ?>
    <div class="comparison-accordion"

    style="
    --compAccordionDesktop: <?php echo esc_attr($attributes['widthDesktop'] ?? '70%'); ?>;
    --compAccordionTablet: <?php echo esc_attr($attributes['widthTablet'] ?? '80%'); ?>;
    --compAccordionMobile: <?php echo esc_attr($attributes['widthMobile'] ?? '95%'); ?>;
    "
    >
        <?php foreach ($comparisons as $index => $comparison) :
            $content  = json_decode(wp_strip_all_tags($comparison->post_content), true);
            $is_last  = ($index === count($comparisons) - 1);

            $buttonId = 'accordion-button-' . $index;
            $panelId  = 'accordion-panel-'  . $index;
        ?>
            <div class="comparison-accordion__item" data-index="<?php echo esc_attr($index); ?>">
                
                <div class="comparison-accordion__header" id="heading-<?php echo esc_attr($index); ?>">
                    <h2>
                        <button
                            id="<?php echo esc_attr($buttonId); ?>"
                            class="comparison-accordion__toggle"
                            type="button"
                            aria-expanded="false"
                            aria-controls="<?php echo esc_attr($panelId); ?>"
                            style="
                                background-color: <?php echo esc_attr($headerBackground); ?>;
                                border-top: 1px solid <?php echo esc_attr($headerBorderColor); ?>;
                                border-right: 1px solid <?php echo esc_attr($headerBorderColor); ?>;
                                border-left: 1px solid <?php echo esc_attr($headerBorderColor); ?>;
                                color: <?php echo esc_attr($headerTextColor); ?>;
                                
                            "
                        >
                            <?php echo esc_html($comparison->post_title); ?>
                        </button>
                    </h2>
                </div>

                <div
                    id="<?php echo esc_attr($panelId); ?>"
                    class="comparison-accordion__content"
                    role="region"
                    aria-labelledby="<?php echo esc_attr($buttonId); ?>"
                    style="
                        max-height: 0;
                        opacity: 0;
                        overflow: hidden;
                        transition: max-height 0.6s ease-in-out, opacity 0.6s ease-in-out;
                        border-left: 1px solid <?php echo esc_attr($headerBorderColor); ?>;
                        border-right: 1px solid <?php echo esc_attr($headerBorderColor); ?>;
                        border-bottom: <?php echo $is_last ? '1px solid ' . esc_attr($headerBorderColor) : 'none'; ?>;
                    "
                >
                    <div class="comparison-accordion__body">
                        
                        <div class="comparison-accordion__header-row">
                            <div class="comparison-accordion__column">
                                <h3><?php esc_html_e('Temat', 'comparison-of-religions'); ?></h3>
                            </div>
                            <div class="comparison-accordion__column">
                                <h3><?php esc_html_e('Kościół Rzymskokatolicki', 'comparison-of-religions'); ?></h3>
                            </div>
                            <div class="comparison-accordion__column">
                                <h3><?php esc_html_e('Kościół Protestancki', 'comparison-of-religions'); ?></h3>
                            </div>
                        </div>

                        <div class="comparison-accordion__content-flex">
                            <?php if (!empty($content)) : ?>
                                <?php foreach ($content as $item) : ?>
                                    <?php 
                                        $maxRows = max(
                                            count($item['catholic']   ?? []),
                                            count($item['protestant'] ?? [])
                                        );

                                        $catholicRows   = !empty($item['catholic'])   ? $item['catholic']   : [];
                                        $protestantRows = !empty($item['protestant']) ? $item['protestant'] : [];
                                    ?>
                                  <div class="comparison-accordion__row">
    <!-- Temat -->
    <div class="comparison-accordion__column--topic">
        <p><?php echo esc_html($item['topic']); ?></p>
    </div>

    <!-- Dwie oddzielne kolumny: katolicka i protestancka -->
    <div class="comparison-accordion__column--combined">

        <div class="comparison-accordion__single-church comparison-accordion__single-church--catholic">
            <h4><?php esc_html_e('Kościół Rzymskokatolicki', 'comparison-of-religions'); ?></h4>

            <?php foreach ($catholicRows as $catholicText) : ?>
                <p class="comparison-accordion__paragraph">
                    <?php echo esc_html($catholicText); ?>
                </p>
            <?php endforeach; ?>
        </div>

        <div class="comparison-accordion__single-church comparison-accordion__single-church--protestant">
            <h4><?php esc_html_e('Kościół Protestancki', 'comparison-of-religions'); ?></h4>

            <?php foreach ($protestantRows as $protestantText) : ?>
                <p class="comparison-accordion__paragraph">
                    <?php echo esc_html($protestantText); ?>
                </p>
            <?php endforeach; ?>
        </div>

    </div><!-- .comparison-accordion__column--combined -->
</div><!-- .comparison-accordion__row -->
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </div><!-- .comparison-accordion__content-grid -->
                    </div><!-- .comparison-accordion__body -->
                </div><!-- .comparison-accordion__content -->
            </div><!-- .comparison-accordion__item -->
        <?php endforeach; ?>
    </div><!-- .comparison-accordion -->
    <?php
    return ob_get_clean();
}
