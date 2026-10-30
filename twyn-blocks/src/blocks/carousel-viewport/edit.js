import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	useInnerBlocksProps,
	BlockControls,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { useDispatch } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import { addCard } from "@wordpress/icons";

import metadata from "./block.json";
import "./editor.scss";

const TEMPLATE = [["twyn/carousel-slide", {}]];
const ALLOWED_BLOCKS = ["twyn/carousel-slide"];

export default function Edit({ clientId }) {
	const { insertBlock } = useDispatch(blockEditorStore);

	const onAddSlide = () => {
		const slide = createBlock("twyn/carousel-slide");
		insertBlock(slide, undefined, clientId, true);
	};

	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "wp-block-twyn-carousel-viewport__container",
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: TEMPLATE,
			renderAppender: false,
			templateInsertUpdatesSelection: true,
		},
	);

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						className="twyn-carousel-viewport-add-slide"
						icon={addCard}
						label={__("Slide hinzufügen", metadata.textdomain)}
						onClick={onAddSlide}
					/>
				</ToolbarGroup>
			</BlockControls>

			<div {...blockProps}>
				<ul {...innerBlocksProps} />
			</div>
		</>
	);
}
