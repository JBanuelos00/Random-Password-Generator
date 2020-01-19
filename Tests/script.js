    let setVars = document.getElementById("setVars");
    
    setVars.addEventListener("click", function () {
                let options = document.forms[0];
                let passVals = "";
                for (let i = 0; i < options.length; i++) {
                    if (options[i].checked) {
                        passVals = passVals + options[i].value;
                    }
                }
                console.log(passVals);
            });
