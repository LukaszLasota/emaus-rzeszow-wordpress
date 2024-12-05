<?php

function render_map_block( $attributes ) {

    $latitude = $attributes['latitude'];
    $longitude = $attributes['longitude'];
    $zoom = $attributes['zoom'];
    ob_start();
    ?>
    
    <div id="map" 
    data-lat="<?php echo esc_attr($latitude); ?>" 
    data-lng="<?php echo esc_attr($longitude); ?>" 
    data-zoom="<?php echo esc_attr($zoom); ?>">
    </div>

    <?php
    return ob_get_clean();
}

error_log( 'Render function executed for map block.' );