<?php

function my_block_register_assets() {

    wp_register_style(
        'my-block-leaflet-style',
        UP_PLUGIN_URL . 'src/blocks/map-block/leaflet.css',
        array(),
        '1.9.4'
    );
}
add_action( 'init', 'my_block_register_assets' );

function my_block_enqueue_frontend_assets() {

    if (has_block( 'custom-block-package/map-block' ) ) {
        wp_enqueue_style( 'my-block-leaflet-style' );
    }
}
add_action( 'wp_enqueue_scripts', 'my_block_enqueue_frontend_assets' );


  

  