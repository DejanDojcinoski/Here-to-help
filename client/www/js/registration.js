// Created by Dejan Dojcinoski L5574493 2023
// Set constants for form inputs.

const username = document.getElementById('username');
const email = document.getElementById('email');
const town = document.getElementById('town')
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// Set variables for validation
var validUsername = false;
var validEmail = false;
var validTown = false;
var validPassword = false;
var validPassword2 = false;
// Function to trim and validate input values. 
const validateRegistrationInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const townValue = town.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(username, 'Ange ett användarnamn.');
        document.getElementById("username").className  = "form-control border-2 border-danger rounded";
    } else {
        validUsername = true;
        document.getElementById("username").className  = "form-control border-2 border-success rounded";
        setSuccess(username);
    }
    if (emailValue === '') {
        setError(email, 'Ange en e-postaddress.');
        document.getElementById("email").className  = "form-control border-2 border-danger rounded";
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Skriv en giltig e-postadress.');
        document.getElementById("email").className  = "form-control border-2 border-danger rounded";
    } else {
        validEmail = true;
        document.getElementById("email").className  = "form-control border-2 border-success rounded";
        setSuccess(email);
    }
    if (townValue === '') {
        setError(town, 'Ange en stad.');
        document.getElementById("town").className = "form-control border-2 border-danger rounded";
    } else {
        validTown = true;
        document.getElementById("town").className = "form-control border-2 border-success rounded";
        setSuccess(town);
    }
    // Created by Dejan Dojcinoski L5574493 2023
    if (passwordValue === '') {
        setError(password, 'Ange ett lösenord.');
        document.getElementById("password").className  = "form-control border-2 border-danger rounded";
    } else if (passwordValue.length < 8) {
        setError(password, 'Lösenordet måste vara minst 8 tecken.')
        document.getElementById("password").className  = "form-control border-2 border-danger rounded";
    } else {
        validPassword = true;
        document.getElementById("password").className  = "form-control border-2 border-success rounded";
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Vänligen bekräfta ditt lösenord.');
        document.getElementById("password2").className  = "form-control border-2 border-danger rounded";
    } else if (password2Value !== passwordValue) {
        setError(password2, "Dina lösenord skiljer sig åt. Försök igen.");
        document.getElementById("password2").className  = "form-control border-2 border-danger rounded";
    } else {
        validPassword2 = true;
        document.getElementById("password2").className  = "form-control border-2 border-success rounded";
        setSuccess(password2);
    }
}
//Sets error values for form elements with validation issues.
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
// Removes error messages from form elements that are valid.
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
// Validation for email element.
const isValidEmail = email => {
    // Regex for a valid email address
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// Created by Dejan Dojcinoski L5574493 2023
// Event listener for form. 
document.getElementById("signup").addEventListener("click", function (event) {
    //Prevents form submitting before ready.
    event.preventDefault();
    validateRegistrationForm();

    function validateRegistrationForm() {
        validateRegistrationInputs();
        // Checks if all form elements are valid. 
        if (validUsername == true &&
            validEmail == true &&
            validTown == true &&
            validPassword == true &&
            validPassword2 == true) {
            const username = document.getElementById('username');
            const email = document.getElementById('email');
            const user = username.value.trim();
            const emailZ = email.value.trim();
            // Send username and email to php to check if they already exists in db.
            $.ajax({
                url: '/tm470/server/validation.php',
                type: 'POST',
                data: { username: user, email: emailZ },
                success: function (response) {
                    // If response has value check which validation error is provided.
                    if (response > 0) {
                        // If response is 1, the username has already been registered.
                        if (response == 1) {
                            document.getElementById("user").innerHTML = "Användarnamnet är upptaget. Prova ett nytt.";
                            document.getElementById("username").className = "form-control border-2 border-danger rounded";
                        }
                        // If response is 2, the email address has already been registered.
                        if (response == 2) {
                            document.getElementById("emailWarning").innerHTML = "E-postaddressen existerar redan. Prova ett nytt.";
                            document.getElementById("email").className = "form-control border-2 border-danger rounded";
                        }
                        // If response is 3, the email address and username have already been registered.
                        if (response == 3) {
                            document.getElementById("user").innerHTML = "Användarnamnet är upptaget. Prova ett nytt.";
                            document.getElementById("emailWarning").innerHTML = "E-postaddressen existerar redan.";
                            document.getElementById("username").className = "form-control border-2 border-danger rounded";
                            document.getElementById("email").className = "form-control border-2 border-danger rounded";
                        }
                        // Otherwise entries are valid and submit to index.php for insert into db.
                    } else {
                        document.getElementById("registrationForm").submit();
                        console.log("Sucessfully added user");
                        // Created by Dejan Dojcinoski L5574493 2023    
                    }

                }
            });
        }
        else {
            return false;
        }
    }
});



