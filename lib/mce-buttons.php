<?php
namespace Roots\Sage\MCE_Buttons;
/* 
 * Callback function to insert 'styleselect' into the $buttons array
 */
function mce_buttons_2( $buttons ) {
  array_unshift( $buttons, 'styleselect' );
  return $buttons;
}
/*
 * Register our callback to the appropriate filter
 */
add_filter( 'mce_buttons_2', __NAMESPACE__ . '\\mce_buttons_2' );

/*
 * Callback function to filter the MCE settings
 */
function mce_insert_formats( $init_array ) {  
  // Define the style_formats array
  $style_formats = array(  
    'title' => 'Blueleaf',
    'items' => array(
      array(  
        'title' => 'Blue Block',  
        'block' => 'div',  
        'classes' => 'section--blue',
        'wrapper' => true,
      ),
      array(  
        'title' => 'Content Group',  
        'block' => 'div',  
        'classes' => 'content--group',
        'wrapper' => true,
      ),
      array(  
        'title' => 'Tab Group',  
        'block' => 'div',  
        'classes' => 'tab--group',
        'wrapper' => true,
      ),
      array(  
        'title' => 'Tab',  
        'block' => 'div',  
        'classes' => 'tab',
        'wrapper' => true,
        'exact' => true,
      ),
      array(
        'title' => 'h3 large',
        'selector' => 'h3',
        'classes' => 'large-heading'
      ),
      array(
        'title' => 'h3 small',
        'selector' => 'h3',
        'classes' => 'small-heading'
      ),
      array(
        'title' => 'p big',
        'selector' => 'p',
        'classes' => 'large-paragraph'
      ),
      array(
        'title' => 'Mobile Center',
        'selector' => 'p',
        'classes' => 'mobile-center'
      ),
      array(
        'title' => 'Link Button',
        'selector' => 'a',
        'classes' => 'btn btn-default'
      ),
      array(
        'title' => 'Link Button Dark',
        'selector' => 'a',
        'classes' => 'btn btn-dark'
      ),
      array(
        'title' => 'Link Button Outline',
        'selector' => 'a',
        'classes' => 'btn btn-outline'
      ),

    )
  );
  // Merge the custom classes with the existing menu
  $init_array['style_formats_merge'] = true;
  // Insert the array, JSON ENCODED, into 'style_formats'
  $init_array['style_formats'] = json_encode( $style_formats );
  
  return $init_array;  
  
} 
/*
 * Attach callback to 'tiny_mce_before_init' 
 */
add_filter( 'tiny_mce_before_init', __NAMESPACE__ . '\\mce_insert_formats' );

/*
 * Change the inline style applied to paragraphs to use classes instead
 */
function make_mce_awesome( $init ) {

    // decode
    $formats = preg_replace( '/(\w+)\s{0,1}:/', '"\1":', str_replace(array("\r\n", "\r", "\n", "\t"), "", $init['formats'] ));
    $formats = json_decode( $formats, true );

    // set correct values
    $formats['alignleft'][0]['classes'] = 'text-left-not-sm';
    $formats['aligncenter'][0]['classes'] = 'text-center';
    $formats['alignright'][0]['classes'] = 'text-right-not-sm';

    // remove inline styles
    unset( $formats['alignleft'][0]['styles'] );
    unset( $formats['aligncenter'][0]['styles'] );
    unset( $formats['alignright'][0]['styles'] );

    // encode and replace
    $init['formats'] = json_encode( $formats );

    //remove h1 from the list - using it in the editor is an SEO nightmare!
    $init['block_formats'] = 'Paragraph=p;Heading 2=h2;Heading 3=h3;Heading 4=h4';

    return $init;
}
add_filter( 'tiny_mce_before_init', __NAMESPACE__ . '\\make_mce_awesome' );