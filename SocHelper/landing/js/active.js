(function ($) {
    'use strict';

    var windowS = $(window),
        windowH = windowS.height(),
        menuS = $('.menu-area'),
        menuH = menuS.height(),
        welcomeText = $('.welcome-text'),
        greanimgtow = $('.green-image-two'),
        greanimgtowH = greanimgtow.height(),
        welcomeTextH = welcomeText.height(),
        withoutMenu = (windowH - menuH),
        verticalcontent = ((withoutMenu - welcomeTextH) / 2),
        imageverticall = ((withoutMenu - greanimgtowH) / 2);

    welcomeText.css({
        paddingTop: verticalcontent,
        paddingBottom: verticalcontent
    });

    greanimgtow.css({
        paddingTop: imageverticall,
        paddingBottom: imageverticall
    });



    /*----------------------
        Video Background
    -----------------------*/
    $(".video-header").YTPlayer({
        showControls: false,
        quality: 'hd1080'
    });


    /*--------------------------
         Screenshot Slider
    ---------------------------*/

    $('.screenshot-slider').owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        touchDrag: true,
        mouseDrag: true,
        margin: 0,
        center: true,
        responsiveClass: true,
        responsive: {
            0: {

            },

            600: {

            },
            1000: {
                margin: 0
            }
        }

    });



    /*--------------------------
       Light Case Activation
    ---------------------------*/
    $('a[data-rel^=lightcase]').lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        showTitle: true
    });

    /*--------------------------
         Screenshot Slider-2
    ---------------------------*/

    $('.screenshot-slider-2').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: true,
        touchDrag: true,
        mouseDrag: false,
        animateIn: 'zoomIn',
        animateOut: 'zoomOut'
    });

    /*--------------------------
         Screenshot Slider-3
    ---------------------------*/

    $('.screenshot-slider-3').owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
        dots: false,
        autoplay: true,
        center: true,
        mouseDrag: true,
        autoWidth: false,
        autoplayHoverPause: true,
        touchDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                autoWidth: false,
                margin: 0
            },

           480:{
              autoWidth: true,

            },

            600: {
                margin: 30
            }
        }
    });

    /*--------------------------
         Screenshot Slider-4
    ---------------------------*/

    $('.screenshot-slider-4').owlCarousel({
        items: 3,
        loop: true,
        dots: false,
        autoplay: true,
        center: true,
        mouseDrag: true,
        autoplayHoverPause: true,
        touchDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                autoWidth: false,
                margin: 0
            },

            480: {
                items: 1,
                autoWidth: false,
                margin: 0
            },

            600: {

            }
        }
    });


    /*---------------------------------
         Green-Gradient-page Slider
    ----------------------------------*/
    var grslide = $('.green-gradient-slider');
    grslide.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        touchDrag: false,
        mouseDrag: false,
        margin: 0,
        smartSpeed: 600,
        nav: false

    });

    //GREEN GRADIENT PAGE CUSTOM ANIMATION
    var wlcSlide = $('.welcome-text-green');
    grslide.on("translate.owl.carousel", function () {
        wlcSlide.removeClass("animated fadeInUp").css("opacity", "0");
    });
    grslide.on("translated.owl.carousel", function () {
        wlcSlide.addClass("animated fadeInUp").css("opacity", "1");
    });

    /*--------------------------
          Customer Slider
    ---------------------------*/

    $('.customer-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        dots: false,
        autoplay: true,
        center: true,
        mouseDrag: true,
        autoWidth: true,
        autoplayHoverPause: true,
        touchDrag: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                autoWidth: false,
                margin: 0
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*--------------------------
          Sponsor Slider
    ---------------------------*/

    $('.sponsor-slider').owlCarousel({
        items: 6,
        loop: true,
        margin: 30,
        dots: false,
        autoplay: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 2,
                margin: 10
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });

    /*--------------------------
             counter up
    ---------------------------*/

    $('.counter').counterUp({
        delay: 10,
        time: 2500
    });


    /*-------------------------
             Wave effect
    --------------------------*/

    $('#wave').wavify({
        height: 20,
        bones: 4,
        amplitude: 40,
        color: 'rgb(255, 255, 255)',
        speed: '.25'
    });


    /*-----------------------
           Active Class
    ------------------------*/
    var navBars = $('ul.navbar-nav.ml-auto.menu li a');
    navBars.on("click", function () {
        navBars.removeClass("active");
        $(this).addClass("active");
    });





    /*----------------------------
              Preloader
    -----------------------------*/

    windowS.on('load', function () {
        $('.preloader').fadeOut('slow', function() {
        $(this).remove();
    });


    /*-----------------------
          Wow Animation
    ------------------------*/
    var wow = new WOW({
        mobile: false
    });

    wow.init();

    });


    /*-----------------------
          sticky header
    ------------------------*/
    windowS.bind('scroll', function () {
        if (windowS.scrollTop() > 50) {
            menuS.addClass('sticky');
        } else {
            menuS.removeClass('sticky');
        }
    });


    $('.navbar-nav li a').on('click', function () {
        $('.collapse').removeClass('show');
    });

})(jQuery);
