;(function ($) {
    $(function () {

        var w = $(window),
            b1 = $('.relative>.decoration:nth-child(1)'),
            b2 = $('.relative>.decoration:nth-child(2)'),
            img = $('.plane:first-of-type'),
        b1b = b1.position().top,
            b2b = b2.position().top;
        // console.log(img);
        // imgPos = img.position.right;
        //  console.log(imgPos);
        w.on('scroll', function () {
            var scrollTop = w.scrollTop();
            b1.css('top', b1b - scrollTop / 3 + 'px');
            b2.css('top', b2b - scrollTop / 5 + 'px');
        });
        img.on('click', function () {
            $(this).animate({
                left: '-588px',
                top: '-120px'
            }, 2000);
        });
    });
})(jQuery);
