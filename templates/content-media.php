<?php use Roots\Sage\Extras; ?>
<div class="media-container">
  <?php if ( get_post_gallery() ) : ?>
    <div class="project-media portfolio-slide-gallery">
      <?php echo get_post_gallery(); ?>
      <i class="fa fa-arrow-circle-right next-slide"></i>
      <i class="fa fa-arrow-circle-left prev-slide"></i>
    </div>
  <?php endif; ?>

  <h2 class="project-title"> <?php the_title(); ?></h2>

  <?php if ( Extras\get_post_playlist($post) ) : ?>
    <div class="project-media portfolio-playlist"> 
      <?php echo Extras\get_post_playlist($post, true); ?>
    </div>
  <?php endif; ?>
  <div class="project-meta">
    <div class="project-styles">
      <?php 
      $genres = get_terms( 'style' );

      foreach ($genres as $genre) { ?>
        <a class="btn btn-outline-grey" href="<?php echo get_term_link($genre->term_id); ?>"><?php echo $genre->name; ?></a>
      <?php } ?>

    </div>
    <div class="project-attributes">
      <?php 
      $atts = get_terms( 'attribute' );

      foreach ($atts as $att) {
        $icon = get_term_meta( $att->term_id, 'icon', true ); ?>
        <a href="<?php echo get_term_link($att->term_id); ?>" title="<?php echo $att->name; ?>"><i class="fa <?php echo $icon; ?>"></i><span class="screen-reader-text"><?php echo $att->name; ?></span></a>
      <?php } ?>
    </div>
  </div>
</div>