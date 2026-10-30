import { registerBlockType } from "@wordpress/blocks";

import Edit from "./edit.js";
import save from "./save.js";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	edit: Edit,

	save,
	icon: (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill="currentColor"
				d="M12 1.25C6.0718 1.25 1.25 6.0718 1.25 12C1.25 17.9281 6.0718 22.75 12 22.75C17.9281 22.75 22.75 17.9281 22.75 12C22.75 6.0718 17.9281 1.25 12 1.25ZM12 2.75C17.1175 2.75 21.25 6.8825 21.25 12C21.25 17.1175 17.1175 21.25 12 21.25C6.8825 21.25 2.75 17.1175 2.75 12C2.75 6.8825 6.8825 2.75 12 2.75ZM10 7.25A.75.75 0 0 0 9.4688 7.4688A.75.75 0 0 0 9.4688 8.5313L12.9375 12L9.4688 15.4688A.75.75 0 0 0 9.4688 16.5313A.75.75 0 0 0 10.5313 16.5313L14.5313 12.5313A.7501.7501 0 0 0 14.5313 11.4688L10.5313 7.4688A.75.75 0 0 0 10 7.25Z"
			/>
		</svg>
	),
});
