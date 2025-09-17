<?php
/**
 * Plugin Name: Comparison of Religions - Porównanie wyznań 2
 * Description: A simple WordPress plugin using OOP principles to register custom post types and build Gutenberg blocks.
 * Version: 1.0.0
 * Author: Your Name
 * License: GPL2
 */

namespace App;

defined('ABSPATH') || exit;

use App\PostTypes\ComparisonPostType;
use App\Meta\ComparisonMeta;
use App\Blocks\ComparisonBlock;

class App {

    private static $instance;

    private function __construct() {
        add_action('init', [ComparisonPostType::class, 'register']);
        add_action('init', [ComparisonMeta::class, 'register']);
        add_action('init', [ComparisonBlock::class, 'register']);
    }

    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }
}

// Initialize the plugin
App::get_instance();

// Composer Autoload (Optional)
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}

/**
 * Install script.
 */
register_activation_hook(__FILE__, function () {
    // Trigger CPT registration for rewrite rules.
    App::get_instance();
    flush_rewrite_rules();
});

/**
 * Uninstall script.
 */
register_deactivation_hook(__FILE__, function () {
    flush_rewrite_rules();
});