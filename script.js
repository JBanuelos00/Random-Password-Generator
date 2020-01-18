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