import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit.js";
import save from "./save.js";
import metadata from "./block.json";

import "./style.scss";

registerBlockType(metadata.name, {
	edit: Edit,
	save,
	icon: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="M 4,4.25 A 0.75,0.75 0 0 0 3.25,5 V 19 A 0.75,0.75 0 0 0 4,19.75 0.75,0.75 0 0 0 4.75,19 V 5 A 0.75,0.75 0 0 0 4,4.25 Z m 4.8008,0 c -1.2777,0 -2.3516,1.0287 -2.3516,2.3047 V 17.4453 c 0,1.2761 1.0739,2.3047 2.3516,2.3047 h 6.3984 c 1.2777,0 2.3516,-1.0286 2.3516,-2.3047 V 6.5547 C 17.5508,5.2787 16.477,4.25 15.1992,4.25 Z M 20,4.25 A 0.75,0.75 0 0 0 19.25,5 V 19 A 0.75,0.75 0 0 0 20,19.75 0.75,0.75 0 0 0 20.75,19 V 5 A 0.75,0.75 0 0 0 20,4.25 Z M 8.8008,5.75 h 6.3984 c 0.4896,0 0.8516,0.3625 0.8516,0.8047 V 17.4453 c 0,0.4424 -0.3619,0.8047 -0.8516,0.8047 H 8.8008 c -0.4896,0 -0.8516,-0.3624 -0.8516,-0.8047 V 6.5547 C 7.9492,6.1125 8.3112,5.75 8.8008,5.75 Z"
			/>
		</svg>
	),
});
