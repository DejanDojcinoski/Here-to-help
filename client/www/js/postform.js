// Created by Dejan Dojcinoski L5574493 2023
// Set constants for create post inputs.

const title = document.getElementById('title');
const content = document.getElementById('content');
const emailPhone = document.getElementById('emailPhone');
const contactInfo = document.getElementById('contactInfo')

// Set variables for validation
var validTitle = false;
var validContent = false;
var validEmailPhone = false;
var validContactInfo = false;
// Created by Dejan Dojcinoski L5574493 2023
// Function to trim and validate input values. 
const validateInputPostForm = () => {
    const titleValue = title.value.trim();
    const contentValue = content.value.trim();
    const emailPhoneValue = emailPhone.value.trim();
    const contactInfoValue = contactInfo.value.trim();


    if (titleValue === '') {
        setError(title, 'Ange en titel.');
        document.getElementById("title").className = "form-control border-2 border-danger rounded";
    } else {
        validTitle = true;
        document.getElementById("title").className = "form-control border-2 border-success rounded";
        setSuccess(title);
    }
    if (contentValue === '') {
        setError(content, 'Ange en beskrivning.');
        document.getElementById("content").className = "form-control border-2 border-danger rounded";
    } else {
        validContent = true;
        document.getElementById("content").className = "form-control border-2 border-success rounded";
        setSuccess(content);
    }

    if (emailPhoneValue === '') {
        setError(emailPhone, 'Ange hur du vill bli kontaktad.');
        document.getElementById("emailPhone").className = "form-control border-2 border-danger rounded";
    } else {
        validEmailPhone = true;
        document.getElementById("emailPhone").className = "form-control border-2 border-success rounded";
        setSuccess(emailPhone);
    }
    // Created by Dejan Dojcinoski L5574493 2023
    if (contactInfoValue === '') {
        setError(contactInfo, 'Ange kontakt information.');
        document.getElementById("contactInfo").className = "form-control border-2 border-danger rounded";
    } else {
        validContactInfo = true;
        document.getElementById("contactInfo").className = "form-control border-2 border-success rounded";
        setSuccess(contactInfo);
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
// Created by Dejan Dojcinoski L5574493 2023
document.getElementById("publish").addEventListener("click", function (event) {
    //Prevents form submitting before ready.
    event.preventDefault();
    validatePostForm();
    
    function validatePostForm() {
        validateInputPostForm();
        // Checks if all form elements are valid. 
        if (validTitle == true &&
            validContent == true &&
            validEmailPhone == true &&
            validContactInfo == true) {
            document.getElementById("createPostForm").submit();
            console.log("Sucessfully added post");
        }
        else {
            return false;
        }
    }
});

