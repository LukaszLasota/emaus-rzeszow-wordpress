<?php

Namespace Church\Interfaces;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

interface FilterHookInterface {

	public function register_add_filter();
}