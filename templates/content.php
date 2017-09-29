<article <?php post_class(); ?>>
  <header>
    <h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
    <?php get_template_part('templates/entry-meta'); ?>
  </header>
  <div class="entry-summary">
    <?php if(has_post_thumbnail()) { the_post_thumbnail('full', ['class' => 'featured-image', 'title' => get_the_title() ] ); } ?>
    <?php the_excerpt(); ?>
  </div>
</article>
