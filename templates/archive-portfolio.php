<article <?php post_class('bl-full-page'); ?> data-anchor="<?php echo $post->post_name; ?>" data-tooltip="<?php the_title(); ?>">

  <header>
    <h2><?php echo the_field( 'client' ); ?> <span class="subtitle"><?php the_title(); ?></span></h2>
    <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="btn-outline-grey"><?php _e('Project Details', 'blueleaf'); ?></a>
    <time class="published" datetime="<?= get_post_time('c', true); ?>"><?= get_the_date(); ?></time>
  </header>

  <div class="content">
    <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="project-thumb"><?php the_post_thumbnail('full'); ?></a>
  </div>

  <footer>
    <?php

      $media = get_field('featured_track'); //add ACF
      $terms = get_the_terms( $post->ID, 'style' );

    ?>

    <h3 class="audio-track-title"><?php echo $media['title']; ?> <span class="genres">
      <?php if ( $terms && ! is_wp_error( $terms ) ) { ?>
        <span class="genre-sep">-</span><?php foreach ($terms as $genre) { ?>
        <a href="<?php echo get_term_link($genre->term_id); ?>"><?php echo $genre->name; ?></a>,
      <?php } ?>
    <?php } ?></span></h3>

    <?php echo do_shortcode('[audio src="'.$media['url'].'"]'); ?>

  </footer>

</article>
