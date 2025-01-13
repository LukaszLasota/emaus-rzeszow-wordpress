<?php

namespace App\Blocks;

class ComparisonBlock {

    public static function register() {
        register_block_type('comparison-religions/topics-block', [
            'editor_script' => 'comparison-block-editor',
            'render_callback' => [self::class, 'render'],
            'attributes' => [
                'topics' => [
                    'type' => 'array',
                    'default' => []
                ]
            ]
        ]);

        add_action('enqueue_block_editor_assets', [self::class, 'enqueue_editor_assets']);
    }

    public static function enqueue_editor_assets() {
        wp_enqueue_script(
            'comparison-block-editor',
            plugins_url('/build/block.js', __DIR__),
            ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components'],
            false,
            true
        );
    }

    public static function render($attributes) {
        return '<div class="topics-block">This will render topics later.</div>';
    }
}
