import { registerBlockType } from '@wordpress/blocks';
import block from './block.json';
import Edit from './edit.js';
import Save from './save.js';


registerBlockType(block.name, {
    edit: Edit,
    save: Save
});

