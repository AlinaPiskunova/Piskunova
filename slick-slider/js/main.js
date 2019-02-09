;(function ($) {
    $(function () {
        $('.slick-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });


    $('li').click(function(){
        console.log('clicked', $(this).text() );

});

    });
})(jQuery);