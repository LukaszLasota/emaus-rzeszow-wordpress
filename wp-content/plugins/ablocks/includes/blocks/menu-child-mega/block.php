<?php
namespace ABlocks\Blocks\MenuChildMega;

use ABlocks\Classes\BlockBaseAbstract;
use ABlocks\Classes\CssGenerator;
use ABlocks\Controls\Range;

class Block extends BlockBaseAbstract {
	protected $parent_block_name = 'menu';
	protected $block_name = 'menu-child-mega';

	public function build_css( $attributes ) {

		$css_generator = new CssGenerator( $attributes, $this->block_name );
			  // Wrapper CSS
			$css_generator->add_class_styles(
				'{{WRAPPER}}',
				$this->get_wrapper_css( $attributes, '' ),
				$this->get_wrapper_css( $attributes, 'Tablet' ),
				$this->get_wrapper_css( $attributes, 'Mobile' )
			);
			$css_generator->add_class_styles(
				'{{WRAPPER}} div .ablocks-block-container',
				$this->get_megaMenu_css( $attributes ),
			);
		return $css_generator->generate_css();
	}
	private function get_wrapper_css( $attributes, $device = '' ) {
		$css = [];
		$padding = isset( $attributes['padding'] ) ? $attributes['padding'] : '';
		if ( $attributes['height'] ) {
			$css['overflow-y'] = 'auto';
			$css['overflow-x'] = 'hidden';

		}
		return array_merge(
			Range::get_css([
				'attributeValue' => $attributes['width'],
				'attribute_object_key' => 'value',
				'isResponsive' => true,
				'defaultValue' => 100,
				'hasUnit' => true,
				'unitDefaultValue' => '%',
				'property' => 'width',
				'device' => $device,
			]),
			Range::get_css([
				'attributeValue' => $attributes['height'],
				'attribute_object_key' => 'value',
				'isResponsive' => true,
				'hasUnit' => true,
				'unitDefaultValue' => 'px',
				'property' => 'height',
				'device' => $device,
			]),
			Range::get_css([
				'attributeValue' => $attributes['positionX'],
				'attribute_object_key' => 'value',
				'isResponsive' => true,
				'defaultValue' => 0,
				'property' => 'left',
				'unitDefaultValue' => '%',
				'hasUnit' => true,
				'device' => $device,
			]),
			Range::get_css([
				'attributeValue' => $attributes['positionY'],
				'attribute_object_key' => 'value',
				'isResponsive' => true,
				'defaultValue' => 100,
				'device' => $device,
				'unitDefaultValue' => '%',
				'hasUnit' => true,
				'property' => 'top',
				'device' => $device,
			]),
			$css
		);
	}
	private function get_megaMenu_css( $attributes, $device = '' ) {
		$css = [];

		if ( isset( $attributes['fullWidth'] ) && $attributes['fullWidth'] ) {
			$mega_screen_width = '100vw';
			$css['max-width'] = $mega_screen_width;
		}
		return $css;
	}
}
