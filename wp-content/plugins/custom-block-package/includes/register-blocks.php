<?php

function up_register_blocks() {
  $blocks = [
    [ 'name' => 'pdf-block'],
    [ 'name' => 'image-text'],
    [ 'name' => 'section-block'],
    [ 'name' => 'meeting-list', 'options' => [
      'render_callback' => 'render_meeting_list_block'
    ]],
    [ 'name' => 'map-block', 'options' => [
      'render_callback' => 'render_map_block'
    ]]
    
  ];

  foreach($blocks as $block) {
    
    register_block_type_from_metadata(
      UP_PLUGIN_DIR . 'build/blocks/' . $block['name'],
     
      isset($block['options']) ? $block['options'] : []
    );
  }


  // wp_register_style('leaflet-css', 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css', [], '1.7.1');
  // wp_register_script('leaflet-js', 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js', [], '1.7.1', true);

  // wp_enqueue_style('leaflet-css');
  // wp_enqueue_script('leaflet-js');

//     function enqueue_leaflet_assets() {
//     wp_register_style( 'leaflet-css', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', [], '1.9.4' );
//     wp_register_script( 'leaflet-js', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', [], '1.9.4', true );

//     wp_enqueue_style( 'leaflet-css' );
//     wp_enqueue_script( 'leaflet-js' );
// }
// add_action( 'wp_enqueue_scripts', 'enqueue_leaflet_assets' );

// function enqueue_editor_assets() {
//     wp_register_style( 'leaflet-css', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', [], '1.9.4' );
//     wp_register_script( 'leaflet-js', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', [], '1.9.4', true );

//     wp_enqueue_style( 'leaflet-css' );
//     wp_enqueue_script( 'leaflet-js' );
// }
// add_action( 'enqueue_block_editor_assets', 'enqueue_editor_assets' );

  
}

