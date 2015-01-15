/**
 * Created by vilhelmfalkenmark on 15-01-13.
 */

$( document ).ready(function() {


   /* $(window).resize(function(){
        if ($(".lifeStoryContent").css("display") == "inline-block" ){
            // your code here
        }
    });

    */

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
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


    $("#hireMe").click(function() {
        $("#myServices").fadeIn("slow");
    });

    $("#handShake").click(function() {
        $("#myServices").fadeIn("slow");
    });

});