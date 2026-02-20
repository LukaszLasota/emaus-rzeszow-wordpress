<?php
/**
 * Template Name: Strona z banerem
 * Description: First block is full-width (hero banner), remaining blocks are contained.
 *
 * @package Church
 */

get_header(); ?>

<main id="primary" class="site-main page-hero">
	<section>
		<?php the_content(); ?>
	</section>
</main>

<?php
get_footer();