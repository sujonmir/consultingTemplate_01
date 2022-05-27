//navbar
(function ($) {
    "use strict";


    jQuery(document).on('ready', function () {

        // Header Sticky
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 120) {
                $('.navbar-area').addClass("is-sticky");
            } else {
                $('.navbar-area').removeClass("is-sticky");
            }
        });

        // Mean Menu
        jQuery('.mean-menu').meanmenu({
            meanScreenWidth: "991"
        });

    });

// Video Plugin about us Area
var $iframe = $('iframe'),
    $videoLink = $('.video-link'),
    playerTemplate =
    '<div class="player"><div class="player__video"><div class="video-filler"></div><button class="video-close">&times;</button><iframe class="video-iframe" src="{{iframevideo}}" frameborder="0" allowfullscreen></iframe></div><div/>';

$videoLink.on('click', function (e) {
    var localTemplate = '',
        videoWidth = parseInt($(this).data('width')),
        videoHeight = parseInt($(this).data('height')),
        videoAspect = (videoHeight / videoWidth) * 100,
        // elements
        $player = null,
        $video = null,
        $close = null,
        $iframe = null;

    e.preventDefault();

    localTemplate = playerTemplate.replace(
        '{{iframevideo}}',
        $(this).prop('href')
    );

    $player = $(localTemplate);

    $player.find('.video-filler').css('padding-top', videoAspect + '%');

    $close = $player.find('.video-close').on('click', function () {
        $(this)
            .off()
            .closest('.player')
            .hide()
            .remove();
    });

    $player.appendTo('body').addClass('js--show-video');
});


// testimonial area slider

$('.owl-testimonial').owlCarousel({
    loop: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 0,
    nav: true,
    navText: [

        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>"

    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})


window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);

                        

}(jQuery));