<time class="updated" datetime="<?= get_post_time('c', true); ?>"><?= get_the_date(); ?></time>
<?php if (get_option('author_display') == 1) : ?>
  <p class="byline author vcard"><?= __('By', 'blueleaf'); ?> <a href="<?= get_author_posts_url(get_the_author_meta('ID')); ?>" rel="author" class="fn"><?= get_the_author(); ?></a></p>
<?php endif; ?>
