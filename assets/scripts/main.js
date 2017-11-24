/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  var windowWidth = $(window).width();

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages
        $('.portfolio-slide-gallery .gallery').slick({
          nextArrow: '.next-slide',
          prevArrow: '.prev-slide'
        });

      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'contact': {
      init: function() {
        // JavaScript to be fired on the contact page
        $('.show-map').click(function(){
          $('.map').slideToggle();
        });
      },
      finalize: function() {

      }
    },
    //Portfolio archive pages
    'portfolio_archive': {
      init: function() {
        var container = $('#bl-full-page');

        if($('.pagination .next').length > 0) {
          container.infiniteScroll({
            // options
            path: '.pagination .next',
            append: '.portfolio',
            hideNav: '.pagination',
            status: '.page-load-status',
            debug: true,
          });
        } else {
          $('.page-load-status').hide();
        }

        //fullPage JS only on larger screens
        if (windowWidth > 768) {
          if( container.length ) {
            container.fullpage({
              sectionSelector: '.portfolio',
              navigation: true,
              afterLoad: function(anchorLink, index){
              // Section indexes in fullpage start at 1
                if(index === $('#bl-full-page .portfolio').length){
                  container.infiniteScroll('loadNextPage');
                }
              }
            });
          }
        }

        container.on('append.infiniteScroll', function(event, response, path, items){
            $('audio').mediaelementplayer();

            if ( $( 'html' ).hasClass( 'fp-enabled' )) {

              //remembering the active section / slide
              var activeSectionIndex = $('.fp-section.active').index();
              var activeSlideIndex = $('.fp-section.active').find('.slide.active').index();

              $.fn.fullpage.destroy('all');

              //setting the active section as before
              $('.portfolio').eq(activeSectionIndex).addClass('active');
              container.fullpage({
                sectionSelector: '.portfolio',
                navigation: true,
                // autoScrolling:false
              });

            }
            // $.fn.fullpage.silentMoveTo('wonky-bonk-street')
        });
        container.on( 'last.infiniteScroll', function( event, response, path ) {
          $('.post-end').show();
        });
      }
    },
    // Blog index page 
    'blog': {
      init: function() {
        var container = $('.posts');

        if($('.nav-links .nav-previous a').length > 0) {
          container.infiniteScroll({
            // options
            path: '.nav-links .nav-previous a',
            append: '.post',
            hideNav: '.nav-links',
            status: '.page-load-status'
          });
        } else {
          $('.page-load-status').hide();
        }

        container.on( 'last.infiniteScroll', function( event, response, path ) {
          $('.post-end').show();
        });
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
