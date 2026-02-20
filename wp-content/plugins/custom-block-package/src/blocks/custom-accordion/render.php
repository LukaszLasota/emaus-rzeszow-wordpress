<?php
/**
 * Custom Accordion Block Render Template
 *
 * Wrapper for accordion items.
 *
 * @package CustomBlockPackage
 *
 * @var array  $attributes Block attributes.
 * @var string $content    Inner blocks HTML.
 */

if ( ! trim( $content ) ) {
	return;
}
?>

<div <?php echo get_block_wrapper_attributes( array( 'class' => 'cbp-block' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Returns pre-escaped HTML. ?>>
	<?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Inner blocks are already escaped by WordPress. ?>
</div>