let user = document.getElementById("user");
let messErrorUser = document.getElementById("messErrorUser");

let password = document.getElementById("password");
let messErrorPassword = document.getElementById("messErrorPassword");

let rePassword = document.getElementById("rePassword");
let messErrorRePassword = document.getElementById("messErrorRePassword");

let familyName = document.getElementById("familyName");
let messErrorFamilyName = document.getElementById("messErrorFamilyName");

let firstName = document.getElementById("firstName");
let messErrorFirstName = document.getElementById("messErrorFirstName");

let email = document.getElementById("email");
let messErrorEmail = document.getElementById("messErrorEmail");

let phone = document.getElementById("phone");
let messErrorPhone = document.getElementById("messErrorPhone");

function Register() {
  let isUser = checkUser();
  let isPassword = checkPassword();
  let isRePassword = checkRePassword();
  let isFamilyName = checkFamilyName();
  let isFirstName = checkFirstName();
  let isEmail = checkEmail();
  let isPhone = checkPhone();
  if (isUser && isPassword && isRePassword && isFamilyName && isFirstName && isEmail && isPhone) {
    alert("Bạn đã đăng ký thành công");
    return true;
  }
  else {
    alert("Đăng kí chưa thành công");
    return false;
  }

}
//Kiểm tra tên đăng nhập
function checkUser() {
  var filter = /^[a-zA-Z0-9._-]{3,15}$/;
  if (user.value != "" && (filter.test(user.value))) {
    messErrorUser.innerHTML = "";
    user.classList.remove("border-error");
    // alert("thành công");
    return true;
  }
  else if (user.value == "") {
    messErrorUser.innerHTML = "Bạn phải nhập Tên đăng nhập";
    user.classList.add("border-error");
    //user.focus();
    // alert("thất bại");
    return false;
  }
  else {
    messErrorUser.innerHTML = "User chưa hợp lệ.User dài từ 3-15 kí tự và chỉ chứa chữ,số, '-','_' ";
    user.classList.add("border-error");
    //alert("thất bại");
    // user.focus();
    return false;
  }
}
//Kiểm tra password
function checkPassword() {
  var filter = /^[a-zA-Z0-9!@#$%^&*()/<>?]{8,}/;

  if (password.value != "" && (filter.test(password.value))) {
    messErrorPassword.innerHTML = "";
    password.classList.remove("border-error");
    // alert("thành công");
    return true;
  }
  else if (password.value == "") {
    messErrorPassword.innerHTML = "Bạn phải nhập mật khẩu";
    password.classList.add("border-error");
    //password.focus();
    // alert("thất bại");
    return false;
  }
  else {
    messErrorPassword.innerHTML = "Mật khẩu phải dài hơn 8 kí tự ";
    password.classList.add("border-error");
    // alert("thất bại");
    //password.focus();
    return false;
  }
}
//Kiểm tra xem nhập lại mật khẩu có trùng với mật khẩu trước không
function checkRePassword() {
  if (password.value != rePassword.value) {
    messErrorRePassword.innerHTML = "Mật khẩu bạn nhập lại chưa chính xác";
    rePassword.classList.add("border-error");
    rePassword.value = "";
    // alert("Bạn nhập lại mật khẩu chưa chính xác");
    return false;
  }
  else {
    messErrorRePassword.innerHTML = "";
    rePassword.classList.remove("border-error");
    // alert("thành công");
    return true;
  }
}
//Kiểm tra việc nhập Họ
function checkFamilyName() {
  var filter = /^[a-zA-Z0-9\s]{1,100}$/;
  if( !filter.test(familyName.value))
  {
    familyName.classList.add("border-error");
    messErrorFamilyName.innerHTML = "Bạn nhập 'Họ' chưa đúng quy tắc.\n'Họ' không chứa kí tự đặc biệt";
    //alert("Họ thất bại");
    return false;
  }
  else
  {
    familyName.classList.remove("border-error");
    messErrorFamilyName.innerHTML = "";
  // alert("Họ nhập thành công");
   return true;
  }
}
//Kiểm tra việc nhập Tên
function checkFirstName() {
  var filter = /^[a-zA-Z0-9\s]{1,100}$/;
  if( !filter.test(firstName.value))
  {
    firstName.classList.add("border-error");
    messErrorFirstName.innerHTML = "Bạn nhập 'Họ' chưa đúng quy tắc.\n'Họ' không chứa kí tự đặc biệt";
    //alert("Tên thất bại");
    return false;
  }
  else
  {
    firstName.classList.remove("border-error");
    messErrorFirstName.innerHTML = "";
   //alert("Tên nhập thành công");
   return true;
  }
}
//Kiểm tra Email
function checkEmail()
{
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!filter.test(email.value))
  {
    email.classList.add("border-error");
    messErrorEmail.innerHTML = "Email bạn nhập chưa hợp lệ";
   // alert("Email chưa hợp lệ");
    return false;
  }
  else
  {
    email.classList.remove("border-error");
    messErrorEmail.innerHTML = "";
   // alert("Email hợp lệ");
    return true;
  }
}
function checkPhone()
{
  var filter = /^\d{10,11}$/;
  if(!filter.test(phone.value))
  {
    phone.classList.add("border-error");
    messErrorPhone.innerHTML = "Phone bạn nhập chưa hợp lệ";
    //alert("Email chưa hợp lệ");
    return false;
  }
  else
  {
    phone.classList.remove("border-error");
    messErrorPhone.innerHTML = "";
    //alert("Email hợp lệ");
    return true;
  }
}
