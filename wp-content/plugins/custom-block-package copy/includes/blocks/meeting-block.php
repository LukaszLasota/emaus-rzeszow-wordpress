<?php 

function render_meeting_list_block($attributes) {
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

    $output = '';

    if (!empty($title)) {
        $output .= '<h2>' . esc_html($title) . '</h2>';
    }

    $output .= '<div class="flipping-cards">';

    if (!empty($meetings)) {
        foreach ($meetings as $meeting) {
            $meeting_title = get_the_title($meeting->ID);
            $link = get_permalink($meeting->ID);
            $day_hour = get_field('day_hour', $meeting->ID);
            $place = get_field('place', $meeting->ID);
            $content = apply_filters('the_content', $meeting->post_content);
            
            $output .= '<div class="flipping-cards__card">';
            $output .= '<div class="flipping-cards__card-inner">';
            $output .= '<div class="flipping-cards__card-front">';
            $output .= '<h3>' . esc_html($meeting_title) . '</h3>';

            if ($day_hour) {
                $output .= '<p>' . esc_html($day_hour) . '</p>';
            } else {
                $output .= '<p>' . __('Brak godziny', 'custom-block-package') . '</p>';
            }

            if ($place) {
                $output .= '<p>' . esc_html($place) . '</p>';
            } else {
                $output .= '<p>' . __('Brak miejsca', 'custom-block-package') . '</p>';
            }

            $output .= '</div>'; 
            $output .= '<div class="flipping-cards__card-back">';
            $output .= '<div>' . wp_kses_post($content) . '</div>';
            $output .= '</div>';
            $output .= '</div>';
            $output .= '</div>'; 
        }
    } else {
        $output .= '<p>' . __('Brak dostępnych spotkań.', 'custom-block-package') . '</p>';
    }

    $output .= '</div>'; 

    return $output;
}
