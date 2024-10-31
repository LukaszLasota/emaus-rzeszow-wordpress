<?php

namespace CustomPostsPlugin\Core;

class CptBuilder
{
    private $singular_name;
    private $name;
    private $type;
    private $position;

    public function __construct(string $singular, string $plural, string $slug, int $position)
    {
        $this->singular_name = $singular;
        $this->name = $plural;
        $this->type = $slug;
        $this->position = $position;

        add_action('init', [$this, 'register']);
    }

    public function register()
    {
        $domain = 'customposts';

        $labels = [
            'name'                  => __($this->name, $domain),
            'singular_name'         => __($this->singular_name, $domain),
            'add_new'               => __('Dodaj Nowy Post', $domain),
            'add_new_item'          => sprintf(__('Dodaj Nowy %s', $domain), $this->singular_name),
            'edit_item'             => sprintf(__('Edytuj %s', $domain), $this->singular_name),
            'new_item'              => sprintf(__('Nowy %s', $domain), $this->singular_name),
            'all_items'             => sprintf(__('Wszystkie %s', $domain), $this->name),
            'view_item'             => sprintf(__('Zobacz %s', $domain), $this->name),
            'search_items'          => sprintf(__('Szukaj %s', $domain), $this->name),
            'not_found'             => sprintf(__('Nie znaleziono %s', $domain), strtolower($this->name)),
            'not_found_in_trash'    => sprintf(__('Nie znaleziono %s w Koszu', $domain), strtolower($this->name)),
            'menu_name'             => __($this->name, $domain),
        ];

        $args = [
            'labels'                => $labels,
            'public'                => true,
            'publicly_queryable'    => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'query_var'             => true,
            'rewrite'               => ['slug' => $this->type],
            'capability_type'       => 'post',
            'has_archive'           => false,
            'hierarchical'          => true,
            'menu_position'         => $this->position,
            'supports'              => ['title', 'editor', 'thumbnail', 'excerpt', 'comments', 'custom-fields', 'revisions'],
            'show_in_rest'          => true,
            'taxonomies'            => ['category'],
        ];

        register_post_type($this->type, $args);
    }
}
