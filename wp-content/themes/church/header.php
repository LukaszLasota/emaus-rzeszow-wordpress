<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<header class="site-header">
    <div class="site-header__container">
        <nav class="site-nav" role="navigation" aria-label="<?php _e('Primary Navigation', 'church'); ?>">
            <h1 class="site-logo" title="<?php bloginfo('name'); ?>">
                <a href="<?php echo esc_url(home_url('/')); ?>" rel="home" class="site-logo__link">
                    <?php
                    $logo_id = get_option('my_custom_logo_setting_id');
                    if ($logo_id) {
                        $logo_size = 'thumbnail';
                        $logo_data = wp_get_attachment_image_src($logo_id, $logo_size);
                        if ($logo_data) {
                            $logo_url = $logo_data[0];
                            $logo_width = $logo_data[1];
                            $logo_height = $logo_data[2];
                        }
                    } else {
                        $logo_url = get_option('my_custom_logo_setting');
                        $logo_width = '';
                        $logo_height = '';
                    }
                    ?>
                    <img src="<?php echo esc_url($logo_url); ?>" alt="<?php bloginfo('name'); ?>" class="site-logo__image" <?php if ($logo_width && $logo_height) echo 'width="' . esc_attr($logo_width) . '" height="' . esc_attr($logo_height) . '"'; ?>>
                </a>
            </h1>

            <button class="hamburger" aria-controls="primary-menu" aria-expanded="false">
                <span class="hamburger__sr-only"><?php _e('Open/close menu', 'church'); ?></span>
                <span class="hamburger__box">
                    <span class="hamburger__inner"></span>
                </span>
            </button>

            <div class="site-nav__navigation" id="primary-menu" aria-hidden="true">
                <?php 
                if (has_nav_menu('primary')) {
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_id' => 'primary-menu-items',
                        'menu_class' => 'site-nav__menu',
                        'container' => false,
                    ));
                }
                ?>
            </div>
        </nav>
    </div>
</header>