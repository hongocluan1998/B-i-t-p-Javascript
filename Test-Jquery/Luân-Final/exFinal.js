$(document).ready(function() {
  const URL = "http://localhost:3000/";
  var myStorege = window.localStorage;
  console.log(myStorege);
  var listStr =
    myStorege.getItem("Key") === null
      ? []
      : JSON.parse(myStorege.getItem("Key"));
  console.log(listStr);
  $("#btnOK").click(function(e) {
    let form1 = $("#loginForm");
    form1.validate({
      rules: {
        log_inputName: {
          required: true,
          minlength: 5
        },
        log_inputPassword: {
          required: true,
          minlength: 4
        }
      },
      messages: {
        log_inputName: {
          required: "Cannot be empty !",
          minlength: jQuery.validator.format("Enter at least {0} characters")
        },
        log_inputPassword: {
          required: "Cannot be empty !",
          minlength: jQuery.validator.format("Enter at least {0} characters")
        }
      }
    });
    if (form1.valid()) {
      // let logName = $("#log_inputName").val();
      // let logPassword = $("#log_inputPassword").val();
      // let temp = callApi("GET", "User", false, null);
      // console.log(temp);
      let logName = $("#log_inputName").val();
      let logPassword = $("#log_inputPassword").val();
      if(listStr.length == 0) {
        $("#thongBao").css("display", "block");
      }
      listStr.forEach(User => {
        //let objUser = {sigName, sigPassword, sigConfirm, sigEmail};
        if (User.sigName === logName && User.sigPassword === logPassword) {
          alert("Login thành công !");
          window.location.assign("connect.html");
        } else {
          $("#thongBao").css("display", "block");
        }
      });
    }
  });

  $("#btnCreate").click(function(e) {
    let form2 = $("#rigisterForm");
    form2.validate({
      rules: {
        sig_inputName: {
          required: true,
          minlength: 5
        },
        sig_inputPassword: {
          required: true,
          minlength: 4
        },
        sig_confirmPassword: {
          required: true,
          minlength: 4,
          equalTo: "#sig_inputPassword"
        },
        sig_inputEmail: {
          required: true,
          email: true
        }
      },
      messages: {
        sig_inputName: {
          required: "Cannot be empty !",
          minlength: jQuery.validator.format("Enter at least {0} characters")
        },
        sig_inputPassword: {
          required: "Cannot be empty !",
          minlength: jQuery.validator.format("Enter at least {0} characters")
        },
        sig_confirmPassword: {
          required: "Cannot be empty !",
          minlength: jQuery.validator.format("Enter at least {0} characters"),
          equalTo: "Confirm Error !"
        },
        sig_inputEmail: {
          required: "Cannot be empty !",
          email: "Format error !"
        }
      }
    });
    if (form2.valid()) {
      let sigName = $("#sig_inputName").val();
      let sigPassword = $("#sig_inputPassword").val();
      let sigConfirm = $("#sig_confirmPassword").val();
      let sigEmail = $("#sig_inputEmail").val();
      let check = false;
      listStr.forEach(User => {
        if (User.sigName === sigName || User.sigEmail === sigEmail) {
          check = true;
          console.log(check);
        }
      });
      if (check === true) {
        $("#createUser").css("display", "block");
      } 
      else {
        let objUser = { sigName, sigPassword, sigConfirm, sigEmail };
        listStr.push(objUser);
        myStorege.setItem("Key", JSON.stringify(listStr));
        console.log(listStr);
        alert("Đăng ký thành công !");
        window.location.reload();
      };
    }
  });

  function saveLocal() {}

  // function callApi(method = "GET", point, isAsync, data) {
  //   var http = new XMLHttpRequest();
  //   http.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200) {
  //       return JSON.stringify(this.responseText);
  //     }
  //   };
  //   http.open(method, URL + point, isAsync);
  //   if (data != null) {
  //     http.setRequestHeader();
  //   }
  //   http.send(data);
  // }
});
