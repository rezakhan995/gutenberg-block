<?php

/**
 * Plugin Name:         Custom Gutenberg Blocks
 * Autho Name:          Optimus Prime
 * Autho Uri:           http://www.google.com
 * License:             GPL-2.0+
 * License URI:         http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:         gutentest
 * Domain Path:         /languages
 */

/**
 * Custom Gutenberg Blocks
 */
define( 'GTN_PATH', plugin_dir_url( __FILE__ ) );
define( 'GTN_ASSETS', GTN_PATH . 'src/' );
define( 'GTN_BUILD', GTN_PATH . 'build/' );
require plugin_dir_path( __FILE__ ) . '/core/gutenberg/gutenberg.php';

