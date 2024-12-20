<?php
namespace ABlocks\Blocks\StarRatings;

use ABlocks\Controls\Alignment;
use ABlocks\Controls\Range;
use ABlocks\Controls\Typography;
use ABlocks\Helper;
use ABlocks\Controls\Icon;

$attributes = [
	'block_id'         => [
		'type'         => 'string',
		'default'      => '',
	],
	'scale'            => [
		'type'         => 'number',
		'default'      => 5,
	],
	'ratingColor'      => [
		'type'         => 'string',
		'default'      => '#e99516',
	],
	'ratingUnmarkedColor'  => [
		'type'         => 'string',
		'default'      => '#696969'
	],
	'showCount'        => [
		'type'         => 'boolean',
		'default'      => true,
	],
	'showRatingNumber' => [
		'type'         => 'boolean',
		'default'      => true,
	],
	'ratingNumberColor' => [
		'type' => 'string',
		'default' => '#000000',
	],
	'ratingNumberPosition' => [
		'type' => 'string',
		'default' => 'right',
	],

];

$attributes = array_merge(
	$attributes,
	Range::get_attribute( [
		'attributeName' => 'rating',
		'isResponsive' => false,
		'defaultValue' => 4,
	]),
	Range::get_attribute( [
		'attributeName' => 'size',
		'attributeObjectKey' => 'value',
		'isResponsive' => true,
		'defaultValue' => 24,
		'hasUnit' => true,
		'unitDefaultValue' => 'px',
	]),
	Range::get_attribute( [
		'attributeName' => 'spacing',
		'attributeObjectKey' => 'value',
		'isResponsive' => true,
		'defaultValue' => 0,
		'hasUnit' => true,
		'unitDefaultValue' => 'px',
	] ),
	Range::get_attribute( [
		'attributeName' => 'ratingNumberGap',
		'attributeObjectKey' => 'value',
		'isResponsive' => true,
		'defaultValue' => 0,
		'hasUnit' => true,
		'unitDefaultValue' => 'px',
	] ),
	Typography::get_attribute( 'ratingNumberTypography', true ),
	Alignment::get_attribute( 'alignment', true, [ 'value' => 'left' ] ),
	Icon::get_attribute( '', false ),
);

return $attributes;
