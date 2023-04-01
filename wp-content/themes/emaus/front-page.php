<?php
/**
 * The template for main page
 */

get_header(); ?>

<main id="primary" class="site-main">
    <section>
        <?php the_content(); ?>
    </section>
</main>

<?php
get_footer();