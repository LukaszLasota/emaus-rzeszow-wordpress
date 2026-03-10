<?php
/**
 * Taxonomy Builder
 *
 * @package CustomPostsPlugin
 */

namespace CustomPostsPlugin\Core;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class TaxBuilder
 *
 * Reusable builder for registering custom taxonomies.
 */
class TaxBuilder {

	/**
	 * Taxonomy slug.
	 *
	 * @var string
	 */
	private string $slug;

	/**
	 * Associated post type.
	 *
	 * @var string
	 */
	private string $post_type;

	/**
	 * Taxonomy arguments.
	 *
	 * @var array<string, mixed>
	 */
	private array $args;

	/**
	 * Constructor.
	 *
	 * @param string                $slug      Taxonomy slug.
	 * @param string                $post_type Associated post type slug.
	 * @param array<string, string> $labels    Translated labels array.
	 * @param array<string, mixed>  $args      Optional extra arguments.
	 */
	public function __construct( string $slug, string $post_type, array $labels, array $args = [] ) {
		$this->slug      = $slug;
		$this->post_type = $post_type;

		$this->args = array_merge(
			[
				'hierarchical'      => true,
				'labels'            => $labels,
				'show_ui'           => true,
				'show_admin_column' => true,
				'query_var'         => true,
				'rewrite'           => [ 'slug' => $this->slug ],
			],
			$args
		);

		add_action( 'init', [ $this, 'register' ] );
	}

	/**
	 * Register the taxonomy.
	 *
	 * @return void
	 */
	public function register(): void {
		register_taxonomy( $this->slug, [ $this->post_type ], $this->args );
	}
}
