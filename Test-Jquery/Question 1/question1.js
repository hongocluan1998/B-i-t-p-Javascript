$(document).ready(function() {
  $("#form_question")
    .submit(function(e) {
      e.preventDefault();
    })
    .validate({
      rules: {
        form_name: {
          required: true,
          minlength: 5
        },
        form_code: {
          required: true,
          minlength: 3
        },
        form_email: {
          required: true,
          email: true
        },
        form_password: {
          required: true
        },
        form_address: {
          required: true
        },
        form_userName: {
          required: true
        }
      },
      messages: {
        form_name: {
          required: "Cannot be empty !",
          minlength: jQuery.validator.format("Enter at least {0} characters")
        },
        form_code: {
          required: "Cannot be empty !",
          minlength: jQuery.validator.format("Enter at least {0} characters")
        },
        form_email: {
          required: "Cannot be empty !",
          email: "Cannot format email !"
        },
        form_password: {
          required: "Cannot be empty !"
        },
        form_userName: {
          required: "Cannot be empty !"
        },
        form_address: {
          required: "Cannot be empty !"
        }
      },
      submitHandler: function() {
        alert("ok");
      }
    });

  function CreateUser() {
      let name = $("#form_name").val();
      let address = $("#form_address").val();
      let password = $("#form_password").val();
      let code = $("#form_code").val();
      let email = $("#form_email").val();
      let userName = $("#form_userName").val();

      var obj = {
        name, address, password, code, email, userName
      };
  }
});
