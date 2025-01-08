<?php

Namespace Church\BasicTheme;

use Church\Interfaces\ActionHookInterface;

class Rewrite implements ActionHookInterface {

    public function __construct() {
        $this->register_add_action();
    }

    public function register_add_action() {
        add_action('init', array($this, 'custom_pagination_base'));
    }

    public function custom_pagination_base() {
        global $wp_rewrite;
        $wp_rewrite->pagination_base = 'strona';
    }

}
