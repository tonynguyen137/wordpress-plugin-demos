<?php
use Twyn\Modal\Modal_Manager;

	$content = $attributes['content'] ?? '';
	$aria_label = $attributes['ariaLabel'] ?? '';
	$trigger_type = $attributes['triggerType'] ?? '';
	$image_id   = $attributes['imageId'] ?? 0;
	$image_size = $attributes['imageSize'] ?? 'full';
	$modal_id   = (int) ( $attributes['modalId'] ?? 0 );

	$config = [];

	if ( '' !== $aria_label ) {
		$config['aria-label'] = $aria_label;
	}

	if ( '' !== $trigger_type) {
		$config['data-twyn-modal-trigger-type'] = $trigger_type;
	}

	if ( 'image' === $trigger_type && 0 !== $image_id ) {
		$config['class'] = 'wp-image-' . $image_id;
	}


	if ( 0 < $modal_id ) {
		$config['data-twyn-modal-id'] = $modal_id;
		$config['data-wp-interactive'] = 'twyn/modal';
		$config['data-wp-on--click']   = 'actions.open';
		$config['aria-controls']       = 'twyn-modal-' . $modal_id;
		$config['aria-haspopup']       = 'dialog';
	
		Modal_Manager::prepare( $modal_id );
	}


?>
<button <?php echo get_block_wrapper_attributes( $config ); ?>>

	<?php
	switch ( $trigger_type ) {
		case 'image':
			if ( 0 !== $image_id ) {
				echo wp_get_attachment_image( $image_id, $image_size, false, array(
					'class' => 'wp-image-' . $image_id
				) );
			}
			break;

		case 'text':
		default:
			echo wp_kses_post( $content );
			break;
	}
	?>

</button>
