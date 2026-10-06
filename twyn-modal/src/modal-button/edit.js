import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { content } = attributes;
	const blockProps = useBlockProps();
	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent });
	};
	return (
		<button {...blockProps}>
			<RichText
				{...blockProps}
				tagName="span"
				value={content}
				allowedFormats={['core/bold', 'core/italic']}
				onChange={onChangeContent}
			/>
		</button>
	);
}
