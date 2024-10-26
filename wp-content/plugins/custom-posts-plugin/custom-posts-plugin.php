<?php
/**
 * Plugin Name: Custom Posts Plugin
 * Description: Wtyczka do rejestracji niestandardowych postów i taksonomii.
 * Version: 1.0
 * Author: Łukasz Lasota
 * Text Domain: customposts
 */

if (!defined('ABSPATH')) {
    exit;
}

spl_autoload_register(function ($class_name) {
    if (strpos($class_name, 'CustomPostsPlugin\\') === 0) {
        $class_name = str_replace('CustomPostsPlugin\\', '', $class_name);
        $class_name = str_replace('\\', DIRECTORY_SEPARATOR, $class_name);
        $file = plugin_dir_path(__FILE__) . 'src/' . $class_name . '.php';

        if (file_exists($file)) {
            include $file;
        } else {
            error_log('Nie znaleziono pliku: ' . $file);
        }
    }
});

add_action('plugins_loaded', function() {
    if (class_exists('\CustomPostsPlugin\Posts\RegisterPosts')) {
        new \CustomPostsPlugin\Posts\RegisterPosts();
    }

    if (class_exists('\CustomPostsPlugin\Posts\CustomColumns')) {
        new \CustomPostsPlugin\Posts\CustomColumns();
    }
});
