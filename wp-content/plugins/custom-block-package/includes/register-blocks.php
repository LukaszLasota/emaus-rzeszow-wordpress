<?php

class RegisterBlocks {
    
    public function __construct() {
        add_action('init', array($this, 'register_blocks'));
        add_filter('block_categories_all', array($this, 'register_block_category'));
    }

    /**
     * Register custom church block category
     */
    public function register_block_category($categories) {
        // Add church blocks category at the beginning
        array_unshift($categories, array(
            'slug'  => 'custom-blocks-from-scratch',
            'title' => __('Custom blocks for sites', 'custom-block-package'),
            'icon'  => 'heart',
        ));
        
        return $categories;
    }
    
    public function register_blocks() {
        // Automatically scan block folders
        $blocks_dir = UP_PLUGIN_DIR . 'build/blocks/';
        $block_folders = glob($blocks_dir . '*', GLOB_ONLYDIR);
        
        if (!is_array($block_folders)) {
            return;
        }
        
        foreach ($block_folders as $block_folder) {
            $block_json_path = $block_folder . '/block.json';
            
            // Check if block.json file exists
            if (!file_exists($block_json_path)) {
                continue;
            }
            
            // Read block.json content
            $file_contents = file_get_contents($block_json_path);
            if (false === $file_contents) {
                continue;
            }
            
            $block_metadata = json_decode($file_contents, true);
            $block_name = $block_metadata['name'] ?? null;
            
            if (!$block_metadata || !isset($block_name)) {
                continue;
            }
            
            // Check if block is already registered
            if (WP_Block_Type_Registry::get_instance()->is_registered($block_name)) {
                continue;
            }
            
            // Register block
            register_block_type_from_metadata($block_json_path);
        }
    }
}