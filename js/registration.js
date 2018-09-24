var counter = 0;

function  clearError() {
    document.getElementById('error').innerHTML = " ";       
}
//outputs error to the DOM
function displayError(error){
    if(counter > 8){
        clearError();
        counter = 0;
    }

    var errorString = document.getElementById("error");
    errorString.innerHTML += (error + '<br><br>'); //store error string in html element <p>
    counter++;
}

function validateForm(){
    if(passwordValidation() && usernameValidation() 
        && streetNameValidation() && phoneValidation() 
        && postalCodeValidation() && cityValidation()){
        return true;
    } else
        return false;
}

//validates password
function passwordValidation(){
    var password = document.signup.password;
    var passwordMatch = document.signup.matchPassword;
    var passError;
    var hasNum = 0;
    var hasCap =0;

    while(true){
        //check length
        if(password.length < 6){
            passError = "Password must be at least 6 characters long";
            displayError(passError);
            return false;
        }
        
        //calidate first charactrer of password
        //assume alphabetical character
        if((password.value.toLowerCase().charCodeAt(0) < 97 || password.value.toLowerCase().charCodeAt(0) > 122)){
            passError = "Password must start with a letter";
            displayError(passError);
            return false;
        }

        //search for number and uppercase in pass
        for(let i=0; i< password.value.length; i++){
            console.log(password.value.charAt(i));
            if(password.value.charCodeAt(i) > 47 && password.value.charCodeAt(i) < 58)
                hasNum++;
            else if(password.value.charCodeAt(i)<91 && password.value.charCodeAt(i)>64)
                hasCap++;
            else if(hasNum && hasCap){
                break;
            }
        }
        

        //check if password contains number
        if(!hasNum){
            passError = "Password must contain at least one digit";
            displayError(passError);
            return false;
        }

        if(!hasCap){
            passError = "Password must contain at least one uppercase letter";
            displayError(passError);
            return false;
        }

        //check if passwords match
        if(password.value !== passwordMatch.value){
            passError = "Passwords must match";
            displayError(passError);
            return false;
        }
        break;
    }   
    return true;
}

//validates username
function usernameValidation(){
    var username = document.signup.uname;
    var userError;
    if((username.value.toLowerCase().charCodeAt(0) < 97 || username.value.toLowerCase().charCodeAt(0) > 122)){
        userError = "Username must start with a letter";
        displayError(userError);
        return false;
    }

    if(username.value.length < 6){
        userError = "Username must be at least 6 characters long";
        displayError(userError);
        return false;
    }
    return true;  
}

function streetNameValidation(){
    var street = document.signup.streetName.value;

    for(let i=0; i< streetName.length; i++){
        if(street.toLowerCase().charCodeAt(i) > 47 && street.toLowerCase().charCodeAt(i) < 58){
            error = "Street cannot contain digits";
            displayError(error);
            return false;
        }
    }
    return true;
}


function phoneValidation(){
    var valid = false;
    var i = 0;
    var error;
    var phone = document.signup.phone.value;
    console.log()
    if(phone.charAt(3) !== '-' && phone.charAt(7) !== '-'){
        error = "Phone number must be in the XXX-XXX-XXXX format.";
        displayError(error);
        return false;
    }
   for(var i =0; i< phone.length; i++){
        if(i !==3 && i !==7 && (phone.charCodeAt(i)< 48 || phone.charCodeAt(i) > 57)){
            error = "Phone number must only contain digits";
            displayError(error);
            return false;
        }
    }
    return true;
}

function postalCodeValidation() {
    var postalCode = document.signup.postalCode.value;
    var error;
    
    if(postalCode.length > 6){
        error = "Postal code can only contain six characters (alpha-numeric)"
        displayError(error);
        return false;
    }

    for(let i=0; i<postalCode.length; i++){
        if(!i%2 && postalCode.charCodeAt(i).toLowerCase() < 97 || postalCode.charCodeAt(i).toLowerCase() > 122){
            error = "Postal code must start with a letter followed by a number";
            displayError(error);
        return false;
        } else if(postalCode.charCodeAt(i).toLowerCase() > 57 || postalCode.charCodeAt(i).toLowerCase() < 48){
            error = "Postal code must start with a letter followed by a number";
            displayError(error);
            return false;
        }
    }
    return true;
}

function cityValidation(){
    var city = document.signup.city.value;
    var error;
    for(var i = 0; i < city.length; i++){
        if(city.toLowerCase().charCodeAt(i) > 47 && city.toLowerCase().charCodeAt(i) < 58){
            error = "City cannot contain digits";
            displayError(error);
            return false;
        }
    }

    return true;

}
