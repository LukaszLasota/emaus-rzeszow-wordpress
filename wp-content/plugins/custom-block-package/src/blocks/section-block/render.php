<?php
/**
 * Section Block Server-Side Render
 *
 * @package CustomBlockPackage
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Rendered inner blocks content.
 * @var WP_Block $block      Block instance.
 */

$tag_name    = $attributes['tagName'] ?? 'div';
$layout_type = $attributes['layoutType'] ?? 'none';

// Build CSS classes.
$classes = array( 'cbp-block', 'section-block' );

if ( 'grid' === $layout_type ) {
	$classes[] = 'is-grid';
} elseif ( 'flex' === $layout_type ) {
	$classes[] = 'is-flex';
}

// Build inline styles.
$styles = array();

if ( ! empty( $attributes['backgroundImage'] ) ) {
	$styles[] = 'background-image:url(' . esc_url( $attributes['backgroundImage'] ) . ')';
}

if ( ! empty( $attributes['blockWidth'] ) ) {
	$styles[] = 'width:' . esc_attr( $attributes['blockWidth'] );
	$styles[] = 'margin-inline:auto';
}

// Grid CSS custom properties.
if ( 'grid' === $layout_type ) {
	$styles[] = '--columns-mobile:' . ( $attributes['columnsMobile'] ?? 1 );
	$styles[] = '--columns-small-tablet:' . ( $attributes['columnsSmallTablet'] ?? 2 );
	$styles[] = '--columns-large-tablet:' . ( $attributes['columnsLargeTablet'] ?? 3 );
	$styles[] = '--columns-desktop:' . ( $attributes['columnsDesktop'] ?? 4 );
	$styles[] = '--grid-gap:' . ( $attributes['gridGap'] ?? 10 ) . 'px';

	if ( ! empty( $attributes['justifyItems'] ) ) {
		$styles[] = '--justify-items:' . $attributes['justifyItems'];
	}
	if ( ! empty( $attributes['alignContent'] ) ) {
		$styles[] = '--align-content:' . $attributes['alignContent'];
	}
}

// Flex CSS custom properties.
if ( 'flex' === $layout_type ) {
	$styles[] = '--display:flex';

	if ( ! empty( $attributes['flexWrap'] ) ) {
		$styles[] = '--flex-wrap:' . $attributes['flexWrap'];
	}
	if ( ! empty( $attributes['flexDirection'] ) ) {
		$styles[] = '--flex-direction:' . $attributes['flexDirection'];
	}
	if ( ! empty( $attributes['alignItems'] ) ) {
		$styles[] = '--align-items:' . $attributes['alignItems'];
	}
	if ( ! empty( $attributes['justifyContent'] ) ) {
		$styles[] = '--justify-content:' . $attributes['justifyContent'];
	}
}

$style_string = implode( ';', $styles );

$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class' => implode( ' ', $classes ),
		'style' => $style_string,
	)
);

// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- $wrapper_attributes is pre-escaped by get_block_wrapper_attributes(), $content is pre-rendered inner blocks.
printf(
	'<%1$s %2$s>%3$s</%1$s>',
	esc_attr( $tag_name ),
	$wrapper_attributes,
	$content
);
// phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
