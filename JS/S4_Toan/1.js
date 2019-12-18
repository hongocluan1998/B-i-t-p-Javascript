// function addEmail(){
//   var inputEmail = document.getElementById('inputEmail');
//   var input = document.createElement("input");
//   input.type = "email";
//   input.name = "email" ;
//  input.className = "btn btn-outline-info btn-block inputNumber";
//  inputEmail.appendChild(input);
//  inputEmail.appendChild(document.createElement("br"));
//  inputEmail.appendChild(document.createElement("br"));

// }

// function addEmail(){
//   var inputEmail = document.getElementById('inputEmail');
//   var newdiv = document.createElement('div');
//   newdiv.innerHTML =" <input type='email' class = 'btn btn-outline-info '> <button type='button' class='btn btn-danger' id='addEmail' ><i class='fas fa-minus-square'></i></button> <br> <br>";
//   inputEmail.appendChild(newdiv);

// }

function addEmail() {
  allEmails = document.getElementById("fieldEmails"); //chứa các input  được tạo ra
  emailID = allEmails.getElementsByTagName("input").length; // đếm số input
  emailID++;

  //tạo form input email
  let input = document.createElement("input");
  input.type = "text";
  input.setAttribute("class", " btn btn-outline-info mr-4 mb-3 email");
  input.setAttribute("id", "emailID" + emailID);
  let br = document.createElement("br");

  //tạo button xoá

  let removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.setAttribute("class", "btn btn-danger mb-3");
  removeBtn.setAttribute("id", "emailID" + emailID);

  removeBtn.innerHTML = "Remove"
  //<i class='fas fa-minus-square'></i>
  removeBtn.onclick = function (e) {
    removeEmail(e);
  };

  //Thêm input form và button xoá
  allEmails.appendChild(input);
  allEmails.appendChild(removeBtn);
  allEmails.appendChild(br);
  console.log(allEmails);
  console.log(emailID);

}

function removeEmail(e) {
  let button = e.target;
  let formInput = button.previousSibling;
  let div = button.parentElement;
  let br = button.nextSibling;
  div.removeChild(button);
  div.removeChild(formInput);
  div.removeChild(br);

  let allEmails = document.getElementById("fieldEmails");
  let input = allEmails.getElementsByTagName("input");
  for (i = 0; i < input.length; i++) {
    input[i].setAttribute("id", "emailID" + (i + 1));
    // input[i].setAttribute("value", "value = " + (i+1));
  }

  //check lại giá trị input
  console.log("sau khi xoá");
  for (i = 0; i < input.length; i++) {
    console.log(input[i].value);
  }
}


function addPhone() {
  allPhones = document.getElementById("fieldPhones"); //chứa các input  được tạo ra
  phoneID = allPhones.getElementsByTagName("span").length + 1; // đếm số input
  //phoneID = phoneID1+1;

  //tạo form input phone
  let divPhoneParent = document.createElement("div");
  //tạo icon dấu +
  let icon = document.createElement("span");
  icon.innerHTML = "+";
  icon.setAttribute("class", " btn btn-outline-info mr-4 mb-3 ");
  //tạo input chứa mã vùng
  let phoneCode = document.createElement("input");
  phoneCode.type = "text";
  phoneCode.setAttribute("class", "form-control-sm btn btn-outline-info mr-4 mb-3 phoneCode ");
  phoneCode.setAttribute("id", "phoneID" + phoneID);
  phoneCode.setAttribute("placeholder", "xx");
  phoneCode.setAttribute("pattern", "[0-9]{2}");

  //tạo input chứa số điện thoại
  let phoneNumber = document.createElement("input");
  phoneNumber.type = "text";
  phoneNumber.setAttribute("class", " btn btn-outline-info mr-4 mb-3 phoneNumber ");
  phoneNumber.setAttribute("id", "phoneID" + phoneID);
  let br = document.createElement("br");

  //tạo nút remove
  let removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.setAttribute("class", "btn btn-danger mb-3");
  removeBtn.setAttribute("id", "phoneID" + phoneID);

  removeBtn.innerHTML = "Remove"
  //<i class='fas fa-minus-square'></i>
  removeBtn.onclick = function (e) {
    removePhone(e);
  };

  divPhoneParent.appendChild(icon);
  divPhoneParent.appendChild(phoneCode);
  divPhoneParent.appendChild(phoneNumber);
  divPhoneParent.appendChild(removeBtn);
  divPhoneParent.appendChild(br);
  allPhones.appendChild(divPhoneParent);
  console.log(phoneID);

}


function removePhone(e) {
  let button = e.target;
  button.parentElement.remove();

  let allPhones = document.getElementById("fieldPhones");
  let phoneCode = allPhones.getElementsByClassName("phoneCode");
  let phoneNumber = allPhones.getElementsByClassName("phoneNumber");
  for (var i = 0; i < phoneCode.length; i++) {
    phoneCode[i].setAttribute("id", "phoneID" + (i + 1));
    phoneNumber[i].setAttribute("id", "phoneID" + (i + 1));
  }
  console.log("sau khi xoá: id mới");
  for (var i = 0; i < phoneCode.length; i++) {
    console.log(phoneCode[i].id);
  }


  //  let allEmails = document.getElementById("fieldEmails");
  //   let input = allEmails.getElementsByTagName("input");
  //   for (i = 0; i < input.length; i++) {
  //     input[i].setAttribute("id", "emailID" + (i + 1));
  //     // input[i].setAttribute("value", "value = " + (i+1));
  //   }

  //check lại giá trị input
  // console.log("sau khi xoá");
  // for (i = 0; i < input.length; i++) {
  //   console.log(input[i].value);
  // }

  // let allEmails = document.getElementById("fieldPhones");
  // let input = allEmails.getElementsByTagName("input");
  // for (i = 0; i < input.length; i++) {
  //   input[i].setAttribute("id", "emailID" + (i + 1));
  //   // input[i].setAttribute("value", "value = " + (i+1));
  // }

}

function checkNull(input) {
  if (input != "") {
    // input.classList.replace("btn-outline-danger","btn-outline-info");
    //input.focus();
    console.log(" trong hàm check: đủ");

    return true;
  }
  else {

    // input.classList.add("btn-outline-danger");
    console.log("trong hàm check: thiếu");
    // alert("Bạn chưa nhập đủ email");
    this.focus();
    return false;
  }
}


function checkValideEmail(email) {
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email)) {
    alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
    this.focus();
    return false;
  }
  else {
    return true;
    //alert('OK roi day, Email nay hop le.');
  }

}
function checkValideCodePhone(number) {
  let filter = /^\d{2}$/;
  if (!filter.test(number)) {
    alert('Bạn nhập mã vùng chưa hợp lệ \n Chỉ chứa 2 chữ số');
    this.focus();
    return false;
  }
  else {
    return true;
    //alert('OK roi day, Email nay hop le.');
  }


  // if((number.value.test(filter)))
  // {
  //   return true;
  // }
  // else
  // {
  //   alert("Hãy nhập mã số đúng định dạng. \n Ví dụ: 00");
  //   return false;
  // }      
}

function checkValidePhoneNumber(number) {
  let filter = /^\d{10,11}$/;
  if (!filter.test(number)) {
    alert('Bạn nhập số điện thoại chưa hợp lệ  \n Chỉ chứa 10-11 chữ số');
    this.focus();
    return false;
  }
  else {
    return true;
    //alert('OK roi day, Email nay hop le.');
  }

  // if (!filter.test(number)) {

  //   return true;
  // }
  // else
  // {
  //   alert("Hãy nhập số điện thoại đúng định dạng. \n Ví dụ: 0123456789, 01234567890");
  //   return false;
  // }      
}

// kiểm tra mã vùng
function chekCodePhone(codePhone) {
  // let allPhones = document.getElementById("fieldPhones");
  // let allPhoneCodes = allPhones.getElementsByClassName("phoneCode");
  // let allPhoneNumber = allPhones.getElementsByClassName("phoneNumber");
  // let count = allPhoneCodes.length;
  // console.log("Số phần tử:"+count);

  if (checkNull(codePhone.value) == false) //Mã vùng  trống
  {
    this.focus();
    alert("Bạn chưa nhập đủ mã số vùng điện thoại");
    //codePhone.classList.add("btn-outline-danger");
    return false;
  }
  else if (checkNull(codePhone.value) == true) //Đã nhập mã vùng
  {
    if (checkValideCodePhone(codePhone) == false) //Mã vùng sai định dạng
    {
      this.focus();
      //alert("Mã vùng bạn nhập sai định dạng");
      // allPhoneCodes[i].classList.add("btn-outline-danger");
      return false;
    }
    else  //Mã vùng đúng định dạng
    {
      // allPhoneCodes[i].classList.replace("btn-outline-danger","btn-outline-info");

      return true;
    }
  }
}

// kiểm tra số điện thoại
function checkPhoneNumber(codePhone) {
  // let allPhones = document.getElementById("fieldPhones");
  // let allPhoneCodes = allPhones.getElementsByClassName("phoneCode");
  // let allPhoneNumber = allPhones.getElementsByClassName("phoneNumber");
  // let count = allPhoneCodes.length;
  // console.log("Số phần tử:"+count);

  if (checkNull(codePhone.value) == false) //Mã vùng  trống
  {
    this.focus();
    alert("Bạn chưa nhập đủ mã số vùng điện thoại");
    //codePhone.classList.add("btn-outline-danger");
    return false;
  }
  else if (checkNull(codePhone.value) == true) //Đã nhập mã vùng
  {
    if (checkValidePhoneNumber(codePhone) == false) //Mã vùng sai định dạng
    {
      this.focus();
      //alert("Mã vùng bạn nhập sai định dạng");
      // allPhoneCodes[i].classList.add("btn-outline-danger");
      return false;
    }
    else  //Mã vùng đúng định dạng
    {
      // allPhoneCodes[i].classList.replace("btn-outline-danger","btn-outline-info");

      return true;
    }
  }
}

////////////// Kiểm tra mã vùng và số điện thoại
function checkAllNumber() {
  let allPhones = document.getElementById("fieldPhones");
  let allPhoneCodes = allPhones.getElementsByClassName("phoneCode");
  let allPhoneNumber = allPhones.getElementsByClassName("phoneNumber");
  let count = allPhoneCodes.length;
  console.log("Số phần tử:" + count);
  let isAllNumberOk = false;
  for (var i = 0; i < count; i++) {
    if (chekCodePhone(allPhoneCodes[i].value) == false) {
      allPhoneCodes[i].classList.add("btn-outline-danger");
      allPhoneCodes[i].focus();
      isAllNumberOk = false;
      break;

    }
    else if (chekCodePhone(allPhoneCodes[i].value) == true) {
      allPhoneCodes[i].classList.replace("btn-outline-danger", "btn-outline-info");
      if (checkPhoneNumber(allPhoneNumber[i].value) == false) {
        allPhoneNumber[i].classList.add("btn-outline-danger");
        allPhoneNumber[i].focus();
        isAllNumberOk = false;
        break;
      }
      else if (checkPhoneNumber(allPhoneNumber[i].value) == true) {
        // allPhoneNumber[i].classList.add("btn-outline-info");
        allPhoneNumber[i].classList.replace("btn-outline-danger", "btn-outline-info");
        isAllNumberOk = true;
      }
    }

    //allPhoneCodes[i].classList.replace("btn-outline-danger", "btn-outline-info");
    // alert("Mã vùng đúng định dạng "); 
  }
  if (isAllNumberOk == true) {
    alert("Phone đăng ký thành công");
    let resultsPhones = document.getElementById("resultsPhones");

    resultsPhones.innerHTML = "Thông tin Phone đã đăng ký:<br>";
    //in ra màn hình để xem
    for (i = 0; i < count; i++) {
      resultsPhones.innerHTML = resultsPhones.innerHTML + "Phone" + (i + 1) + ": + " + allPhoneCodes[i].value + "."+allPhoneNumber[i].value + "<br> ";
      document.createElement("br");
      //console.log(input[i].value);
    }

  }
  return isAllNumberOk;
}  

function checkEmail() {
  //console.log("submit");
  let allEmails = document.getElementById("fieldEmails");

  let input = allEmails.getElementsByTagName("input");
  let isEmailOk = false;
  // console.log(input[0].value);
  for (var i = 0; i < input.length; i++) {
    // debugger;
    console.log("giá trị:" + input[i].value);
    if (checkNull(input[i].value) == false) {
      alert("Bạn chưa nhập đủ email");
      console.log("nhập thiếu");
      input[i].classList.add("btn-outline-danger");
      isEmailOk = false;
      break;
    }
    else if (checkNull(input[i].value) == true) {
      // alert("Bạn đã nhập đủ");
      input[i].classList.replace("btn-outline-danger", "btn-outline-info");
      console.log("nhập đủ");
      if (checkValideEmail(input[i].value) == false) {
        input[i].classList.add("btn-outline-danger");
        console.log("Nhập email sai rồi");
        isEmailOk = false;
        break;
      }
      else {
        input[i].classList.replace("btn-outline-danger", "btn-outline-info");
        console.log("Email đúng định dạng");
        isEmailOk = true;
        // alert("Bạn đã đăng ký được Email");
      }
    }
  }
  if (isEmailOk == true) {

    let resultEmails = document.getElementById("resultEmails");
    resultEmails.innerHTML = "Thông tin Email đã đăng ký:<br>";
    //in ra màn hình để xem
    for (i = 0; i < input.length; i++) {
      resultEmails.innerHTML = resultEmails.innerHTML + "Email" + (i + 1) + " : " + input[i].value + "<br> ";
      document.createElement("br");
      //console.log(input[i].value);
    }
    alert("Email đăng ký thành công");
  }
  return isEmailOk;
}
function submit(){
  if( checkAllNumber()== true && checkEmail()== true )
  {
    alert("Bạn đã đăng ký thành công");
  }
}



// var xxx = document.querySelectorAll("#nt");
// console.log(xxx[1].innerHTML);

/*
function submit(){
  //console.log("submit");
  let allEmails = document.getElementById("fieldEmails");

  let input = allEmails.getElementsByTagName("input");
 // console.log(input[0].value);

 let checkNull;
 for(i = 0;i < input.length;i++)
 {
   if( input[i].value == "")
   {
     checkNull = false;
     input[i].classList.add("btn-outline-danger");
     input[i].focus();
     break;
   }
   else{
    input[i].classList.replace("btn-outline-danger","btn-outline-info");
    //input[i].classList.add("btn-outline-info");
    checkNull = true;
   }
 }
 if (checkNull == false)
 {
   alert("Bạn phải điều đầy đủ thông tin");
 }
 else
 {
   alert("Bạn đã đăng ký thành công");
 }
}

 let result = document.getElementById("results");
  result.innerHTML = "Thông tin đã đăng ký:<br>";
//in ra màn hình để xem
  for( i = 0; i< input.length; i++)
  {
    result.innerHTML = result.innerHTML + "Email"+ (i+1) + " : " + input[i].value +"<br> ";
    document.createElement("br");
    //console.log(input[i].value);
  }

  alert("Bạn đã đăng ký thành công");
}
*/

