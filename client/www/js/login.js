// Created by Dejan Dojcinoski L5574493 2023
function validateLogin() {
    const email = document.getElementById('inputEmail');
    const password = document.getElementById('inputPass');
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    // Check if the email and password are in db.
    $.ajax({
        url: '/tm470/server/login.php',
        type: 'POST',
        data: { email: emailValue, password: passwordValue },
        success: function (response) {
            // Not found in db. Provide feedback to user.
            if (response == 1) {
                document.getElementById("emailWarning").innerHTML = "E-post addressen eller lösenordet är felaktigt. Försök igen.";
                document.getElementById("inputEmail").className = "form-control border-2 border-danger rounded";
                document.getElementById("inputPass").className = "form-control border-2 border-danger rounded";
            }
            //Successfully found in db. Redirect to browse.
            else {
                window.location.href = 'browse.html';
            }
        }
    });
}
document.getElementById("login").addEventListener("click", function (event) {
    event.preventDefault();
    validateLogin();
});



