import { __ } from "@wordpress/i18n";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ context }) {
	const allowedBlocks = context["twyn/carouselAllowedBlocks"];

	const hasSingleAllowedBlock = allowedBlocks?.length === 1;

	const template = hasSingleAllowedBlock ? [[allowedBlocks[0]]] : undefined;

	const blockProps = useBlockProps();

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks,
		template,
		templateLock: hasSingleAllowedBlock ? "all" : false,
	});

	return <li {...innerBlocksProps} />;
}
