<?php
/**
 * Responsive Image Slider Block Render Template
 *
 * @package CustomBlockPackage
 *
 * @var array $attributes Block attributes
 * @var string $content Block content
 * @var WP_Block $block Block instance
 */

$desktop_images = $attributes['desktopImages'] ?? [];
$mobile_images  = $attributes['mobileImages'] ?? [];

// Validate and sanitize mobileBreakpoint.
$mobile_breakpoint = absint( $attributes['mobileBreakpoint'] ?? 767 );
if ( $mobile_breakpoint < 0 || $mobile_breakpoint > 9999 ) {
	$mobile_breakpoint = 767;
}
$desktop_breakpoint = $mobile_breakpoint + 1;

$max_slides = max( count( $desktop_images ), count( $mobile_images ) );

// Build array with valid slides only (skip deleted images).
$valid_slides = [];
for ( $i = 0; $i < $max_slides; $i++ ) {
	$desktop_img = $desktop_images[ $i ] ?? null;
	$mobile_img  = $mobile_images[ $i ] ?? null;

	// Validate ID as integer.
	$desktop_id = is_array( $desktop_img ) ? absint( $desktop_img['id'] ?? 0 ) : 0;
	$mobile_id  = is_array( $mobile_img ) ? absint( $mobile_img['id'] ?? 0 ) : 0;

	// Check if at least one image exists.
	$desktop_exists = $desktop_id && wp_get_attachment_image_url( $desktop_id, 'large' );
	$mobile_exists  = $mobile_id && wp_get_attachment_image_url( $mobile_id, 'large' );

	// Add slide only if at least one image is available.
	if ( $desktop_exists || $mobile_exists ) {
		$valid_slides[] = [
			'desktop_id' => $desktop_id,
			'mobile_id'  => $mobile_id,
		];
	}
}

$valid_slides_count = count( $valid_slides );

$wrapper_attributes = get_block_wrapper_attributes(
	[
		'class' => 'glide wp-block-custom-block-package-responsive-image-slider',
	]
);
?>

<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<?php if ( 0 === $valid_slides_count ) : ?>
		<p><?php esc_html_e( 'Brak obrazów do wyświetlenia', 'custom-block-package' ); ?></p>
	<?php else : ?>
		<div class="glide__track" data-glide-el="track">
			<div class="glide__slides">
				<?php foreach ( $valid_slides as $slide ) : ?>
					<?php
					$desktop_id = $slide['desktop_id'];
					$mobile_id  = $slide['mobile_id'];

					// Fallback ID if one of them doesn't exist.
					$fallback_id = $desktop_id ?: $mobile_id;
					?>

					<div class="glide__slide">
						<picture>
							<?php if ( $mobile_id ) : ?>
								<?php
								$mobile_srcset = wp_get_attachment_image_srcset( $mobile_id, 'large' );
								$mobile_sizes  = wp_get_attachment_image_sizes( $mobile_id, 'large' );
								$mobile_src    = wp_get_attachment_image_url( $mobile_id, 'large' );
								?>
								<source
									media="(max-width: <?php echo esc_attr( (string) $mobile_breakpoint ); ?>px)"
									srcset="<?php echo esc_attr( $mobile_srcset ); ?>"
									sizes="<?php echo esc_attr( $mobile_sizes ); ?>"
								/>
							<?php endif; ?>

							<?php if ( $desktop_id ) : ?>
								<?php
								$desktop_srcset = wp_get_attachment_image_srcset( $desktop_id, 'full' );
								$desktop_sizes  = wp_get_attachment_image_sizes( $desktop_id, 'full' );
								?>
								<source
									media="(min-width: <?php echo esc_attr( (string) $desktop_breakpoint ); ?>px)"
									srcset="<?php echo esc_attr( $desktop_srcset ); ?>"
									sizes="<?php echo esc_attr( $desktop_sizes ); ?>"
								/>
							<?php endif; ?>

							<?php
							// Fallback img - manual tag without sizes (sizes inherited from <source>).
							if ( $fallback_id ) {
								$img_src      = wp_get_attachment_image_url( $fallback_id, 'large' );
								$img_srcset   = wp_get_attachment_image_srcset( $fallback_id, 'large' );
								$img_alt      = get_post_meta( $fallback_id, '_wp_attachment_image_alt', true );
								$img_metadata = wp_get_attachment_metadata( $fallback_id );
								$img_width    = $img_metadata['width'] ?? '';
								$img_height   = $img_metadata['height'] ?? '';

								if ( $img_src ) {
									printf(
										'<img src="%s" srcset="%s" alt="%s" width="%s" height="%s" loading="lazy" decoding="async" style="width: 100%%; height: auto; display: block;">',
										esc_url( $img_src ),
										esc_attr( $img_srcset ),
										esc_attr( $img_alt ),
										esc_attr( (string) $img_width ),
										esc_attr( (string) $img_height )
									);
								}
							}
							?>
						</picture>
					</div>
				<?php endforeach; ?>
			</div>
		</div>

		<div class="glide__arrows" data-glide-el="controls">
			<button class="glide__arrow glide__arrow--left" data-glide-dir="&lt;" aria-label="<?php esc_attr_e( 'Poprzedni slajd', 'custom-block-package' ); ?>"></button>
			<button class="glide__arrow glide__arrow--right" data-glide-dir="&gt;" aria-label="<?php esc_attr_e( 'Następny slajd', 'custom-block-package' ); ?>"></button>
		</div>

		<div class="glide__bullets" data-glide-el="controls[nav]">
			<?php for ( $i = 0; $i < $valid_slides_count; $i++ ) : ?>
				<button class="glide__bullet" data-glide-dir="=<?php echo esc_attr( (string) $i ); ?>" aria-label="
				<?php
				// Translators: %d is the slide number.
				echo esc_attr( sprintf( __( 'Przejdź do slajdu %d', 'custom-block-package' ), $i + 1 ) );
				?>
			"></button>
			<?php endfor; ?>
		</div>
	<?php endif; ?> 
</div>
