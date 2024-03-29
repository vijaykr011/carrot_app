$(document).ready(function() {

    $('#flip-countdown .countdown-dot').css({
        'background-color' : sBackColor
    });

    $('#flip-countdown .countdown-number-top').css({
        'background-color' : sBackColor
    });

    $('#flip-countdown .countdown-number-bottom').css({
        'background-color' : sBackColor
    });

    $('#flip-countdown .countdown-number-next').css({
        'background-color' : sBackColor
    });

    $('#flip-countdown .countdown-number-next').css({
        'color' : sTextColor
    });

    $('#flip-countdown .countdown-number-top').css({
        'color' : sTextColor
    });

    $('#flip-countdown .countdown-number-bottom').css({
        'color' : sTextColor
    });

    $('#flip-countdown .countdown-dot').css({
        'border-color' : sBorderColor
    });

    $('#flip-countdown .countdown-number-top').css({
        'border-color' : sBorderColor
    });

    $('#flip-countdown .countdown-number-bottom').css({
        'border-color' : sBorderColor
    });

    $('#flip-countdown .countdown-number-next').css({
        'border-color' : sBorderColor
    });

    $('#flip-countdown .countdown-label-container').css({
        'color' : sLabelColor
    });

    var days	= 24*60*60,
        hours	= 60*60,
        minutes	= 60;

    var left, d, h, m, s, positions;

    toDate = new Date(sToDate);

    (function tick(){

        // Time left
        left = Math.floor((toDate - (new Date())) / 1000);

        if(left < 0){
            left = 0;
        }

        // days left
        d = Math.floor(left / days);
        updateNumbers(1, 2, d, 0);
        left -= d*days;

        // hours left
        h = Math.floor(left / hours);
        updateNumbers(3, 4, h, 999);
        left -= h*hours;

        // minutes left
        m = Math.floor(left / minutes);
        updateNumbers(5, 6, m, 999);
        left -= m*minutes;

        // seconds left
        s = left;
        updateNumbers(7, 8, s, 999);


        // Scheduling another call of this function in 1s
        setTimeout(tick, 1000);
    })();

    function updateNumbers(minor, major, value, forDays) {

        if (forDays == 0) {
            var forDaysClass = '.position-'+parseInt(forDays);
            switchDigit(forDaysClass, Math.floor(value/100));
        }

        var minorClass = '.position-'+parseInt(minor);
        var majorClass = '.position-'+parseInt(major);

        switchDigit(minorClass, Math.floor(value/10)%10);
        switchDigit(majorClass, value%10);

    }

    function switchDigit(sPosition, iNumber) {

        var oDigit = $(sPosition);
        var oTarget1 = oDigit.parents('.countdown-number-top');
        var iNextNumber = iNumber - 1;
        var sNextPosition = sPosition+'-next';

        if(oDigit.is(':animated') || $(oDigit).html() == iNumber || oTarget1.is(':animated')) {
            return false;
        }

        if (( (sPosition == '.position-0' || sPosition == '.position-1' || sPosition == '.position-2' || sPosition == '.position-4' || sPosition == '.position-6' || sPosition == '.position-8') && iNextNumber < 0 )) {
            iNextNumber = 9;
        } else if (( sPosition == '.position-3' &&  iNextNumber < 0 )) {
            iNextNumber = 2;
        } else if ((sPosition == '.position-5' || sPosition == '.position-7') && iNextNumber < 0) {
            iNextNumber = 5;
        }

        $(oTarget1).animate({ borderSpacing: -90 }, {
            step: function(now,fx) {
                $(this).css('-webkit-transform','rotateX('+now+'deg)');
                $(this).css('-moz-transform','rotateX('+now+'deg)');
                $(this).css('transform','rotateX('+now+'deg)');
            },
            duration: 750,
            complete : function() {
                $(sPosition).each(function() {
                    $(this).html(iNumber);
                });
                $(sNextPosition).each(function() {
                    $(this).html(iNextNumber);
                });

                $(this).css('-webkit-transform','');
                $(this).css('-moz-transform','');
                $(this).css('transform','');
            }
        });

        $('.countdown-number-top .countdown-number-inner ' + sPosition).animate({ borderSpacing: -90 }, {
            step: function(now,fx) {
                $(this).css('-webkit-transform','rotateX('+now+'deg)');
                $(this).css('-moz-transform','rotateX('+now+'deg)');
                $(this).css('transform','rotateX('+now+'deg)');
            },
            duration: 750,
            complete : function() {
                $(this).css('-webkit-transform','rotateX(180deg)');
                $(this).css('-moz-transform','rotateX(180deg)');
                $(this).css('transform','rotateX(180deg)');
            }
        });
    }

    resizeClockFonts();

    $(window).resize(function() {
        resizeClockFonts();
    });

    // resize fonts based on container width
    function resizeClockFonts() {

        var numContainerHeight = $('#flip-countdown .countdown-number-container').height();
        var labelContainerHeight = $('#flip-countdown .countdown-label-container').height();

        var numFontSize = parseInt(numContainerHeight * .9)+'px';
        var labelFontsize = parseInt(labelContainerHeight * .9)+'px';

        $("#flip-countdown .countdown-number-inner").css({
            'font-size': numFontSize,
            'line-height': parseInt(numContainerHeight)+'px'
        });

        $('#flip-countdown .countdown-number-next').css({
            'font-size': numFontSize,
            'line-height': parseInt(numContainerHeight)+'px'
        });

        $("#flip-countdown .countdown-label-container").css({
            'font-size': labelFontsize,
            'line-height': parseInt(labelContainerHeight)+'px'
        });

    }
});