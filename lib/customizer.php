<?php

namespace Roots\Sage\Customizer;

use Roots\Sage\Assets;

/**
 * Add postMessage support
 */
function customize_register($wp_customize) {
  $wp_customize->get_setting('blogname')->transport = 'postMessage';
}
add_action('customize_register', __NAMESPACE__ . '\\customize_register');

/**
 * Customizer JS
 */
function customize_preview_js() {
  wp_enqueue_script('sage/customizer', Assets\asset_path('scripts/customizer.js'), ['customize-preview'], null, true);
}
add_action('customize_preview_init', __NAMESPACE__ . '\\customize_preview_js');

/**
 * Social Icon URL Customizer
 */
function customize_social_icons( $wp_customize ) {

  // Add a section for our soical network url settings
  $wp_customize->add_section( 'social_icons', 
    [
      'title'      => __( 'Social Network URLs', 'blueleaf' ),
      'priority'   => 30,
    ] 
  );

   //Add a setting for each social network
  $wp_customize->add_setting( 'facebook_url', 
    [
      'url'   => 'https://facebook.com/',
      'transport' => 'postMessage',
      'type' => 'option',
      'sanitize_callback' => 'esc_url_raw',
    ]
  );
  $wp_customize->add_setting( 'twitter_url', 
    [
      'url'   => 'https://twitter.com/',
      'transport' => 'postMessage',
      'type' => 'option',
      'sanitize_callback' => 'esc_url_raw',
    ]
  );
  $wp_customize->add_setting( 'google_url', 
    [
      'url'   => 'https://google.com/',
      'transport' => 'postMessage',
      'type' => 'option',
      'sanitize_callback' => 'esc_url_raw',
    ]
  );
  $wp_customize->add_setting( 'linkedin_url', 
    [
      'url'   => 'https://linkedin.com/',
      'transport' => 'postMessage',
      'type' => 'option',
      'sanitize_callback' => 'esc_url_raw',
    ]
  );
  $wp_customize->add_setting( 'pinterest_url', 
    [
      'url'   => 'https://pinterest.com/',
      'transport' => 'postMessage',
      'type' => 'option',
      'sanitize_callback' => 'esc_url_raw',
    ]
  );
  $wp_customize->add_setting( 'instagram_url', 
    [
      'url'   => 'https://instagram.com/',
      'transport' => 'postMessage',
      'type' => 'option',
      'sanitize_callback' => 'esc_url_raw',
    ]
  );

  //Add all the input fields for social network urls
  $wp_customize->add_control( 'facebook_url_control',
    [
      'label'    => __( 'Facebook URL', 'blueleaf' ),
      'section'  => 'social_icons',
      'settings' => 'facebook_url',
      'type'     => 'url',
    ]
  );
  $wp_customize->add_control( 'twitter_url_control',
    [
      'label'    => __( 'Twitter URL', 'blueleaf' ),
      'section'  => 'social_icons',
      'settings' => 'twitter_url',
      'type'     => 'url',
    ]
  );
  $wp_customize->add_control( 'google_url_control',
    [
      'label'    => __( 'Google URL', 'blueleaf' ),
      'section'  => 'social_icons',
      'settings' => 'google_url',
      'type'     => 'url',
    ]
  );
  $wp_customize->add_control( 'linkedin_url_control',
    [
      'label'    => __( 'LinkedIn URL', 'blueleaf' ),
      'section'  => 'social_icons',
      'settings' => 'linkedin_url',
      'type'     => 'url',
    ]
  );
  $wp_customize->add_control( 'pinterest_url_control',
    [
      'label'    => __( 'Pinterest URL', 'blueleaf' ),
      'section'  => 'social_icons',
      'settings' => 'pinterest_url',
      'type'     => 'url',
    ]
  );
  $wp_customize->add_control( 'instagram_url_control',
    [
      'label'    => __( 'Instagram URL', 'blueleaf' ),
      'section'  => 'social_icons',
      'settings' => 'instagram_url',
      'type'     => 'url',
    ]
  );
}
add_action( 'customize_register', __NAMESPACE__ . '\\customize_social_icons' );

/**
 * Contact Linka and info Customizer
 */
function customize_contact_info( $wp_customize ) {

  // Add a section for the contact info settings
  $wp_customize->add_section( 'contact_info', 
    [
      'title'      => __( 'Contact Info', 'blueleaf' ),
      'priority'   => 30,
    ] 
  );

  //Add a setting
  $wp_customize->add_setting( 'quick_contact_url', 
    [
      'url'   => '',
      'transport' => 'postMessage',
      'type' => 'option',
      'sanitize_callback' => 'esc_url_raw',
    ]
  );

  //Add all the input fields
  $wp_customize->add_control( 'quick_contact_url_control',
    [
      'label'    => __( 'Quick Contact Button Link', 'blueleaf' ),
      'section'  => 'contact_info',
      'settings' => 'quick_contact_url',
      'type'     => 'dropdown-pages',
    ]
  );
  
}
add_action( 'customize_register', __NAMESPACE__ . '\\customize_contact_info' );

/**
 * Post options: Show/hide post author
 */
function customize_post_display( $wp_customize ) {

  // Add a section for all post display options
  $wp_customize->add_section( 'post_display',
    [
      'title'   => __( 'Posts Display', 'blueleaf' ),
      'priority'=> 30,
    ] 
  );

  //Add settings for post display options
  $wp_customize->add_setting( 'author_display',
    [
      'url'   => '',
      'transport' => 'postMessage',
      'type' => 'option', 
      'sanitize_callback' => __NAMESPACE__ . '\\sanitize_checkbox',
    ]
  );

  //Add the input fields
  $wp_customize->add_control( 'author_dsplay_control', 
    [
      'label'     => __( 'Show post author', 'blueleaf' ),
      'section'   => 'post_display', 
      'settings'  => 'author_display',
      'type'      => 'checkbox',
    ] 
  );
}
add_action( 'customize_register', __NAMESPACE__ . '\\customize_post_display' );


/**
 * Sanitize checkboxes
 */
function sanitize_checkbox( $input ) {
  if ( $input == 1 ) {
    return 1;
  } else {
    return '';
  }
}