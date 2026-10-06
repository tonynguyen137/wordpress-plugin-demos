<?php
namespace Twyn\Modal;

/**
 * Handles the registration of Gutenberg blocks.
 */

class Gutenberg_Blocks_Register {

	/**
	 *	Hooks the block registration callback into the init action.
	 */
	public function __construct() {
		add_action( 'init', [$this,'register_blocks'] );
	}

	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
	 * based on the registered block metadata. Behind the scenes, it registers also all assets so they can be enqueued
	 * through the block editor in the corresponding context.
	 *
	 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
	 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 	*/

	public function register_blocks() {
		wp_register_block_types_from_metadata_collection( TWYN_MODAL_PLUGIN_PATH . 'build', TWYN_MODAL_PLUGIN_PATH . 'build/blocks-manifest.php' );
	}

}