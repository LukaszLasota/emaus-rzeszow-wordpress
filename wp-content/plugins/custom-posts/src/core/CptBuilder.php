<?php
/**
 * Custom Post Type Builder
 *
 * @package CustomPostsPlugin
 */

namespace CustomPostsPlugin\Core;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class CptBuilder
 *
 * Reusable builder for registering custom post types.
 */
class CptBuilder {

	/**
	 * Post type slug.
	 *
	 * @var string
	 */
	private string $type;

	/**
	 * Menu position.
	 *
	 * @var int
	 */
	private int $position;

	/**
	 * Archive slug or false.
	 *
	 * @var string|bool
	 */
	private $archive;

	/**
	 * Post type labels.
	 *
	 * @var array<string, string>
	 */
	private array $labels;

	/**
	 * Constructor.
	 *
	 * @param string                $slug     Post type slug.
	 * @param array<string, string> $labels   Translated labels array.
	 * @param int                   $position Menu position.
	 * @param string|bool           $archive  Archive slug or false.
	 */
	public function __construct( string $slug, array $labels, int $position = 5, $archive = false ) {
		$this->type     = $slug;
		$this->labels   = $labels;
		$this->position = $position;
		$this->archive  = $archive;

		add_action( 'init', [ $this, 'register' ] );
	}

	/**
	 * Register the custom post type.
	 *
	 * @return void
	 */
	public function register(): void {
		$args = [
			'labels'             => $this->labels,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'query_var'          => true,
			'rewrite'            => [ 'slug' => $this->type ],
			'capability_type'    => 'post',
			'has_archive'        => $this->archive,
			'hierarchical'       => true,
			'menu_position'      => $this->position,
			'supports'           => [ 'title', 'editor', 'thumbnail', 'excerpt', 'comments', 'custom-fields', 'revisions' ],
			'show_in_rest'       => true,
			'taxonomies'         => [ 'category' ],
		];

		register_post_type( $this->type, $args );
	}
}
