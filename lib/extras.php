<?php

namespace Roots\Sage\Extras;

use Roots\Sage\Setup;

/**
 * Add <body> classes
 * @param array $classes
 * @return array $classes
 */
function body_class($classes) {
  // Add page slug if it doesn't exist
  if (is_single() || is_page() && !is_front_page()) {
    if (!in_array(basename(get_permalink()), $classes)) {
      $classes[] = basename(get_permalink());
    }
  }

  // Add class if sidebar is active
  if (Setup\display_sidebar()) {
    $classes[] = 'sidebar-primary';
  }

  //Add {post_type}-archive class - for example, portfolio-archive if post type is portfolio and its an archive
  if (is_archive()) {
    global $post;
    $classes[] = $post->post_type . '-archive';
  }

  return $classes;
}
add_filter('body_class', __NAMESPACE__ . '\\body_class');

/**
 * Clean up the_excerpt()
 */
function excerpt_more() {
  return ' <a class="btn btn-dark" href="' . get_permalink() . '">' . __('Read more', 'blueleaf') . '&hellip;</a>';
}
add_filter('excerpt_more', __NAMESPACE__ . '\\excerpt_more');

current_theme_supports('root-relative-urls');

//* Changing excerpt more - only works where excerpt IS hand-crafted
function manual_excerpt_more( $excerpt ) {
  $excerpt_more = '';
  if( has_excerpt() ) {
      $excerpt_more = '&nbsp;<a class="btn btn-dark" href="' . get_permalink() . '">' . __('Read more', 'blueleaf') . '&hellip;</a>';
  }
  return $excerpt . $excerpt_more;
}
add_filter( 'get_the_excerpt', __NAMESPACE__ . '\\manual_excerpt_more' );

/**
 * Remove the first [gallery] shortcode from the_content of static front page's main query.
 *
 * Returns early wherever possible.
 * This is intentionally written to be very overly ridiculously verbose, for ease of study.
 * This function is fired on the_content filter, with a priority of 10.
 * Be aware that if it were to fire later, say priority 11, do_shortcode would have already run, and the shortcode
 * we are looking to remove would no longer be in the $content string.
 *
 * @filter the_content priority 10
 *
 * @link   https://pippinsplugins.com/playing-nice-with-the-content-filter/
 * @link   https://developer.wordpress.org/reference/functions/is_main_query/
 * @link   https://developer.wordpress.org/reference/functions/is_front_page/
 * @link   https://developer.wordpress.org/reference/functions/is_home/
 * @link   https://codex.wordpress.org/Function_Reference/is_home#Blog_Posts_Index_vs._Site_Front_Page
 * @link   http://php.net/manual/en/function.strpos.php
 * @link   https://developer.wordpress.org/reference/functions/get_shortcode_regex/
 * @link   http://php.net/manual/en/function.preg-match-all.php
 * @link   http://php.net/manual/en/function.array-search.php
 * @link   http://php.net/manual/en/function.str-replace.php
 * @link   https://github.com/WordPress/WordPress/blob/4.3-branch/wp-includes/default-filters.php#L388
 *
 * @param string $content Content of the current post.
 *
 * @return  string
 */
function remove_first_shortcode( $content = null , $string = '') {
  /**
   * If there's no content, return early. Presumably the content would never be empty, but it's better to be safe than
   * make assumptions and throw warnings and errors later.
   */
  if ( empty( $content ) ) {
    return $content;
  }
  /**
   * If this is not the main query, return early.
   */
  if ( ! is_main_query() ) {
    return $content;
  }
  /**
   * If this is not a single portfolio page, return early.
   */
  if ( ! is_singular( 'portfolio' ) ) {
    return $content;
  }

  /**
   * Locate position of the string '[gallery' relative to the beginning of the content string.
   *
   * Note that string positions start at 0, and not 1. Returns FALSE if '[gallery' needle was not found.
   * Use strict === equality to evaluate position (in case position was found at 0). This is a faster "check" than
   * preg_match, which is why I'm calling it before we ever get to preg_match. We want to avoid heavy processing
   * wherever possible, and return early wherever possible, so we do not have a detrimental impact on performance.
   * If we didn't find the position of '[gallery' then the shortcode is not in the content, and we can return early,
   * avoiding further, unnecessary processing.
   *
   * @var bool|int $position
   */
  $position = strpos( $content, '['.$string );
  /**
   * If there's no gallery position in content, return early.
   */
  if ( false === $position ) {
    return $content;
  }
  /**
   * Get the shortcode search regular expression pattern.
   *
   * @var string $shortcode_regex
   */
  $shortcode_regex = get_shortcode_regex();
  /**
   * If there's no shortcode regular expression pattern, return early. I can't imagine this ever being empty, but it's
   * better to be safe than make assumptions and throw warnings and errors later.
   */
  if ( empty( $shortcode_regex ) ) {
    return $content;
  }
  
  preg_match_all( '/' . $shortcode_regex . '/s', $content, $matches );
  /**
   * Matches[2] is empty, return early.
   */
  if ( empty( $matches[2] ) ) {
    return $content;
  }
  /**
   * Find the first occurrence of the string 'gallery' in the $matches[2] array.
   *
   * @var int $key
   */
  $gallery_key = array_search( $string, $matches[2] );
  /**
   * The array search did not locate the string 'gallery', return early.
   * Theoretically this shouldn't happen, based on the checks we had earlier, but better to be safe than make
   * assumptions and throw errors and warnings.
   */
  if ( false === $gallery_key ) {
    return $content;
  }
  /**
   * Find the first gallery shortcode string in the $matches[0] array, that corresponds to the $gallery_key found by
   * array_search.
   *
   * @var string $first_gallery_shortcode
   */
  $first_gallery_shortcode = $matches[0][ $gallery_key ];
  /**
   * Amazingly, we don't have a matching shortcode string, return early.
   * Theoretically this shouldn't happen, based on the checks we had earlier, but better to be safe than make
   * assumptions and throw errors and warnings.
   */
  if ( empty( $first_gallery_shortcode ) ) {
    return $content;
  }
  /**
   * We have the very first gallery shortcode from the content, strip it out, because we already displayed it in the
   * front-page.php template, outside of the content.
   */
  $content = str_replace( $first_gallery_shortcode, '', $content );
  return $content;
}

$gallery = 'gallery';
$playlist = 'playlist';

add_filter( 'the_content', function( $content ) use ( $gallery ) {
        return remove_first_shortcode( $content, $gallery );
    }, 10 );

add_filter( 'the_content', function( $content ) use ( $playlist ) {
        return remove_first_shortcode( $content, $playlist );
    }, 10 );


/**
 * Get post playlists
 *
 */

function get_post_playlists( $post, $html = true ) {
    if ( ! has_shortcode( $post->post_content, 'playlist' ) )
        return array();

    $playlists = array();
    if ( preg_match_all( '/' . get_shortcode_regex() . '/s', $post->post_content, $matches, PREG_SET_ORDER ) ) {
        foreach ( $matches as $shortcode ) {
            if ( 'playlist' === $shortcode[2] ) {
                $ids = array();

                $shortcode_attrs = shortcode_parse_atts( $shortcode[3] );
                if ( ! is_array( $shortcode_attrs ) ) {
                    $shortcode_attrs = array();
                }

                // Specify the post id of the playlist we're viewing if the shortcode doesn't reference another post already.
                if ( ! isset( $shortcode_attrs['id'] ) ) {
                    $shortcode[3] .= ' id="' . intval( $post->ID ) . '"';
                }

                $playlist = do_shortcode_tag( $shortcode );
                if ( $html ) {
                    $playlists[] = $playlist;
                } else {
                    preg_match_all( '#ids=([\'"])(.+?)\1#is', $playlist, $ids, PREG_SET_ORDER );
                    if ( ! empty( $ids ) ) {
                        foreach ( $ids as $id ) {
                            $ids[] = $id[2];
                        }
                    }

                    $playlists[] = array_merge(
                        $shortcode_attrs,
                        array(
                            'ids' => array_values( array_unique( $ids ) )
                        )
                    );
                }
            }
        }
    }
    return $playlists;
}

function get_post_playlist( $post = 0, $html = true ) {
    $playlists = get_post_playlists( $post, $html );
    $playlist = reset( $playlists );
 
    /**
     * Filters the first-found post gallery.
     *
     * @since 3.6.0
     *
     * @param array       $gallery   The first-found post gallery.
     * @param int|WP_Post $post      Post ID or object.
     * @param array       $galleries Associative array of all found post galleries.
     */
    return apply_filters( 'get_post_playlist', $playlist, $post, $playlists );
}

function set_posts_per_page_for_towns_cpt( $query ) {
  if ( !is_admin() && $query->is_main_query() && is_post_type_archive( 'portfolio' ) ) {
    $query->set( 'posts_per_page', '2' );
  }
}
add_action( 'pre_get_posts',  __NAMESPACE__ . '\\set_posts_per_page_for_towns_cpt' );



function portfolio_tax_template( $template = '' ) {

 if (is_tax('attribute') || is_tax('style') || is_tax('type') ) {
   $template = locate_template( 'bl-portfolio/archive-portfolio.php' );
 }

 return $template;

}
add_filter( 'taxonomy_template', __NAMESPACE__ . '\\portfolio_tax_template' ); 