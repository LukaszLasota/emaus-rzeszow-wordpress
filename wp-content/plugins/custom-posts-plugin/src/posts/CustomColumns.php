<?php

namespace CustomPostsPlugin\Posts;

class CustomColumns
{
    public function __construct()
    {
        add_filter('manage_meetings_posts_columns', [$this, 'set_custom_columns']);
        add_action('manage_meetings_posts_custom_column', [$this, 'render_custom_column_content'], 10, 2);
    }

    public function set_custom_columns($columns)
    {
        unset($columns);

        $columns['title'] = __('Tytuł', 'customposts');
        $columns['author'] = __('Autor', 'customposts');
        $columns['taxonomy-category'] = __('Kategorie', 'customposts');
        $columns['taxonomy-post_tag'] = __('Tagi', 'customposts');
        $columns['date'] = __('Data', 'customposts');
        $columns['modified_date'] = __('Ostatnia modyfikacja', 'customposts');

        return $columns;
    }

    public function render_custom_column_content($column, $post_id)
    {
        switch ($column) {
            case 'title':
                echo '<strong>' . get_the_title($post_id) . '</strong>';
                break;
            case 'author':
                $author = get_the_author_meta('display_name', get_post_field('post_author', $post_id));
                echo esc_html($author);
                break;
            case 'taxonomy-category':
                $terms = get_the_term_list($post_id, 'category', '', ', ');
                echo $terms ?: __('Brak kategorii', 'customposts');
                break;
            case 'taxonomy-post_tag':
                $tags = get_the_term_list($post_id, 'post_tag', '', ', ');
                echo $tags ?: __('Brak tagów', 'customposts');
                break;
            case 'date':
                echo get_the_date('', $post_id);
                break;
            case 'modified_date':
                $modified_date = get_post_modified_time('Y-m-d H:i', false, $post_id);
                echo esc_html($modified_date);
                break;
        }
    }
}
