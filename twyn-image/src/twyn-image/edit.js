import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	MediaPlaceholder,
	InspectorPanel,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";
import { isBlobURL } from "@wordpress/blob";

import { image } from "@wordpress/icons";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { url, imageId, fetchPriority, loading, sizes, sources } = attributes;

	const isUploading = isBlobURL(url);

	const cls = [
		isUploading ? "is-loading" : undefined,
		imageId ? `wp-image-${imageId}` : undefined,
	];

	const blockProps = useBlockProps({
		className: cls.filter(Boolean).join(" "),
	});

	const onSelectImage = (media) => {
		console.log("media select ", media);
		console.log("blob ", media.url);

		if (!media?.url) {
			return;
		}

		setAttributes({
			url: media.url,
			imageId: media.id,
		});
	};

	const onSelectURL = (newURL) => {
		setAttributes({
			url: newURL,
			imageId: 0,
		});
	};

	const onUploadError = (error) => {
		console.error(__("Bild Upload-Fehler:", "twyn-image"), error);

		setAttributes({
			url: undefined,
			imageId: 0,
		});
	};

	return (
		<>
			{!url && (
				<MediaPlaceholder
					onSelect={onSelectImage}
					onSelectURL={onSelectURL}
					onError={onUploadError}
					allowedTypes={["image"]}
					multiple={false}
					icon={image}
					labels={{
						title: __("Bild", "twyn-image"),
						instructions: __(
							"Wählen Sie ein Bild zum Anzeigen aus.",
							"twyn-image",
						),
					}}
				/>
			)}

			{url && <img {...blockProps} src={url} />}
		</>
	);
}
