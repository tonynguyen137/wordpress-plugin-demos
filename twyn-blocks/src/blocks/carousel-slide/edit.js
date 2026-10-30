import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	useInnerBlocksProps,
	BlockControls,
	Inserter,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";

import { useSelect } from "@wordpress/data";
import { plus } from "@wordpress/icons";

import metadata from "./block.json";
import "./editor.scss";

export default function Edit({ context, clientId }) {
	const allowedBlocks = context["twyn/carouselAllowedBlocks"];
	const slideIndex = useSelect(
		(select) => select(blockEditorStore).getBlockIndex(clientId),
		[clientId],
	);

	const hasSingleAllowedBlock = allowedBlocks?.length === 1;

	const template = hasSingleAllowedBlock
		? [[allowedBlocks[0]]]
		: [
				[
					"core/group",
					{
						align: "full",
						layout: {
							type: "default",
						},
					},
					[["core/paragraph", { content: `Slide #${slideIndex + 1}` }]],
				],
			];

	const blockProps = useBlockProps();

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks,
		template,
		templateLock: hasSingleAllowedBlock ? "all" : false,
		templateInsertUpdatesSelection: true,
		renderAppender: false,
	});

	return (
		<>
			{!hasSingleAllowedBlock && (
				<BlockControls>
					<ToolbarGroup>
						<Inserter
							rootClientId={clientId}
							__experimentalIsQuick
							isAppender
							renderToggle={({ onToggle, isOpen, disabled }) => (
								<ToolbarButton
									className="twyn-carousel-slide-inserter"
									icon={plus}
									label={__("Block hinzufügen", metadata.textdomain)}
									onClick={onToggle}
									disabled={disabled}
									aria-expanded={isOpen}
									aria-haspopup="true"
								/>
							)}
						/>
					</ToolbarGroup>
				</BlockControls>
			)}
			<li {...innerBlocksProps} />
		</>
	);
}
