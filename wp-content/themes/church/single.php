<?php
/**
 * The template for displaying all single posts
 *
 * @package WordPress
 */

get_header(); ?>

<main id="primary" class="site-main news-section">
    <?php
    if ( have_posts() ) :
        while ( have_posts() ) :
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

                <div class="entry-content">
                    <?php
                    the_content();
                    ?>
                </div><!-- .entry-content -->

            </article><!-- #post-<?php the_ID(); ?> -->

            <?php
        endwhile;
    
    endif;
    ?>
</main><!-- #main -->

<?php
get_footer();
