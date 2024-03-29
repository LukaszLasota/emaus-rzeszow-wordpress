<?php
/**
 * 
 * The template for displaying blog posts
 */

get_header(); ?>

<main id="primary" class="site-main">
	<?php
	if ( have_posts() ) :
		while ( have_posts() ) :the_post();

            the_content();

		endwhile;

		the_posts_pagination( array(
			'prev_text' => esc_html__( 'Poprzedni', 'church' ),
			'next_text' => esc_html__( 'Nastepny', 'church' ),
		) );	

	endif;
	?>
</main>

<?php
get_footer();