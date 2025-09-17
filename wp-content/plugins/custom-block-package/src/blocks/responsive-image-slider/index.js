import { registerBlockType } from "@wordpress/blocks";
import Edit from './edit.js';
import Save from './save.js';
import block from './block.json';
import "./index.scss";
import './style.scss';

registerBlockType(block.name, {
  ...block,
  edit: Edit,
  save: Save
});
