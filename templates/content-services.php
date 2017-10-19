<div class="services">
  <div class="service service-1">
    <a class="service-heading-link" href="<?php the_field('service_1_link'); ?>"><h2 class="service-heading"><?php the_field('service_1_name'); ?></h2></a>
    <div class="service-content">
      <h3><i class="fa <?php the_field('service_1_icon'); ?>"></i><?php the_field('service_1_title'); ?></h3>
      <?php the_field('service_1_content'); ?>
      <a href="<?php the_field('service_1_link'); ?>" class="btn btn-outline service-read-more"><?php _e('Read More', 'blueleaf'); ?></a>
      <div class="buttons">
        <a href="<?php the_field('portfolio_link'); ?>" class="btn btn-rev btn-outline"><?php _e('Portfolio', 'blueleaf'); ?></a>
        <a href="<?php the_field('contact_link'); ?>" class="btn btn-rev btn-outline"><?php _e('Get Quote', 'blueleaf'); ?></a>
      </div>
    </div>
  </div>
  <div class="service service-2">
    <a href="<?php the_field('service_1_link'); ?>"><h2 class="service-heading"><?php the_field('service_2_name'); ?></h2></a>
    <div class="service-content">
      <h3><i class="fa <?php the_field('service_2_icon'); ?>"></i><?php the_field('service_2_title'); ?></h3>
      <?php the_field('service_2_content'); ?>
      <a href="<?php the_field('service_2_link'); ?>" class="btn btn-outline service-read-more"><?php _e('Read More', 'blueleaf'); ?></a>
      <div class="buttons">
        <a href="<?php the_field('portfolio_link'); ?>" class="btn btn-rev btn-outline"><?php _e('Portfolio', 'blueleaf'); ?></a>
        <a href="<?php the_field('contact_link'); ?>" class="btn btn-rev btn-outline"><?php _e('Get Quote', 'blueleaf'); ?></a>
      </div>
    </div>
  </div>
  <div class="service service-3">
    <a href="<?php the_field('service_1_link'); ?>"><h2 class="service-heading"><?php the_field('service_3_name'); ?></h2></a>
    <div class="service-content">
      <h3><i class="fa <?php the_field('service_3_icon'); ?>"></i><?php the_field('service_3_title'); ?></h3>
      <?php the_field('service_3_content'); ?>
      <a href="<?php the_field('service_3_link'); ?>" class="btn btn-outline service-read-more"><?php _e('Read More', 'blueleaf'); ?></a>
      <div class="buttons">
        <a href="<?php the_field('portfolio_link'); ?>" class="btn btn-rev btn-rev btn-outline"><?php _e('Portfolio', 'blueleaf'); ?></a>
        <a href="<?php the_field('contact_link'); ?>" class="btn btn-rev btn-outline"><?php _e('Get Quote', 'blueleaf'); ?></a>
      </div>
    </div>
  </div>
</div>