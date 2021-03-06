/**
 * Created by vilhelmfalkenmark on 2015-02-02.
 */
/**
 * Created by vilhelmfalkenmark on 2015-01-29.
 */
/* CODEGENERATOR FTW! Created by vilhelmfalkenmark on 2014-10-17.*/

var clickCount = 0;


function makeCode() {
    clickCount++;

    var codeHeader = document.getElementById("codeHeader");

    var capitals = document.getElementById("capitals");
    var minuscule = document.getElementById("minuscule");
    var numbers = document.getElementById("numbers");
    var specials = document.getElementById("specials");

    var codeContainer = document.getElementById("codeContainer");
    var numberofCodes = document.getElementById("numberofCodes").value;
    var codeLength = document.getElementById("codeLength").value;
    var codeTable = document.getElementById("codeTable");
    var startCode = document.getElementById("startCode").value;
    var endCode = document.getElementById("endCode").value;

    var startLength = startCode.length;
    var endLength = endCode.length;


    if (numberofCodes > 1 || clickCount>1)
    {
        codeHeader.innerHTML = "Your Codes";
    }

    //console.log(startLength);
    // console.log(endLength);

    var totalCodeLength = codeLength-endLength-startLength;

    var codeCharacthers = "";

// START CAPITALS CHECKED!!

    if (capitals.checked) {
        codeCharacthers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        if (minuscule.checked && numbers.checked && specials.checked) {
            codeCharacthers = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#€%&/()=+*"
        }
        else if (minuscule.checked && numbers.checked) {
            codeCharacthers = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        }
        else if (numbers.checked && specials.checked) {
            codeCharacthers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#€%&/()=+*"
        }
        else if (minuscule.checked && specials.checked) {
            codeCharacthers = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#€%&/()=+*"
        }
        else if (numbers.checked) {
            codeCharacthers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        }
        else if (specials.checked) {
            codeCharacthers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#€%&/()=+"
        }
        else if (minuscule.checked) {
            codeCharacthers = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        }
    }
// END CAPITALS CHECKED


    // START NUMBERS CHECKED!!

    else if (numbers.checked) {
        codeCharacthers = "0123456789"

        if (minuscule.checked && specials.checked) {
            codeCharacthers = "abcdefghijklmnopqrstuvwxyz0123456789!#€%&/()=+*"
        }
        else if (minuscule.checked) {
            codeCharacthers = "abcdefghijklmnopqrstuvwxyz0123456789"
        }
        else if (specials.checked) {
            codeCharacthers = "0123456789!#€%&/()=+*"
        }
    }
    // END NUMBERS CHECKED!!
    // START MINUSCULE CHECKED
    else if (minuscule.checked) {
        codeCharacthers = "abcdefghijklmnopqrstuvwxyz"

        if (specials.checked) {
            codeCharacthers = "abcdefghijklmnopqrstuvwxyz!#€%&/()=+*"
        }
    }
    // END MINUSCULE CHECKED

    // START SPECIALS
    else if (specials.checked) {
        codeCharacthers = "!#€%&/()=+*"
    }
    else {
        codeCharacthers = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#€%&/()=+*"
    }

    function generateCode(totalCodeLength) {
        var code = "";

        for (var i = 0; i < totalCodeLength; i++) {
            code += codeCharacthers.charAt(Math.floor(Math.random() * codeCharacthers.length));
        }
        return "<tr> <td>"+startCode+code+endCode+"</td></tr>";
    }

    for (var j = 0; j < numberofCodes; j++) {
        //add generated code to div

        codeTable.innerHTML += generateCode(totalCodeLength);
    }
}






