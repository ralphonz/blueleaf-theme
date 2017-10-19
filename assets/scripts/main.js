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
        $('.show-map').click(function(){
          $('.map').slideToggle();
        });

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
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
        // var offset = $(window).width() / 20;
        // var accum = 0;
        // var i = 0;

        // $('.tab').each(function(){
        //     accum += $(this).prev('.tab').find('h2').outerWidth();
        //     var margin = 0;
        //     if (i !== 0) {
        //       margin = accum - offset*i - 15*i;
        //     } else {
        //       margin = accum;
        //     }
        //     $('h2', this).css("margin-left", margin);
        //     i++;
        // });
        // $('.tab h2').click(function(){
        //   console.log("clicked!");
        //   $(this).parent().css("z-index", 1);
        // });

      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    },
    //Portfolio archive pages
    'portfolio_archive': {
      init: function() {
        var container = $('#bl-full-page');

        //fullPage JS only on larger screens
        if (windowWidth > 768) {
          if( container.length ) {
            container.fullpage({
              sectionSelector: '.portfolio',
              navigation: true
            });
          }
        }

        if($('.pagination .next').length > 0) {
          container.infiniteScroll({
            // options
            path: '.pagination .next',
            append: '.portfolio',
            hideNav: '.pagination',
            status: '.page-load-status'
          });
        } else {
          $('.page-load-status').hide();
        }

        container.on('append.infiniteScroll', function(event, response, path, items){
            $('audio').mediaelementplayer();
            if ( $( 'html' ).hasClass( 'fp-enabled' )) {
              $.fn.fullpage.destroy('all');
              container.fullpage({
                sectionSelector: '.portfolio',
                navigation: true
              });
            }
        })
        container.on( 'last.infiniteScroll', function( event, response, path ) {
          $('.post-end').show();
        });
      }
    },
    // Blog index page 
    'post_archive': {
      init: function() {

        if($('.nav-links .nav-previous a').length > 0) {
          var container = $('.posts');
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
