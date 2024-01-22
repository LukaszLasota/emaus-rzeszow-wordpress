<?php

Namespace Church\ThemeBasic\RegisterMenu;

use Church\Interfaces\ActionHookInterface;

class RegisterMenu implements ActionHookInterface {

    public function __construct() {
        $this->register_add_action();
    }

    public function register_add_action() {
        add_action('init', array($this, 'church_menu'));
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
}
