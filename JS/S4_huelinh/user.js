var addEmail = document.getElementById('addEmail');
var addPhone = document.getElementById('addPhone');
var divEmail = document.getElementById('inputEmail');
var divPhone = document.getElementById('inputPhone');

addEmail.addEventListener('click',showEmailInput);
addPhone.addEventListener('click', showPhoneInput);

var countEmail = 0;
var countPhone = 0;



function showEmailInput() {
    countEmail += 1;
    var boxEmail = document.createElement('div');

    boxEmail.setAttribute('class', 'form-row mb-2 inputGroup');

    var label = document.createElement('label');
    label.setAttribute('class', 'col-2 text-right pr-3');
    label.innerText = '';

    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', `email${countEmail}`);
    input.setAttribute('class', 'form-control form-control-sm col-8');
    input.setAttribute('placeholder', 'email@example.com');

    var delEmailBtn = document.createElement('button');
    delEmailBtn.innerText = 'x';
    delEmailBtn.setAttribute('name', `delEmailBtn${countEmail}`);
    delEmailBtn.setAttribute('type', 'button');
    delEmailBtn.setAttribute('class', 'button btnHover btn-small ml-1');

    boxEmail.appendChild(label);
    boxEmail.appendChild(input);
    boxEmail.appendChild(delEmailBtn);

    divEmail.appendChild(boxEmail);
    //console.log(countEmail);
    
    delInput(delEmailBtn);

    //console.log(divEmail.childElementCount);
    //console.log(countEmail);
    
    input.addEventListener('change', validateEmailOnChange);
    validateEmailOnChange();
    
}

function delInput(delEmailBtn, boxEmail) {
    delEmailBtn.addEventListener('click', function() {
        delEmailBtn.parentElement.remove();
    })
}

function showPhoneInput() {
    countPhone += 1;
    var boxPhone = document.createElement('div');

    boxPhone.setAttribute('class', 'form-row mb-2 inputGroup');

    var label = document.createElement('label');
    label.setAttribute('class', 'col-2 text-right pr-3');
    label.innerText = '';

    var inputCode = document.createElement('input');
    inputCode.setAttribute('type', 'text');
    inputCode.setAttribute('name', `areacode${countPhone}`);
    inputCode.setAttribute('class', 'form-control form-control-sm col-1');
    inputCode.setAttribute('placeholder', '+(84)');

    var inputPhone = document.createElement('input');
    inputPhone.setAttribute('type', 'text');
    inputPhone.setAttribute('name', `phone${countPhone}`);
    inputPhone.setAttribute('class', 'form-control form-control-sm col-5 ml-1');
    inputPhone.setAttribute('placeholder', '123456789');

    var delPhoneBtn = document.createElement('button');
    delPhoneBtn.innerText = 'x';
    delPhoneBtn.setAttribute('name', `delPhoneBtn${countPhone}`);
    delPhoneBtn.setAttribute('type', 'button');
    delPhoneBtn.setAttribute('class', 'button btnHover btn-small ml-1');

    boxPhone.appendChild(label);
    boxPhone.appendChild(inputCode);
    boxPhone.appendChild(inputPhone);
    boxPhone.appendChild(delPhoneBtn);

    divPhone.appendChild(boxPhone);
    //console.log(countPhone);
    
    delInput(delPhoneBtn);

    inputPhone.addEventListener('change', validatePhoneOnChange);
    validatePhoneOnChange();
}

function  validateEmail(arrEmail) {
  var valid;
  for(var i = 0; i < countEmail; i++) {
    if (arrEmail[i] == '') {
      alert('please enter full email fields!');
      myForm[`email${i+1}`].focus();
      return false;
      break;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm[`email${i+1}`].value)) {
      valid = true;
    } else {
      alert("You have entered an invalid email address!");
      myForm[`email${i+1}`].focus();
      return false;
    } 
  }
  return valid;
}

function validateEmailOnChange() {
  var arrEmail = getArrEmail();
  for(var i = 0; i < arrEmail.length; i++) {
    if(arrEmail[i] == '') myForm[`email${i+1}`].setAttribute('style', 'border-color: #ced4da;');
    else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm[`email${i+1}`].value)) {
      myForm[`email${i+1}`].setAttribute('style', 'border-color: #81ab81;');
    } else {
      myForm[`email${i+1}`].setAttribute('style', 'border-color: #dd7777;');
    }
  }
}

function validatePhoneNumber(arrCodeArea, arrPhone) {
  
  var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
  var valid;
  for(var i = 0; i < countPhone; i++) {
    if(arrCodeArea[i] == '' && arrPhone[i] == '') {
      alert('Please enter full phonenumber fields!');
      myForm[`areacode${i+1}`].focus();
      return false;
    };

    if(arrCodeArea[i] == '') {
      alert('Please enter Area Code of phonenumber fields!');
      myForm[`areacode${i+1}`].focus();
      return false;
      break;
    }; 

    if (arrPhone[i] == '') {
      alert('Please enter number of phonenumber fields!');
      myForm[`phone${i+1}`].focus();
      return false;
      break;
    }

    if(myForm[`phone${i+1}`].value.match(phone)) {
      valid = true;
    } else {
      alert('You have entered an invalid number of phone number!');
      myForm[`phone${i+1}`].focus();
      return false;
    }
  }  
  
  return valid;
}

function validatePhoneOnChange() {
  var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
  var arrPhone = getArrPhone();
  for(var i = 0; i < arrPhone.length; i++) {
    if(arrPhone[i] == '') myForm[`phone${i+1}`].setAttribute('style', 'border-color: #ced4da;');
    else if(myForm[`phone${i+1}`].value.match(phone)) {
      myForm[`phone${i+1}`].setAttribute('style', 'border-color: #81ab81;');
    } else {
      myForm[`phone${i+1}`].setAttribute('style', 'border-color: #dd7777;');
    }
  }
}

function getArrEmail() {
    var arrEmail = [];
    for(i = 0; i < countEmail; i++) {
        var email = myForm[`email${i+1}`].value;
        arrEmail.push(email);
    }
    return arrEmail;
}

function getArrAreaCode() {
    var arrCodeArea = [];
    for(i = 0; i < countPhone; i++) {
        var codeArea = myForm[`areacode${i+1}`].value;
        arrCodeArea.push(codeArea);
    }
    return arrCodeArea;
}

function getArrPhone() {
    var arrPhone = [];
    for(i = 0; i < countPhone; i++) {
        var phone = myForm[`phone${i+1}`].value;
        arrPhone.push(phone);
    }
    return arrPhone;
}

var validate = function(event) {
    //get arrEmail
    var arrEmail = getArrEmail();
    console.log(arrEmail);

    //getArr AreaCode
    var arrCodeArea = getArrAreaCode();
    console.log(arrCodeArea);

    //get ArrPhone
    var arrPhone = getArrPhone();
    console.log(arrPhone);

    // Validate
    var check = validateEmail(arrEmail);
    console.log(check);
    if(check) {
        check = validatePhoneNumber(arrCodeArea, arrPhone);
    }


    //console.log(submit);
    if(check == false) {
        return event.preventDefault();
    } else alert('Success!');
};

var myForm = document.forms['userForm'];
myForm.addEventListener('submit', validate, true);  


    

    

    
