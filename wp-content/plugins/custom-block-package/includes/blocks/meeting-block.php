<?php 

function render_meeting_list_block($attributes) {
    $post_type = 'meetings';
    $numberposts = isset($attributes['numberposts']) ? (int) $attributes['numberposts'] : -1;

    $meetings = get_posts(array(
        'post_type' => $post_type,
        'numberposts' => $numberposts,
        'meta_key' => 'priority',
        'orderby' => 'meta_value_num',
        'order' => 'ASC',
    ));

    $output = '<div class="flipping-cards">';

    foreach ($meetings as $meeting) {
        $title = get_the_title($meeting->ID);
        $link = get_permalink($meeting->ID);

        $day_hour = get_field('day_hour', $meeting->ID);
        $place = get_field('place', $meeting->ID);
        $content = apply_filters('the_content', $meeting->post_content);

        $output .= '<div class="flipping-cards__card">';
        $output .= '<div class="flipping-cards__card-inner">';
        $output .= '<div class="flipping-cards__card-front">';
        $output .= '<h3>' . esc_html($title) . '</h3>';

        if ($day_hour) {
            $output .= '<p>' . esc_html($day_hour) . '</p>';
        }
        if ($place) {
            $output .= '<p>' . esc_html($place) . '</p>';
        }

        $output .= '</div>';
        $output .= '<div class="flipping-cards__card-back">';
        $output .= '<div>' . wp_kses_post($content) . '</div>';
        $output .= '</div>';
        $output .= '</div>';
        $output .= '</div>';
    }
    $output .= '</div>';

    return $output;
}
