<?php
/**
 * Accordion Item Block Render Template
 *
 * Renders a single accordion item with title and collapsible content.
 *
 * @package CustomBlockPackage
 *
 * @var array  $attributes Block attributes.
 * @var string $content    Inner blocks HTML.
 */

$title = isset( $attributes['title'] ) ? $attributes['title'] : '';
?>

<div <?php echo get_block_wrapper_attributes( array( 'class' => 'cbp-block accordion__item' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Returns pre-escaped HTML. ?>>
	<div class="accordion__title" role="button" tabindex="0" aria-expanded="false">
		<h3 class="accordion__title-text"><?php echo wp_kses_post( $title ); ?></h3>
	</div>
	<div class="accordion__content" hidden>
		<div class="accordion__content--box">
			<?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Inner blocks are already escaped by WordPress. ?>
		</div>
	</div>
</div>
