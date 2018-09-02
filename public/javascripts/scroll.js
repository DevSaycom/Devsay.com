(function ($) {
  $(document).ready(function(){

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

        // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 200) {
              $(".navbar").hide();
            } else {
                $('.navbar').fadeIn();
            }
        });
    });

});
  }(jQuery));