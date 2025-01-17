<?php
/**
 * 
 * The template for displaying blog posts
 */

get_header(); 
?>
<main>
    <?php get_template_part('template-parts/content', 'posts'); ?>
</main>

<?php get_footer(); ?>
