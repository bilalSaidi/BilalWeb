/*global $, document,window */
$(document).ready(function () {
    "use strict";

    $('.carousel').carousel({
        interval: 9000
    });

    // show div Color Option When Click Gear
    $(".check-gear").click(function () {
        $(".color-option").fadeToggle(200);
    });

    // Change Color On Click

    var MakeChange = $(".color-option ul li"),
        scrollButton = $("#scroll-top");
    MakeChange

            .eq(0).css("backgroundColor", "#E41B17").end()
            .eq(1).css("backgroundColor", "#00bcd4").end()
            .eq(2).css("backgroundColor", "green").end()
            .eq(3).css("backgroundColor", "orange").end()
            .eq(4).css("backgroundColor", "yellow");
    MakeChange.click(function () {

        $("link[href*='theme']").attr("href", $(this).attr("data-value"));

    });

    /* Show And Hide Button Scroll */
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
       
    });

    /* Make Scroll Top */

    scrollButton.click(function () {
        $("html,body").animate({scrollTop : 0 }, 600);
    });

});

// Start Loading Spinenr
$(window).on('load', function () {
    "use strict";
    $(".loading-spinenr .spinner").fadeOut(2000, function () {
        $("body").css("overflow", "auto");
        $(this).parent().fadeOut(2000, function () {
            $(this).remove();
        });
    });
});