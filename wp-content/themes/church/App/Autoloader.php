<?php

namespace Church;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Autoloader {
	
	public function __construct() {
		spl_autoload_register( array( $this, 'autoload' ) );
	}

	public function autoload( $class_name ) {

		if (0 !== strpos($class_name, 'Church\\')) {
			return;
		}
		
		$file_parts = explode( '\\', $class_name );

		$namespace = '';
		$file_name = '';
		for ( $i = count( $file_parts ) - 1; $i > 0; $i -- ) {
			
			$current = strtolower( $file_parts[ $i ] );
			$current = str_ireplace( '_', '-', $current );

			
			if ( count( $file_parts ) - 1 === $i ) {
				$file_name = "$current.php";

				// if ( strpos( strtolower( $file_parts[ count( $file_parts ) - 1 ] ), 'interface' ) ) {

				// 	$interface_name = explode( '_', $file_parts[ count( $file_parts ) - 1 ] );
				// 	$interface_name = $interface_name[0];

				// 	$file_name = "interface-$interface_name.php";

				// } else {
				// 	$file_name = "class-$current.php";
				// }
			} else {
				$namespace = '/' . $current . $namespace;
			}
		}

		$file_path  = trailingslashit( dirname( dirname( __FILE__ ) ) . $namespace );
		$file_path .= $file_name;
		
		if ( file_exists( $file_path ) ) {
			include_once $file_path;
		} else {
			wp_die(
				esc_html( "The file attempting to be loaded at $file_path does not exist." )
			);
		}
	}
}

new Autoloader();

