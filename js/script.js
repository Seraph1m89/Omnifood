$(document).ready(function() {

  // Sticky navigation
  $(".js--section-features").waypoint(function(direction) {
      if(direction === "down") {
          $("nav").addClass("sticky");
      } else {
          $("nav").removeClass("sticky");
      }
  }, {
      offset: "60px"
  });

  // $(".js--scroll-to-plans").on("click", function() {
  //     $("html, body").animate({scrollTop: $(".js--section-plans").offset().top}, 1000);
  // });

  // $(".js--scroll-to-start").on("click", function() {
  //     $("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 500);
  // });

  // Smooth scrolling
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  $(".js--wp-1").waypoint(function(direction) {
      $(".js--wp-1").addClass("animated fadeIn");
  }, {
    offset: "60%"
  });

  $(".js--wp-2").waypoint(function(direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
  }, {
    offset: "60%"
  });

  $(".js--wp-3").waypoint(function(direction) {
      $(".js--wp-3").addClass("animated fadeIn");
  }, {
    offset: "60%"
  });

  $(".js--wp-4").waypoint(function(direction) {
      $(".js--wp-4").addClass("animated pulse");
  }, {
    offset: "60%"
  });

  $(".js--mobile-nav-icon").click(function() {
    var nav = $(".js--main-nav");
    var icon = $(this).find("i");
    var dlalsd = icon.hasClass("ion-navicon-round");
    nav.slideToggle(200);
    icon.toggleClass("ion-navicon-round");
    icon.toggleClass("ion-close-round");
  });
  
  var map = new GMaps({
    div: '.map',
    lat: 38.7222524,
    lng: -9.05,
    zoom: 12
  });


  map.addMarker({
    lat: 38.7222524,
    lng: -9.1393366,
    title: 'Lisbon',
    click: function(e) {
      alert('You clicked in this marker');
    }
  });
});