<?php

Namespace Church\BasicTheme;

use Church\Interfaces\ActionHookInterface;
use Church\Interfaces\FilterHookInterface;

class Menu implements ActionHookInterface, FilterHookInterface {

    public function __construct() {
        $this->register_add_action();
        $this->register_add_filter();
    }

    public function register_add_action() {
        add_action('init', array($this, 'church_menu'));
    }

    public function register_add_filter(){
        add_filter('walker_nav_menu_start_el', array($this, 'logo_menu_item'), 10, 4);
    }

    public function church_menu() {
        register_nav_menus(
            array(
                'primary' => esc_html__('Główne menu', 'church'),
                'footer-one' => esc_html__('Menu stopka', 'church'),
                'footer-two' => esc_html__('Menu stopka na skróty', 'church'),
                'footer-three' => esc_html__('Menu stopka kontakt', 'church')
            )
        );
    }

    
    public function logo_menu_item($item_output, $item, $depth, $args) {

        if ($icon = get_field('icon_logo', $item)) {

            $item_output = '<img src="' . esc_url($icon['url']) . '" alt="' . esc_attr($icon['alt']) . '" class="menu-icon" />' . $item_output;
        }

        return $item_output;
    }

}
