/**
 * Created by vilhelmfalkenmark on 2015-02-28.
 */

$(document).ready(function() {

    $(".menu-toggle-btn").click(function() {
        $(this).toggleClass("open");
        $("#top-mobile-menu").slideToggle(600);
        return false;
    });

});