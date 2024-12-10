<?php
/**
 * The template for displaying all single posts
 *
 * @package WordPress
 */

get_header(); ?>

<main id="primary" class="site-main single-post">

<?php 
    $show_header = get_field('show_header');

    if ($show_header === 'Tak') : ?>
        <header class="single-post__header">
            <h1 class="single-post__title"><?php single_post_title(); ?></h1>
        </header>
    <?php endif; ?>

    <div class="single-post__content-container">
        <?php
        if ( have_posts() ) :
            while ( have_posts() ) :
                the_post();
                ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class('single-post__article'); ?>>
                    <div class="single-post__content">
                        <?php
                        the_content();
                        ?>
                    </div>
                </article>
                <?php
            endwhile;
        endif;
        ?>
    </div>
</main>

<?php
get_footer();
