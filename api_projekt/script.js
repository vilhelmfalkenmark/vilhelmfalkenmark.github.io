/**
 * Created by vilhelmfalkenmark on 15-03-02.
 */
window.onload = function () {
    SC.initialize
    ({
        client_id: "9ef9ad7ddf97e37861474194ecabd1c9"
    });
    document.getElementById("searchButton").addEventListener("click", function (e)
    {
        var myTrack = document.getElementById("myTrack").value;
        var myBPM = document.getElementById("myBPM").value;
        e.preventDefault();
        playSomeSound(myTrack,myBPM);
    })
};
function playSomeSound(a, b) {
    SC.get(
        '/tracks',
        {
            genres: a, // genres
            bpm:{
                from: b
            }
        },
        function(tracks) { // Är en array som hämtas hem
            var myTrack = document.getElementById("myTrack").value;

            var error = document.getElementById("error");
            var numberofTracks = document.getElementById("numberofTracks").value;

            if(tracks.length == 0 || myTrack == "")
            {
                error.style.display = "block";
            }
            else
            {
                error.style.display = "none";
                var error2 = document.getElementById("error2");
                if(numberofTracks=="")
                {
                    error2.style.display = "block";
                }
                else
                {
                    error2.style.display = "none";

                    var targetContainer = document.getElementById("targetContainer");
                        while (targetContainer.hasChildNodes()) {
                            targetContainer.removeChild(targetContainer.lastChild);
                }
                for (var i = 0; i < numberofTracks; i++)
                {
                    var div = document.createElement("div");
                    div.setAttribute("id", "target" + i);

                    SC.oEmbed(tracks[i].uri,{auto_play: false},div);
                    targetContainer.appendChild(div);

                    var error3 =   document.getElementById("error3");
                    if(tracks.length < numberofTracks)
                    {
                      error3.style.display = "block";
                      error3.innerHTML = "Du sökte på "+numberofTracks+" träffar men endast "+tracks.length+" kunde hittas";
                    }
                    else
                    {
                        error3.style.display = "none";
                    }
                }
                if(targetContainer.childNodes.length == 0)
                {
                    document.getElementById("error").innerHTML = "Track not found!"
                }
                }
            }
        });
}





