<?php
/*
Plugin Name: CPT register
Plugin URI: https://my.plugin.com
Description: CPT register description
Version: 1.0.0
Author: Me
Author URI: https://my.website.com
License: GPL2 (or whatever)

Notes:
*/

define('UP_PLUGIN_DIR', plugin_dir_path(__FILE__)); 

require UP_PLUGIN_DIR . '/vendor/autoload.php';

new Testapp\Cpt\Movies();
new Testapp\Cpt\Xd();
