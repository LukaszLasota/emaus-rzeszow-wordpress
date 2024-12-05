import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit.js';
import block from './block.json';
import './style.scss';
import './frontend.js';

registerBlockType(block.name, {
    edit: Edit,
    save: () => {
        return null;
    }
});
