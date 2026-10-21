import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	useInnerBlocksProps,
	RichText,
} from "@wordpress/block-editor";
import metadata from "./block.json";
import { CloseIcon } from "./icons.js";

export default function Save({ attributes }) {
	const { triggerButtonContent, closeButtonContent, showCloseIcon } =
		attributes;

	const blockProps = useBlockProps.save();
	const innerBlocksProps = useInnerBlocksProps.save({
		className: "dialog-body",
	});

	return (
		<div {...blockProps}>
			<button className="wp-element-button" type="button">
				<RichText.Content tagName="span" value={triggerButtonContent} />
			</button>

			<dialog>
				<div className="header">
					<button
						type="button"
						aria-label={showCloseIcon ? closeButtonContent : undefined}
					>
						{showCloseIcon ? <CloseIcon /> : <span>{closeButtonContent}</span>}
					</button>
				</div>

				<div {...innerBlocksProps} />
			</dialog>
		</div>
	);
}
