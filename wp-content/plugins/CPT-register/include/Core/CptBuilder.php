<?php

Namespace Testapp\Core;

class CptBuilder
{
	/**
     * @var string
     *
     * Set post type params
     */
    public $type;
    public $name;
    public $plugin_slug = 'cpt-register';
    public $singular_name;
    // ...

/**
     * Type constructor.
     *
     * When class is instantiated
     */
    public function __construct(string $singular, string $plural, string $slug)
    {

        $this->singular_name = $singular;
        $this->name = $plural;
        $this->type = $slug;

        // Register the post type
        add_action('init', array($this, 'register'));
     }

     public function register()
	{
		$labels = array(
            'name'                  => __($this->name, $this->plugin_slug),
            'singular_name'         => __($this->singular_name, $this->plugin_slug),
            'add_new'               => __('Add New', $this->plugin_slug),
            'add_new_item'          => __('Add New ' . $this->singular_name, $this->plugin_slug),
            'edit_item'             => __('Edit ' . $this->singular_name, $this->plugin_slug),
            'new_item'              => __('New ' . $this->singular_name, $this->plugin_slug),
            'all_items'             => __('All ' . $this->name, $this->plugin_slug),
            'view_item'             => __('View ' . $this->name, $this->plugin_slug),
            'search_items'          => __('Search ' . $this->name, $this->plugin_slug),
            'not_found'             => __('No ' . strtolower($this->name) . ' found', $this->plugin_slug),
            'not_found_in_trash'    => __('No ' . strtolower($this->name) . ' found in Trash', $this->plugin_slug),
            'parent_item_colon'     => '',
            'menu_name'             => __($this->name, $this->plugin_slug)
        );

        $args = array(
            'labels'                => $labels,
            'public'                => true,
            'publicly_queryable'    => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'query_var'             => true,
            'rewrite'               => array( 'slug' => $this->type ),
            'capability_type'       => 'post',
            'has_archive'           => true,
            'hierarchical'          => true,
            'menu_position'         => 8,
            'supports'              => array( 'title', 'editor', 'thumbnail'),
            'yarpp_support'         => true,
            'taxonomies' => ['producent'],
        );
        // ob_start();
        // var_dump($this->type);
        // file_put_contents('test.txt',ob_get_flush(), FILE_APPEND | LOCK_EX);
        register_post_type( $this->type, $args );
    }
    
}
