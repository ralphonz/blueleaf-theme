<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/page', 'header'); ?>
  <?php get_template_part('templates/content', 'media'); ?>
  <?php get_template_part('templates/content', 'portfolio'); ?> 
<?php endwhile; ?>