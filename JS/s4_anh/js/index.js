$(document).ready(function() {
  let btnRenderEmail = document.getElementById("btnRenderEmail");
  let boxEmail = document.getElementById("boxEmail");
  let boxPhone = document.getElementById("boxPhone");
  let btnRenderPhone = document.getElementById("btnRenderPhone");
  let btnSubmitForm = document.getElementById("btnSubmitForm");
  let numberOfInput = 0;
  let error = null;
  btnSubmitForm.addEventListener(
    "click",
    function(e) {
      error = 0;
      checkSubmit();
      // checkEmailEmty();
      // checkPhoneEmty();
      if (error == 0) {
        alert("ok");
      } else {
        e.preventDefault();
      }
    },
    false
  );

  btnRenderEmail.addEventListener("click", function() {
    numberOfInput++;
    console.log(numberOfInput);
    renderInput(boxEmail, "Email");
  });
  btnRenderPhone.addEventListener("click", function() {
    numberOfInput++;
    renderInput(boxPhone, "Phone");
    // rederInPutPhonePlus();
    console.log(numberOfInput);
  });

  function rederInPutPhonePlus() {
    //create div
    var divParentInputPhone = document.createElement("div");
    divParentInputPhone.setAttribute("class", "form-group mx-sm-3 mb-2");

    // create +84
    var divInputPhone = document.createElement("input");
    divInputPhone.setAttribute(
      "class",
      "form-control-plaintext my-width text-center"
    );
    divInputPhone.setAttribute("readonly", "true");
    divInputPhone.setAttribute("value", "+84");

    return divParentInputPhone.appendChild(divInputPhone);
  }

  function renderInput(divWrap, content) {
    // create div warp
    var divParent = document.createElement("div");
    divParent.setAttribute("class", "row d-flex justify-content-center");
    //create div wrap input
    var divParentInput = document.createElement("div");
    divParentInput.setAttribute("class", "form-group mx-sm-3 mb-2");
    //create input
    var input = document.createElement("input");
    if (content === "Email") {
      input.setAttribute("class", "form-control Email-input");
    }
    if (content === "Phone") {
      input.setAttribute("class", "form-control Phone-input");
    }
    input.setAttribute("type", content);
    input.setAttribute("placeholder", content);
    input.setAttribute("required", "true");
    //create btn remove
    var buttonDelete = document.createElement("button");
    buttonDelete.setAttribute("class", "btn btn-danger mb-2  remove_button");
    //create btn conten
    iContent = document.createElement("i");
    iContent.setAttribute("class", "fa fa-times");
    //span notification
    var notification = document.createElement("p");
    notification.setAttribute("class", "text-center col-12 my-1 text-danger");
    //content notification
    var contentNotification = document.createTextNode("");
    notification.appendChild(contentNotification);
    // add child into parent
    divParent.appendChild(notification);
    buttonDelete.appendChild(iContent);
    divParentInput.appendChild(input);

    // change for phone  input
    if (content === "Phone") divParent.appendChild(rederInPutPhonePlus());
    divParent.appendChild(divParentInput);
    divParent.appendChild(buttonDelete);

    divWrap.appendChild(divParent);

    addEventListenerForBtnremove(buttonDelete);

    if (content === "Email") {
      addEventListenerForInput(input, contentNotification, "Email");
    }
    if (content === "Phone") {
      addEventListenerForInput(input, contentNotification, "Phone");
    }
  }

  //btn remove
  function addEventListenerForBtnremove(object) {
    object.addEventListener("click", function() {
      object.parentElement.remove();
      numberOfInput--;
      console.log(numberOfInput);
    });
  }

  // valiate Email add event focusout
  function addEventListenerForInput(object, content, stypeInput) {
    if (stypeInput === "Email") {
      object.addEventListener("focusout", function() {
        check_email(object, content);
      });
    } else if (stypeInput === "Phone") {
      object.addEventListener("focusout", function() {
        check_phone(object, content);
      });
    }
  }

  function checkEmailEmty() {
    $(".Email-input").each(function() {
      console.log($(this).val() == "");
      console.log("ok");
      if ($(this).val() == "") {
        error++;
        $(this).addClass("input_error");
        alert("Email Chưa nhập gì");
        return false;
      }
    });
  }

  function checkPhoneEmty() {
    $(".Phone-input").each(function() {
      console.log($(this).val() == "");
      if ($(this).val() == "") {
        error++;
        $(this).addClass("input_error");
        alert("Phone Chưa nhập gì");
        return false;
      }
    });
  }
  function checkSubmit() {
    // console.log("ok");
    if (numberOfInput <= 0) {
      alert("không có gì để gởi tới sever cả ");
      error++;
    } else {
      checkPhoneEmty();
      checkEmailEmty();
    }
  }
  //funtion check validate phone()
  function check_phone(object, content) {
    var pattern = new RegExp(/^(09|03|04|07|08|05)([0-9]{8})$/);
    console.log(object.value.lenght);
    if (object.value == 0) {
      object.classList.add("input_error");
      content.nodeValue = "Có  tâm tí nào  (có Số nào đâu)";
      btnSubmitForm.disabled = true;
    } else if (pattern.test(object.value)) {
      object.classList.remove("input_error");
      content.nodeValue = "";
      btnSubmitForm.disabled = false;
    } else {
      content.nodeValue = "Số điện thoại ni không phải ở  Việt Nam !!!";
      object.classList.add("input_error");
      btnSubmitForm.disabled = true;
    }
  }
  //funtion check validate Email()
  function check_email(object, content) {
    var pattern = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim);
    if (object.value == 0) {
      object.classList.add("input_error");
      content.nodeValue = "Có  tâm tí nào  (có chữ nào đâu)";
      btnSubmitForm.disabled = true;
    } else if (pattern.test(object.value)) {
      object.classList.remove("input_error");
      content.nodeValue = "";
      btnSubmitForm.disabled = false;
    } else {
      content.nodeValue = "Email không hợp lệ!!!";
      object.classList.add("input_error");
      btnSubmitForm.disabled = true;
    }
  }
});

// HTML tay
// '<div class="row d-flex justify-content-center flex-nowrap" >' +
// '<div class="form-group mx-sm-3 mb-2 ">' +
// '<input type="email" class="form-control" placeholder="Email" />' +
// "</div>" +
// '<button class="btn btn-primary mb-2  remove_button">' +
// '<span aria-hidden="true">&times;</span>' +
// "</button>" +
// "</div>";
