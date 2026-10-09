<?php
namespace Twyn\Modal;

/**
 * Manages the preparation and output of modal content.
 */

class Modal_Manager {

    /**
	 * Stores the prepared modal HTML keyed by post ID.
	 *
	 * @var array<int, string>
	 */
    private static array $modals = [];

	/**
	 * Hooks the modal output callback into the footer.
	 */
	public function __construct() {
		add_action( 'wp_footer', [ self::class, 'output' ] );
	}

	/**
	 * Prepares the rendered HTML for a modal post.
	 *
	 * @param int $modal_id The modal post ID.
	 *
	 * @return void
	 */
    public static function prepare( int $modal_id ): void {

        // Bail if the ID is invalid or the modal has already been prepared.
        if ( $modal_id <= 0 || isset( self::$modals[ $modal_id ] ) ) {
            return;
        }

        // Retrieve the associated modal post.
        $modal = get_post( $modal_id );
        
     
        // Only process published, non-password-protected modal posts.
        if (
            ! $modal
            || 'twyn_modal' !== $modal->post_type
            || 'publish' !== $modal->post_status
            || '' !== $modal->post_password
        ) {
            return;
        }

    	// Render the block content, assign the dialog ID, and store the resulting HTML.
        $html = do_blocks( $modal->post_content );

        $processor = new \WP_HTML_Tag_Processor( $html );

        if ( $processor->next_tag( 'dialog' ) ) {
            $processor->set_attribute(
                'id',
                'twyn-modal-' . $modal_id
            );
        }

        self::$modals[ $modal_id ] = $processor->get_updated_html();
    }

	/**
	 * Outputs all prepared modals.
	 *
	 * @return void
	*/
    public static function output(): void {

        foreach ( self::$modals as $html ) {
            echo $html;
        }
    }
}