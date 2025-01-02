<?php
namespace Church\BasicTheme;

use Church\Interfaces\ActionHookInterface;

class RegisterAssets implements ActionHookInterface 
{
    public function __construct()
    {
        $this->register_add_action();
    }

    public function register_add_action() {
        add_action('wp_enqueue_scripts', [$this, 'register_church_assets']);
        add_action('admin_enqueue_scripts', [$this, 'register_church_admin_assets']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_masonry_settings']);
    }

    public function register_church_admin_assets(): void
    {
        $env_type = getenv('ENV_TYPE');
        $suffix = ($env_type === 'production') ? '.min' : '';
        wp_enqueue_style('church-admin-style', get_stylesheet_directory_uri() . "/assets/css/backend{$suffix}.css");
        wp_enqueue_script('church-script-backend', get_stylesheet_directory_uri() . "/assets/js/backend{$suffix}.js", [], filemtime(get_stylesheet_directory() . "/assets/js/backend{$suffix}.js"), true);
    }

    public function register_church_assets(): void
    {
        $env_type = getenv('ENV_TYPE');
        $suffix = ($env_type === 'production') ? '.min' : '';
        wp_enqueue_script('church-script', get_stylesheet_directory_uri() . "/assets/js/frontend{$suffix}.js", [], filemtime(get_stylesheet_directory() . "/assets/js/frontend{$suffix}.js"), true);
        wp_enqueue_style('church-styles', get_stylesheet_directory_uri() . "/assets/css/frontend{$suffix}.css", [], filemtime(get_stylesheet_directory() . "/assets/css/frontend{$suffix}.css"));
        wp_localize_script('church-script', ['ajax_url' => admin_url('admin-ajax.php')]);
        wp_enqueue_style('church-print-styles', get_stylesheet_directory_uri() . "/assets/css/print{$suffix}.css", [], filemtime(get_stylesheet_directory() . "/assets/css/print{$suffix}.css"), 'print');
    }

    public function enqueue_masonry_settings(): void
    {
        wp_enqueue_script('masonry');
        wp_enqueue_script(
            'masonry-settings',
            get_stylesheet_directory_uri() . '/webpack/src/js/masonry/masonry.js',
            ['masonry'],
            filemtime(get_stylesheet_directory() . '/webpack/src/js/masonry/masonry.js'),
            true
        );
    }
}

