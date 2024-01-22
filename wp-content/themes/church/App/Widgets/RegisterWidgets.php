<?php

Namespace Church\Widgets\RegisterWidgets;

use Church\Interfaces\ActionHookInterface;

class RegisterWidgets implements ActionHookInterface {

    public function __construct() {
        $this->register_add_action();
    }

    public function register_add_action() {
        add_action( 'widgets_init', array($this,'church_widgets_init') );
    }

    public function church_widgets_init() {
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
}
