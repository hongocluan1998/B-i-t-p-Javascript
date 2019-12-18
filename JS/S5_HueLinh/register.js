function validateEmpty() {
  var userName = userNameObject.value;
  var password = passWordObject.value;
  var passwordConfirm = passwordConfirmObject.value;
  var fisrtName = fisrtNameObject.value;
  var lastName = lastNameObject.value;
  var email = emailObject.value;
  var phone = phoneObject.value;
   if(userName == '' || password == '' || passwordConfirm == '' || fisrtName == '' || lastName == '' || email == '' || phone == '') {
      alert('Please fill out the form fields before clicking the register button!');
      return false;
   }
   return true;
}

function validateUsername() {
    var userNameObject = getUserNameObject();
    var error = "";
    var nameRegex = /\W/; // allow letters, numbers, and underscores
    console.log(userNameObject.value);
 
    if ((userNameObject.value.length < 5) || (userNameObject.value.length > 15)) {
        error = "The Username must be 5 to 15 characters.\n";
        alert(error);
        userNameObject.focus();
        return false;
 
    } else if (nameRegex.test(userNameObject.value)) {
        error = "The username is not valid, only characters A-Z, a-z, 0-9 and '_' are  acceptable.\n";
        alert(error);
        userNameObject.focus();
        return false;
    } else {
      console.log('true');
       userNameObject.setAttribute('style', 'border-color: #278227;');
    }
    return true;
}

function validateUsernameOnchange() {
    var nameRegex = /\W/;  // allow letters, numbers, and underscores
    console.log(userNameObject.value);
 
    if (userNameObject.value == "") {
        userNameObject.setAttribute('style', 'border-color: #ced4da;');
 
    } else if ((userNameObject.value.length < 5) || (userNameObject.value.length > 15)) {
        userNameObject.setAttribute('style', 'border-color: #dd7777;');
    } 
    else if (nameRegex.test(userNameObject.value)) {
        userNameObject.setAttribute('style', 'border-color: #dd7777;');
        console.log('invalid nameRegex');
    } else {
      console.log('true');
       userNameObject.setAttribute('style', 'border-color: #278227;');
    }
}

function validatePassword() {
  console.log(passWordObject.value);
   var passw=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;
  if(passWordObject.value.match(passw)) { 
    return true;
  } else { 
    alert('Password must be at least 8 character, one numeric digit and a special character!');
    passWordObject.focus();
    return false;
  }
}

function validatePasswordOnChange() {
  var passw=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  if (passWordObject.value == "") {
    passWordObject.setAttribute('style', 'border-color: #ced4da;');
  }
  else if(passWordObject.value.match(passw)) 
  { 
    passWordObject.setAttribute('style', 'border-color: #278227;');
  }
  else
  { 
    passWordObject.setAttribute('style', 'border-color: #dd7777;');
  }
}

function validatePasswordConfirm() {
  console.log(passwordConfirmObject.value);
  if(passwordConfirmObject.value == passWordObject.value) {
    return true;
  } else {
    alert('Your password and confirmation password do not match, please enter password confirm again!');
    passwordConfirmObject.focus();
    return false;
  }
}

function validatePasswordConfirmOnChange() {
  var passw=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  if (passwordConfirmObject.value == "") {
    passwordConfirmObject.setAttribute('style', 'border-color: #ced4da;');
  }
  else if(passwordConfirmObject.value == passWordObject.value && passWordObject.value.match(passw)) {
    passwordConfirmObject.setAttribute('style', 'border-color: #278227;');
  } else {
    passwordConfirmObject.setAttribute('style', 'border-color: #dd7777;');
  }
}

function validateFirstName() {
  console.log('validate first name');
  console.log(fisrtNameObject.value);
  var firstNameRegex = /\W/;
  if(firstNameRegex.test(fisrtNameObject.value)) { 
    alert('First name must be not contain special character!');
    fisrtNameObject.focus();
    return false;
  }
  else { 
    return true;
  }
}

function validateFirstNameOnChange() {
  var firstNameRegex = /\W/;
  if (fisrtNameObject.value == "") {
    fisrtNameObject.setAttribute('style', 'border-color: #ced4da;');
  }
  else if(firstNameRegex.test(fisrtNameObject.value)) { 
    fisrtNameObject.setAttribute('style', 'border-color: #dd7777;');
  }
  else { 
    fisrtNameObject.setAttribute('style', 'border-color: #278227;');
  }
}

function validateLastName() {
  console.log('validate first name');
  console.log(lastNameObject.value);
  var lastNameRegex = /\W/;
  if(lastNameRegex.test(lastNameObject.value)) { 
    alert('Last name must be not contain special character!');
    lastNameObject.focus();
    return false;
  }
  else { 
    return true;
  }
}

function validateLastNameOnChange() {
  var lastNameRegex = /\W/;
  if (lastNameObject.value == "") {
    lastNameObject.setAttribute('style', 'border-color: #ced4da;');
  }
  else if(lastNameRegex.test(lastNameObject.value)) { 
    lastNameObject.setAttribute('style', 'border-color: #dd7777;');
  }
  else { 
    lastNameObject.setAttribute('style', 'border-color: #278227;');
  }
}

function validateEmail() {
  console.log(emailObject.value);
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegex.test(emailObject.value)) {
      return true;
    } else {
      alert("You have entered an invalid email address!");
      emailObject.focus();
      return false;
    } 
}

function validateEmailOnChange() {
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailObject.value == "") {
    emailObject.setAttribute('style', 'border-color: #ced4da;');
  }
  else if (emailRegex.test(emailObject.value)) {
      emailObject.setAttribute('style', 'border-color: #278227;');
    } else {
      emailObject.setAttribute('style', 'border-color: #dd7777;');
    } 
}

function validatePhone() {
  console.log(phoneObject.value);
  var phoneRegex = /^\d{10}$/;
  if(phoneRegex.test(phoneObject.value)) {
    return true;
  } else {
      alert("Phone number must be 10 characters and not contain special character!");
      phoneObject.focus();
      return false;
  }
}

function validatePhoneOnChange() {
  var phoneRegex = /^\d{10}$/;
  if (phoneObject.value == "") {
    phoneObject.setAttribute('style', 'border-color: #ced4da;');
  }
  else if(phoneRegex.test(phoneObject.value)) {
    phoneObject.setAttribute('style', 'border-color: #278227;');
  } else {
    phoneObject.setAttribute('style', 'border-color: #dd7777;');
  }
}

function checkValidate() {
  if(!validateEmpty()) {
    return false;
  }
  if(!validateUsername()) {
    return false;
  }
  if(! validatePassword()) {
    return false;
  }

  if(! validatePasswordConfirm()) {
    return false;
  }

  if(! validateFirstName()) {
    return false;
  }

  if(! validateLastName()) {
    return false;
  }

  if(! validateEmail()) {
    return false;
  }

  if(! validatePhone()) {
    return false;
  } else return true;
}

function validate(event) {
  var check = checkValidate();
  if(check == false) {
        return event.preventDefault();
  } else alert('Success!');
};

function getUserNameObject() {
  var userNameObject = myForm['username'];
  return userNameObject;
}

function getPasswordObject() {
  var passWordObject = myForm['password'];
  return passWordObject;
}

function getPasswordConfirmObject() {
  var passwordConfirmObject = myForm['passwordconfirm'];
  return passwordConfirmObject;
}

function getFisrtNameObject() {
  var fisrtNameObject = myForm['fisrtname'];
  return fisrtNameObject;
}

function getLastNameObject() {
  var lastNameObject = myForm['lastname'];
  return lastNameObject;
}

function getEmailObject() {
  var emailObject = myForm['email'];
  return emailObject;
}

function getPhoneObject() {
  var phoneObject = myForm['phone'];
  return phoneObject;
}

var myForm = document.forms['registerForm'];
myForm.addEventListener('submit', validate, true); 
var userNameObject = getUserNameObject();
var passWordObject = getPasswordObject();
var passwordConfirmObject = getPasswordConfirmObject();
var fisrtNameObject = getFisrtNameObject();
var lastNameObject = getLastNameObject();
var emailObject = getEmailObject();
var phoneObject = getPhoneObject();

userNameObject.addEventListener('change', validateUsernameOnchange);
passWordObject.addEventListener('change', validatePasswordOnChange);
passwordConfirmObject.addEventListener('change', validatePasswordConfirmOnChange);
fisrtNameObject.addEventListener('change', validateFirstNameOnChange);
lastNameObject.addEventListener('change', validateLastNameOnChange);
emailObject.addEventListener('change', validateEmailOnChange);
phoneObject.addEventListener('change', validatePhoneOnChange);

