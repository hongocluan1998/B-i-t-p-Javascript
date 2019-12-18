$(document).ready(function() {
  $("#register").validate({
    rules: {
      account: {
        required: true,
        minlength: 2,
        validateSpecialCharactersForAccount: true
      },
      password: {
        required: true,
        minlength: 8
      },
      confirmPassword: {
        required: true,
        equalTo: "#inputPassword1"
      },
      "F-Name": {
        required: true,
        validateSpecialCharacters: true
      },
      "L-Name": {
        required: true,
        validateSpecialCharacters: true
      },
      email: {
        email: true,
        required: true
      },
      "F-phone": {
        validateVietNamPhone: true,
        required: true
      }
    },
    submitHandler: function(form) {
      // for demo
      alert("Thành Công :D"); // for demo
      //   return false; // for demo
      $form.submit();
    },
    messages: {
      account: {
        required: "Vui lòng nhập Account",
        minlength: "Nhập 2 ký tự trên 2"
      },
      password: {
        required: "Vui lòng nhập Password",
        minlength: "Phải trên 8 ký tự"
      },
      confirmPassword: {
        required: "Vui lòng nhập Confirm Password",
        equalTo: "Không giống passwork đã nhập"
      },
      "F-Name": {
        required: "Vui lòng nhập First Name"
      },
      "L-Name": {
        required: "Vui lòng nhập Last Name"
      },
      email: {
        required: "Vui lòng nhập Email",
        email: "Kiểm  tra xem có theo vd EX@gmail.com"
      },
      "F-phone": {
        required: "Vui lòng nhập Phone"
      }
    },
    errorElement: "em",
    highlight: function(element, errorClass) {
      $(element)
        .addClass("is-invalid")
        .removeClass("is-valid");
    },
    unhighlight: function(element, errorClass) {
      $(element)
        .addClass("is-valid")
        .removeClass("is-invalid");
    }
  });
  $.validator.addMethod(
    "validatePassword",
    function(value, element) {
      return (
        this.optional(element) ||
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value)
      );
    },
    "Hãy nhập password từ 8 đến 16 ký tự bao gồm chữ hoa, chữ thường và ít nhất một chữ số"
  );
  
  $.validator.addMethod(
    "validateSpecialCharacters",
    function(value, element) {
      return (
        this.optional(element) ||
        /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/.test(
          value
        )
      );
    },
    "Không nhập ký tự đặt biệt"
  );

  $.validator.addMethod(
    "validateSpecialCharactersForAccount",
    function(value, element) {
      return (
        this.optional(element) ||
        /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(
          value
        )
      );
    },
    "Không nhập ký tự đặt biệt"
  );

  $.validator.addMethod(
    "validateVietNamPhone",
    function(value, element) {
      return (
        this.optional(element) || /^(09|03|04|07|08|05)([0-9]{8})$/.test(value)
      );
    },
    "Đây không phải số điện thoại Việt nam "
  );
});

$("#inputPhone").on("keypress", function(event) {
  if (event.keyCode < 48 || event.keyCode > 57) return false;
});
