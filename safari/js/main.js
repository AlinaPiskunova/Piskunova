;(function ($) {
    $(function () {

        var w = $(window),
            b1 = $('.decoration:nth-child(1)'),
            b2 = $('.decoration:nth-child(2)'),
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