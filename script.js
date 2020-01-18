//Variables

//setting password length according to customRange1
let passLength = document.getElementById("customRange1").value;
let lengthDisp = document.getElementById("length");

//check what options are checked
let upCase = document.getElementById("optionUp").checked;
let Nums = document.getElementById("optionNum").checked;
let Symb = document.getElementById("optionSymb").checked;

let passText = document.getElementById("password");

//funciton to generate random password
function generatePass() {

    // ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+

    if (upCase && Nums && Symb === true) {
        let passVals = upCase.value + Nums.value + Symb.value;

        let pass = "";
        //for loop that chooses password characters
        for (var i = 0; i <= passLength; i++) {
            pass = pass + passVals.charAt(Math.floor(Math.random() * Math.floor(passVals.length - 1)));

        } else {
            alert("Please select from one of the options below to include upper case letters, numbers, and/or symbols.")
        }
        //write the password result to the textbox
        passText.value = pass;
    }

}

//display length display
lengthDisp = "Length:64";

//function to set length text based on the customRange1 value
document.getElementById("customRange1").oninput = function () {
    if (document.getElementById("customRange1").value > 0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("customRange1").value;

    } else {
        document.getElementById("length").innerHTML = "Length: 8";
    }
}

//copying password to clipboard
function copyPasta() {
    document.getElementById("password").select();

    document.execCommand("copy");

    alert("Password has been copied to your clipboard.");

}
