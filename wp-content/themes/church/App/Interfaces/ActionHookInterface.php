<?php

Namespace Church\Interfaces;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

interface ActionHookInterface {

	public function register_add_action();
}