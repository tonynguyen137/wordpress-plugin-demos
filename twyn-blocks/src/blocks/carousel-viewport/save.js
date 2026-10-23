import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	const innerBlocksProps = useInnerBlocksProps.save({
		className: "wp-block-twyn-carousel-viewport__container",
	});

	return (
		<>
			<div {...blockProps}>
				<ul {...innerBlocksProps} />
			</div>
		</>
	);
}
