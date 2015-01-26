/**
 * Created by vilhelmfalkenmark on 2015-01-19.
 */

// Det här är poängräknaren

var pointsList = [-5, 20, 10, -10, /* q5--> */20,/* <--q5 */20, -10, 15, 5,/* q10--> */ -10,/* <--q10 */ 15, 5, -10, -15, /* q15--> */10,/* <--q15 */ 30, -10, -25, 25, /* q20--> */15,/* <--q20 */ -5, -10, -15, -10, /* q25--> */-5,/* <--q25 */15, -5, -5 ,-10, /* q30--> */-5,/* <--q30 */25, -10, -20, 10, /* q35--> */25,/* <--q35 */ -5 ,-10 , 15, 10, /* q40--> */-5,/* <--q40 */ -15, -5, 20, -20];
var basketList = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function gettotalScore()
{
    var totalScore = pointsList[0]*basketList[0]+pointsList[1]*basketList[1]+pointsList[2]*basketList[2]+pointsList[3]*basketList[3]+pointsList[4]*basketList[4]+pointsList[5]*basketList[5]+pointsList[6]*basketList[6]+pointsList[7]*basketList[7]+pointsList[8]*basketList[8]+pointsList[9]*basketList[9]+pointsList[10]*basketList[10]+pointsList[11]*basketList[11]+pointsList[12]*basketList[12]+pointsList[13]*basketList[13]+pointsList[14]*basketList[14]+pointsList[15]*basketList[15]+pointsList[16]*basketList[16]+pointsList[17]*basketList[17]+pointsList[18]*basketList[18]+pointsList[19]*basketList[19]+pointsList[20]*basketList[20]+pointsList[21]*basketList[21]+pointsList[22]*basketList[22]+pointsList[23]*basketList[23]+pointsList[24]*basketList[24]+pointsList[25]*basketList[25]+pointsList[26]*basketList[26]+pointsList[27]*basketList[27]+pointsList[28]*basketList[28]+pointsList[29]*basketList[29]+pointsList[30]*basketList[30]+pointsList[31]*basketList[31]+pointsList[32]*basketList[32]+pointsList[33]*basketList[33]+pointsList[34]*basketList[34]+pointsList[35]*basketList[35]+pointsList[36]*basketList[36]+pointsList[37]*basketList[37]+pointsList[38]*basketList[38]+pointsList[39]*basketList[39]+pointsList[40]*basketList[40]+pointsList[41]*basketList[41]+pointsList[42]*basketList[42]+pointsList[43]*basketList[43];

    return totalScore;
}

function updateScore(updateScore)
{

    basketList[updateScore] += 1;

    var pointCounter = document.getElementById("pointCounter");


    pointCounter.innerHTML = "Du har "+gettotalScore()+" poäng";

    var resultat = document.getElementById("resultat");

    // NEDAN ÄR ENDAST IF/ELSE Satserna för slutresultatet
    if(gettotalScore()==0)
    {
        resultat.innerHTML = "Du fick inga poäng och verkar inte känna Johanna särskilt bra. Det blir nog soffan för dig inatt";
    }
    else if(gettotalScore()<=0 && gettotalScore()>=-10)
    {
        resultat.innerHTML = "Du fick "+gettotalScore()+ " poäng vilket är riktigt dåligt. Sannolikt så kommer du inte överleva natten."+ "<br>"+"Johanna gör slut och blir ihop med Tim igen. Hur känns det?";
    }
    else if(gettotalScore()<=-10)
    {
        resultat.innerHTML = "Du fick "+gettotalScore()+ " poäng och är en självmordsbenägen ung man verkar det som. Johanna avskedar dig från förhållandet och du förlorar. Riktigt dåligt resultat";
    }
    else if(gettotalScore()>=0 && gettotalScore()<=10)
    {
        resultat.innerHTML = "Du fick "+gettotalScore()+ " poäng vilket inte är så jättebra. Du blir inte mördad ikväll men räkna med att sova med hennes rygg vänd mot dig. Johanna kommer nog se sig runt efter en ny pojkvän rätt snart.";
    }
    else if(gettotalScore()>=10 && gettotalScore()<=20)
    {
        resultat.innerHTML = "Du fick "+gettotalScore()+ " poäng vilket är OK."+" <br> "+"Dock så verkar du inte vara någon större Johanna-kännare.";
    }
    else if(gettotalScore()>=20 && gettotalScore()<=30)
    {
        resultat.innerHTML = "Du fick "+gettotalScore()+ " poäng! Det är ett bra resultat. Det blir en trevlig kväll för Johanna trots allt.";
    }
    else if(gettotalScore()>=30)
    {
        resultat.innerHTML = "Du fick "+gettotalScore()+ " poäng! Det är ett sjukt bra resultat. Du verkar känna Johanna riktigt bra! Det blir 100% garanterat en fortsättning på erat förhållande trots snedstegen du begick under dagen. Innan Johanna somnar så tänker hon på vilken fantastisk kille du är och vad era barn ska heta. Lille-Mor och Willgott. Det är bra traditionella namn. Grattis till ett fantastiskt resultat!!!";
    }
}



