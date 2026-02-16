<?php
/**
 * News Slider Block Render Template
 *
 * @package CustomBlockPackage
 *
 * @var array $attributes Block attributes
 */

// Generate unique cache key based on attributes.
$cache_key        = 'emaus_news_slider_' . md5( serialize( $attributes ) );
$cache_group      = 'emaus_blocks';
$cache_expiration = 15 * MINUTE_IN_SECONDS;

// Try to get from cache.
$cached_output = wp_cache_get( $cache_key, $cache_group );
if ( false !== $cached_output ) {
	echo $cached_output; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	return;
}

// Start output buffering.
ob_start();

// Sanitize and validate attributes.
$numberOfPosts = isset( $attributes['numberOfPosts'] ) ? absint( $attributes['numberOfPosts'] ) : 3;
// Limit max posts for performance.
$numberOfPosts = min( $numberOfPosts, 10 );

$category      = isset( $attributes['category'] ) ? sanitize_text_field( $attributes['category'] ) : '';
$autoplay      = isset( $attributes['autoplay'] ) && rest_sanitize_boolean( $attributes['autoplay'] );
$autoplaySpeed = isset( $attributes['autoplaySpeed'] ) ? absint( $attributes['autoplaySpeed'] ) : 3000;
// Ensure reasonable values.
$autoplaySpeed = max( min( $autoplaySpeed, 10000 ), 1000 );

// Link destination option.
$linkDestination = isset( $attributes['linkDestination'] ) ? sanitize_text_field( $attributes['linkDestination'] ) : 'post';

// Validate link options.
$validLinkOptions = [ 'post', 'news_page' ];
if ( ! in_array( $linkDestination, $validLinkOptions, true ) ) {
	$linkDestination = 'post';
}

// Heading text.
$headingText = isset( $attributes['headingText'] ) ? sanitize_text_field( $attributes['headingText'] ) : __( 'Aktualności', 'custom-block-package' );

// WP_Query arguments - optimized.
$args = array(
	'post_type'              => 'post',
	'posts_per_page'         => $numberOfPosts,
	'post_status'            => 'publish',
	'no_found_rows'          => true,
	'update_post_meta_cache' => false,
	'update_post_term_cache' => false,
);

// Add category filter only if needed.
if ( ! empty( $category ) && is_numeric( $category ) ) {
	$args['cat'] = absint( $category );
}

// Execute database query.
$news_query = new WP_Query( $args );

// Check if posts found.
if ( ! $news_query->have_posts() ) {
	echo '<p>' . esc_html__( 'Brak aktualności do wyświetlenia.', 'custom-block-package' ) . '</p>';
	return;
}

// Get news page URL.
$news_page_url = get_post_type_archive_link( 'post' );
if ( ! $news_page_url ) {
	// Fallback: check if posts page is set.
	$posts_page_id = get_option( 'page_for_posts' );
	if ( $posts_page_id ) {
		$news_page_url = get_permalink( $posts_page_id );
	} else {
		// Final fallback: home page.
		$news_page_url = home_url();
	}
}

// Generate unique slider ID.
$slider_id = 'emaus-news-slider-' . wp_rand();

?>

<div id="<?php echo esc_attr( $slider_id ); ?>"
	class="emaus-news-slider"
	data-autoplay="<?php echo $autoplay ? 'true' : 'false'; ?>"
	data-autoplay-speed="<?php echo esc_attr( (string) $autoplaySpeed ); ?>">
	<h2 class="emaus-news-heading"><?php echo esc_html( $headingText ); ?></h2>
	<!-- Slider content wrapper - positions arrows relative to content width -->
	<div class="slider-content-wrapper">
		<div class="glide">
		<div class="glide__track" data-glide-el="track">
			<ul class="glide__slides">
				<?php
				while ( $news_query->have_posts() ) :
					$news_query->the_post();

					// Select appropriate URL based on linkDestination setting.
					$link_url = 'post' === $linkDestination ?
						esc_url( get_permalink() ) :
						esc_url( $news_page_url );

					$post_title = get_the_title();

					// Get content with filtering for security.
					$raw_content      = get_the_content();
					$filtered_content = wp_strip_all_tags( $raw_content );
					$post_content     = wp_trim_words( $filtered_content, 20, '...' );
					?>
					<li class="glide__slide">
						<a href="<?php echo $link_url; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Already escaped with esc_url(). ?>" class="news-slide">
						<div class="news-image">
							<?php
							if ( has_post_thumbnail() ) {
								the_post_thumbnail(
									'large',
									array(
										'class'   => 'news-thumbnail',
										'alt'     => esc_attr( $post_title ),
										'loading' => 'lazy',
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
				wp_reset_postdata();
				?>
			</ul>
		</div>

		<!-- Navigation arrows -->
		<div class="glide__arrows" data-glide-el="controls">
			<button class="glide__arrow glide__arrow--left" data-glide-dir="<" aria-label="<?php esc_attr_e( 'Poprzedni slajd', 'custom-block-package' ); ?>">
				<span class="screen-reader-text"><?php esc_html_e( 'Poprzedni', 'custom-block-package' ); ?></span>
			</button>
			<button class="glide__arrow glide__arrow--right" data-glide-dir=">" aria-label="<?php esc_attr_e( 'Następny slajd', 'custom-block-package' ); ?>">
				<span class="screen-reader-text"><?php esc_html_e( 'Następny', 'custom-block-package' ); ?></span>
			</button>
		</div>
		</div>
	</div>
</div>

<?php
// Get buffered HTML and save to cache.
$output = ob_get_clean();
wp_cache_set( $cache_key, $output, $cache_group, $cache_expiration );

// Display output.
echo $output; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
