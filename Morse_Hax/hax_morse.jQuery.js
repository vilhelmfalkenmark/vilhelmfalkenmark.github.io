/**
 * Created by vilhelmfalkenmark on 2015-02-13.
 */
$(document).ready(function(){


    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });


   $('#aboutUsList').click( function() {

        //$('#showTranslateMorse').fadeOut("slow");
        $('#aboutTheProject').fadeOut("slow");
       // $("#haxContainer").fadeOut("slow");
        $("#aboutUs").fadeIn("slow");
       $(".info").fadeOut("slow");
       $("#headerButtons").fadeOut("slow");


   });



    $('#aboutTheProjectList').click( function() {

        $('#aboutUs').fadeOut("slow");
        $(".info").fadeOut("slow");
        $("#headerButtons").fadeOut("slow");

        $("#aboutTheProject").fadeIn("slow");
    });










    $(".menu-toggle-btn").click(function() {
        $(this).toggleClass("open");
        $("#topMenu").slideToggle(600);
        $('#aboutTheProject').fadeOut("slow");
        $('#aboutUs').fadeOut("slow");
        $(".info").fadeIn("slow");
        $("#headerButtons").fadeIn("slow");
        return false;
    });

    $("#howDoesMorseWork").click(function() {
        $("#howMorseWorks").toggle(600);
        return false;
    });
    $("#howDoesHaxWork").click(function() {
        $("#howHaxWorks").toggle(600);
        return false;
    });





});