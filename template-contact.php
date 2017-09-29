<?php
/**
 * Template Name: Contact Page
 */
?>

<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/page', 'header'); ?>
  <?php get_template_part('templates/content', 'page'); ?>
  <?php get_template_part('templates/content', 'contact'); ?>
  <?php get_template_part('templates/content', 'map'); ?>
  <?php get_template_part('templates/content', 'ninjaform'); ?>
<?php endwhile; ?>
