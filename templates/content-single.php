<?php while (have_posts()) : the_post(); ?>
  <?php if ( has_post_thumbnail() ) : ?>
    <div class="hero <?php if (!is_front_page()) { echo 'jarallax" data-jarallax data-speed="0.5" class="jarallax"'; } else { echo '"';} ?> >
      <?php the_post_thumbnail('full', ['class'=>'hero-image jarallax-img']); ?>
    </div>
  <?php endif; ?>
  <article <?php post_class(); ?>>
    <header>
      <h1 class="entry-title"><?php the_title(); ?></h1>
      <?php get_template_part('templates/entry-meta'); ?>
    </header>
    <div class="entry-content">
      <?php the_content(); ?>
    </div>
    <footer>
      <?php wp_link_pages(['before' => '<nav class="page-nav"><p>' . __('Pages:', 'blueleaf'), 'after' => '</p></nav>']); ?>
      
      <?php if(has_tag()) : ?>
        <div class="tags">
          <?php the_tags(); ?>
        </div>
      <?php endif; ?>

      <?php if(has_category()) : ?>
        <div class="categories">
          <?php _e('Related Categories', 'blueleaf'); ?>: 
          <?php the_category() ?>
        </div>
      <?php endif; ?>

      <nav class="post-nav nav"><?php next_post_link('%link', '<i class="fa fa-arrow-left"></i> previous post', false); ?><?php previous_post_link('%link', 'next post <i class="fa fa-arrow-right"></i>', false); ?></nav>
    </footer>
    <?php comments_template('/templates/comments.php'); ?>
  </article>
<?php endwhile; ?>
