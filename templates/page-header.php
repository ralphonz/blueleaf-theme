<?php use Roots\Sage\Titles; ?>

<div class="page-header">
  <h1>
    <?php if ( is_singular('portfolio') ) { ?>
      <i class="fa fa-folder-open"></i>
    <?php } elseif ( function_exists( 'the_icon' ) && !is_post_type_archive('portfolio') ) {
      the_icon();
    } ?>
    <?= Titles\title(); ?>
    <?php if ( is_singular('portfolio') ) : ?>
      <a class="btn btn-outline-grey" href="/portfolio" title="<?php _e('back to portfolio', 'blueleaf'); ?>"><?php _e('back to portfolio', 'blueleaf'); ?></a>
    <?php endif; ?>
  </h1>
  <?php if ( has_post_thumbnail() && is_page() ) : ?>
    <div class="hero jarallax" data-jarallax data-speed="0.5" >
      <?php the_post_thumbnail('full', ['class'=>'hero-image jarallax-img']); ?>
      <?php if(!is_front_page() && get_field( 'subtitle' )) { ?>
        <h2 class="subtitle"><?php the_field( 'subtitle' ); ?></h2>
      <?php } ?>
    </div>
  <?php endif; ?>
</div>
