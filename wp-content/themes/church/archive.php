<?php
/**
 * 
 * The template for displaying blog posts
 */

get_header(); 
?>

<header id="One">
    <div class="header-image">
        <picture>
            <source srcset="<?php echo get_template_directory_uri(); ?>/img/subpage/news-s.jpg" media="(max-width: 480px)">
            <img src="<?php echo get_template_directory_uri(); ?>/img/subpage/news.jpg" alt="Aktualności zboru">
        </picture>
    </div>
</header>

<main>
    <?php get_template_part('template-parts/content', 'posts'); ?>
</main>

<?php get_footer(); ?>
