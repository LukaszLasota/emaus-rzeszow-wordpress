<?php
/**
 * Plugin Name:       Custom Block Package
 * Description:       A plugin for adding custom gutenberg blocks to a theme.
 * Version:           1.0.0
 * Requires at least: 5.9
 * Requires PHP:      7.2
 * Author:            Łukasz Lasota
 * Author URI:        https://github.com/LukaszLasota
 * Text Domain:       custom-block-package
 */

if(!function_exists('add_action')) {
  echo 'Wygląda na to, że trafiłeś tu przez przypadek. 😛';
  exit;
}

// Setup
define('UP_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('UP_PLUGIN_FILE', __FILE__);

// Includes
$rootFiles = glob(UP_PLUGIN_DIR . 'includes/*.php');
$subdirectoryFiles = glob(UP_PLUGIN_DIR . 'includes/**/*.php');
$allFiles = array_merge($rootFiles, $subdirectoryFiles);


foreach($allFiles as $filename) {
  include_once($filename);
}

add_action('init', 'up_register_blocks');

// function enqueue_leaflet_assets() {
//   if ( has_block( 'custom-block-package/map-block' ) ) {
//       wp_enqueue_style( 'leaflet-css', plugin_dir_url( __FILE__ ) . 'node_modules/leaflet/dist/leaflet.css' );
//       wp_enqueue_script( 'leaflet-js', plugin_dir_url( __FILE__ ) . 'node_modules/leaflet/dist/leaflet.js', array(), null, true );
//       wp_enqueue_script( 'map-init-js', plugin_dir_url( __FILE__ ) . 'src/blocks/map-block/map-init.js', array('leaflet-js'), null, true );
//   }
// }
// add_action( 'wp_enqueue_scripts', 'enqueue_leaflet_assets' );

