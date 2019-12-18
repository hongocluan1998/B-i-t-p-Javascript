$("#signUpForm").validate({
  rules: {
    firstName: {
      required: true,
      minlength: 2 ,
      
    },
    lastName: {
      required: true,
      minlength: 2 ,
      
    },
    userName: {
      required: true,
      minlength: 2 ,
      
    },
    password: {
      required: true,
      minlength: 8,
      validatePassword: true
    },
    confirm_password: {
      required: true,
      equalTo: "#password"
    },
    email: {
      required: true,
      validateEmail: true
    },
    phoneNumber: {
      required: true,
      digits :true,
      minlength: 5,
      maxlength: 15
    },
    agree1: "required" 
  },
  messages: {
    firstName : {
      required: "Vui lòng nhập tên của bạn",
      minlength: "Tên của bạn phải có ít nhất 2 ký tự"
    },
    lastName: {
      required: "Vui lòng nhập họ của bạn",
      minlength: "Họ của phải có ít nhất 2 ký tự"
    },
    userName: {
      required: "Vui lòng nhập tên người dùng",
      minlength: "Tên người dùng phải có ít nhất 2 ký tự"
    },
    password: {
      required: "Mật khẩu không được để trống",
      minlength: "Mật khẩu phải có ít nhất 8 ký tự"
    },
    confirm_password: {
      required: "Mật khẩu không được để trống",
      equalTo: "Hãy điền vào mật khẩu giống ở trên"
    },
    email: {
      required: "Vui lòng nhập email của bạn."
    },
    phoneNumber: {
      required: "Số điện thoại không được trống",
      minlength: "phải có ít nhất 5 số",
      maxlength: "có tối đa 15 số",
      digits: " vui lòng nhập số"
    },
    agree1: "Hãy chấp nhận chính sách của chúng tôi"
  },
  errorElement: "em",
  errorPlacement: function(error, element) {
    // Add the `help-block` class to the error element
    error.addClass("help-block");

    // Add `has-feedback` class to the parent div.form-group
    // in order to add icons to inputs
    element.parents(".col-sm-6").addClass("has-feedback");

    if (element.prop("type") === "checkbox") {
      error.insertAfter(element.parent("label"));
    } else {
      error.insertAfter(element);
    }

    // Add the span element, if doesn't exists, and apply the icon classes to it.
    if (!element.next("span")[0]) {
      $(
        "<span class='glyphicon glyphicon-remove form-control-feedback'></span>"
      ).insertAfter(element);
    }
  },
  success: function(label, element) {
    // Add the span element, if doesn't exists, and apply the icon classes to it.
    if (!$(element).next("span")[0]) {
      $(
        "<span class='glyphicon glyphicon-ok form-control-feedback'></span>"
      ).insertAfter($(element));
    }
  },
  highlight: function(element, errorClass, validClass) {
    $(element)
      .parents(".col-sm-6")
      .addClass("has-error")
      .removeClass("has-success");
    $(element)
      .next("span")
      .addClass("glyphicon-remove")
      .removeClass("glyphicon-ok");
  },
  unhighlight: function(element, errorClass, validClass) {
    $(element)
      .parents(".col-sm-6")
      .addClass("has-success")
      .removeClass("has-error");
    $(element)
      .next("span")
      .addClass("glyphicon-ok")
      .removeClass("glyphicon-remove");
  }
});
$('#userName').on('keypress', function (event) {
  var regex = new RegExp("^[a-zA-Z0-9_\.]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
     event.preventDefault();
     return false;
  }
});
$('#firstName').on('keypress', function (event) {
  var regex = new RegExp("^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
     event.preventDefault();
     return false;
  }
});
$('#lastName').on('keypress', function (event) {
  var regex = new RegExp("^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
     event.preventDefault();
     return false;
  }
});

$.validator.addMethod("validatePassword", function (value, element) {
  return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i.test(value);
}, " ký tự bao gồm chữ hoa, chữ thường và ít nhất một chữ số");

$.validator.addMethod("validateEmail", function (value, element) {
  return this.optional(element) || /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,20})$/i.test(value);
}, " email phải có dạng example.@xxx.com");