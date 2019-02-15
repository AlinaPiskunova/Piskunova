;(function ($) {
    $(function () {
        var menu = $('nav > ul');
        $('.hamburger').on('click', function () {

            menu.toggleClass('visible');
            $(this).toggleClass('menu-opened');
        });



        var w = $(window),
            b1 = $('.decoration:nth-child(1)'),
            b2 = $('.decoration:nth-child(2)'),
            img = $('.plane:first-of-type'),
            b1b = b1.position().top,
            b2b = b2.position().top;
        setTimeout(function () {
            w.scrollTop(0);
        }, 300);
        w.on('scroll', function () {
            var scrollTop = w.scrollTop();
            b1.css('top', b1b - scrollTop / 3 + 'px');
            b2.css('top', b2b - scrollTop / 5 + 'px');
if (scrollTop > 60) {$(".scroll.back-to-top").addClass("visible");}
else {$(".scroll.back-to-top").removeClass("visible");}
        });

        function fly() {
            img.animate({
                left: '-850px',
                top: '-120px'
            }, 2000);
        }
        img.on('click', function () {
            fly();
        });
        $('.pos-relative').on('submit', function (e) {
            e.preventDefault();
            fly();
        });

        $('.lightzoom').lightzoom({speed: 400, isOverlayClickClosing: true});
        $("a.scroll").click(function () {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px"
            }, {
                duration: 500,
                easing: "swing"
            });
            return false;
        });
    });
})(jQuery);
var map,
    infoWindowContent = document.getElementsByClassName('europe')[0].outerHTML,
    infoWindowContentAfrica = document.getElementsByClassName('africa')[0].outerHTML,
    infoWindowContentUSA = document.getElementsByClassName('usa')[0].outerHTML;

function initMap() {
    var Europe = {lat: 48.989800, lng: 22.989173},
        Africa = {lat: 5.295441, lng: 22.353199},
        usa = {lat: 37.597996, lng: -110.762886},
        atlantica = {lat: 23.665940, lng: -39.290077},
        image = 'img/plane111.png',
        map = new google.maps.Map(document.getElementById('map'), {
            center: atlantica,
            zoom: 3
        }),
        marker = new google.maps.Marker({
            position: Europe,
            map: map,
            icon: image,
            title: 'Europe'
        }),
        markerAfrica = new google.maps.Marker({
            position: Africa,
            map: map,
            icon: image,
            title: ' Africa'
        }),
        markerUSA = new google.maps.Marker({
            position: usa,
            map: map,
            icon: image,
            title: 'USA'
        }),
        infowindow = new google.maps.InfoWindow({
            content: infoWindowContent
        }),
        infowindowAfrica = new google.maps.InfoWindow({
            content: infoWindowContentAfrica
        }),
        infowindowUSA = new google.maps.InfoWindow({
            content: infoWindowContentUSA
        });
    marker.setMap(map);
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
    markerAfrica.addListener('click', function () {
        infowindowAfrica.open(map, markerAfrica);
    });
    markerUSA.addListener('click', function () {
        infowindowUSA.open(map, markerUSA);
    });
}