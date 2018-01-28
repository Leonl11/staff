$(document).ready(function() {
    function showhide() {
        $("#plogo").fadeIn(1600, function() {
            $("#plogo").fadeOut(1400, showhide);
        })
    }
    showhide();
});


/*$(window).on('load', function() {
    var $preloader = $('#preloader');
    $preloader.delay(2000).fadeOut('slow');
});*/