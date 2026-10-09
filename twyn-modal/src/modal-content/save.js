import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save({
		'data-wp-interactive': 'twyn/modal',
		'data-wp-on--close': 'actions.restoreFocus',
		'data-wp-on--click': 'actions.closeOnBackdrop',
	});

	const innerBlocksProps = useInnerBlocksProps.save({
		className: 'twyn-modal__content',
	});
	return (
		<dialog {...blockProps}>
			<div className="twyn-modal__inner">
				<button
					className="twyn-modal__close"
					type="button"
					aria-label={__('Modal schließen', 'twyn-blocks')}
					data-wp-on--click="actions.close"
				>
					<span aria-hidden="true">×</span>
				</button>

				<div {...innerBlocksProps} />
			</div>
		</dialog>
	);
}
