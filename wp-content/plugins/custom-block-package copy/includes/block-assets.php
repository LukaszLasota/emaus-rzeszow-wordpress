<?php

class AssetsManager {
    
    public function __construct() {
        add_action('init', array($this, 'register_all_assets'));
    }
    
    /**
     * Register all plugin assets
     */
    public function register_all_assets() {
        $this->register_leaflet_assets();
        $this->register_glide_assets();
    }
    
    /**
     * Register Leaflet assets
     */
    private function register_leaflet_assets() {
        wp_register_style(
            'my-block-leaflet-style',
            'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
            array(),
            '1.9.4'
        );
    }
    
    /**
     * Register Glide assets
     */
    private function register_glide_assets() {
        // Check if files exist in build directory (not node_modules)
        $glide_css_path = UP_PLUGIN_DIR . 'build/glide-package/glide.core.css';
        $glide_js_path = UP_PLUGIN_DIR . 'build/glide-package/glide.min.js';
        $glide_init_path = UP_PLUGIN_DIR . 'build/glide-package/index.js';
        
        // Glide CSS
        if (file_exists($glide_css_path)) {
            wp_register_style(
                'glide-core-style',
                UP_PLUGIN_URL . 'build/glide-package/glide.core.css',
                array(),
                '3.5.2'
            );
        }
        
        // Glide JS Core
        if (file_exists($glide_js_path)) {
            wp_register_script(
                'glide-core-script',
                UP_PLUGIN_URL . 'build/glide-package/glide.min.js',
                array(),
                '3.5.2',
                true
            );
        }
        
        // Glide Init Script
        if (file_exists($glide_init_path)) {
            wp_register_script(
                'glide-init-script',
                UP_PLUGIN_URL . 'build/glide-package/index.js',
                array('glide-core-script'),
                '1.0.0',
                true
            );
        }
    }
}