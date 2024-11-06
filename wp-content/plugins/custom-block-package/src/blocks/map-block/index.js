// Importy potrzebne do rejestracji bloku
import { registerBlockType } from '@wordpress/blocks';
import Edit from './editor.js'; // Import komponentu Edit
import block from './block.json';

// Rejestracja bloku
registerBlockType(block.name, {
    edit: Edit,
    save: () => {
        // Renderowanie po stronie frontendu jest dynamiczne,
        // dlatego funkcja save zwraca null, co oznacza, że blok jest renderowany tylko przez `render_callback`
        return null;
    }
});
