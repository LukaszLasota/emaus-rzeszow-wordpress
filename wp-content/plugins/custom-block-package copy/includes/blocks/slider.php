<?php

// function enqueue_swiper_scripts() {
//     // Enqueue Swiper CSS
//     wp_enqueue_style( 'swiper-css', 'https://unpkg.com/swiper/swiper-bundle.min.css', array(), '7.0.0' );

//     // Enqueue Swiper JS
//     wp_enqueue_script( 'swiper-js', 'https://unpkg.com/swiper/swiper-bundle.min.js', array(), '7.0.0', true );

//     // Enqueue custom script to initialize Swiper
//     wp_enqueue_script( 'custom-slider-init', plugins_url( '/custom-block-package/src/blocks/slider-block/init.js', dirname(__FILE__, 3) ), array('swiper-js'), '1.0.0', true );
// }
// add_action( 'wp_enqueue_scripts', 'enqueue_swiper_scripts' );

// function enqueue_block_assets() {
//     $version = '1.0.0'; // Ręcznie ustawiona wersja

//     wp_enqueue_script(
//         'custom-slider-block-editor',
//         plugins_url( '/custom-block-package/src/blocks/slider-block/index.js', dirname(__FILE__, 3) ),
//         array('wp-blocks', 'wp-editor', 'wp-element', 'wp-components'),
//         $version
//     );

//     wp_enqueue_style(
//         'custom-slider-block-editor',
//         plugins_url( '/custom-block-package/src/blocks/slider-block/editor.css', dirname(__FILE__, 3) ),
//         array( 'wp-edit-blocks' ),
//         $version
//     );

//     wp_enqueue_style(
//         'custom-slider-block',
//         plugins_url( '/custom-block-package/src/blocks/slider-block/style.css', dirname(__FILE__, 3) ),
//         array(),
//         $version
//     );
// }
// add_action( 'enqueue_block_assets', 'enqueue_block_assets' );
