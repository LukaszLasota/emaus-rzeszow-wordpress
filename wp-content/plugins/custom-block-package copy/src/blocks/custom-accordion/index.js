import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import block from './block.json';
import Edit from './edit.js';
import Save from './save.js';


registerBlockType(block.name, {
    ...block,
    edit: Edit,
    save: Save
});

