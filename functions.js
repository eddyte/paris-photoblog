/**
 * Theme functions file.
 */
(function($) {
  "use strict";

  $(document).ready(function($){

    var $body = $('body');
 
    
    // Navigation toggle buttons
    $('.nav-toggle').on( 'click', function() {
      $body.toggleClass('nav-open');
    });
    
    
    // Primary Navigation
    var $navMenu = $('.primary-navigation .nav-menu');
    
    if( $navMenu.length ) {
      $navMenu.children('li').addClass('menu-item-parent');
      
	  
      $navMenu.find('.menu-item-has-children > a').after('<i class="fa fa-angle-down hchildren" aria-hidden="true"></i>');
	  $navMenu.find('.hchildren').on( 'click', function(e) {
        //e.preventDefault();
        var item = $(this),
            itemSub = item.next('.sub-menu'),
            parentSubs = item.closest('.menu-item-parent').find('.sub-menu');
        
        $navMenu.find('.sub-menu').not(parentSubs).slideUp(250);
        itemSub.slideToggle(250);
      }); 
    }
    
    
  });
  
})(jQuery);

