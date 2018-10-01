(function ($) {
$(document).ready(function(){
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
            $(".navbar").hide();
            } else {
                $('.navbar').fadeIn();
            }
        });
    });
});
}(jQuery));