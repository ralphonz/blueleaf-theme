<div class="content clearfix<?php if(!has_post_thumbnail()){ echo " no-hero"; } ?>">
  <?php if(!has_post_thumbnail() && !is_front_page() && !empty(the_field('subtitle')) ) : ?>
      <h2 class="subtitle"><?php the_field( 'subtitle' ); ?></h2>
  <?php endif ; ?>
  <?php the_content(); ?>
  <?php wp_link_pages(['before' => '<nav class="page-nav"><p>' . __('Pages:', 'blueleaf'), 'after' => '</p></nav>']); ?>
</div>
