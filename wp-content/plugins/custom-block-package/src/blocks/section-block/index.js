import { registerBlockType } from "@wordpress/blocks";
import Edit from './edit.js';
import Save from './save.js';
import block from './block.json';

registerBlockType(block.name, {
  edit: Edit,
  save: Save
});
