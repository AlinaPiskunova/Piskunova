;(function ($) {
    $(function () {

        $('.grid').isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: 10,
                gutter: 10,
                horizontalOrder: true
            }

        });
        $("a.scroll").click(function () {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px"
            }, {
                duration: 500,
                easing: "swing"
            });
            return false;
        });

        $('img').on('click', function () {
            var
                img = $(this),
                src = img.attr("src");
            $("#popup1").find('img').attr("src", src);

        });
        $('.slick-slider').slick({
            autoplay: true,
            dots: true,
            autoplaySpeed: 300
        });

    });

})(jQuery);
$(document).ready(function () {
    PopUpHide();
});

function PopUpShow() {
    $("#popup1").show();
}

function PopUpHide() {
    $("#popup1").hide();
}