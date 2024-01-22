<?php
namespace Church;

if (!defined('ABSPATH')) {
    exit;
}

class Autoloader {
    
    public function __construct() {
        spl_autoload_register([$this, 'autoload']);
    }

    public function autoload($class_name) {
       
        if (0 !== strpos($class_name, 'Church\\')) {
            return;
        }

        $class_path = str_replace('Church\\', '', $class_name);
        
        $class_path = str_replace('\\', DIRECTORY_SEPARATOR, $class_path);
       
        $file_path = get_template_directory() . DIRECTORY_SEPARATOR . 'App' . DIRECTORY_SEPARATOR . $class_path . '.php';

        if (file_exists($file_path)) {
            require_once $file_path;
        } else {
            wp_die(
                esc_html("The file attempting to be loaded at $file_path does not exist.")
            );
        }
    }
}

new Autoloader();


