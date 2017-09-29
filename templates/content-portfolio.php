<article <?php post_class(); ?>>

  <header>
    <h2><?php echo the_field( 'client' ); ?><span class="subtitle"><?php the_title(); ?></span></h2>
  </header>

  <div class="content">
    <?php the_content(); ?>
  </div>

  <footer>
    <div class="types">
      <?php _e('Related Categories', 'blueleaf');  
      echo ': ';
      $terms = get_the_terms( $post->ID , 'type' );
      if ($terms > 0) {
        echo '<ul>';
        foreach ( $terms as $term ) {
            $term_link = get_term_link( $term, 'type' );
            if( is_wp_error( $term_link ) )
            continue;
        echo '<li><a href="' . $term_link . '">' . $term->name . '</a></li>';
        }
        echo '</ul>';
      } 
           
      ?>
    </div>
    <?php get_template_part('templates/content', 'sharing'); ?>
    <div class="buttons">
      <a href="contact" title="contact" class="btn btn-default"><?php _e('Get A Quote', 'bl-portfolio'); ?></a>
      <a href="buy" title="buy" class="btn btn-dark"><?php _e('Buy Tracks', 'bl-portfolio'); ?></a>
    </div>
  </footer>
  
</article>