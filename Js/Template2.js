/*global $*/
$(function () {
    'use strict';
    $('html').niceScroll({
        cursorcolor: "#f7600e",
        cursorwith: "7px",
        cursorborder: '1px solid #f7600e'
    });
    $(".hear").click(function () {
        $('html').animate({
            scrollTop: $('.our-work').offset().top
        }, 1000);
    });
    /*Change Header Height*/
    $(".header").height($(window).height());
    /*Start Our Work*/
    $(".our-work .show-more").on("click",function () {
        if ($(".hidden").is(':visible')) {

            $('.our-work .hidden').fadeOut(1000);
            $(".show-more").text("Show More");
        } else  {
            $('.our-work .hidden').fadeIn(1000);
            $(".show-more").text("Fade Out");
        }

    });
    /*Start Our Work*/
    /*Start TestImonails */
    var leftArrow = $('.testim .fa-chevron-left'),
        RightArrow = $('.testim .fa-chevron-right');

    function checkClients() {
        if ($('.testim .client:last').hasClass("active")) {
            RightArrow.hide();
        } else {
            RightArrow.show();
        }
        if ($('.testim .client:first').hasClass("active")) {
            leftArrow.hide();
        } else {
            leftArrow.show();
        }

    }
    checkClients();
    $(".testim i").click(function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $(".testim .active").fadeOut(100, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients();
            });

        } else {

            $(".testim .active").fadeOut(100, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients();
            });

        }
    });
    $('.header .arrow').click(function () {
        $('html').animate({
            scrollTop: $('.feature').offset().top
        });
    });

});
