/**
 * Created by vilhelmfalkenmark on 2015-03-03.
 */
/**
 * Created by vilhelmfalkenmark on 15-03-02.
 */


window.onload = function () {
    SC.initialize({
        client_id: '9ef9ad7ddf97e37861474194ecabd1c9'
        //   client_secret: "269ccfaed48473eb381f4ab404f71984"
    });
};
function playSomeSound(a) {
    SC.get(
        '/tracks',
        {
            genres: a // DET SKA VAR GENRES

            /*    bpm:{
             from:100
             }*/
            // title: a
            // tag_list: b
        },
        // console.log(a),

        function (tracks)
        {
            var numberofTracks = document.getElementById("numberofTracks").value;

            console.log(numberofTracks);

            for (var i = 0; i < numberofTracks; i++) {

                var div = document.createElement("div");
                div.setAttribute("id", "target" + i);
                SC.oEmbed(tracks[i].uri, {auto_play: false}, document.getElementById('target' + i));

                console.log(i);

                var targetContainer = document.getElementById("targetContainer");

                targetContainer.appendChild(div);
            }

            /*  for(var i=0;i<random.length;i++)
             {
             var targetContainer = document.getElementById("targetContainer");

             var div = document.createElement("div");

             div.setAttribute("id","target"+random);*/
        });
}

trackSearch = function () {
    var myTrack = document.getElementById("myTrack").value;
    // e.preventDefault();
    playSomeSound(myTrack)
};





/*
 Steg ett; skapa. var xhr = new XMLHttpRequest();
 Steg två; callback xhr.onreadystatechange = function() {if(xhr.readyState === 4){console.log("Funkar!!")}};
 Steg tre; öppna xhr.open("GET", ”aboutme.html");
 Steg fyra; skicka xhr.send();
 */