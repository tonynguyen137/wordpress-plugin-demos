<?php
/**
 * Plugin Name:       Twyn Blocks
 * Description:       Extends WordPress core blocks with additional useful blocks.
 * Version:           0.1.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            Tony Nguyen
 * Author URI:         https://github.com/tonynguyen137
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       twyn-blocks
 *
 * @package Twyn
 */


use Twyn\Blocks\Gutenberg_Blocks_Register;


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'TWYN_BLOCKS_PLUGIN_FILE', __FILE__ );
define( 'TWYN_BLOCKS_PLUGIN_PATH', plugin_dir_path( __FILE__ ));
define( 'TWYN_BLOCKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'TWYN_BLOCKS_BUILD_PATH', TWYN_BLOCKS_PLUGIN_PATH . 'build' );


/**
 * Plugin includes.
 */

require_once TWYN_BLOCKS_PLUGIN_PATH . 'includes/class-gutenberg-blocks-register.php';



/**
 * Bootstrap the plugin
 */

new Gutenberg_Blocks_Register(TWYN_BLOCKS_BUILD_PATH);
