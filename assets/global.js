(function ($) {
  $(function () {
    //document.ready
    //DOM READY code here
      $(".header-search, .input__close-icon").click(function(){
          $(".header-search-area-wrapper").toggle().toggleClass('active');
      });

  });

    jQuery(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      center: true,
      items: 1,
      nav: true,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
    });

  //Functions, Plugins, Etc.. Here
  //(does not wait for DOM READY STATE)
})(jQuery);
