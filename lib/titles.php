<?php

namespace Roots\Sage\Titles;

add_filter('get_the_archive_title', __NAMESPACE__ . '\\filter_archive_title');

function filter_archive_title($title) {
  // return $title;
  // Skip if the site isn't LTR, this is visual, not functional.
  // Should try to work out an elegant solution that works for both directions.
  if ( is_rtl() ) {
    return $title;
  }
  // Split the title into parts so we can wrap them with spans.
  $title_parts = explode( ': ', $title, 2 );
  // Glue it back together again.
  if ( ! empty( $title_parts[1] ) ) {
    $title = wp_kses(
      $title_parts[1],
      array(
        'span' => array(
          'class' => array(),
        ),
      )
    );
    $title = '<span class="screen-reader-text">' . esc_html( $title_parts[0] ) . ': </span><i class="fa fa-folder-open"></i> ' . $title;
  }
  return $title;
}

/**
 * Page titles
 */
function title() {
  if (is_home()) {
    if (get_option('page_for_posts', true)) {
      return get_the_title(get_option('page_for_posts', true));
    } else {
      return __('Latest Posts', 'blueleaf');
    }
  } elseif (is_archive()) {
    return get_the_archive_title();
  } elseif (is_search()) {
    return sprintf(__('Search Results for %s', 'blueleaf'), get_search_query());
  } elseif (is_404()) {
    return __('Not Found', 'blueleaf');
  } else {
    return get_the_title();
  }
}
