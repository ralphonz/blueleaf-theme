<article <?php post_class(); ?>>

  <header>
    <h2><?php echo the_field( 'client' ); ?><span class="subtitle"><?php the_title(); ?></span></h2>
  </header>

  <div class="content">
    <?php the_content(); ?>
  </div>

  <footer>
    <div class="types">
      <h3><?php _e('Related Categories', 'blueleaf'); ?>: </h3>  
      <?php 
      $terms = get_the_terms( $post->ID , 'type' );
      if ($terms > 0) {
        echo '<ul class="nav">';
        foreach ( $terms as $term ) {
            $term_link = get_term_link( $term, 'type' );
            if( is_wp_error( $term_link ) )
            continue;
        echo '<li class="nav-item"><a class="btn btn-outline-grey" href="' . $term_link . '">' . $term->name . '</a></li>';
        }
        echo '</ul>';
      } 
           
      ?>
    </div>
    <?php get_template_part('templates/content', 'sharing'); ?>
    <div class="buttons">
      <a href="contact" title="contact" class="btn btn-default"><?php _e('Get A Quote', 'blueleaf'); ?></a>
      <?php $releaseurl = get_field( 'release_url'); ?>
      <?php if($releaseurl) { ?>
      <a href="<?php echo $releaseurl; ?>" title="buy" class="btn btn-dark" target="_blank"><?php _e('Buy Tracks', 'blueleaf'); ?></a>
      <?php } ?>
    </div>
  </footer>
  
</article>