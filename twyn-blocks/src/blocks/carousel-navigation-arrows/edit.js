import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { prevButtonText, nextButtonText, hideButtonText } = attributes;

	const onChangePrevContent = (newValue) => {
		setAttributes({ prevContent: newValue });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody></PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<button className="">
					{hideButtonText && (
						<RichText
							tagName="span"
							value={prevButtonText}
							allowedFormats={["core/bold", "core/italic"]}
							onChange={onChangePrevContent}
						/>
					)}
				</button>
				<button className=""></button>
			</div>
		</>
	);
}
