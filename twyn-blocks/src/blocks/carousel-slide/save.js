import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
export default function save() {
	const blockProps = useBlockProps.save({
		"data-twyn-slide": "",
	});
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return <li {...innerBlocksProps} />;
}
