<?php

namespace Church\Admin;

use Church\Interfaces\ActionHookInterface;

class LogoSettings implements ActionHookInterface {

    public function __construct() {
        $this->register_add_action();
    }

    public function register_add_action() {
        add_action('admin_menu', array($this, 'add_logo_settings_page'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_media_uploader'));
    }

    public function add_logo_settings_page() {
        add_options_page(
            'Ustawienia Logo', 
            'Logo Strony', 
            'manage_options', 
            'my-custom-logo', 
            array($this, 'display_logo_settings_page')
        );
    }

    public function display_logo_settings_page() {
        if (isset($_POST['submit_image_selector']) && isset($_POST['image_url']) && isset($_POST['image_id'])) {
            update_option('my_custom_logo_setting', $_POST['image_url']);
            update_option('my_custom_logo_setting_id', $_POST['image_id']);
            echo '<div id="message" class="updated"><p>Logo zostało zapisane.</p></div>';
        }

        $image_url = get_option('my_custom_logo_setting', '');
        $image_id = get_option('my_custom_logo_setting_id', '');

        echo '<div class="wrap"><h1>Ustawienie Logo Strony</h1>
        <img id="logo-preview" src="' . esc_url($image_url) . '" style="max-width: 300px; max-height: 300px; display: block;"/>
              <form method="post">
                  <input type="hidden" id="image_url" name="image_url" value="' . esc_attr($image_url) . '" />
                  <input type="hidden" id="image_id" name="image_id" value="' . esc_attr($image_id) . '" />
                  <input type="button" id="upload-btn" class="button-secondary" value="Wybierz Logo">
                  <input type="submit" name="submit_image_selector" value="Zapisz" class="button-primary">
              </form>
              </div>';
    }

    public function enqueue_media_uploader() {
        if (isset($_GET['page']) && $_GET['page'] == 'my-custom-logo') {
            wp_enqueue_media();
            wp_enqueue_script('my-custom-logo-script', get_template_directory_uri() . 'webpack/src/js/logo/logo.js', array(), null, true);
        }
    }
}

