import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import block from './block.json';
import Edit from './edit.js';
import save from './save.js';

import './style.scss';

registerBlockType(block.name, {
    edit: Edit,
    save: save
});
