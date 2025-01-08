<?php

require_once get_template_directory() . '/vendor/autoload.php';

new Church\BasicTheme\Menu();
new Church\BasicTheme\Setup();
new Church\BasicTheme\RegisterAssets();
new Church\BasicTheme\Rewrite();
new Church\Widgets\RegisterWidgets();
new Church\Admin\LogoSettings();
