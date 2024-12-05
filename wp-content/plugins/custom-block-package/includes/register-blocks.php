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
  
}


