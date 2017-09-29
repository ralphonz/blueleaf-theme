<?php 

namespace Roots\Sage\Admin;

use Roots\Sage\Assets;

/**
 * Change the admin footer text
 * @since 1.0
 * @return string
 */
function footer_admin_text () { 
  echo 'Fueled by <a href="http://www.wordpress.org" target="_blank">WordPress</a> | Designed by <a href="http://blueleafstudio.net" target="_blank" title="Blueleaf Studio Web Design and Development">Blueleaf Studio Web Design and Development</a> | Hosted with 100% renewable energy at <a href="http://www.wpbeginner.com" target="_blank" title="Blueleaf Studio Eco Web Hosting">Blueleaf Web Hosting</a></p>';
}
add_filter('admin_footer_text', __NAMESPACE__ . '\\footer_admin_text');

/**
 * Remove the wordpress version number for the admin footer for evryone except admins
 * @since 1.0
 */
function footer_shh() {
  if ( ! current_user_can('manage_options') ) { // 'update_core' may be more appropriate
    remove_filter( 'update_footer', 'core_update_footer' ); 
  }
}
add_action( 'admin_menu', __NAMESPACE__ . '\\footer_shh' );

/**
 * Change the login styles
 * @since 1.0
 */

function login_stylesheet() {
  wp_enqueue_style( 'sage/login', Assets\asset_path('styles/login.css'), false, null);
}
add_action( 'login_enqueue_scripts', __NAMESPACE__ . '\\login_stylesheet' );