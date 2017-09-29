<div class="content">
  <?php the_content(); ?>
  <?php wp_link_pages(['before' => '<nav class="page-nav"><p>' . __('Pages:', 'blueleaf'), 'after' => '</p></nav>']); ?>
</div>
