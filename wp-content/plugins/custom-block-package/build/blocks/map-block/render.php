<?php





function render_map_block( $attributes ) {

   
    $latitude = $attributes['latitude'];
    $longitude = $attributes['longitude'];
    $zoom = $attributes['zoom'];

      // Ładowanie zasobów tylko wtedy, gdy blok występuje
      wp_enqueue_style( 'leaflet-css', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', [], '1.9.4' );
      wp_enqueue_script( 'leaflet-js', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', [], '1.9.4', true );

    ob_start();
    ?>
    
    <div id="map" 
    data-lat="<?php echo esc_attr($latitude); ?>" 
    data-lng="<?php echo esc_attr($longitude); ?>" 
    data-zoom="<?php echo esc_attr($zoom); ?>">
    </div>
    

    <?php
    echo 'test map';
    return ob_get_clean();
}
