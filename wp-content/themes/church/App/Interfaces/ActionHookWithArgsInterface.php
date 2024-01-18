<?php

Namespace Church\Interfaces;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

interface ActionHookWithArgsInterface {

	public function register_add_action_with_arguments( $args );
}