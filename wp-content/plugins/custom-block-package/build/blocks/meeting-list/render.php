<?php
/**
 * Meeting List Block Render Template
 *
 * @package CustomBlockPackage
 *
 * @var array $attributes Block attributes
 */

// Generate unique cache key based on attributes.
$cache_key        = 'meeting_list_' . md5( serialize( $attributes ) );
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

$meeting_post_type = 'meetings';
$numberposts       = isset( $attributes['numberposts'] ) ? (int) $attributes['numberposts'] : -1;
$block_title       = isset( $attributes['blockTitle'] ) ? $attributes['blockTitle'] : __( 'Nasze spotkania', 'custom-block-package' );

$meetings = get_posts(
	array(
		'post_type'   => $meeting_post_type,
		'numberposts' => $numberposts,
		'meta_key'    => 'priority',
		'orderby'     => 'meta_value_num',
		'order'       => 'ASC',
	)
);

?>
<div <?php echo get_block_wrapper_attributes( array( 'class' => 'meetings' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<?php if ( ! empty( $block_title ) ) : ?>
		<h2><?php echo esc_html( $block_title ); ?></h2>
	<?php endif; ?>

	<div class="flipping-cards">
		<?php if ( ! empty( $meetings ) ) : ?>
			<?php
			foreach ( $meetings as $meeting ) :
				$meeting_title = get_the_title( $meeting->ID );
				$day_hour      = get_field( 'day_hour', $meeting->ID );
				$place         = get_field( 'place', $meeting->ID );
				$content       = apply_filters( 'the_content', $meeting->post_content );
				?>
				<div class="flipping-cards__card">
					<div class="flipping-cards__card-inner">
						<div class="flipping-cards__card-front">
							<h3><?php echo esc_html( $meeting_title ); ?></h3>

							<?php if ( $day_hour ) : ?>
								<p><?php echo esc_html( $day_hour ); ?></p>
							<?php else : ?>
								<p><?php esc_html_e( 'Brak godziny', 'custom-block-package' ); ?></p>
							<?php endif; ?>

							<?php if ( $place ) : ?>
								<p><?php echo esc_html( $place ); ?></p>
							<?php else : ?>
								<p><?php esc_html_e( 'Brak miejsca', 'custom-block-package' ); ?></p>
							<?php endif; ?>
						</div>

						<div class="flipping-cards__card-back">
							<div><?php echo wp_kses_post( $content ); ?></div>
						</div>
					</div>
				</div>
			<?php endforeach; ?>
		<?php else : ?>
			<p><?php esc_html_e( 'Brak dostępnych spotkań.', 'custom-block-package' ); ?></p>
		<?php endif; ?>
	</div>
</div>
<?php

// Get buffered HTML and save to cache.
$output = ob_get_clean();
wp_cache_set( $cache_key, $output, $cache_group, $cache_expiration );
echo $output; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
