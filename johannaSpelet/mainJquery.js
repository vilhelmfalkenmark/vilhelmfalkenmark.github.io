/**
 * Created by vilhelmfalkenmark on 2015-01-19.
 */
/**
 * Created by vilhelmfalkenmark on 2015-01-19.
 */

$(document).ready(function(){


    $(function () {
        $('#wrapper').fadeIn('10000');
    });

        $('#q1').click( function() {

        $('.questionDivRound1').hide();
        $('#firstQuestion').hide("slow");
        $(".questionDivRound2").show();
        $("#secondQuestion").show("slow");

    });

    $('#q2').click(function(){
        $('.questionDivRound1').hide();
        $('#firstQuestion').hide("slow");
        $(".questionDivRound3").show();
        $("#thirdQuestion").show("slow");

    });

    $('#q3').click(function(){
        $('.questionDivRound1').hide();
        $('#firstQuestion').hide("slow");
        $(".questionDivRound4").show();
        $("#fourthQuestion").show("slow");

    });

    $('#q4').click(function(){
        $('.questionDivRound2').hide();
        $('#secondQuestion').hide("slow");

        $(".questionDivRound5").show();
        $("#fifthQuestion").show("slow");

    });

    $("#q5").click(function(){
        $('.questionDivRound2').hide();
        $('#secondQuestion').hide("slow");

        $(".questionDivRound6").show();
        $("#sixthQuestion").show("slow");

    });

    $('#q6').click(function(){
        $('.questionDivRound2').hide();

        $('#secondQuestion').hide("slow");
        $(".questionDivRound3").show();
        $("#thirdQuestion").show("slow");

    });

    $('#q7').click(function(){
        $('.questionDivRound3').hide();

        $('#thirdQuestion').hide("slow");
        $(".questionDivRound7").show();
        $("#seventhQuestion").show("slow");

    });

    $('#q19').click(function(){
        $('.questionDivRound7').hide();

        $('#seventhQuestion').hide("slow");
        $(".questionDivRound8").show();
        $("#eightQuestion").show("slow");

    });


    $("#q20").click(function(){
        $('.questionDivRound7').hide();
        $('#seventhQuestion').hide("slow");

        $(".questionDivRound6").show();
        $("#ninthQuestion").show("slow");

    });


    $("#q8").click(function(){
        $('.questionDivRound3').hide();
        $('#thirdQuestion').hide("slow");

        $(".questionDivRound8").show();
        $("#tenthQuestion").show("slow");

    });

    $("#q9").click(function(){
        $('.questionDivRound3').hide();
        $('#thirdQuestion').hide("slow");

        $(".questionDivRound8").show();
        $("#tenthQuestion").show("slow");

    });



    $("#q10").click(function(){
        $('.questionDivRound4').hide();
        $('#fourthQuestion').hide("slow");

        $(".questionDivRound9").show();
        $("#eleventhQuestion").show("slow");

    });

    $("#q11").click(function(){
        $('.questionDivRound4').hide();
        $('#fourthQuestion').hide("slow");

        $(".questionDivRound10").show();
        $("#twelvthQuestion").show("slow");

    });


    $("#q12").click(function(){
        $('.questionDivRound4').hide();
        $('#fourthQuestion').hide("slow");

        $(".questionDivRound11").show();
        $("#thirteenthQuestion").show("slow");

    });


    $("#q29").click(function(){
        $('.questionDivRound11').hide();
        $('#thirteenthQuestion').hide("slow");

        $(".questionDivRound9").show();
        $("#eleventhQuestion").show("slow");

    });



    $("#q15").click(function(){
        $('.questionDivRound5').hide();
        $('#fifthQuestion').hide("slow");

        $(".questionDivRound12").show();
        $("#fourteenthQeustion").show("slow");

    });




    $("#q28").click(function(){
        $('.questionDivRound11').hide();
        $('#thirteenthQuestion').hide("slow");



        $(".questionDivRound13").show();
        $("#fifteenthQeustion").show("slow");

    });


    $("#q25").click(function(){
        $('.questionDivRound10').hide();
        $('#twelvthQuestion').hide("slow");



        $(".questionDivRound13").show();
        $("#fifteenthQeustion").show("slow");

    });

    $("#q39").click(function(){
        $('.questionDivRound13').hide();
        $('#fifteenthQeustion').hide("slow");



        $(".questionDivRound12").show();
        $("#fourteenthQeustion").show("slow");

    });

    $("#q34").click(function(){
        $('.questionDivRound12').hide();
        $('#fourteenthQeustion').hide("slow");



        $(".questionDivRound14").show();
        $("#sixteenthQeustion").show("slow");

    });


    $("#q37").click(function(){
        $('.questionDivRound13').hide();
        $('#fifteenthQeustion').hide("slow");



        $(".questionDivRound15").show();
        $("#seventeenthQeustion").show("slow");

    });





    // HÄR TAR ALTERNATIVEN SLUT OCH SLUTRESULTATSTEXTEN BÖRJAR


    $("#q22, #q23, #q24").click(function(){
        $('.headerQuestion').hide();
        $(".questionDivRound9").hide();
        $("#pointMarker").hide();

        $("#resultat").show("slow");
    });

    $("#q13, #q14").click(function(){
        $('.headerQuestion').hide();
        $(".questionDivRound5").hide();
        $("#pointMarker").hide();

        $("#resultat").show("slow");
    });

    $("#q16, #q17, #q18").click(function(){
        $('.headerQuestion').hide();
        $(".questionDivRound6").hide();
        $("#pointMarker").hide();

        $("#resultat").show("slow");
    });

    $("#q31, #q32, #q33").click(function(){
        $('.headerQuestion').hide();
        $(".questionDivRound8").hide();
        $("#pointMarker").hide();

        $("#resultat").show("slow");
    });

    $("#q35, #q36").click(function(){
        $('.headerQuestion').hide();
        $(".questionDivRound12").hide();
        $("#pointMarker").hide();

        $("#resultat").show("slow");
    });

    $("#q30").click(function(){
        $('.headerQuestion').hide();
        $(".questionDivRound11").hide();
        $("#pointMarker").hide();

        $("#resultat").show("slow");
    });

    $("#q40, #q41, #q42").click(function(){
        $('.headerQuestion').hide();
        $(".questionDivRound14").hide();
        $("#pointMarker").hide();

        $("#resultat").show("slow");
    });


    $("#q21").click(function(){
        $('.headerQuestion').hide();
        $(".questionDivRound7").hide();
        $("#pointMarker").hide();

        $("#resultat").show("slow");
    });

    $("#q26, #q27").click(function(){
        $('.headerQuestion').hide();
        $(".questionDivRound10").hide();
        $("#pointMarker").hide();

        $("#resultat").show("slow");
    });

    $("#q38").click(function(){
        $('.headerQuestion').hide();
        $(".questionDivRound13").hide();
        $("#pointMarker").hide();

        $("#resultat").show("slow");
    });

    $("#q43, #q44").click(function(){
        $('.headerQuestion').hide();
        $(".questionDivRound15").hide();
        $("#pointMarker").hide();

        $("#resultat").show("slow");
    });

});