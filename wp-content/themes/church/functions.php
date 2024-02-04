<?php

require_once get_template_directory() . '/vendor/autoload.php';

new Church\BasicTheme\Menu();
new Church\BasicTheme\Setup();
new Church\BasicTheme\RegisterAssets();
new Church\Widgets\RegisterWidgets();
new Church\Posts\RegisterPosts();
new Church\Admin\LogoSettings();
