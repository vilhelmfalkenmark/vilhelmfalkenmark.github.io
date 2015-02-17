/**
 * Created by Fredrik Löfgren and Vilhelm Falkenmark in january-february 2015.
 */

/**
 * FUNKTIONEN NEDAN ÖVERSÄTTER TEXT TILL MORSE
 */

var messageLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","å","ä","ö","0","1","2","3","4","5","6","7","8","9",".","!","?"," "];

//console.log(messageLetters.length);


var haxLetters = ["t$xN","CqMR#Lc","9jp(sHD+","qmFyk","F=YRg)i","7u%","+oZc*","cS009!Y","€0A","XGE/%on1","I%€","i$34+Rx","mGR698N","9W(xo","4l1dL","DCI","suzZqPWU","FW&e6ZmE","6!PHy","RkiE(","q!TBQ1","p*7*Z","EDE#32ed#","!HYGo7R","jI0nHG7","+W(9Oeg","Fet$","3c!0j","%%mxV","oE€9M","VwVaa7","hy$7AJ","T/=UW=%x","(G+wr!Ys","NLi","G2h2=7G","e0z)Z","EpR","/8dE3&+D","1GLDA","8(ue","4€211"];

//console.log(haxLetters.length);

var space = ["=vnQ","jOyN","kG$L","a32G","I$TL","g$TG","pALF","€KBq","L+u#","9v€r"];

var newLetter = ["bF$f","!yGl","BT&&","9Ov#","EWGF","6RF9","Ezm&","FXul","tLJY","Ul#="];

var redColor = "#e75b4c";

//console.log(space.length);
//console.log(newLetter.length);

var normalLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","."," "];

var morseLetter=[". ━━━","━━━ . . .","━━━ . ━━━ .","━━━ . .",".",". . ━━━ .","━━━ ━━━ .",". . . .",". .",". ━━━ ━━━ ━━━","━━━ . ━━━",". ━━━ . .","━━━ ━━━","━━━ .","━━━ ━━━ ━━━",". ━━━ ━━━ ━","━━━ ━━━ . ━━━",". ━━━ .",". . .","━━━",". . ━━━",". . . ━━━",". ━━━ ━━━","━━━ . . ━━━","━━━ . ━━━ ━━━","━━━ ━━━ . .",". ━━━ ━━━ ━━━ ━━━ ",". . ━━━ ━━━ ━━━",". . . ━━━ ━━━",". . . . ━━━",". . . . .","━━ . . . .","━━━ ━━━ . . .","━━━ ━━━ ━━━ . .","━━━ ━━━ ━━━ ━━━ .","STOPP","/"];


function createMorseCode()
{

    var myinputField = document.getElementById("inputField").value; // Tar emot värdet som användaren skjuter in
    var smallChars = myinputField.toLowerCase(); // Konvertera Strängen till små bokstäver eftersom det är det som finns i Arrayen.
    var splittedInput = smallChars.split(''); // splittar upp det till separata tecken.
    var wordPosition = []; // Ordningen som det man nyss skrivit kommer i normalLetters
    var wordIndex =[]; // Där ordningen skjuts in
    var morseIndex =[]; // Det som kommer bli den färdiga Morsekoden som kommer skjutas ut och tar emot kordinaterna från Wordindex
    for (var i = 0; i < splittedInput.length; i++)
    {
        wordIndex = normalLetters.indexOf(splittedInput[i]);
        if (wordIndex != -1){
            wordPosition.push(wordIndex);
            morseIndex.push(morseLetter[wordIndex]+"|");
        }
        else
        {
           // console.log("Position " + i + " " + wordPosition[i]);
        }
    }
    var translatedMorse = document.getElementById("translatedMorse"); // Det som skjuts ut till den färdiga morsekoden.
    var userText = document.getElementById("userText"); // Där det står vad man skrivit i vanliga bokstäver
    var outputMorsecode = morseIndex.join(""); // Sätter ihop det igen till hela tecken.

    var inputField = document.getElementById("inputField"); // Så att inputfältet blir rött om användaren inte skrivit något.
    if (outputMorsecode == "")
    {
        inputField.style.backgroundColor=redColor;
        translatedMorse.innerHTML = "Du måste skriva något i rutan ovanför för att få en Morsekod"
    }
    else
    {
        userText.innerHTML = "Du skrev "+" '"+myinputField+"' "+"<br><br>"+"Vilket översatt till Morse 4.0 blir"+"<br><br>";
        translatedMorse.innerHTML = outputMorsecode;
        inputField.style.backgroundColor="white";
    }
    /*
     console.log(wordPosition);
     console.log(morseIndex);
     console.log(wordIndex); */
     // console.log(splittedInput);
     // console.log(morseLetter.length);
     // console.log(normalLetters.length);
}
/*
            SLUT PÅ ÖVERSÄTTNING FRÅN TEXT TILL MORSE!
=============================================================================================================  */
/**
 * FUNKTIONEN NEDAN ÖVERSÄTTER MORSE TILL TEXT
 */
function translateMorseCode() {

    var morseInputField = document.getElementById("morseinputField").value; // Tar emot värdet som användaren skjuter in

    var breakPoint = [];
    for (i = 0; i < morseInputField.length; i++)
    {
        if (morseInputField[i] == "|")
        {
            breakPoint.push(i);
        }

    }
   console.log("Här är morses Breakpoint"+breakPoint);

    var morseArray = [];
    var x = 0;
    var y = 1;
    for(i = 1; i <= breakPoint.length; i++)
    {
        if(i == 1){
            morseArray.push(morseInputField.substring(0,breakPoint[x]));
        }
        else
        {
            morseArray.push(morseInputField.substring(((breakPoint[x])+ 1), ((breakPoint[y]))));
            x++;
            y++;
        }
        //console.log(morseArray);
    }

    var morsePosition = [];
    var morseToWordIndex = [];
    for (i = 0; i < morseArray.length; i++)
    {
        morsePosition = morseLetter.indexOf(morseArray[i]);
        if (morsePosition != -1){
            //wordPosition.push(morsePosition);
            morseToWordIndex.push(normalLetters[morsePosition]);
        }
        else
        {
           // console.log("Position " + i + " " + wordPosition[i]);
        }
    }
    var outPutText = morseToWordIndex.join("");

  //  console.log(morseToWordIndex.join(""));

    var translatedText = document.getElementById("translatedText");
    var userMorse = document.getElementById("userMorse");
    var capitalizedOutput = outPutText.charAt(0).toUpperCase() + outPutText.substring(1);

    var inputField = document.getElementById("morseinputField");

    if (capitalizedOutput == "")
    {
            inputField.style.backgroundColor=redColor;
        translatedText.innerHTML = "Du måste skriva något i rutan ovanför för att få en Text!"
    }
    else
    {
    userMorse.innerHTML = "Du skrev "+" '"+morseInputField+"' "+"<br><br>"+"Vilket översatt från Morse 4.0 till Text blir";
    translatedText.innerHTML = capitalizedOutput;
    inputField.style.backgroundColor="white";
    }
}

/*
 SLUT PÅ ÖVERSÄTTNING FRÅN MORSE TILL TEXT!
 =============================================================================================================  */



/**
 *
 * Nedan översätter text till Hax
 *
 *
 */

var newLetterNumber = 0;
var newSpaceNumber = 0;

var breakPointToString;
var haxBreakPoint;

function convertLetterNumber(){

    var randomNewLetter = document.getElementById("randomNewLetter").value;
    var key1 = document.getElementById("key1");


    if(randomNewLetter=="")
    {
        key1.innerHTML = "Du får inte lämna fältet för nyckel 1 tomt om du ska kunna fortsätta";
    }
    else if(isNaN(randomNewLetter))
    {
        key1.innerHTML = "Du måste ange siffra för nyckel 1";
    }
    else
    {
        key1.innerHTML = "Nyckel 1 är "+randomNewLetter;

    while(randomNewLetter>10)
    {
        randomNewLetter=((randomNewLetter*=4)/63);
        console.log(randomNewLetter);
    }
    newLetterNumber = Math.floor(randomNewLetter);

   // console.log("Hax letters array är "+haxLetters.length);
   // console.log("Normala bokstävers längd är "+messageLetters.length);
    haxBreakPoint = newLetter[newLetterNumber];
    breakPointToString = haxBreakPoint.toString();
    }
}

function convertSpaceNumber(){
    var randomNewSpace = document.getElementById("randomNewSpace").value;
    var key2 = document.getElementById("key2");

    if(randomNewSpace=="")
    {
        key2.innerHTML = "Du får inte lämna fältet för nyckel 2 tomt om du ska kunna fortsätta";
    }
    else if(isNaN(randomNewSpace))
    {
        key2.innerHTML =  "Du måste ange siffra för nyckel 2";
    }
    else
    {
        key2.innerHTML = "Nyckel 2 är "+randomNewSpace;

    while(randomNewSpace>10)
    {
        randomNewSpace=((randomNewSpace*=4)/63);
        console.log(randomNewSpace);
    }
    newSpaceNumber = Math.floor(randomNewSpace);

  //  randomSpaceOutput.innerHTML = "Din nyckel för mellanslag är "+newSpaceNumber;
    haxLetters.push(space[newSpaceNumber]); // Skjuter in koden längst bak i haxArrayen
   }
}

function createHaxCode() {

    var warning= document.getElementById("warning");

    var randomNewLetter = document.getElementById("randomNewLetter").value;
    var randomNewSpace = document.getElementById("randomNewSpace").value;
    var textInput = document.getElementById("textToHax");
    var textToHax = document.getElementById("textToHax").value; // Tar emot värdet som användaren skjuter in
    var outPutHax = document.getElementById("outPutHax"); // Det som skjuts ut till den färdiga morsekoden.


    if(randomNewLetter == ""|| randomNewSpace== "")
    {
        warning.style.display="block";
        textInput.style.backgroundColor= redColor;

    }
    else if(textToHax=="")
    {
        outPutHax.innerHTML = "Det verkar som att du inte angett något att översätta till Haxspråket"
        textInput.style.backgroundColor= redColor;

    }
    else {
        warning.style.display="none";
        textInput.style.backgroundColor= "white";

        var smallChars = textToHax.toLowerCase(); // Konvertera Strängen till små bokstäver eftersom det är det som finns i Arrayen.
        var splittedInput2 = smallChars.split(''); // splittar upp det till separata tecken.
        var wordPosition = []; // Ordningen som det man nyss skrivit kommer i normalLetters
        var wordIndex = []; // Där ordningen skjuts in
        var haxIndex = []; // Det som kommer bli den färdiga Morsekoden som kommer skjutas ut och tar emot kordinaterna från Wordindex


        //console.log(haxLetters[haxLetters.length - 1]);

        for (var i = 0; i < splittedInput2.length; i++) {
            wordIndex = messageLetters.indexOf(splittedInput2[i]);

            if (wordIndex != -1) {
                wordPosition.push(wordIndex);
                haxIndex.push(haxLetters[wordIndex] + breakPointToString);
            }
            else {
               // console.log("Position " + i + " " + wordPosition[i]);
            }
        }
        //   haxIndex.push(haxLetters[wordIndex]+space[newNumber]);
        //var userText = document.getElementById("userText"); // Där det står vad man skrivit i vanliga bokstäver
        var outputHaxcode = haxIndex.join("").toString(); // Sätter ihop det igen till hela tecken.

        // var inputField = document.getElementById("inputField"); // Så att inputfältet blir rött om användaren inte skrivit något.

        //console.log("Ny bokstav ska vara " + newLetter[newLetterNumber]);

        //  console.log("Mellanslag ska vara " + space[newSpaceNumber]);

        // console.log(haxLetters.length);
        // console.log(messageLetters.length);

        outPutHax.innerHTML = "Du skrev "+"'"+textToHax+"'"+"<br><br>"+"Vilket översatt till Hax blir "+"<br><br>"+outputHaxcode;
    }
}

function translateHaxCode() {

    var warning = document.getElementById("warning");
    var randomNewLetter = document.getElementById("randomNewLetter").value;
    var randomNewSpace = document.getElementById("randomNewSpace").value;
    var haxToText = document.getElementById("haxToText").value.toString(); // Tar emot värdet som //användaren skjuter in
    var outPutHax = document.getElementById("outPutHax"); // Det som skjuts ut till den färdiga morsekoden.
    var inputField = document.getElementById("haxToText");

    if(randomNewLetter == ""|| randomNewSpace== "")
    {
        warning.style.display="block";
    }
    else if(haxToText=="")
    {
        outPutHax.innerHTML = "Det verkar som att du inte angett något att översätta";
        inputField.style.backgroundColor= redColor;

    }
    else {
        warning.style.display = "none";
        inputField.style.backgroundColor= "white";



        //console.log(haxToText); // Vi får in koden i consollen
        //console.log(typeof(haxToText)); // Vi får in koden i consollen

        //console.log("Här konsollar vi får Breakpoint "+breakPointToString); // Vi får in breakpointen. Dvs där en ny bokstav börjar

        //  console.log(typeof(breakPointToString));
        // console.log(breakPointToString.charAt(2));

        /* Ny bokstav består av flera tecken. Vi måste alltså hitta första tecknet och om det stämmer fortsätta kolla
         */

        var breakPoint = [];

        for (var j = 0; j < haxToText.length; j++) {
            if (haxToText[j] == breakPointToString.charAt(0)) {
                for (var h = 0; h < breakPointToString.length; h++) {
                    if (haxToText[j] == breakPointToString[h] && haxToText[j + 1] == breakPointToString[h + 1]
                        && haxToText[j + 2] == breakPointToString[h + 2] ) {
                        breakPoint.push(j);
                    }
                }
            }
        }

     //   console.log(breakPoint);

        // console.log("Här är Haxets breakpoints " + breakPoint);

        var haxArray = [];
        var x = 0;
        var y = 1;
        for (i = 1; i <= breakPoint.length; i++) {
            if (i == 1) {
                haxArray.push(haxToText.substring(0, breakPoint[0]));
                /* Kollar positionerna i det användaren skjuten från den första postionen till och med
                 den första positonen i breakpoint koden. exempelvis 16. */
            }
            else {
                haxArray.push(haxToText.substring(((breakPoint[x] + haxBreakPoint.length)), ((breakPoint[y]))));
                x++;
                y++;
            }
            /* Här vill vi plocka ut positionerna emellan respektive Breakpoint.*/

            //  console.log("Här är vår haxArray "+haxArray)
        }

        var haxPosition = [];
        var haxToWordIndex = [];
        for (i = 0; i < haxArray.length; i++) {
            haxPosition = haxLetters.indexOf(haxArray[i]);
            if (haxPosition != -1) {
                //wordPosition.push(morsePosition);
                haxToWordIndex.push(messageLetters[haxPosition]);
            }
            else {
                //  console.log("Position " + i + " " + haxPosition[i]);
            }
        }

        // console.log(haxPosition);

        var outputText = haxToWordIndex.join("");

        var capitalizedOutput = outputText.charAt(0).toUpperCase() + outputText.substring(1);


        // console.log("Hej här är vår "+outputText);


        var userNewLetter = haxToText.substring(breakPoint[0], ((breakPoint[0] + haxBreakPoint.length))); // VALIDERING ATT ANVÄNDAREN ANGER RÄTT NYCKEL!

        console.log("Här är userNewLetter " + userNewLetter);
        console.log("Ny bokstav ska vara " + breakPointToString);


        if (userNewLetter != breakPointToString) {
            outPutHax.innerHTML = "Din kod gick inte att översätta. Antagligen har du skjutit in fel nyckel"
        }
        else {
            outPutHax.innerHTML = "Du skrev "+"<br><br>"+haxToText+"<br><br>"+" Vilket översätt från Hax blir:"+"<br><br>"+capitalizedOutput;
        }
    }
}




