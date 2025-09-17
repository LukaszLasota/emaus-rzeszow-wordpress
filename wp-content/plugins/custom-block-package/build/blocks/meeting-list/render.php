<?php
/**
 * Meeting List Block Render Template
 * 
 * @var array $attributes Block attributes
 */

$post_type = 'meetings';
$numberposts = isset($attributes['numberposts']) ? (int) $attributes['numberposts'] : -1;
$title = isset($attributes['blockTitle']) ? $attributes['blockTitle'] : __('Lista Spotkań', 'custom-block-package');

$meetings = get_posts(array(
    'post_type' => $post_type,
    'numberposts' => $numberposts,
    'meta_key' => 'priority',
    'orderby' => 'meta_value_num',
    'order' => 'ASC',
));

if (!empty($title)) : ?>
    <h2><?php echo esc_html($title); ?></h2>
<?php endif; ?>

<div class="flipping-cards">
    <?php if (!empty($meetings)) : ?>
        <?php foreach ($meetings as $meeting) : 
            $meeting_title = get_the_title($meeting->ID);
            $link = get_permalink($meeting->ID);
            $day_hour = get_field('day_hour', $meeting->ID);
            $place = get_field('place', $meeting->ID);
            $content = apply_filters('the_content', $meeting->post_content);
        ?>
            <div class="flipping-cards__card">
                <div class="flipping-cards__card-inner">
                    <div class="flipping-cards__card-front">
                        <h3><?php echo esc_html($meeting_title); ?></h3>
                        
                        <?php if ($day_hour) : ?>
                            <p><?php echo esc_html($day_hour); ?></p>
                        <?php else : ?>
                            <p><?php _e('Brak godziny', 'custom-block-package'); ?></p>
                        <?php endif; ?>
                        
                        <?php if ($place) : ?>
                            <p><?php echo esc_html($place); ?></p>
                        <?php else : ?>
                            <p><?php _e('Brak miejsca', 'custom-block-package'); ?></p>
                        <?php endif; ?>
                    </div>
                    
                    <div class="flipping-cards__card-back">
                        <div><?php echo wp_kses_post($content); ?></div>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    <?php else : ?>
        <p><?php _e('Brak dostępnych spotkań.', 'custom-block-package'); ?></p>
    <?php endif; ?>
</div>