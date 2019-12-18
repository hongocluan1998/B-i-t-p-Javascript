var myStorege = window.localStorage;
var listStr =
  myStorege.getItem("Key") === null ? [] : JSON.parse(myStorege.getItem("Key"));
$(document).ready(function() {
  $("#btnCreate").click(function() {
    let mainForm = $("#mainForm");
    mainForm.validate({
      rules: {
        form_Name: {
          required: true,
          minlength: 4
        },
        form_Address: {
          required: true,
          minlength: 4
        },
        form_Password: {
          required: true,
          minlength: 4
        },
        form_Code: {
          required: true,
          number: true,
          minlength: 3
        },
        form_Email: {
          required: true,
          email: true
        },
        form_UserName: {
          required: true,
          minlength: 3
        }
      },
      messages: {
        form_Name: {
          required: "Cannot be empty !",
          minlength: jQuery.validator.format("Enter at least {0} characters")
        },
        form_Address: {
          required: "Cannot be empty !",
          minlength: jQuery.validator.format("Enter at least {0} characters")
        },
        form_Password: {
          required: "Cannot be empty !",
          minlength: jQuery.validator.format("Enter at least {0} characters")
        },
        form_Code: {
          required: "Cannot be empty !",
          number: "Format error !",
          minlength: jQuery.validator.format("Enter at least {0} characters")
        },
        form_Email: {
          required: "Cannot be empty !",
          email: "Format error !"
        },
        form_UserName: {
          required: "Cannot be empty !",
          minlength: jQuery.validator.format("Enter at least {0} characters")
        }
      }
    });
    if (mainForm.valid()) {
      let form_Name = $("#form_Name").val();
      let form_Address = $("#form_Address").val();
      let form_Password = $("#form_Password").val();
      let form_Code = $("#form_Code").val();
      let form_Email = $("#form_Email").val();
      let form_UserName = $("#form_UserName").val();
      let check = false;
      listStr.forEach(User => {
        if (
          form_Name === User.form_Name ||
          form_Email === User.form_Email ||
          form_Code === User.form_Code
        ) {
          check = true;
        }
      });
      if (check == true) {
        $("#thongBao").css("display", "block");
      } else {
        let objUser = {
          form_Name,
          form_Address,
          form_Password,
          form_Code,
          form_Email,
          form_UserName
        };
        console.log(objUser);
        listStr.push(objUser);
        console.log(listStr);
        myStorege.setItem("Key", JSON.stringify(listStr));
        alert("Create User Success !");
        showUserinTable();
      }
    }
  });
});

function showUserinTable() {
  $("#showUser").html("");
  console.log(showUser);
  listStr.forEach((User, index) => {
    var oneUser = ` 
      <tr>
      <td>${User.form_Name}</td>
      <td>${User.form_Address}</td>
      <td>${User.form_Password}</td>
      <td>${User.form_Code}</td>
      <td>${User.form_Email}</td>
      <td>${User.form_UserName}</td>
      <td> <button type="button" onclick="del(${index})" id="row${index}" class="btn btn-warning">
      Delete</button></td>
      </tr>
      `;
    $("#table")
      .find("#showUser")
      .append(oneUser);
  });
}

function del(index) {
  console.log(index);
  listStr.splice(index, 1);
  myStorege.setItem("Key", JSON.stringify(listStr));
  showUserinTable();
}
