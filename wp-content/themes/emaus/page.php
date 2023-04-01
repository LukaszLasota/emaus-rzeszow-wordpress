<?php
/**
 * Template Name: Szablon dla stron
 * The template for displaying all pages
 */

get_header(); ?>

<main id="primary" class="site-main">
    <section>
        <?php the_content(); ?>
    </section>
</main>

<?php
get_footer();