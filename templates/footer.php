<footer class="footer">
  <div class="container-fluid">
    <?php get_template_part('templates/content', 'networks'); ?>
    <nav class="" role="navigation">
      <?php
      if (has_nav_menu('footer_navigation')) :
        wp_nav_menu([
          'theme_location' => 'footer_navigation', 
          'walker' => new wp_bootstrap_navwalker(), 
          'menu_class' => 'nav footer-nav'
        ]);
      endif;
      ?>
    </nav>
    <?php dynamic_sidebar('sidebar-footer'); ?>
    <p class="copyright">&copy; <?php _e('Copyright', 'blueleaf');?> <a href="https://blueleafstudio.net">Blueleaf Studio</a> <?php echo date("Y"); ?></p>
  </div>
</footer>
