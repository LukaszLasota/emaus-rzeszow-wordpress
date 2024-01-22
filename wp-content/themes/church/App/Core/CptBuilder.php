<?php

namespace Church\Core\CptBuilder;

class CptBuilder
{
    private $singular_name;
    private $name;
    private $type;
    private $position;
    private $plugin_slug;

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
        $labels = array(
            'name'                  => __($this->name, 'church'),
            'singular_name'         => __($this->singular_name, 'church'),
            'add_new'               => __('Dodaj Nowy', 'church'),
            'add_new_item'          => __('Dodaj Nowy ' . $this->singular_name, 'church'),
            'edit_item'             => __('Edytuj ' . $this->singular_name, 'church'),
            'new_item'              => __('Nowy ' . $this->singular_name, 'church'),
            'all_items'             => __('Wszystkie ' . $this->name, 'church'),
            'view_item'             => __('Zobacz ' . $this->name, 'church'),
            'search_items'          => __('Szukaj ' . $this->name, 'church'),
            'not_found'             => __('Nie znaleziono ' . strtolower($this->name), 'church'),
            'not_found_in_trash'    => __('Nie znaleziono ' . strtolower($this->name) . ' w Koszu', 'church'),
            'parent_item_colon'     => '',
            'menu_name'             => __($this->name, 'church')
        );

        $args = array(
            'labels'                => $labels,
            'public'                => true,
            'publicly_queryable'    => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'query_var'             => true,
            'rewrite'               => array('slug' => $this->type),
            'capability_type'       => 'post',
            'has_archive'           => true,
            'hierarchical'          => true,
            'menu_position'         => $this->position,
            'supports'              => array('title', 'editor', 'thumbnail', 'excerpt', 'comments', 'custom-fields', 'revisions'),
            'yarpp_support'         => true,
            'taxonomies'            => array('category')
        );

        register_post_type($this->type, $args);
    }
}
