import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
export default function save({ attributes }) {
	const { variant } = attributes;

	const blockProps = useBlockProps.save({
		className:
			variant !== "static" ? `wp-block-twyn-carousel--${variant}` : undefined,
	});
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return <div {...innerBlocksProps} />;
}
