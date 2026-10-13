import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>
			{"Twyn Bild – hello from the saved content!"}
		</div>
	);
}
