<?php

namespace ABlocks\Blocks\ModalPanel;

use ABlocks\Classes\BlockBaseAbstract;
use ABlocks\Classes\CssGenerator;

class Block extends BlockBaseAbstract {
	protected $parent_block_name = 'modal';
	protected $block_name = 'modal-panel';

	public function build_css( $attributes ) {
		$css_generator = new CssGenerator( $attributes );
		return $css_generator->generate_css();
	}


}
