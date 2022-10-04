// show hide password
let passw = document.getElementById('passw');
let toggleBtn = document.getElementById('toggleBtn');

let lowerCase = document.getElementById('lower');
let upperCase = document.getElementById('upper');
let digit = document.getElementById('number');
let specialChar = document.getElementById('special');
let minLength = document.getElementById('length');

function checkPassword(data) {
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#$%^&*])');
    const length = new RegExp('(?=.{8,})');

    // lower case validation check
    if (lower.test(data)) {
        lowerCase.classList.add('valid');
    } else {
        lowerCase.classList.remove('valid');
    }

    // upper case validation check
    if (upper.test(data)) {
        upperCase.classList.add('valid');
    } else {
        upperCase.classList.remove('valid');
    }

    // number validation check
    if (number.test(data)) {
        digit.classList.add('valid');
    } else {
        digit.classList.remove('valid');
    }

    // special character validation check
    if (special.test(data)) {
        specialChar.classList.add('valid');
    } else {
        specialChar.classList.remove('valid');
    }

    // length validation check
    if (length.test(data)) {
        minLength.classList.add('valid');
    } else {
        minLength.classList.remove('valid');
    }

// password validation

toggleBtn.onclick = function() {
  if (passw.type === 'password') {
    passw.setAttribute('type', 'text');
    toggleBtn.classList.add('hide');
  } else {
    passw.setAttribute = ('type', 'password');
    toggleBtn.classList.remove('hide');
  }
}
}
