const { registerBlockType } = wp.blocks;

import block from './block.json';
import Edit from './edit.js';
// import './style.scss';
// import './editor.scss';

registerBlockType(block.name, {
    edit: Edit,
    save() {
        // Blok dynamiczny - dane są generowane po stronie serwera
        return null;
    },
});