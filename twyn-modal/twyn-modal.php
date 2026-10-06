<?php
/**
 * Plugin Name:       twyn Modal
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       twyn-modal
 *
 * @package Twyn
 */

use Twyn\Modal\Gutenberg_Blocks_Register;


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'TWYN_MODAL_PLUGIN_FILE', __FILE__ );
define( 'TWYN_MODAL_PLUGIN_PATH', plugin_dir_path( __FILE__ ));
define( 'TWYN_MODAL_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'TWYN_MODAL_BUILD_PATH', TWYN_MODAL_PLUGIN_PATH . 'build' );


/**
 * Plugin includes.
 */

require_once TWYN_MODAL_PLUGIN_PATH . 'includes/class-gutenberg-blocks-register.php';


/**
 * Bootstrap the plugin
 */


new Gutenberg_Blocks_Register(TWYN_MODAL_BUILD_PATH);


