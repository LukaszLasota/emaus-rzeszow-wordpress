<?php

Namespace Church\Widgets;

use Church\Interfaces\ActionHookInterface;

class RegisterWidgets implements ActionHookInterface {

    public function __construct() {
        $this->register_add_action();
    }

    public function register_add_action() {
        add_action( 'widgets_init', array($this,'church_widgets_init') );
    }

    public function church_widgets_init() {
        register_sidebar(array(
            'name'          => esc_html__('Menu stopka - Nagłówek 1', 'church'),
            'id'            => 'footer-header-1',
            'description'   => esc_html__('Dodaj widgety tutaj.', 'church'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h4>',
            'after_title'   => '</h4>',
        ));
    
        register_sidebar(array(
            'name'          => esc_html__('Menu stopka - Nagłówek 2', 'church'),
            'id'            => 'footer-header-2',
            'description'   => esc_html__('Dodaj widgety tutaj.', 'church'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h4>',
            'after_title'   => '</h4>',
        ));
    
        register_sidebar(array(
            'name'          => esc_html__('Menu stopka - Nagłówek 3', 'church'),
            'id'            => 'footer-header-3',
            'description'   => esc_html__('Dodaj widgety tutaj.', 'church'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h4>',
            'after_title'   => '</h4>',
        ));
    }
}
