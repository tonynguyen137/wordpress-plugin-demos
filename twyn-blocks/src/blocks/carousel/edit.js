import { __ } from "@wordpress/i18n";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

import { useEffect } from "@wordpress/element";
import { select, dispatch } from "@wordpress/data";
import { store as blockEditorStore } from "@wordpress/block-editor";

import "./editor.scss";

const TEMPLATE = [
	[
		"twyn/carousel-viewport",
		{
			lock: {
				move: true,
				remove: true,
			},
		},
	],
];

export default function Edit({ attributes, clientId }) {
	const { variant } = attributes;

	const blockProps = useBlockProps({
		className:
			variant !== "static" ? `wp-block-twyn-carousel--${variant}` : undefined,
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: TEMPLATE,
		templateInsertUpdatesSelection: true,
	});

	useEffect(() => {
		if (variant === "static") {
			return;
		}

		const editor = select(blockEditorStore);

		if (
			!editor.wasBlockJustInserted(clientId) ||
			!editor.isBlockSelected(clientId)
		) {
			return;
		}

		const wrapperId = editor.getBlockOrder(clientId)[0];
		const targetId = wrapperId && editor.getBlockOrder(wrapperId)[0];

		const contentId = targetId && editor.getBlockOrder(targetId)[0];

		if (targetId) {
			dispatch(blockEditorStore).selectBlock(contentId || targetId);
		}
	}, [clientId]);

	return <div {...innerBlocksProps} />;
}
