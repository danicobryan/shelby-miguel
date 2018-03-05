(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


  let originalBackgroundColor = "black";
  let originalOpacity = "0";
  $(".image-link").hover(function(){
    originalOpacity = $(".image-link > .overlay").css("background-color");
    originalOpacity = $(".image-link > .overlay").css("opacity");
    $(this).children(".overlay").css("background-color", "pink").css("opacity", "0.8");
    $(this).click(function() {
      $(this).children(".overlay").css("background-color", originalBackgroundColor).css("opacity", originalOpacity);
    });
    }, function(){
    $(this).children(".overlay").css("background-color", originalBackgroundColor).css("opacity", originalOpacity);
  });

})(jQuery); // End of use strict
