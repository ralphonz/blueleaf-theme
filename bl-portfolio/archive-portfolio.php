<?php get_template_part('templates/page', 'header'); ?>
<div id="bl-full-page">
  <?php while (have_posts()) : the_post(); ?>
    <?php get_template_part('templates/archive', 'portfolio'); ?>
  <?php endwhile; ?>
</div>
<div class="pagination">
  <?php echo paginate_links(); ?>
</div>
<div class="page-load-status">
    <div class="sk-fading-circle">
      <div class="sk-circle1 sk-circle"></div>
      <div class="sk-circle2 sk-circle"></div>
      <div class="sk-circle3 sk-circle"></div>
      <div class="sk-circle4 sk-circle"></div>
      <div class="sk-circle5 sk-circle"></div>
      <div class="sk-circle6 sk-circle"></div>
      <div class="sk-circle7 sk-circle"></div>
      <div class="sk-circle8 sk-circle"></div>
      <div class="sk-circle9 sk-circle"></div>
      <div class="sk-circle10 sk-circle"></div>
      <div class="sk-circle11 sk-circle"></div>
      <div class="sk-circle12 sk-circle"></div>
    </div>
    <p><?php _e('Loading', 'blueleaf'); ?>...</p>
</div>
 <div class="post-end"><?php _e('There are no more posts'); ?></div>