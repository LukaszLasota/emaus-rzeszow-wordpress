<?php

namespace App\PostTypes;

class ComparisonPostType {

    public static $type = 'comparison';
    public static $archive = true;
    public static $position = 5;

    public static function register() {
        $labels = [
            'name' => __('Porównania', 'comparison-of-religions'),
            'singular_name' => __('Porównanie', 'comparison-of-religions'),
            'menu_name' => __('Porównania', 'comparison-of-religions'),
            'all_items' => __('Wszystkie Porównania', 'comparison-of-religions'),
            'add_new' => __('Dodaj nowe', 'comparison-of-religions'),
            'add_new_item' => __('Dodaj nowe Porównanie', 'comparison-of-religions'),
            'edit_item' => __('Edytuj Porównanie', 'comparison-of-religions'),
            'new_item' => __('Nowe Porównanie', 'comparison-of-religions'),
            'view_item' => __('Zobacz Porównanie', 'comparison-of-religions'),
            'search_items' => __('Szukaj Porównania', 'comparison-of-religions'),
            'not_found' => __('Nie znaleziono Porównania', 'comparison-of-religions'),
            'not_found_in_trash' => __('Nie znaleziono Porównania w koszu', 'comparison-of-religions'),
        ];

        $args = [
            'labels'                => $labels,
            'public'                => true,
            'publicly_queryable'    => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'query_var'             => true,
            'rewrite'               => ['slug' => self::$type],
            'capability_type'       => 'post',
            'has_archive'           => self::$archive,
            'hierarchical'          => true,
            'menu_position'         => self::$position,
            'supports'              => ['title', 'editor', 'thumbnail', 'excerpt', 'comments', 'custom-fields', 'revisions'],
            'show_in_rest'          => true,
            'taxonomies'            => ['category'],
        ];

        register_post_type(self::$type, $args);
    }
}

