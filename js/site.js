(function ($) {
    "use strict";

    /**
     *  Variables
     */
    var body = $('body');

    /**
     * Detect Device Type
     */
    var isMobile;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
        $('html').addClass('mobile');
    } else {
        isMobile = false;
        $('html').addClass('desktop');
    }

    /**
     * Detect Site Direction ltr/rtl
     */
    var rtl = false;
    var direction = $('html').attr('dir');
    if (typeof direction !== typeof undefined && direction !== false && direction == "rtl" ) {
        rtl = true;
    }


    /**
     * Functions
     */
    function windowScrollAnimations() {
        var $animate = $('.animate-up, .animate-down, .animate-left, .animate-right');

        if (!isMobile) {
            $animate.appear();

            $animate.on('appear', function (event, affected) {
                for (var i = 0; i < affected.length; i++) {
                    $(affected[i]).addClass('animated');
                }
            });

            $.force_appear();
        }
    }

    function fillProgressBars() {
        var $progress_bar = $('.progress-bar');

        if (!isMobile) {
            $progress_bar.appear();
            $progress_bar.on('appear', function (event, $affected) {
                setProgressBarsWidth($affected)
            });

            $.force_appear();
        } else {
            setProgressBarsWidth($progress_bar)
        }
    }

    function setProgressBarsWidth(bars) {
        for (var i = 0; i < bars.length; i++) {
            var $bar_fill = $(bars[i]).find('.bar-fill');

            $bar_fill.width($bar_fill.data('width'));
        }
    }

    function positioningInterestsTooltips() {
        var interests = $(".interests-list");
        var tooltips = $(".interests-list li span");

        if (interests.length > 0) {
            for (var i = 0; i < tooltips.length; i++) {
                var width = $(tooltips[i]).outerWidth();
                var parent_width = $(tooltips[i]).parent().outerWidth();
                var left = (parent_width - width) / 2;

                $(tooltips[i]).css('left', left + 'px');
            }
        }
    }

    function arrangeTimelines() {
        if ($(window).width() > 600) { // For large devices

            $('.timeline').each(function () {
                arrangeTimeline($(this));
            });

        } else { // For small devices

            $('.timeline-bar').attr('style', '');
            $('.timeline-box').attr('style', '');
            $('.timeline-inner').attr('style', '');

        }
    }

    function arrangeTimeline($timeline) {
            var tlineH = 0, // time line wrapper height
                tlineCol1H = rtl ? 50 : 0, // initial left column height and first elem top position
                tlineCol2H = rtl ? 0 : 50, // initial right column height and first elem top position
                tlineGutter = 25, // space between items
                tlineBarH = 0, // initial time line bar height
                tlineBarTop = rtl ? tlineCol2H + 80 : tlineCol1H + 80, // first left element top + distance from elem top to arrow
                tlineElems = $timeline.find('.timeline-box');

            // Arrange time line elements
            for (var i = 0; i < tlineElems.length; i++) {
                if (tlineCol1H <= tlineCol2H) {
                    $(tlineElems[i]).removeClass('timeline-box-right').addClass('timeline-box-left').css({'position': 'absolute', 'left': '0', 'right': 'auto', 'top': tlineCol1H + 'px'})
                    $(tlineElems[i]).find('.timeline-box-inner').removeClass('animate-left').addClass('animate-right');

                    tlineBarH = tlineCol1H;
                    tlineCol1H += $(tlineElems[i]).height() + tlineGutter;
                } else {
                    $(tlineElems[i]).removeClass('timeline-box-left').addClass('timeline-box-right').css({'position': 'absolute', 'left': 'auto', 'right': '0', 'top': tlineCol2H + 'px'});
                    $(tlineElems[i]).find('.timeline-box-inner').removeClass('animate-right').addClass('animate-left');

                    tlineBarH = tlineCol2H;
                    tlineCol2H += $(tlineElems[i]).height() + tlineGutter;
                }
            }

            // Set time line wrapper height
            tlineH = tlineCol1H >= tlineCol2H ? tlineCol1H : tlineCol2H;
            $timeline.find('.timeline-inner').height(tlineH - tlineGutter);

            // Set time line bar height
            $timeline.find('.timeline-bar').css({'top': tlineBarTop + 'px', 'height': tlineBarH + 'px'});
    }

    function filterBarLinePositioning(grid, button) {
        var filterValue = button.attr('data-filter');
        var buttonLeft = button.position().left;
        var buttonWidth = button.outerWidth();
        var filterLine = button.closest('.filter').find('.filter-bar-line');

        grid.isotope({filter: filterValue});
        filterLine.css({"left": buttonLeft + "px", "width": buttonWidth});
    }

    function navigationSmoothScrollOnLoad() {
        if ($('body').hasClass('home')) {
            var hash = location.hash.replace('#', '');

            if (hash != '') {
                // Clear the hash in the URL
                //location.hash = '';
                $('html, body').animate({scrollTop: $('#' + hash).offset().top}, 500);
            }
        }
    }

    function stickyNavigationAppear() {
        var header = $('.header');
        var stickyNav = $('.head-bar');
        var stickyNavHeight = 0;

        stickyNav.addClass('animated');

        if(stickyNav.length > 0 && stickyNav.hasClass('head-sticky-classic')) {

            if ($(window).width() > 767 && !isMobile) {
                if (stickyNavHeight < stickyNav.outerHeight()) {
                    stickyNavHeight = stickyNav.outerHeight();
                    header.css('min-height', stickyNavHeight + 'px');
                }

                if ($(window).scrollTop() > 0) {
                    stickyNav.addClass('head-sticky');
                } else {
                    stickyNav.removeClass('head-sticky');
                    header.css('min-height', '0px');
                }
            } else {
                stickyNav.removeClass('head-sticky');
                header.css('min-height', '0px');
            }

        }
    }

    function hideSitePreloader() {
        $('#preloader').remove();
        $('body').removeClass('loading');
    }

    function lockScroll() {
        var $html = $('html');
        var $body = $('body');

        var initWidth = $body.outerWidth();
        var initHeight = $body.outerHeight();

        var scrollPosition = [
            self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        ];
        $html.data('scroll-position', scrollPosition);
        $html.data('previous-overflow', $html.css('overflow'));
        $html.css('overflow', 'hidden');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);

        var marginR = $body.outerWidth() - initWidth;
        var marginB = $body.outerHeight() - initHeight;
        $body.css({'margin-right': marginR, 'margin-bottom': marginB});
        $html.addClass('lock-scroll');
    }

    function unlockScroll() {
        var $html = $('html');
        var $body = $('body');

        $html.css('overflow', $html.data('previous-overflow'));
        var scrollPosition = $html.data('scroll-position');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);

        $body.css({'margin-right': 0, 'margin-bottom': 0});
        $html.removeClass('lock-scroll');
    }

    function openMobileNav() {
        $('body').addClass('mobile-nav-opened');
        lockScroll();
    }

    function closeMobileNav() {
        $('body').removeClass('mobile-nav-opened');
        unlockScroll();
    }

    function openSidebar() {
        $('body').addClass('sidebar-opened');
        lockScroll();
    }

    function closeSidebar() {
        $('body').removeClass('sidebar-opened');
        unlockScroll();
    }

    function arrayContains(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    }

    function ripple(element, pageX, pageY){
        var $rippleElement = $('<span class="ripple-effect" />');
        var xPos = parseInt( pageX, 10 ) - parseInt( element.offset().left, 10 );
        var yPos = parseInt( pageY, 10 ) - parseInt( element.offset().top, 10 );
        var size = Math.floor( Math.min(element.height(), element.width()) * 0.5 );
        var animateSize = Math.floor( Math.max(element.width(), element.height()) * Math.PI );

        $rippleElement
            .css({
                top: yPos,
                left: xPos,
                width: size,
                height: size
            })
            .appendTo(element)
            .animate({
                width: animateSize,
                height: animateSize,
                opacity: 0
            }, 500, function () {
                $(this).remove();
            });
    }


    /* Portfolio Popup Functions */
    function parseOptions(str) {
        var obj = {};
        var delimiterIndex;
        var option;
        var prop;
        var val;
        var arr;
        var len;
        var i;

        // Remove spaces around delimiters and split
        arr = str.replace(/\s*:\s*/g, ':').replace(/\s*,\s*/g, ',').split(',');

        // Parse a string
        for (i = 0, len = arr.length; i < len; i++) {
            option = arr[i];

            // Ignore urls and a string without colon delimiters
            if (
                option.search(/^(http|https|ftp):\/\//) !== -1 ||
                option.search(':') === -1
            ) {
                break;
            }

            delimiterIndex = option.indexOf(':');
            prop = option.substring(0, delimiterIndex);
            val = option.substring(delimiterIndex + 1);

            // If val is an empty string, make it undefined
            if (!val) {
                val = undefined;
            }

            // Convert a string value if it is like a boolean
            if (typeof val === 'string') {
                val = val === 'true' || (val === 'false' ? false : val);
            }

            // Convert a string value if it is like a number
            if (typeof val === 'string') {
                val = !isNaN(val) ? +val : val;
            }

            obj[prop] = val;
        }

        // If nothing is parsed
        if (prop == null && val == null) {
            return str;
        }

        return obj;
    }

    function validUrl(){

    }

    /**
     * Window Load
     */
    $(window).on( "load", function() {

        /** Window Scroll Animations */
        windowScrollAnimations();


        /** Progress Bars:
         *  fill progress bars on window scroll */
        fillProgressBars();


        /** Tooltips:
         *  positioning interests section tooltips */
        positioningInterestsTooltips();


        /** Timeline:
         *  positioning timeline elements */
        arrangeTimelines();

        /** Ripple:
         *  appears where clicked on the element */
        $(document).on('click touchstart', '.ripple', function (e) {
            ripple( $(this), e.pageX, e.pageY );
        });


        /** Ripple Centered:
         *  appears from element center */
        $(document).on('click touchstart', '.ripple-centered', function () {
            var $rippleElement = $('<span class="ripple-effect" />'),
                $buttonElement = $(this),
                xPos = $buttonElement.width() / 2,
                yPos = $buttonElement.height() / 2,
                size = Math.floor( Math.min($buttonElement.height(), $buttonElement.width()) * 0.5 ),
                animateSize = Math.floor( Math.max($buttonElement.width(), $buttonElement.height()) * 1.5 );
            $rippleElement
                .css({
                    top: yPos,
                    left: xPos,
                    width: size,
                    height: size,
                    backgroundColor: $buttonElement.data("ripple-color")
                })
                .appendTo($buttonElement)
                .animate({
                    width: animateSize,
                    height: animateSize,
                    opacity: 0
                }, 450, function () {
                    $(this).remove();
                });
        });

        /** Main Navigation */
        navigationSmoothScrollOnLoad();

        // Header Navigation
        $('#head-nav>nav>ul').onePageNav({
            easing: 'swing',
            changeHash: true,
            scrollSpeed: 500,
            scrollThreshold: 0.5,
            currentClass: 'active',
            filter: ':not(.external)'
        });

        // Add header navigation hover lines
        if ($('.nav-wrap .nav').length > 0) {
            $('.nav-wrap .nav > ul > li > a').append('<span></span>');
        }

        // Sticky Navigation
        stickyNavigationAppear();

        $(window).scroll(function () {
            stickyNavigationAppear();
        });


        /** Mobile Navigation */
            // Mobile Navigation
        $('#mobile-nav>nav>ul').onePageNav({
            currentClass: 'active',
            changeHash: true,
            scrollSpeed: 500,
            scrollThreshold: 0.5,
            easing: 'swing',
            begin: function() {
                closeMobileNav();
            }
        });

        // open/close mobile navigation
        $(document).on('click', '.btn-mobile', function () {
            if ($('body').hasClass('mobile-nav-opened')) {
                closeMobileNav();
            } else {
                openMobileNav();
            }
        });

        // mobile nav sub open / close
        $('.mobile-nav .nav .rsicon').on('click', function(){
            $(this).next('.sub-menu').slideToggle();
        });


        /** Sidebar */

        // open/close sidebar
        $(document).on('click', '.btn-sidebar', function () {
            if ($('body').hasClass('sidebar-opened')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });

        /** Overlay:
         *  the same overlay is used for fixed sidebar and for mobile navigation */
        $(document).on('click touchstart', '#overlay', function () {
            if ($('body').hasClass('mobile-nav-opened')) closeMobileNav();

            if ($('body').hasClass('sidebar-opened')) closeSidebar();
        });

        /** Window Scroll Top Button */
        var $btnScrollTop = $('.btn-scroll-top');
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $btnScrollTop.fadeIn();
            } else {
                $btnScrollTop.fadeOut();
            }
        });

        $btnScrollTop.on('click', function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });

        /** Preloader:
         *  site was successfully loaded, hide site pre-loader */
        hideSitePreloader();
    });


    /**
     * Window Resize
     */
    var resizeTimeout;
    var winWidth = $(window).width();
    var winHeight = $(window).height();

    $(window).resize(function () {
        var onResize = function () {
            stickyNavigationAppear();
            setSectionContactHeight();
            arrangeTimelines();
            // positioningTimelineElements();
        }

        // New height and width
        var winNewWidth = $(window).width(),
            winNewHeight = $(window).height();

        // Compare the new height and width with old one
        if (winWidth != winNewWidth || winHeight != winNewHeight) {
            window.clearTimeout(resizeTimeout);
            resizeTimeout = window.setTimeout(onResize, 10);
        }

        //Update the width and height
        winWidth = winNewWidth;
        winHeight = winNewHeight;
    });


    /**
     * Document Ready
     */
    $(function () {

        /** Default Slider */
        var slider = $('.slider');
        if (slider.length > 0) {
            slider.each(function () {
                $(this).slick({
                    rtl: rtl
                    /*adaptiveHeight: rsOptions.defaultSlider.adaptiveHeight,
                     autoplay: rsOptions.defaultSlider.autoplay,
                     autoplaySpeed: rsOptions.defaultSlider.autoplaySpeed,
                     arrows: rsOptions.defaultSlider.arrows,
                     dots: rsOptions.defaultSlider.dots,
                     draggable: rsOptions.defaultSlider.draggable,
                     fade: rsOptions.defaultSlider.fade,
                     infinite: rsOptions.defaultSlider.infinite,
                     pauseOnFocus: rsOptions.defaultSlider.pauseOnFocus,
                     pauseOnHover: rsOptions.defaultSlider.pauseOnHover,
                     pauseOnDotsHover: rsOptions.defaultSlider.pauseOnDotsHover,
                     rtl: rsOptions.rtl,
                     speed: rsOptions.defaultSlider.speed,
                     swipe: true,
                     touchMove: true*/
                });
            });
        }

        /** Accordeon */
        var accordeonActive = $('.accordion>li.active');
        if( accordeonActive.length > 0 ){
            accordeonActive.find('.accordion-content').show();
        }

        $('.accordion-header').on('click', function(){
            var acc_head = $(this);
            var acc_section = acc_head.parent();
            var acc_content = acc_head.next();
            var acc_all_contents = acc_head.closest('.accordion').find('.accordion-content');

            if(acc_section.hasClass('active')){
                acc_section.removeClass('active');
                acc_content.slideUp();
            }else{
                acc_section.siblings().removeClass('active');
                acc_section.addClass('active');
                acc_all_contents.slideUp(300);
                acc_content.slideDown(300);
            }
        });
    });
})(jQuery);