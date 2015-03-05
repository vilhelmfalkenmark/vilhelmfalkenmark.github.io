/**
 * Created by vilhelmfalkenmark on 2015-03-03.
 */
/**
 * Created by vilhelmfalkenmark on 15-03-02.
 */
function playsomeSounds(genre)
 {
 console.log(genre);
 SC.get("/tracks",
 {
 genres: genre,
 bpm: {
 from: 100
 }
 }, function(tracks)
 {

 //var random = 23;
  var random = Math.floor(Math.random()*49);
 SC.oEmbed(tracks[random].uri, {auto_play: true },document.getElementById("target"));
 });
 //console.log("DRA ÅT HELVETE");

 }


 window.onload= function()
 {
    SC.initialize(
        {
 client_id: '9ef9ad7ddf97e37861474194ecabd1c9'
    });
    var menuLinks = document.getElementsByClassName("genre");
 // menuLinks.onclick =
 //  var myLink = document.getElementById("myLink");

        for(var i = 0; i<menuLinks.length; i++)
        {
            var menuLink = menuLinks[i];
            menuLink.onclick = function(e)
            {
                 e.preventDefault();
                    playsomeSounds(menuLink.innerHTML);
                };
            }
        };




/*SC.initialize({
 client_id: "d23c4b97c802d273560da466e784d764"
 });

 $(document).ready(function() {
 SC.get("/tracks/293",function(track)
 {
 SC.get('/tracks/293', function(track) {
 SC.oEmbed(track.permalink_url, document.getElementById('player'));
 });
 });
 });*/

/*
 SC.initialize({
 client_id: 'd23c4b97c802d273560da466e784d764'
 });

 var track_url = 'http://soundcloud.com/forss/flickermood';
 SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
 console.log('oEmbed response: ' + oEmbed);
 });

 */