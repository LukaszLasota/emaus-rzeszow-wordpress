<?php
use ABlocks\Controls\Range;

$attributes = [
	'block_id' => [
		'type' => 'string',
		'default' => '',
	],
	'fullWidth' => [
		'type' => 'boolean',
		'default' => false,
	],
];

return array_merge(
	$attributes,
	Range::get_attribute([
		'attributeName' => 'width',
		'attributeObjectKey' => 'value',
		'isResponsive' => true,
		'defaultValue' => 100,
		'hasUnit' => true,
		'unitDefaultValue' => '%',
	]),
	Range::get_attribute([
		'attributeName' => 'height',
		'attributeObjectKey' => 'value',
		'isResponsive' => true,
		'hasUnit' => true,
		'unitDefaultValue' => 'px',
	]),
	Range::get_attribute([
		'attributeName' => 'positionX',
		'attributeObjectKey' => 'value',
		'isResponsive' => true,
		'defaultValue' => 0,
		'unitDefaultValue' => '%',
		'hasUnit' => true,

	]),
	Range::get_attribute([
		'attributeName' => 'positionY',
		'attributeObjectKey' => 'value',
		'isResponsive' => true,
		'defaultValue' => 100,
		'unitDefaultValue' => '%',
		'hasUnit' => true,

	])
);
