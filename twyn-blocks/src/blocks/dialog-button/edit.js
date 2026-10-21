import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	useInnerBlocksProps,
	RichText,
	BlockControls,
	InspectorControls,
} from "@wordpress/block-editor";

import {
	ToolbarGroup,
	TextControl,
	ToolbarButton,
	ToggleControl,
	PanelBody,
} from "@wordpress/components";

import { useRef } from "@wordpress/element";

import { CloseIcon, DialogIcon } from "./icons.js";

import metadata from "./block.json";
import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { triggerButtonContent, closeButtonContent, showCloseIcon } =
		attributes;
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps({
		className: "dialog-body",
	});
	const dialogRef = useRef(null);

	const onChangeTriggerButtonContent = (newText) => {
		setAttributes({
			triggerButtonContent: newText,
		});
	};

	const onChangeCloseButtonContent = (newText) => {
		setAttributes({
			closeButtonContent: newText,
		});
	};

	const openDialog = () => {
		dialogRef.current?.showModal();
	};

	const closeDialog = () => {
		dialogRef.current?.close();
	};

	const onToggleShowCloseIcon = (newValue) => {
		setAttributes({
			showCloseIcon: newValue,
		});
	};
	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={DialogIcon}
						label={__("Dialog öffnen", metadata.textdomain)}
						onClick={openDialog}
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__("Einstellungen", metadata.textdomain)}>
					<ToggleControl
						label={__(
							"Schließen-Button als Icon anzeigen",
							metadata.textdomain,
						)}
						help={
							showCloseIcon
								? __("Zeigt ein Icon statt des Textes.", metadata.textdomain)
								: __(
										`Zeigt den Text "${closeButtonContent}“.`,
										metadata.textdomain,
									)
						}
						checked={showCloseIcon}
						onChange={onToggleShowCloseIcon}
					/>

					<TextControl
						label={__("Text des Schließen-Buttons", metadata.textdomain)}
						help={__(
							"Wird auch bei ausgeblendetem Text von Screenreadern vorgelesen.",
							metadata.textdomain,
						)}
						value={closeButtonContent}
						onChange={onChangeCloseButtonContent}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<button className="wp-element-button">
					<RichText
						tagName="span"
						value={triggerButtonContent}
						allowedFormats={["core/bold", "core/italic"]}
						onChange={onChangeTriggerButtonContent}
					/>
				</button>
				<dialog
					ref={dialogRef}
					aria-label={__("Dialog bearbeiten", metadata.textdomain)}
				>
					<div className="header">
						<button
							type="button"
							onClick={closeDialog}
							aria-label={showCloseIcon ? closeButtonContent : undefined}
						>
							{showCloseIcon ? (
								<CloseIcon />
							) : (
								<span>{closeButtonContent}</span>
							)}
						</button>
					</div>

					<div {...innerBlocksProps} />
				</dialog>
			</div>
		</>
	);
}
