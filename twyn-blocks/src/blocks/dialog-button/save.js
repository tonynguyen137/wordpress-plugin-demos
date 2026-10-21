import { useBlockProps } from "@wordpress/block-editor";

export default function save() {
	return (
		<p {...useBlockProps.save()}>
			{"Twyn Dialog – hello from the saved content!"}
		</p>
	);
}
