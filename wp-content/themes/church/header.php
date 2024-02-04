<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<header class="site-header">
	<nav class="site-nav">

		<h1 class="site-logo" title="<?php bloginfo( 'name' ); ?>">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" class="site-logo__link">
				<?php $logo_url = get_option('my_custom_logo_setting'); ?>
				<img src="<?php echo esc_url($logo_url); ?>" alt="<?php bloginfo( 'name' ); ?>" class="site-logo__image">
			</a>
		</h1>

		<button class="hamburger" aria-controls="primary-menu" aria-expanded="false">
			<span class="hamburger__sr-only"><?php _e('Otwórz/zamknij menu', 'church'); ?></span>
			<span class="hamburger__box">
				<span class="hamburger__inner"></span>
			</span>
		</button>	
	
		<div class="site-nav__navigation">
			<ul class="site-nav__list">
				<?php 
				if (has_nav_menu('primary')) {
					wp_nav_menu(array(
						'theme_location' => 'primary',
						'menu_id' => 'primary-menu',
						'menu_class' => 'site-nav__menu',
						'container' => false,
					));
				}
				?>                 
			</ul>
		</div>

	</nav>
</header>