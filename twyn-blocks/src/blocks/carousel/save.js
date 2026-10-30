import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
export default function save({ attributes }) {
	const { variant, options } = attributes;

	const isPlainObject =
		options && typeof options === "object" && !Array.isArray(options);

	const safeOptions = isPlainObject ? JSON.stringify(options) : undefined;

	const blockProps = useBlockProps.save({
		className:
			variant !== "static" ? `wp-block-twyn-carousel--${variant}` : undefined,

		"data-twyn-carousel-options": safeOptions,
	});

	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return <div {...innerBlocksProps} />;
}
