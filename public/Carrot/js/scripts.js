jQuery(document).ready(function ($) {
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    var agentST = deviceAgent.match(/(ipad)/);
    if (agentID) {
        $('*').removeClass('animated');

    }
    if (agentST) {
        $(window).load(function () {
            'use strict';
            $("#navigation").sticky({ topSpacing: 0 });
        });
    }

    // Detect whether device supports orientationchange event, otherwise fall back to
    // the resize event.
    /*var supportsOrientationChange = "onorientationchange" in window,
        orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
	
    window.addEventListener(orientationEvent, function() {
        alert('HOLY ROTATING SCREENS BATMAN:' + window.orientation + " " + screen.width);
    }, false);*/

});



/* ==============================================
Drop Down Menu Fade Effect
=============================================== */

$('.nav-toggle').hover(function () {
    $(this).find('.dropdown-menu').first().stop(true, true).fadeIn(400);
}, function () {
    $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(400)
});

/* ==============================================
Drop Down Menu For Mobile
=============================================== */

$('.mobile-toggle').hover(function () {
    //$(this).addClass('opened_menu');
    $(this).find('.dr-mobile').first().stop(true, true).slideDown(400);
}, function () {
    $(this).find('.dr-mobile').first().stop(true, true).slideToggle(400);

});

/* ==============================================
Pretty Photo
=============================================== */

jQuery(document).ready(function () {

    if (!/ipad|iphone/i.test(navigator.userAgent)) {
        //Pretty Photo For Our Portfolio
        jQuery(".pretty-lightbox-a a[data-rel^='prettyPhoto']").prettyPhoto({
            theme: "facebook",
        });

        //Pretty Photo For Company History
        jQuery(".pretty-lightbox-b a[data-rel^='prettyPhoto']").prettyPhoto({
            theme: "facebook",
        });
    } else {
        jQuery(".pretty-lightbox-a a[data-rel^='prettyPhoto']").attr('target', '_blank');
        jQuery(".pretty-lightbox-b a[data-rel^='prettyPhoto']").attr('target', '_blank');
    }
});

/* ==============================================
Scroll Navigation
=============================================== */

$(function () {
    $('.scroll').bind('click', function (event) {
        var $anchor = $(this);
        var headerH = $('#navigation').outerHeight();
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });
});

/* ==============================================
Our Portfolio / isotope Scripts
===============================================	*/

$(window).load(function () {

    var $container = $('.items');

    $container.isotope({
        itemSelector: '.work'
    });


    var $optionSets = $('#options .option-set'),
        $optionLinks = $optionSets.find('a');

    $optionLinks.click(function () {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');

        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            // changes in layout modes need extra logic
            changeLayoutMode($this, options)
        } else {
            // otherwise, apply new options
            $container.isotope(options);
        }

        return false;
    });


});

/* ==============================================
Page Loader
=============================================== */

'use strict';

$(window).load(function () {
    $(".loader-item").delay(700).fadeOut();
    $("#pageloader").delay(1200).fadeOut("slow");
});


/* ==============================================
Parallax Effect
=============================================== */

(function ($) {
    'use strict';
    $(document).ready(function () {
        $(window).bind('load', function () {
            parallaxInit();
        });
        function parallaxInit() {
            testMobile = isMobile.any();
            if (testMobile == null) {
                $('.balon').parallax("50%", 0.5);
                $('.toons1').parallax("50%", 0.5);
                $('.toons2').parallax("50%", 0.5);
            }
        }
        parallaxInit();
    });

    //Mobile Detect
    var testMobile;
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
}(jQuery));


/* ==============================================
Carousel Slider
=============================================== */

$(document).ready(function ($) {
    'use strict';
    $(".slide-boxes").owlCarousel();
    $(".our-clients-carousel").owlCarousel({

    });
});


/* ==============================================
Navigation Menu, Sticky Effect For Navigation Bar
=============================================== */

if (!(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    $(window).load(function () {
        'use strict';
        $("#navigation").sticky({ topSpacing: 0 });
    });
}
/* ==============================================
carousel
=============================================== */
$('.carousel').on('slide.bs.carousel', function () {
    'use strict';
    $('.carousel').carousel({
        interval: 3000
    })
})

/* ==============================================
//Elements animation
=============================================== */
jQuery(document).ready(function ($) {

    'use strict';

    $('.counter').appear(function () {
        var elem = $(this);
        var animation = elem.data('animation');
        if (elem.hasClass('counter')) {
            elem.children('.value').countTo();
        }
    });

});

function bubble() {
    // alert('hello')
    var elem = $('.scrollbubble');
    var animation = elem.data('animation');
    if (!elem.hasClass('animated2')) {
        // if (!elem.hasClass('animated2')) {
        //     alert('hello')
        // }
        var animationDelay = elem.data('animation-delay');
        if (animationDelay) {
            setTimeout(function () {
                elem.addClass(animation + " visible");
                elem.removeClass('hiding');
            }, animationDelay);

        } else {
            elem.addClass(animation + " visible");
            elem.removeClass('hiding');
        }
    }
};

function bubble2() {
    var elem = $('.animated');
    var animation = elem.data('animation');
    if (elem.hasClass('animated2')) {
        var animationDelay = elem.data('animation-delay');
        if (animationDelay) {
            setTimeout(function () {
                elem.addClass(animation + " visibletwo");
                elem.removeClass('hiding');
            }, animationDelay);

        } else {
            elem.addClass(animation + " visibletwo");
            elem.removeClass('hiding');
        }
    }
};


/* ==============================================
Revolution Slider
=============================================== */

var revapi;

jQuery(document).ready(function () {

    revapi = jQuery('.tp-banner').revolution(
        {
            delay: 9000,
            startwidth: 1170,
            startheight: 550,
            hideThumbs: 10,
            fullWidth: "on",
            forceFullWidth: "on"
        });

});

/* ==============================================
Go To Top
=============================================== */

$(document).ready(function () {

    // hide #go-top first
    $("#go-top").hide();

    // fade in #go-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#go-top').fadeIn();
            } else {
                $('#go-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#go-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});

/* ==============================================
Google Maps
=============================================== */
$(document).ready(function () {

    var mapMarkers = {
        "markers": [
            {
                "latitude": "48.85661",
                "longitude": "2.35222",
                "icon": "images/marker.png"
            }
        ]
    };

    $("#googlemaps").mapmarker({
        zoom: 16,
        center: "48.85661, 2.35222",
        dragging: 1,
        mousewheel: 0,
        markers: mapMarkers,
        featureType: "all",
        visibility: "on",
        elementType: "geometry"
    });

});

/* ==============================================
Video Background
=============================================== */

jQuery(function () {
    jQuery(".player").mb_YTPlayer();
});

/* ==============================================
COUNTDOWN
=============================================== */
// const line = document.querySelector('#line')
// const targetRaised = document.querySelector('#targetRaised')
// const canvas = document.querySelector('#canvas')

// const percent = line.parentElement.dataset.percent
// line.style.width = percent + '%'
// targetRaised.textContent = percent + '% Target Raised '

// let tz = new Date().toString().split(' ')[5]
// let d = new Date()

// const cfg = {
//     end: Date.parse(new Date(canvas.dataset.enddate + ' ' + tz)) / 1000,
//     labels: ["Days", "Hours", "Minutes", "Seconds"],
//     background: ["transparent", "transparent", "transparent", "transparent"],
//     opacity: 1,
//     outerBackground: "rgba(0,0,0,0)",
//     fontColor: ["#000", "#000", "#000", "#000"],
//     strokes: {
//         background: "transparent",
//         fill: ["#1f72cd", "#1f72cd", "#1f72cd", "#1f72cd"],
//         glow: 30,
//         width: 12,
//         margin: 12
//     }
// }

// let max = [
//     365,
//     24, 60, 60]

// function addZero(n) {
//     if (n < 10) { n = "0" + n }
//     return n
// }
// let time = [0, 0, 0, 0]

// let offset = cfg.strokes.width * 2
// const context = canvas.getContext("2d")
// let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
//     window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
// window.requestAnimationFrame = requestAnimationFrame
// cfg.radius = (canvas.parentElement.offsetWidth - offset * 5) / 4
// canvas.width = cfg.radius * 4 + offset * 5
// canvas.height = cfg.radius + offset * 2

// function animate() {
//     context.clearRect(0, 0, canvas.width, canvas.height)
//     for (let i = 0; i < 4; i++) {

//         //BACKGROUND CIRCLES FILL
//         context.beginPath()
//         context.arc(offset + cfg.radius / 2 + offset * i + (cfg.radius) * i, cfg.radius / 2 + offset, cfg.radius / 2 + cfg.strokes.width / 2, 0, 2 * Math.PI)
//         context.fillStyle = cfg.background[i]
//         context.globalAlpha = cfg.opacity
//         context.fill()
//         context.closePath()
//         context.globalAlpha = 1

//         //BACKGROUND CIRCLES STROKE
//         context.beginPath()
//         context.lineWidth = cfg.strokes.width
//         context.arc(offset + cfg.radius / 2 + offset * i + (cfg.radius) * i, cfg.radius / 2 + offset, cfg.radius / 2, 0, 2 * Math.PI)
//         context.strokeStyle = cfg.strokes.background
//         context.stroke()
//         context.closePath()

//         //COLORED CIRCLES
//         let circ = Math.PI * 2
//         let quart = Math.PI / 2
//         context.beginPath()
//         context.lineWidth = cfg.strokes.width
//         context.arc(offset + cfg.radius / 2 + offset * i + cfg.radius * i, cfg.radius / 2 + offset, cfg.radius / 2, -((max[i] - time[i]) / max[i]) * (2 * Math.PI) - quart, -quart, true)
//         context.strokeStyle = cfg.strokes.fill[i]
//         context.stroke()
//         context.closePath()

//         // BULLETS
//         context.beginPath()
//         context.lineWidth = cfg.strokes.width
//         context.arc(offset + cfg.radius / 2 + offset * i + (cfg.radius) * i, offset, cfg.strokes.width / 2, 0, 2 * Math.PI)
//         context.fillStyle = cfg.strokes.fill[i]
//         context.fill()
//         context.closePath()

//         context.beginPath()
//         const center = [offset + cfg.radius / 2 + offset * i + cfg.radius * i, cfg.radius / 2 + offset]
//         const x = center[0] + Math.cos((-90 + time[i] / max[i] * 360) * Math.PI / 180) * cfg.radius / 2
//         const y = center[1] + Math.sin((-90 + time[i] / max[i] * 360) * Math.PI / 180) * cfg.radius / 2
//         context.lineWidth = cfg.strokes.width
//         context.arc(x, y, cfg.strokes.width / 2, 0, 2 * Math.PI)
//         context.fillStyle = cfg.strokes.fill[i]
//         context.fill()
//         context.closePath()

//         //COUNTDOWN TEXTS
//         let d = cfg.end - Date.now() / 1000
//         if (d < 0) { d = 0 }
//         time[0] = Math.round(d % (86400 * 365) / 86400)
//         time[1] = Math.floor((d % 86400) / 3600)
//         time[2] = Math.floor((d % 3600) / 60)
//         time[3] = d % 60
//         context.font = "bold " + cfg.radius / 2 + "px AvenirNextBold, Helvetica Neue, Helvetica, sans-serif"
//         context.textAlign = "center"
//         context.fillStyle = cfg.fontColor[0]
//         context.fillText(addZero(Math.floor(time[i])), offset + cfg.radius / 2 + offset * i + (cfg.radius) * i, cfg.radius / 2 + offset + (cfg.radius / 8))

//         // COUNTDOWN LABELS
//         context.font = cfg.radius / 8 + "px AvenirNext, Helvetica Neue, Helvetica, sans-serif"
//         context.textAlign = "center"
//         context.fillStyle = cfg.fontColor[1]
//         context.fillText(cfg.labels[i], offset + cfg.radius / 2 + offset * i + (cfg.radius) * i, cfg.radius / 2.25 + offset + (cfg.radius / 3))

//     }
//     requestAnimationFrame(function () {
//         if (d > 0) {
//             animate()
//         }
//     })
// }
// animate()

// window.addEventListener("resize", () => {
//     cfg.radius = (canvas.parentElement.offsetWidth - offset * 5) / 4
//     canvas.width = cfg.radius * 4 + offset * 5
// })
// cfg.strokes.width = 12 / (620 / canvas.width)
// offset = cfg.strokes.width * 2
// canvas.height = cfg.radius + offset * 2

