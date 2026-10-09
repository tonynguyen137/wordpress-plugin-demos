import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'twyn-modal__content',
		},
		{
			templateLock: false,
		},
	);

	return (
		<div {...blockProps}>
			<div className="twyn-modal__inner">
				<button
					className="twyn-modal__close"
					type="button"
					aria-label={__('Modal schließen', 'twyn-blocks')}
				>
					×
				</button>

				<div {...innerBlocksProps} />
			</div>
		</div>
	);
}
