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
 *
 * @package CustomBlockPackage
 */

if ( ! function_exists( 'add_action' ) ) {
	echo 'Wygląda na to, że trafiłeś tu przez przypadek. 😛';
	exit;
}

// Setup.
define( 'UP_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'UP_PLUGIN_FILE', __FILE__ );
define( 'UP_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

// Load autoloader.
require_once UP_PLUGIN_DIR . 'app/Autoloader.php';

// Initialize plugin classes.
use CustomBlockPackage\Blocks\RegisterBlocks;
use CustomBlockPackage\Assets\AssetsManager;

new RegisterBlocks();
new AssetsManager();

/**
 * Invalidate the news slider block's transient cache when any standard post is saved.
 */
function cbp_flush_news_cache(): void {
	global $wpdb;
	$wpdb->query( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery,WordPress.DB.DirectDatabaseQuery.NoCaching
		"DELETE FROM {$wpdb->options}
		 WHERE option_name LIKE '_transient_emaus_news_slider_%'
		    OR option_name LIKE '_transient_timeout_emaus_news_slider_%'"
	);
}

/**
 * Invalidate the meeting list block's transient cache when a meeting post is saved.
 */
function cbp_flush_meetings_cache(): void {
	global $wpdb;
	$wpdb->query( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery,WordPress.DB.DirectDatabaseQuery.NoCaching
		"DELETE FROM {$wpdb->options}
		 WHERE option_name LIKE '_transient_meeting_list_%'
		    OR option_name LIKE '_transient_timeout_meeting_list_%'"
	);
}

add_action( 'save_post_post', 'cbp_flush_news_cache' );
add_action( 'save_post_meetings', 'cbp_flush_meetings_cache' );
