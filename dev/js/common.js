//var $ = require("jquery");




    // init nav menu
    $(document).ready(function () {
    $(".button-collapse").sideNav();
    
    // section#start overlay opacity by scrolling 
    $(window).on("scroll", function () {
        var sstart = $("#start"),
            overlay = $(".overlay"),
            overlayIMG = $(".overlay_img"),
            sheight = sstart.height(),
            winST = $(window).scrollTop();
            overlay.css("opacity", winST/sheight);
            overlayIMG.css("opacity", winST/sheight);
    });
        
        // random overlay color at section#start
        var arrColors = [
            "img/bg_start_big_overlay_paren_orangeP.png",
            "img/bg_start_big_overlay_paren_orange.png",
            "img/bg_start_big_overlay_paren_darkBlue.png",
            "img/bg_start_big_overlay_paren_coral.png",
            "img/bg_start_big_overlay_paren_grey.png"
        ];
        function randomInteger(min, max) {
            var rand = min + Math.random() * (max + 1 - min);
            rand = Math.floor(rand);
            return rand;
        }
        $(".overlay_img").attr("src", arrColors[randomInteger(0, 4)]);
        
    
    // hover effect of button in section#start 
    $(".getCons").on("mouseenter", function(){
        $("#start .containerr").addClass("hoverButton");
    });
    $(".getCons").on("mouseleave", function(){
        $("#start .containerr").removeClass("hoverButton");
    });
    
    // header appearing after start-section is scrolled
    if ($(window).scrollTop() + 5 > $("#underStart").offset().top) {
        $("header").css("top", "0");
    }
    $(window).on("scroll", function () {
        if($("#underStart").offset().top - $(window).scrollTop() - 5 < 0) {
                $("header").css("top", "0");
           } else  {
               $("header").css("top", "");
           }
    });


    // parallax init
    $('.parallax').parallax();

    //add preloader of scrolling
    $("<div id='contPreloader'><div id='scrollPreload'></div></div>").prependTo($("body"));
    $(window).scroll(function () {
        var ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
        $("#scrollPreload").width(ratio + "%");
    });



    // change header style by scrolling
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 77) {

            $("header .logo").css("margin", "0px");
            //$("header").css("background", "rgba(255,255,255,.85)");
        } else {
            $("header .logo").css("margin", "");
            //$("header").css("background", "");
        }
    });

    /*

        // inner anchor-links
        $('a[data-target^="anchor"], [data-target^="anchor"] ').on("click.smoothscroll", function () {
            var target = $(this).attr("href"),
                bl_top = $(target).offset().top - 56;
            $('body, html').animate({
                scrollTop: bl_top
            }, 700);
            return false;
        });
    */

    // buttton UP
    // button arrow to UP

    $("body").append("<button class='btn_up'/>");

    $(window).scroll(function () {
        var windscroll = $(window).scrollTop();
        if ($(window).scrollTop() > 50) {
            $(".btn_up").addClass("activeB");
        } else {
            $(".btn_up").removeClass("activeB");
        }

    });

    $(".btn_up").on("click", function (e) {
        e.preventDefault();
        $(this).removeClass("activeB");
        $("body").animate({
            'scrollTop': 0
        }, 800);
        $("html").animate({
            'scrollTop': 0
        }, 800);

    });

    /*
    // heightlite nav links by scrolling
    $(document).scroll(function () {

        navigationAnchors(1);
        navigationAnchors(2);
        navigationAnchors(3);
        navigationAnchors(4);
        navigationAnchors(5);
        navigationAnchors(6);
        navigationAnchors(7);
        navigationAnchors(8);
        navigationAnchors(9);

        function navigationAnchors(n) {
            if (($(`[data-pos='pos-${n}']`).offset().top - $(window).scrollTop()) - 300 < 0) {
                if (!$(`[data-pos='pos-${n}']`).next().offset().top - $(window).scrollTop() - 300 < 0) {
                    $(`nav a.link-${n}`).parent().siblings().children().removeClass('activeNavLink');
                    //                    console.dir($(`.nav a.link-${n}`).parent().siblings());
                    $(`nav a.link-${n}`).addClass('activeNavLink');
                } else {
                    $(`nav a.link-${n}`).removeClass('activeNavLink');
                }
            } else {
                $(`nav a.link-${n}`).removeClass('activeNavLink');
            }
        }
    });

*/





});