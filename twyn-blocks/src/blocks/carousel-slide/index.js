import { registerBlockType } from "@wordpress/blocks";
import { homeButton} from "@wordpress/icons";
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
	icon: homeButton,
});
