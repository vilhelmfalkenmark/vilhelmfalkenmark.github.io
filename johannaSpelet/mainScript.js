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


function updatescoreStock()
{
    document.getElementsByClassName("question1").innerHTML =  pointsList[0];

    document.getElementsByClassName("question2").innerHTML =  pointsList[1];
    document.getElementsByClassName("question3").innerHTML =  pointsList[2];
    document.getElementsByClassName("question4").innerHTML =  pointsList[3];
    document.getElementsByClassName("question5").innerHTML =  pointsList[4];
    document.getElementsByClassName("question6").innerHTML =  pointsList[5];
    document.getElementsByClassName("question7").innerHTML =  pointsList[6];
    document.getElementsByClassName("question8").innerHTML =  pointsList[7];
    document.getElementsByClassName("question9").innerHTML =  pointsList[8];
    document.getElementsByClassName("question10").innerHTML = pointsList[9];
    document.getElementsByClassName("question11").innerHTML = pointsList[10];

    document.getElementsByClassName("question12").innerHTML = pointsList[11];
    document.getElementsByClassName("question13").innerHTML = pointsList[12];
    document.getElementsByClassName("question14").innerHTML = pointsList[13];
    document.getElementsByClassName("question15").innerHTML = pointsList[14];
    document.getElementsByClassName("question16").innerHTML = pointsList[15];
    document.getElementsByClassName("question17").innerHTML = pointsList[16];
    document.getElementsByClassName("question18").innerHTML = pointsList[17];
    document.getElementsByClassName("question19").innerHTML = pointsList[18];
    document.getElementsByClassName("question20").innerHTML = pointsList[19];
    document.getElementsByClassName("question21").innerHTML = pointsList[20];

    document.getElementsByClassName("question22").innerHTML = pointsList[21];
    document.getElementsByClassName("question23").innerHTML = pointsList[22];
    document.getElementsByClassName("question24").innerHTML = pointsList[23];
    document.getElementsByClassName("question25").innerHTML = pointsList[24];
    document.getElementsByClassName("question26").innerHTML = pointsList[25];
    document.getElementsByClassName("question27").innerHTML = pointsList[26];
    document.getElementsByClassName("question28").innerHTML = pointsList[27];
    document.getElementsByClassName("question29").innerHTML = pointsList[28];
    document.getElementsByClassName("question30").innerHTML = pointsList[29];
    document.getElementsByClassName("question31").innerHTML = pointsList[30];

    document.getElementsByClassName("question32").innerHTML = pointsList[31];
    document.getElementsByClassName("question33").innerHTML = pointsList[32];
    document.getElementsByClassName("question34").innerHTML = pointsList[33];
    document.getElementsByClassName("question35").innerHTML = pointsList[34];
    document.getElementsByClassName("question36").innerHTML = pointsList[35];
    document.getElementsByClassName("question37").innerHTML = pointsList[36];
    document.getElementsByClassName("question38").innerHTML = pointsList[37];
    document.getElementsByClassName("question39").innerHTML = pointsList[38];
    document.getElementsByClassName("question40").innerHTML = pointsList[39];
    document.getElementsByClassName("question41").innerHTML = pointsList[40];
    document.getElementsByClassName("question42").innerHTML = pointsList[41];
    document.getElementsByClassName("question43").innerHTML = pointsList[42];
    document.getElementsByClassName("question44").innerHTML = pointsList[43];




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
        resultat.innerHTML = "Du fick mellan -10 &  0 poäng vilket är riktigt dåligt. Alltså riktigt  uruselt. Sannolikt så komme du inte överleva natten."+ "<br>"+"För att vara exakt så fick du "+gettotalScore()+ " värdelösa poäng! Asså, vad dålig du är. Johanna gör slut och blir ihop med Tim igen. Hur känns det?";
    }
    else if(gettotalScore()<=-10)
    {
        resultat.innerHTML = "Du är en självmordsbenägen ung man verkar det som. Johanna avskedar dig från förhållandet och du förlorar. Du förlorar som bara den. Riktigt riktigt riktigt dåligt resultat"+"<br>"+ "För att vara exakt så fick du "+gettotalScore()+ " sjukt låga poäng! Asså, vi upprepar... DU FICK "+gettotalScore()+ " POÄNG!!! Rekorddåligt. Verkligen verkligen dåligt.";
    }
    else if(gettotalScore()>=0 && gettotalScore()<=10)
    {
        resultat.innerHTML = "Du fick mellan 0 och 10 poäng vilket inte är så jättebra. Du blir inte mördad ikväll men räkna med att sova med hennes rygg vänd mot dig."+" <br>"+"För att vara exakt så fick du "+gettotalScore()+ " poäng! Johanna kommer nog se sig runt efter en ny pojkvän rätt snart.";
    }
    else if(gettotalScore()>=10 && gettotalScore()<=20)
    {
        resultat.innerHTML = "Du fick mellan 10 och 20 poäng vilket är OK."+" <br> "+"För att vara exakt så fick du "+gettotalScore()+ " poäng!";
    }
    else if(gettotalScore()>=20 && gettotalScore()<=30)
    {
        resultat.innerHTML = "Du fick "+gettotalScore()+ " poäng! Det är ett bra resultat. Du har räddat Johannas kväll. Det blir en trevlig kväll för Johanna trots allt.";
    }
    else if(gettotalScore()>=30)
    {
        resultat.innerHTML = "Du fick "+gettotalScore()+ " poäng! Det är ett sjukt bra resultat. Du verkar känna Johanna riktigt bra! Det blir 100% garanterat en fortsättning på erat förhållande trots snedstegen du begick under dagen. Innan Johanna somnar så tänker hon på vilken fantastisk kille du är och vad era barn ska heta. Lille-Mor och Willgott. Det är bra traditionella namn. Grattis till ett fantastiskt resultat!!! ";
    }

    updatescoreStock();
}



