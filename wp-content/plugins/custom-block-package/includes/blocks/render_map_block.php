<?php

function render_map_block( $attributes ) {
    $latitude = $attributes['latitude'];
    $longitude = $attributes['longitude'];
    $zoom = $attributes['zoom'];
    $containerHeight = isset( $attributes['containerHeight'] ) ? $attributes['containerHeight'] : 400;

    ob_start();
    ?>
    <div
        id="map"
        data-lat="<?php echo esc_attr( $latitude ); ?>"
        data-lng="<?php echo esc_attr( $longitude ); ?>"
        data-zoom="<?php echo esc_attr( $zoom ); ?>"
        style="width: 100%; height: <?php echo esc_attr( $containerHeight ); ?>px;"
    ></div>
    <?php
    return ob_get_clean();
}

