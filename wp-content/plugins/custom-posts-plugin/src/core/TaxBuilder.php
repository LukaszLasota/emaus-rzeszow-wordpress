<?php

namespace CustomPostsPlugin\Core;

class TaxBuilder {
    private $postType;
    private $slug;
    private $taxonomyName;
    private $labels;
    private $args;

    public function __construct($slug, $postType, $taxonomyName, $labels = [], $args = []) {
        $this->postType = $postType;
        $this->slug = $slug;
        $this->taxonomyName = $taxonomyName;

        $domain = 'customposts';

        $defaultLabels = [
            'name'                  => __($taxonomyName, $domain),
            'singular_name'         => __($taxonomyName, $domain),
            'search_items'          => sprintf(__('Szukaj %s', $domain), $taxonomyName),
            'all_items'             => sprintf(__('Wszystkie %s', $domain), $taxonomyName),
            'parent_item'           => sprintf(__('Nadrzędne %s', $domain), $taxonomyName),
            'parent_item_colon'     => sprintf(__('Nadrzędne %s:', $domain), $taxonomyName),
            'edit_item'             => sprintf(__('Edytuj %s', $domain), $taxonomyName),
            'update_item'           => sprintf(__('Aktualizuj %s', $domain), $taxonomyName),
            'add_new_item'          => sprintf(__('Dodaj Nowe %s', $domain), $taxonomyName),
            'new_item_name'         => sprintf(__('Nazwa Nowego %s', $domain), $taxonomyName),
            'menu_name'             => __($taxonomyName, $domain)
        ];

        $this->labels = array_merge($defaultLabels, $labels);

        $this->args = array_merge([
            'hierarchical' => true,
            'labels' => $this->labels,
            'show_ui' => true,
            'show_admin_column' => true,
            'query_var' => true,
            'rewrite' => ['slug' => $this->slug],
        ], $args);

        add_action('init', [$this, 'register']);
    }

    public function register() {
        register_taxonomy($this->slug, [$this->postType], $this->args);
    }
}
