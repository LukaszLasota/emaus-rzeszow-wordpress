const { registerBlockType } = wp.blocks;

import block from './block.json';
import Edit from './edit.js';
import './style.scss';

registerBlockType(block.name, {
    edit: Edit,
    save() {
        return null;
    },
});