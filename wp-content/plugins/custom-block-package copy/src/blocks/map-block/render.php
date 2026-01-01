<?php
/**
 * Map Block Render Template
 * 
 * @var array $attributes Block attributes
 */

$latitude = $attributes['latitude'];
$longitude = $attributes['longitude'];
$zoom = $attributes['zoom'];
$containerHeight = isset($attributes['containerHeight']) ? $attributes['containerHeight'] : 400;
$popupText = isset($attributes['popupText']) ? $attributes['popupText'] : 'Nasza lokalizacja';
?>

<div
    id="map"
    class="map-container"
    data-lat="<?php echo esc_attr($latitude); ?>"
    data-lng="<?php echo esc_attr($longitude); ?>"
    data-zoom="<?php echo esc_attr($zoom); ?>"
    data-popup="<?php echo esc_attr($popupText); ?>"
    style="width: 100%; height: <?php echo esc_attr($containerHeight); ?>px;"
></div>