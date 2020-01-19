//Variables

//setting password length according to customRange1
let passLength = document.getElementById("customRange1");
let lengthDisp = document.getElementById("length");

//check what options are checked
let upCase = document.getElementById("optionUp");
let Nums = document.getElementById("optionNum");
let Symb = document.getElementById("optionSymb");

let passText = document.getElementById("password");
let setVars = document.getElementById("setVars");
let passVals = "";

//making sure boxes are checked and inputing the correct values

setVars.addEventListener("click", function () {
    let options = document.forms[1];
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            passVals = passVals + options[i].value;
        }
    }
});

//function to generate random password
function generatePass() {

    // ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+    

    let pass = "";
    //for loop that chooses password characters
    for (i = 0; i <= passLength; i++) {
        pass = pass + passVals.charAt(Math.floor(Math.random() * Math.floor(passVals.length - 1)));

        //write the password result to the textbox
        passText.value = pass;
    }

}

//display length display
lengthDisp.innerHTML = "Length:64";

//function to set length text based on the customRange1 value
passLength.oninput = function () {
    if (passLength.value > 0) {
        lengthDisp.innerHTML = "Length: " + passLength.value;

    } else {
        lengthDisp.innerHTML = "Length: 8";
    }
}

//copying password to clipboard
function copyPasta() {
    passText.select();

    document.execCommand("copy");

    alert("Password has been copied to your clipboard.");

}
