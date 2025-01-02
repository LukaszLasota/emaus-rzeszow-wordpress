<div class="news">
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <div class="news__card">
                <a href="<?php the_permalink(); ?>" class="news__link">
                    <?php if (has_post_thumbnail()) : 
                        $thumbnail_id = get_post_thumbnail_id(); 
                        $thumbnail_meta = wp_get_attachment_metadata($thumbnail_id);
                        $alt_text = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);
                        $width = $thumbnail_meta['width'];
                        $height = $thumbnail_meta['height'];
                        ?>
                        <div class="news__image-wrapper" style="aspect-ratio: <?php echo $width; ?>/<?php echo $height; ?>;">
                            <?php echo wp_get_attachment_image(
                                $thumbnail_id,
                                'full',
                                false,
                                [
                                    'class'   => 'news__image',
                                    'alt'     => $alt_text,
                                    'loading' => 'lazy',
                                    'width'   => $width,
                                    'height'  => $height
                                ]
                            ); ?>
                        </div>
                    <?php endif; ?>
                    <div class="news__body">
                        <h3 class="news__title"><?php the_title(); ?></h3>
                        <p class="news__text">
                            <?php echo esc_html(wp_trim_words(get_the_content(), 20, '...')); ?>
                        </p>
                    </div>
                </a>
            </div>
        <?php endwhile; ?>
    <?php else : ?>
        <p class="news__no-posts">
            <?php _e('Brak postów.', 'church'); ?>
        </p>
    <?php endif; ?>
</div>

<div class="news__pagination">
    <?php
    $pagination_links = paginate_links([
        'prev_text' => '
            <span class="pagination__control pagination__control--prev">
                <span class="pagination__control--desktop">&laquo; Poprzednia strona</span>
                <span class="pagination__control--mobile">&laquo;</span>
            </span>',
        'next_text' => '
            <span class="pagination__control pagination__control--next">
                <span class="pagination__control--desktop">Następna strona &raquo;</span>
                <span class="pagination__control--mobile">&raquo;</span>
            </span>',
        'type'      => 'array',
        'before_page_number' => '<span class="pagination__page">',
        'after_page_number' => '</span>',
    ]);

    if (!empty($pagination_links)) {
        echo '<nav class="news__pagination--container">';
        foreach ($pagination_links as $link) {
            echo '<div class="pagination__item">' . $link . '</div>';
        }
        echo '</nav>';
    }
    ?>
</div>