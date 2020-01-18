//funciton to generate random password
function generatePass(){

    //setting password length according to slider
    let passLength = document.getElementById("slider").value;
    //password values
    let passVals = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+";

    let pass = "";
    //for loop that chooses password characters
    for(var i = 0; i <=passLength; i++) {
        pass = pass + passVals.charAt(Math.floor(Math.random() * Math.floor(passVals.length -1)));

    }
    //write the password result to the textbox
    document.getElementById("password").value = pass;
}

//display length display
document.getElementById("length").innerHTML = "Length:64";

//function to set length text based on the slider value
document.getElementById("slider").oninput = function() {
    if(document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;

    } else{
        document.getElementById("length").innerHTML = "Length: 8";
    }
}

//copying password to clipboard
function copyPasta() {
    document.getElementById("password").select();

    document.execCommand("copy");

    alert("Password has been copied to your clipboard.");

}
