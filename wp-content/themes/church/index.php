<?php
/**
 * 
 * The template for displaying blog posts
 */

get_header(); 
?>

<main>
    <div class="editor-content">
        <?php
        $posts_page_id = get_option('page_for_posts');

        if ($posts_page_id) {
            $posts_page = get_post($posts_page_id);
            echo apply_filters('the_content', $posts_page->post_content);
        }
        ?>
    </div>

    <?php get_template_part('template-parts/content', 'posts'); ?>

</main>

<?php get_footer(); ?>
