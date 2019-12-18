

$(document).ready(function() {
 
  //Khi bàn phím được nhấn và thả ra thì sẽ chạy phương thức này
  $("#formDemo").validate({
              rules: {
                  email: "required",
                  phone: "required",
                 phone: {
                      required: true,
                      minlength: 5
                  },
                  
                  email: {
                      required: true,
                      email: true
                  },
                  
              },
              messages: {
                  email: "Vui lòng nhập email",
                  phone: "Vui lòng nhập tên",
                  phone: {
                    required: "Vui lòng nhập số điện thoại",
                    minlength: "Số máy quý khách vừa nhập là số không có thực"
                },
                  email: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long",
                    equalTo: "Please enter the same password as above"
                },
                email: "Vui lòng nhập Email",
                agree: "Vui lòng đồng ý các điều khoản"
                }
              });
  });


var btnAddEmail = document.getElementById("btnAddEmail");
var btnAddPhone = document.getElementById("btnAddPhone");
var btnSubmit = document.getElementById("btnSubmit");

var addEmail = document.getElementById("boxAddEmail");
var addPhone = document.getElementById("boxAddPhone");

var i = 0;

$(btnAddEmail).click(function() {
  //Once add button is clicked
  i++;
  $(addEmail).append(
    "<div" +
      " id='rowEmail" +
      i +
      "' class='row'>" +
      "<div class='col-sm-8 mt-2'>" +
      "<input type='email' name='email' class='mail form-control animated bounceInLeft'" +
      "placeholder='Email'>" +
      "</div>" +
      "<div class='col-sm-2 mt-2'>" +
      "<button class='btn btn-danger btn_remove_email animated bounceInRight'" +
      "id='" +
      i +
      "'" +
      ">" +
      "<i class='fas fa-times'></i> </button>" + 
      "</div>" + "<div class='col-sm-12' >" + "<span"+ " class='error" + i +" error '>Not a valid email address</span>" + 
      "<span" + " class='success" + i +" success '>a valid email address </div>"
  ); // Add field html
  $("span").addClass("intro");     
});
var j = 0;
$(btnAddPhone).click(function() {
  //Once add button is clicked
  j++;
  $(addPhone).append(
    "<div" +
      " id='rowPhone" +
      j +
      "' class='row'>" +
      "<div class='col-3 col-md-3 col-lg-2 mt-2'>" +
      "<input type='text' class=' phone form-control animated bounceInDown' placeholder='+99'>"
       + "</div>" +
      "<div class='col-8 col-md-8  col-lg-8 mt-2'>" +
      "<input type='text' class='phoneNumber form-control animated bounceInDown'" +
      "placeholder='Phone'>" +
      "</div>" +
      "<div class='col-1 col-md-1 col-lg-2 mt-2'>" +
      "<button class='btn btn-danger btn_remove_phone animated bounceInUp'" +
      "id='" +
      j +
      "'" +
      ">" +
      "<i class='fas fa-times'></i> </button>" +
      "</div>" +
      "</div>"
  ); // Add field html
});

$(document).on("click", ".btn_remove_email", function() {
  var button_id = $(this).attr("id");
  $("#rowEmail" + button_id + "").remove();
  i--;
});
$(document).on("click", ".btn_remove_phone", function() {
  var button_id_phone = $(this).attr("id");
  console.log(button_id_phone);

  $("#rowPhone" + button_id_phone + "").remove();
  j--;
});

$(document).on("click", "#btnSubmit",function() {
console.log(i);
         if (i ==0 || j == 0) {
           alert("Please add more than one Email and Phone Number. !!");
         } 
});