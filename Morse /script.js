/**
 * Created by vilhelmfalkenmark on 2015-01-27.
 */
/**
 * Created by Fredrik Löfgren and Vilhelm Falkenmark on 15-01-27.
 */

/* Varje gång loopen kollar igenom splitted input ska den kolla vad positionen för respektive bokstav är i arrayen normalLetters.

 Den ska sedan returnera positionen i normal letters. Exempelvis bcda ska översättas till = 2, 3, 4, 1

 */

function createMorseCode()
{
    var normalLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","."," "];

    var morseLetter=[". ━━━","━━━ . . .","━━━ . ━━━ .","━━━ . .",".",". . ━━━ .","━━━ ━━━ .",". . . .",". .",". ━━━ ━━━ ━━━","━━━ . ━━━",". ━━━ . .","━━━ ━━━","━━━ .","━━━ ━━━ ━━━",". ━━━ ━━━ ━","━━━ ━━━ . ━━━",". ━━━ .",". . .","━━━",". . ━━━",". . . ━━━",". ━━━ ━━━","━━━ . . ━━━","━━━ . ━━━ ━━━","━━━ ━━━ . .",". ━━━ ━━━ ━━━ ━━━ ",". . ━━━ ━━━ ━━━",". . . ━━━ ━━━",". . . . ━━━",". . . . .","━━ . . . .","━━━ ━━━ . . .","━━━ ━━━ ━━━ . .","━━━ ━━━ ━━━ ━━━ .","STOPP!","/"];

    var myinputField = document.getElementById("inputField").value;

    var splittedInput = myinputField.split('');

    var translatedMorse = document.getElementById("translatedMorse");

    var userText = document.getElementById("userText");


    var wordPosition = [];
    var wordIndex =[];
    var morseIndex =[];

    for (var i = 0; i < splittedInput.length; i++)
    {
        wordIndex = normalLetters.indexOf(splittedInput[i]);

        if (wordIndex != -1){
            wordPosition.push(wordIndex);

            morseIndex.push(morseLetter[wordIndex]);

        }
        else
        {
            console.log("Position " + i + " " + wordPosition[i]);
        }
    }
    var morseCode = morseIndex.join(" ");
    var outputMorsecode = morseCode;

    translatedMorse.innerHTML = outputMorsecode;
    userText.innerHTML = "Du skrev "+" ' "+myinputField+" ' "+"<br><br>"+"Vilket översatt till Morse 4.0 blir";
    /*
     console.log(morseIndex);
     console.log(wordPosition);
     console.log(splittedInput);

     console.log(morseLetter.length);
     console.log(normalLetters.length);
     */
}

function showChars()
{

    document.getElementById('charList').style.display = "block";

}



