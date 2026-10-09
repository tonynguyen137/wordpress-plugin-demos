<?php

namespace Twyn\Modal;

use function __;

/**
 * Registers the modal custom post type.
 */
class Modal_Post_Type {

	/**
	 * Hooks the post type registration and block restriction callbacks.
	 */
	public function __construct() {
		add_action( 'init', [ $this, 'register_post_type' ] );
		add_filter( 'allowed_block_types_all', [ $this, 'filter_allowed_block_types' ], 10, 2 );

	}

	/**
	 * Registers the modal post type.
	 *
	 * @return void
	 */
	public function register_post_type(): void {
		$labels = [
			'name'          => __( 'Modals', 'twyn-modal' ),
			'singular_name' => __( 'Modal', 'twyn-modal' ),
			'add_new'       => __( 'Modal hinzufügen', 'twyn-modal' ),
			'add_new_item'  => __( 'Neues Modal hinzufügen', 'twyn-modal' ),
			'edit_item'     => __( 'Modal bearbeiten', 'twyn-modal' ),
			'new_item'      => __( 'Neues Modal', 'twyn-modal' ),
			'view_item'     => __( 'Modal ansehen', 'twyn-modal' ),
			'search_items'  => __( 'Modals durchsuchen', 'twyn-modal' ),
			'not_found'     => __( 'Keine Modals gefunden', 'twyn-modal' ),
			'all_items'     => __( 'Alle Modals', 'twyn-modal' ),
		];

		register_post_type(
			'twyn_modal',
			[
				'labels'              => $labels,
				'public'              => false,
				'publicly_queryable'  => false,
				'exclude_from_search' => false,
				'show_ui'             => true,
				'show_in_menu'        => true,
				'show_in_rest'        => true,
				'has_archive'         => false,
				'rewrite'             => false,
				'query_var'           => false,
				'menu_icon'           => 'dashicons-format-chat',
				'supports'            => [
					'title',
					'editor',
					'revisions',
				],
				'template'            => [
					[ 
						'twyn/modal-content',
						[
							'lock' => [
								'move'   => true,
								'remove' => true,
							],
						],
					],
				],
				'template_lock' => 'all',
			]
		);
	}

	/**
	 * Removes modal buttons & button blocks from the modal editor.
	 *
	 * @param array|bool              $allowed_block_types The currently allowed block types.
	 * @param \WP_Block_Editor_Context $editor_context     The current block editor context.
	 *
	 * @return array|bool
	 */
	public function filter_allowed_block_types( $allowed_block_types, $editor_context ) {

		if (
			! isset( $editor_context->post )
			|| 'twyn_modal' !== $editor_context->post->post_type
		) {
			return $allowed_block_types;
		}

		$block_types = true === $allowed_block_types
			? array_keys( \WP_Block_Type_Registry::get_instance()->get_all_registered() )
			: $allowed_block_types;

		if ( ! is_array( $block_types ) ) {
			return $block_types;
		}

		return array_values(
			array_diff(
				$block_types,
				[
					'twyn/modal-buttons',
					'twyn/modal-button',
				]
			)
		);
	}
}