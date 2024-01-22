<?php
namespace Church\Core\TaxBuilder;

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
        
        $defaultLabels = [
            'name'                  => __($taxonomyName, 'church'),
            'singular_name'         => __($taxonomyName, 'church'),
            'search_items'          => __('Szukaj ' . $taxonomyName, 'church'),
            'all_items'             => __('Wszystkie ' . $taxonomyName, 'church'),
            'parent_item'           => __('Nadrzędne ' . $taxonomyName, 'church'),
            'parent_item_colon'     => __('Nadrzędne ' . $taxonomyName . ':', 'church'),
            'edit_item'             => __('Edytuj ' . $taxonomyName, 'church'),
            'update_item'           => __('Aktualizuj ' . $taxonomyName, 'church'),
            'add_new_item'          => __('Dodaj Nowe ' . $taxonomyName, 'church'),
            'new_item_name'         => __('Nazwa Nowego ' . $taxonomyName, 'church'),
            'menu_name'             => __($taxonomyName, 'church')
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