import { registerBlockType } from "@wordpress/blocks";

import Edit from "./edit.js";
import save from "./save.js";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
	icon: (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path
				fill="currentColor"
				d="M 4,3.25 C 2.4901,3.25 1.25,4.4901 1.25,6 v 2 10 c 0,1.5099 1.2401,2.75 2.75,2.75 h 16 c 1.5099,0 2.75,-1.2401 2.75,-2.75 V 8 6 C 22.75,4.4901 21.5099,3.25 20,3.25 H 10 6 Z m 0,1.5 h 1.25 v 2.5 H 2.75 V 6 C 2.75,5.3008 3.3008,4.75 4,4.75 Z m 2.75,0 h 2.5 v 2.5 h -2.5 z m 4,0 H 20 c 0.6993,0 1.25,0.5507 1.25,1.25 v 1.25 h -10.5 z m -8,4 H 6 10 21.25 V 18 c 0,0.6993 -0.5507,1.25 -1.25,1.25 H 4 C 3.3007,19.25 2.75,18.6993 2.75,18 Z"
			/>
		</svg>
	),
});
