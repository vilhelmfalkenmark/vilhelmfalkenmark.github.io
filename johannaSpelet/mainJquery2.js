/**
 * Created by vilhelmfalkenmark on 2015-01-20.
 */
/**
 * Created by vilhelmfalkenmark on 2015-01-19.
 */
/**
 * Created by vilhelmfalkenmark on 2015-01-19.
 */

$(document).ready(function(){

    $('#q1').click( function() {

        $('.questionDivRound1').fadeOut();
        $('#firstQuestion').fadeOut("slow");
        $(".questionDivRound2").fadeIn();
        $("#secondQuestion").fadeIn("slow");

    });

    $('#q2').click(function(){
        $('.questionDivRound1').fadeOut();
        $('#firstQuestion').fadeOut("slow");
        $(".questionDivRound3").fadeIn();
        $("#thirdQuestion").fadeIn("slow");

    });

    $('#q3').click(function(){
        $('.questionDivRound1').fadeOut();
        $('#firstQuestion').fadeOut("slow");
        $(".questionDivRound4").fadeIn();
        $("#fourthQuestion").fadeIn("slow");

    });

    $('#q4').click(function(){
        $('.questionDivRound2').fadeOut();
        $('#secondQuestion').fadeOut("slow");

        $(".questionDivRound5").fadeIn();
        $("#fifthQuestion").fadeIn("slow");

    });

    $("#q5").click(function(){
        $('.questionDivRound2').fadeOut();
        $('#secondQuestion').fadeOut("slow");

        $(".questionDivRound6").fadeIn();
        $("#sixthQuestion").fadeIn("slow");

    });

    $('#q6').click(function(){
        $('.questionDivRound2').fadeOut();

        $('#secondQuestion').fadeOut("slow");
        $(".questionDivRound3").fadeIn();
        $("#thirdQuestion").fadeIn("slow");

    });

    $('#q7').click(function(){
        $('.questionDivRound3').fadeOut();

        $('#thirdQuestion').fadeOut("slow");
        $(".questionDivRound7").fadeIn();
        $("#seventhQuestion").fadeIn("slow");

    });

    $('#q19').click(function(){
        $('.questionDivRound7').fadeOut();

        $('#seventhQuestion').fadeOut("slow");
        $(".questionDivRound8").fadeIn();
        $("#eightQuestion").fadeIn("slow");

    });


    $("#q20").click(function(){
        $('.questionDivRound7').fadeOut();
        $('#seventhQuestion').fadeOut("slow");

        $(".questionDivRound6").fadeIn();
        $("#ninthQuestion").fadeIn("slow");

    });


    $("#q8").click(function(){
        $('.questionDivRound3').fadeOut();
        $('#thirdQuestion').fadeOut("slow");

        $(".questionDivRound8").fadeIn();
        $("#tenthQuestion").fadeIn("slow");

    });

    $("#q9").click(function(){
        $('.questionDivRound3').fadeOut();
        $('#thirdQuestion').fadeOut("slow");

        $(".questionDivRound8").fadeIn();
        $("#tenthQuestion").fadeIn("slow");

    });



    $("#q10").click(function(){
        $('.questionDivRound4').fadeOut();
        $('#fourthQuestion').fadeOut("slow");

        $(".questionDivRound9").fadeIn();
        $("#eleventhQuestion").fadeIn("slow");

    });

    $("#q11").click(function(){
        $('.questionDivRound4').fadeOut();
        $('#fourthQuestion').fadeOut("slow");

        $(".questionDivRound10").fadeIn();
        $("#twelvthQuestion").fadeIn("slow");

    });


    $("#q12").click(function(){
        $('.questionDivRound4').fadeOut();
        $('#fourthQuestion').fadeOut("slow");

        $(".questionDivRound11").fadeIn();
        $("#thirteenthQuestion").fadeIn("slow");

    });


    $("#q29").click(function(){
        $('.questionDivRound11').fadeOut();
        $('#thirteenthQuestion').fadeOut("slow");

        $(".questionDivRound9").fadeIn();
        $("#eleventhQuestion").fadeIn("slow");

    });



    $("#q15").click(function(){
        $('.questionDivRound5').fadeOut();
        $('#fifthQuestion').fadeOut("slow");

        $(".questionDivRound12").fadeIn();
        $("#fourteenthQeustion").fadeIn("slow");

    });




    $("#q28").click(function(){
        $('.questionDivRound11').fadeOut();
        $('#thirteenthQuestion').fadeOut("slow");



        $(".questionDivRound13").fadeIn();
        $("#fifteenthQeustion").fadeIn("slow");

    });


    $("#q25").click(function(){
        $('.questionDivRound10').fadeOut();
        $('#twelvthQuestion').fadeOut("slow");



        $(".questionDivRound13").fadeIn();
        $("#fifteenthQeustion").fadeIn("slow");

    });

    $("#q39").click(function(){
        $('.questionDivRound13').fadeOut();
        $('#fifteenthQeustion').fadeOut("slow");



        $(".questionDivRound12").fadeIn();
        $("#fourteenthQeustion").fadeIn("slow");

    });

    $("#q34").click(function(){
        $('.questionDivRound12').fadeOut();
        $('#fourteenthQeustion').fadeOut("slow");



        $(".questionDivRound14").fadeIn();
        $("#sixteenthQeustion").fadeIn("slow");

    });


    $("#q37").click(function(){
        $('.questionDivRound13').fadeOut();
        $('#fifteenthQeustion').fadeOut("slow");



        $(".questionDivRound15").fadeIn();
        $("#seventeenthQeustion").fadeIn("slow");

    });





    // HÄR TAR ALTERNATIVEN SLUT OCH SLUTRESULTATSTEXTEN BÖRJAR


    $("#q22, #q23, #q24").click(function(){
        $('.headerQuestion').fadeOut();
        $(".questionDivRound9").fadeOut();
        $("#pointMarker").fadeOut();

        $("#resultat").fadeIn("slow");
    });

    $("#q13, #q14").click(function(){
        $('.headerQuestion').fadeOut();
        $(".questionDivRound5").fadeOut();
        $("#pointMarker").fadeOut();

        $("#resultat").fadeIn("slow");
    });

    $("#q16, #q17, #q18").click(function(){
        $('.headerQuestion').fadeOut();
        $(".questionDivRound6").fadeOut();
        $("#pointMarker").fadeOut();

        $("#resultat").fadeIn("slow");
    });

    $("#q31, #q32, #q33").click(function(){
        $('.headerQuestion').fadeOut();
        $(".questionDivRound8").fadeOut();
        $("#pointMarker").fadeOut();

        $("#resultat").fadeIn("slow");
    });

    $("#q35, #q36").click(function(){
        $('.headerQuestion').fadeOut();
        $(".questionDivRound12").fadeOut();
        $("#pointMarker").fadeOut();

        $("#resultat").fadeIn("slow");
    });

    $("#q30").click(function(){
        $('.headerQuestion').fadeOut();
        $(".questionDivRound11").fadeOut();
        $("#pointMarker").fadeOut();

        $("#resultat").fadeIn("slow");
    });

    $("#q40, #q41, #q42").click(function(){
        $('.headerQuestion').fadeOut();
        $(".questionDivRound14").fadeOut();
        $("#pointMarker").fadeOut();

        $("#resultat").fadeIn("slow");
    });


    $("#q21").click(function(){
        $('.headerQuestion').fadeOut();
        $(".questionDivRound7").fadeOut();
        $("#pointMarker").fadeOut();

        $("#resultat").fadeIn("slow");
    });

    $("#q26, #q27").click(function(){
        $('.headerQuestion').fadeOut();
        $(".questionDivRound10").fadeOut();
        $("#pointMarker").fadeOut();

        $("#resultat").fadeIn("slow");
    });

    $("#q38").click(function(){
        $('.headerQuestion').fadeOut();
        $(".questionDivRound13").fadeOut();
        $("#pointMarker").fadeOut();

        $("#resultat").fadeIn("slow");
    });

    $("#q43, #q44").click(function(){
        $('.headerQuestion').fadeOut();
        $(".questionDivRound15").fadeOut();
        $("#pointMarker").fadeOut();
        $("#resultat").fadeIn("slow");
    });

});
