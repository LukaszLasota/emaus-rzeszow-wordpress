<?php
Namespace Church\BasicTheme;

use Church\Interfaces\ActionHookInterface;

class RegisterAssets implements ActionHookInterface 
{
    public function __construct()
    {
        $this->register_add_action();
    }

    public function register_add_action() {
        add_action( 'wp_enqueue_scripts', array($this,'register_church_assets') );
        add_action( 'admin_enqueue_scripts', array($this,'register_church_admin_assets') );
    }

    public function register_church_admin_assets(): void
    {
        wp_enqueue_style('church-admin-style', get_stylesheet_directory_uri() . '/assets/css/backend'.(($_ENV['ENV_TYPE'] == "production")?'.min':'').'.css');
    }

    public function register_church_assets(): void
    {
        wp_enqueue_script('church_script',  get_stylesheet_directory_uri() . '/assets/js/frontend'.(($_ENV['ENV_TYPE'] == "production")?'.min':'').'.js', false, false, true);
        wp_enqueue_style('church_styles',  get_stylesheet_directory_uri() . '/assets/css/frontend'.(($_ENV['ENV_TYPE'] == "production")?'.min':'').'.css');
        wp_localize_script( 'church_script', 'redlist', ['ajax_url' => get_stylesheet_directory_uri().'/ajax.php']);
        wp_enqueue_style('church_print_styles',get_stylesheet_directory_uri() . '/assets/css/print'.(($_ENV['ENV_TYPE'] == "production")?'.min':'').'.css',false, false, 'print');
    }

}