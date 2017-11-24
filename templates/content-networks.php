<div class="social-networks">
  <?php //options
  $fb = get_option('facebook_url');
  $tw = get_option('twitter_url');
  $gl = get_option('google_url');
  $li = get_option('linkedin_url');
  $pt = get_option('pinterest_url');
  $ig = get_option('instagram_url');
  ?>
  <?php if(!empty($fb)) : ?>
    <a href="<?php echo $fb; ?>" class="social-icon facebook-icon" target="_blank"><span class="fa fa-facebook"></span><span class="screen-reader-text">Facebook</span></a>
  <?php endif;
   if(!empty($tw)) : ?>
    <a href="<?php echo $tw; ?>" class="social-icon twitter-icon" target="_blank"><span class="fa fa-twitter"></span><span class="screen-reader-text">Twitter</span></a>
  <?php endif;
   if(!empty($gl)) : ?>
    <a href="<?php echo $gl; ?>" class="social-icon google-icon" target="_blank"><span class="fa fa-google"></span><span class="screen-reader-text">Google</span></a>
  <?php endif;
   if(!empty($li)) : ?>
    <a href="<?php echo $li; ?>" class="social-icon linkedin-icon" target="_blank"><span class="fa fa-linkedin"></span><span class="screen-reader-text">LinkedIn</span></a>
  <?php endif;
   if(!empty($pt)) : ?>
    <a href="<?php echo $pt; ?>" class="social-icon pinterest-icon" target="_blank"><span class="fa fa-pinterest-p"></span><span class="screen-reader-text">Pinterest</span></a>
  <?php endif;
   if(!empty($ig)) : ?>
    <a href="<?php echo $ig; ?>" class="social-icon instagram-icon" target="_blank"><span class="fa fa-instagram"></span><span class="screen-reader-text">Instagram</span></a>
  <?php endif; ?>
</div>