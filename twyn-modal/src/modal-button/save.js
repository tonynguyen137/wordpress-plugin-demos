import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { content } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<button {...blockProps}>
			<RichText.Content tagName="span" value={content} />
		</button>
	);
}
