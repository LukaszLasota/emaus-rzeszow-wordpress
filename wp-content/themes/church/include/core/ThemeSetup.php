<?php
Namespace Emaus\Core;

class ThemeSetup 
{
    public function __construct()
    {
        add_action( 'after_setup_theme', array($this,'emaus_setup') );
        add_action( 'widgets_init', array($this,'emaus_widgets_init') );
        add_action( 'init', array($this,'emaus_menu') );
    }

    public function emaus_setup()
    {
        add_theme_support( 'menus' );

        add_theme_support( 'post-thumbnails' );

        add_theme_support( 'title-tag' );

        add_theme_support(
            'html5', 
            array('search-form','comment-form','comment-list','gallery','caption','style','script' )
        );

        add_theme_support( 'post-formats', array( 'image', 'video', 'quote', 'gallery', 'aside' ) );

        add_theme_support( 'responsive-embeds' );

        add_theme_support( 'custom-background' );

        add_theme_support( 'automatic-feed-links' );

        add_theme_support( 'footer-widgets', 3 );

        add_theme_support( 'customize-selective-refresh-widgets' );
    }

    public function emaus_widgets_init() {
        register_sidebar( array(
            'name'          => esc_html__( 'Sidebar', 'my-theme' ),
            'id'            => 'sidebar-1',
            'description'   => esc_html__( 'Add widgets here.', 'my-theme' ),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title">',
            'after_title'   => '</h2>',
        ) );
    }

    public function emaus_menu() {
        register_nav_menus(
            array(
                'primary' => esc_html__( 'Główne menu', 'emaus' ),
                'footer-one' => esc_html__( 'Menu stopka', 'emaus' ),
                'footer-two' => esc_html__( 'Menu stopka na skróty', 'emaus' ),
                'footer-three' => esc_html__( 'Menu stopka kontakt', 'emaus' )
            )
        );
    }

}