const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cfpassword = document.querySelector('#cf-password');

form.addEventListener('submit', (e) => {
    if (!validateInputs()) {
        e.preventDefault();
    } 
});

function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cfpasswordVal = cfpassword.value.trim();
    let success = true;
    

    if (usernameVal === '') {
        success = false;
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required');
    } else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Please enter a valid email');
    } else {
        setSuccess(email);
    }

    if (passwordVal === '') {
        success = false;
        setError(password, 'Password is required');
    } else if (passwordVal.length < 8) {
        success = false;
        setError(password, 'Password must be at least 8 characters long');
    } else {
        setSuccess(password);
    }

    if (cfpasswordVal === '') {
        success = false;
        setError(cfpassword, 'Confirm password is required');
    } else if (cfpasswordVal !== passwordVal) {
        success = false;
        setError(cfpassword, 'Password does not match');
    } else {
        setSuccess(cfpassword);
    }
    
    return success;
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) !== null;
};
