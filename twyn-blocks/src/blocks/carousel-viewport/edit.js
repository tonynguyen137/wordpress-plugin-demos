import { __ } from "@wordpress/i18n";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import "./editor.scss";

const TEMPLATE = [["twyn/carousel-slide", {}]];
const ALLOWED_BLOCKS = ["twyn/carousel-slide"];

export default function Edit() {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "wp-block-twyn-carousel-viewport__container",
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: TEMPLATE,
		},
	);

	return (
		<>
			<div {...blockProps}>
				<ul {...innerBlocksProps} />
			</div>
		</>
	);
}
