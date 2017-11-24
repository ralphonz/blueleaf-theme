<?php $contact_page_url = get_permalink(get_option('quick_contact_url')); ?>

<header class="banner navbar navbar-default navbar-static-top" role="banner">
  <div class="container">
    <div class="navbar-header">
      <?php if (!is_front_page()) { ?>
        <button type="button" class="navbar-toggle collapsed fa fa-bars" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only"><?= __('Toggle navigation', 'blueleaf'); ?></span>
        </button>
      <?php } ?>
      <a class="navbar-brand brand" href="<?= esc_url(home_url('/')); ?>" title="<?php bloginfo('name'); ?>"><?php echo file_get_contents(get_template_directory_uri()."/dist/images/logo.svg"); ?></a>
    </div>
    <?php if (!is_front_page()) { ?>
      <nav class="collapse navbar-collapse" role="navigation">
        <?php
        if (has_nav_menu('primary_navigation')) :
          wp_nav_menu([
            'theme_location' => 'primary_navigation', 
            'walker' => new wp_bootstrap_navwalker(), 
            'menu_class' => 'nav navbar-nav'
          ]);
        endif;
        ?>
      </nav>
      <a class="fa fa-envelope-o mobile-contact-link" href="<?= $contact_page_url ?>" aria-hidden="true"><span class="sr-only"><?= __('Contact Now', 'blueleaf'); ?></span></a>
    <?php } ?>
    <?php if (is_front_page()) { ?>
    <a class="btn btn-outline" href="<?= $contact_page_url ?>"><?php _e('Hire Me', 'blueleaf'); ?></a>
    <?php } ?>
  </div>
</header>
