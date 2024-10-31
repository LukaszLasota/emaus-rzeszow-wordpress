<?php

function up_register_blocks() {
  $blocks = [
    [ 'name' => 'pdf-block'],
    [ 'name' => 'image-text'],
    [ 'name' => 'section-block'],
    [ 'name' => 'meeting-list', 'options' => [
      'render_callback' => 'render_meeting_list_block'
    ]],
    // [ 'name' => 'group-block-emaus', 'options' => [
    //   'render_callback' => 'render_meeting_list_block'
    // ]],
  
  ];
  

  foreach($blocks as $block) {
    
    register_block_type(
      UP_PLUGIN_DIR . 'build/blocks/' . $block['name'],
     
      isset($block['options']) ? $block['options'] : []
    );
  }

  
}

