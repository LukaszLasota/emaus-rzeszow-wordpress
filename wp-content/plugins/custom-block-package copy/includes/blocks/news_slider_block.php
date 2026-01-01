<?php
/**
 * Renderuje blok News Slider
 * 
 * @param array $attributes Atrybuty bloku.
 * @return string Wyrenderowana zawartość HTML.
 */
function render_news_slider_block( $attributes ) {
    // Generowanie unikalnego klucza cache na podstawie atrybutów
    $cache_key = 'emaus_news_slider_' . md5( serialize( $attributes ) );
    $cache_group = 'emaus_blocks';
    $cache_expiration = 15 * MINUTE_IN_SECONDS; // 15 minut
    
    // Próba pobrania z cache
    $output = wp_cache_get( $cache_key, $cache_group );
    if ( false !== $output ) {
        return $output;
    }
    
    // Sanityzacja i walidacja atrybutów
    $numberOfPosts = isset( $attributes['numberOfPosts'] ) ? absint( $attributes['numberOfPosts'] ) : 3;
    // Ogranicz maksymalną liczbę postów dla wydajności
    $numberOfPosts = min( $numberOfPosts, 10 );
    
    $category = isset( $attributes['category'] ) ? sanitize_text_field( $attributes['category'] ) : '';
    $autoplay = isset( $attributes['autoplay'] ) && rest_sanitize_boolean( $attributes['autoplay'] );
    $autoplaySpeed = isset( $attributes['autoplaySpeed'] ) ? absint( $attributes['autoplaySpeed'] ) : 3000;
    // Zapewnienie racjonalnych wartości
    $autoplaySpeed = max( min( $autoplaySpeed, 10000 ), 1000 );
    
    // Nowe atrybuty szerokości
    $sliderWidth = isset( $attributes['sliderWidth'] ) ? sanitize_text_field( $attributes['sliderWidth'] ) : '100';
    $mobileWidth = isset( $attributes['mobileWidth'] ) ? sanitize_text_field( $attributes['mobileWidth'] ) : '100';
    $sliderPadding = isset( $attributes['sliderPadding'] ) ? floatval( $attributes['sliderPadding'] ) : 0;
    // Dodane: opcja wyboru linkowania
    $linkDestination = isset( $attributes['linkDestination'] ) ? sanitize_text_field( $attributes['linkDestination'] ) : 'post';
    
    // Walidacja szerokości
    $validWidths = ['100', '75', '50'];
    if (!in_array($sliderWidth, $validWidths)) $sliderWidth = '100';
    if (!in_array($mobileWidth, $validWidths)) $mobileWidth = '100';
    
    // Walidacja opcji linkowania
    $validLinkOptions = ['post', 'news_page'];
    if (!in_array($linkDestination, $validLinkOptions)) $linkDestination = 'post';
    
    // Argumenty dla WP_Query - zoptymalizowane
    $args = array(
        'post_type'              => 'post',
        'posts_per_page'         => $numberOfPosts,
        'post_status'            => 'publish',
        'no_found_rows'          => true,
        'update_post_meta_cache' => false,
        'update_post_term_cache' => false,
    );
    
    // Dodaj filtr kategorii tylko jeśli jest potrzebny
    if ( ! empty( $category ) && is_numeric( $category ) ) {
        $args['cat'] = absint( $category );
    }
    
    // Wykonanie zapytania do bazy danych
    $news_query = new WP_Query( $args );
    
    // Sprawdź czy znaleziono posty
    if ( ! $news_query->have_posts() ) {
        return '<p>' . esc_html__( 'Brak aktualności do wyświetlenia.', 'custom-block-package' ) . '</p>';
    }
    
    // Ustal URL strony aktualności
    $news_page_url = get_post_type_archive_link('post');
    if (!$news_page_url) {
        // Fallback: sprawdź czy istnieje strona ustawiona jako strona wpisów
        $posts_page_id = get_option('page_for_posts');
        if ($posts_page_id) {
            $news_page_url = get_permalink($posts_page_id);
        } else {
            // Ostateczny fallback: strona główna
            $news_page_url = home_url();
        }
    }
    
    // Rozpocznij buforowanie HTML
    ob_start();
    
    // Generowanie unikalnego ID dla slidera
    $slider_id = 'emaus-news-slider-' . wp_rand();
    
    // Klasy CSS dla szerokości
    $width_class = 'emaus-slider-width-' . $sliderWidth;
    $mobile_width_class = 'emaus-slider-mobile-width-' . $mobileWidth;
    
    // Style inline dla paddingu
    $padding_style = $sliderPadding > 0 ? 'style="padding: ' . esc_attr($sliderPadding) . 'rem;"' : '';
    ?>
   
    <div id="<?php echo esc_attr( $slider_id ); ?>" 
         class="emaus-news-slider glide <?php echo esc_attr( $width_class . ' ' . $mobile_width_class ); ?>" 
         data-autoplay="<?php echo $autoplay ? 'true' : 'false'; ?>"
         data-autoplay-speed="<?php echo esc_attr( $autoplaySpeed ); ?>"
        <?php echo $padding_style; ?>>
        <h2 class="emaus-news-heading"><?php esc_html_e( 'Aktualności', 'custom-block-package' ); ?></h2>
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <?php
                while ( $news_query->have_posts() ) :
                    $news_query->the_post();
                    
                    $post_id = get_the_ID();
                    
                    // Wybierz odpowiedni URL na podstawie ustawienia linkDestination
                    $link_url = $linkDestination === 'post' ? 
                        esc_url( get_permalink() ) : 
                        esc_url( $news_page_url );
                    
                    $post_title = get_the_title();
                    
                    // Użyj get_the_content() z filtrowaniem dla bezpieczeństwa
                    $raw_content = get_the_content();
                    $filtered_content = wp_strip_all_tags($raw_content);
                    $post_content = wp_trim_words( $filtered_content, 20, '...' );
                    ?>
                    <li class="glide__slide">
                        <a href="<?php echo $link_url; ?>" class="news-slide">
                            <div class="news-image">
                                <?php 
                                if ( has_post_thumbnail() ) {
                                    the_post_thumbnail(
                                        'large', 
                                        array(
                                            'class'  => 'news-thumbnail',
                                            'alt'    => esc_attr( $post_title ),
                                            'loading' => 'lazy'
                                        )
                                    );
                                }
                                ?>
                            </div>
                            <div class="news-content">
                                <h3><?php echo esc_html( $post_title ); ?></h3>
                                <p class="news-short-content">
                                    <?php echo esc_html( $post_content ); ?>
                                </p>
                            </div>
                        </a>
                    </li>
                    <?php
                endwhile;
                wp_reset_postdata(); // Ważne! Reset globalnych danych postu
                ?>
            </ul>
        </div>
        
        <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<" aria-label="<?php esc_attr_e( 'Poprzedni slajd', 'custom-block-package' ); ?>">
                <span class="screen-reader-text"><?php esc_html_e( 'Poprzedni', 'custom-block-package' ); ?></span>
            </button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">" aria-label="<?php esc_attr_e( 'Następny slajd', 'custom-block-package' ); ?>">
                <span class="screen-reader-text"><?php esc_html_e( 'Następny', 'custom-block-package' ); ?></span>
            </button>
        </div>
    </div>
    <?php
    
    // Pobierz zbuforowany HTML
    $output = ob_get_clean();
    
    // Zapisz w cache
    wp_cache_set( $cache_key, $output, $cache_group, $cache_expiration );
    
    return $output;
}