import { __ } from "@wordpress/i18n";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import "./editor.scss";

const ALLOWED_BLOCKS = ["twyn/dialog-button"];
const TEMPLATE = [["twyn/dialog-button"]];

export default function Edit() {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		template: TEMPLATE,
	});

	return <div {...innerBlocksProps} />;
}
