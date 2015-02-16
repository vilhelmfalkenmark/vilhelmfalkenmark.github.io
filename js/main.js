/**
 * Created by vilhelmfalkenmark on 15-01-13.
 */

$(document).ready(function() {

    $(".hide").css({
        "display": "none"
    });


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


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= $('#header').height())
          {
            $(".menulistItem").css({"display":"block"});
          }
        else {

            $(".menulistItem").css({"display":"inline-block"});

        }
    });






    $('#lifeStoryButton').click(function() {

        $('#skillsAndResumeContent').hide("slow");
        $('#randomStuffContent').hide("slow");
        $("#lifeStoryContent").show("slow");
      });

 $('#skillsButton').click(function() {

        $('#randomStuffContent').hide("slow");
        $('#lifeStoryContent').hide("slow");
        $("#skillsAndResumeContent").show("slow");
      });

 $('#randomButton').click(function() {

        $('#skillsAndResumeContent').hide("slow");
        $('#lifeStoryContent').hide("slow");
        $("#randomStuffContent").show("slow");
      });

});