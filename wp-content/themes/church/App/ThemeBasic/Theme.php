<?php
Namespace Church\ThemeBasic\Theme;

use Church\Interfaces\ActionHookInterface;

class Theme implements ActionHookInterface 
{
    public function __construct()
    {
        $this->register_actions();
    }

    public function register_actions() {
        add_action( 'after_setup_theme', array($this,'church_setup') );
    }

    public function church_setup()
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

    

}