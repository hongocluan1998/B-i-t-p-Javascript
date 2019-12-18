let arrayObject = [];

function readLocalStorage() {
  var dataString = localStorage.getItem("product");
  if (dataString) {
    arrayObject = JSON.parse(dataString);
  } else arrayObject = [];
}

function render() {
  $("#insertTable").empty();
  for (let i = 0; i < arrayObject.length; i++) {
    $("#insertTable").append(
      "<tr>" +
        "<td>" +
        "<div class='form-check'>" +
        "<input class='form-check-input' type='checkbox' id=" +
        arrayObject[i].id +
        " value=" +
        arrayObject[i].id +
        " />" +
        "</div>" +
        "</td>" +
        "<td>" +
        arrayObject[i].id +
        "</td>" +
        "<td>" +
        arrayObject[i].name +
        "</td>" +
        "<td>" +
        new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND"
        }).format(arrayObject[i].actualPrice) +
        "</td>" +
        "<td>" +
        new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND"
        }).format(arrayObject[i].discountPrice) +
        "</td>" +
        "<td>" +
        arrayObject[i].stockAvailable +
        "</td>" +
        "<tr>"
    );
  }
}

function product(id, name, actualPrice, discountPrice, stockAvailable) {
  (this.id = id),
    (this.name = name),
    (this.actualPrice = actualPrice),
    (this.discountPrice = discountPrice),
    (this.stockAvailable = stockAvailable);
}

function addProduct(object) {
  arrayObject.push(object);
  localStorage.setItem("product", JSON.stringify(arrayObject));
  readLocalStorage();
}

function removeProduct(objid) {
  //   $("#" + id + "").remove();
  for (let i = 0; i < arrayObject.length; i++) {
    if (arrayObject[i].id == objid) {
      arrayObject.splice(i, 1);
      i--;
    }
  }
}

function checkTrun(objid) {
  //   $("#" + id + "").remove();
  for (let i = 0; i < arrayObject.length; i++) {
    if (arrayObject[i].id == objid) {
      myShow("Trùng ID", "is-invalid");
      return false;
    }
  }
  return true;
}

function rebootLocalStorage() {
  let arryTamp = arrayObject;
  arrayObject = [];
  localStorage.clear();
  $.each(arryTamp, function(index, value) {
    addProduct(
      new product(
        value.id,
        value.name,
        value.actualPrice,
        value.discountPrice,
        value.stockAvailable
      )
    );
  });
}

function checkCheckBox() {
  let length = arrayObject.length;
  console.log(arrayObject.length);
  for (let i = 0; i < arrayObject.length; i++) {
    var checkDelete = $("#" + arrayObject[i].id).is(":checked");
    if (checkDelete) {
      removeProduct(Number(arrayObject[i].id));
      i--;
    }
  }
  console.log(arrayObject.length);
  length > arrayObject.length
    ? myShow("Xóa Thành Công", "is-valid")
    : myShow("Xóa Thất Bại", "is-invalid");
}
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

function ramdomData() {
  addProduct(
    new product(
      Date.now() + 1,
      "Super Pump",
      Math.floor(Math.random() * 100000000),
      Math.floor(Math.random() * 10000000),
      Math.floor(Math.random() * 100)
    )
  );
  addProduct(
    new product(
      Date.now() + 2,
      "Super Pump",
      Math.floor(Math.random() * 100000000),
      Math.floor(Math.random() * 10000000),
      Math.floor(Math.random() * 100)
    )
  );
  addProduct(
    new product(
      Date.now() + 3,
      "Super Pump",
      Math.floor(Math.random() * 100000000),
      Math.floor(Math.random() * 10000000),
      Math.floor(Math.random() * 100)
    )
  );
  addProduct(
    new product(
      Date.now() + 4,
      "Super Pump",
      Math.floor(Math.random() * 100000000),
      Math.floor(Math.random() * 10000000),
      Math.floor(Math.random() * 100)
    )
  );
  readLocalStorage();
  render();
  myShow("RamDom Thành Công", "is-valid");
}

$(document).ready(function() {
  let inputId = document.getElementById("inputId");
  let inputProductName = document.getElementById("inputProductName");
  let inputActualPrice = document.getElementById("inputActualPrice");
  let inputDiscountPrice = document.getElementById("inputDiscountPrice");
  let inputStockAvailable = document.getElementById("inputStockAvailable");
  let btnSaveProduct = document.getElementById("btnSaveProduct");
  let btnMySpinner = document.getElementById("btnMySpinner");
  let btnRamdum = document.getElementById("btnRamdum");
  let btnDeleteAll = document.getElementById("btnDeleteAll");

  readLocalStorage();
  render();
  btnRamdum.addEventListener("click", function() {
    ramdomData();
  });
  btnDeleteAll.addEventListener("click", function() {
    let length = arrayObject.length;
    if (confirm("Chắc Chắn Muốn Xóa")) {
      localStorage.clear();
      readLocalStorage();
      render();
    }
    length > arrayObject.length
      ? myShow("Xóa Local Storage Thành Công", "is-valid")
      : myShow("Xóa Local Storage Thất Bại", "is-invalid");
  });
  let btnDelete = document.getElementById("btnDelete");
  $(btnMySpinner).hide();

  btnDelete.addEventListener("click", function() {
    checkCheckBox();
    rebootLocalStorage();
    readLocalStorage();
    render();
  });
  btnSaveProduct.addEventListener("click", function(event) {
    let form = $("form");
    if (form.valid() == true) {
      $(btnSaveProduct).hide();
      $(btnMySpinner).show();
      if (checkTrun(inputId.value)) {
        addProduct(
          new product(
            inputId.value,
            inputProductName.value,
            inputActualPrice.value,
            inputDiscountPrice.value,
            inputStockAvailable.value
          )
        );
        rebootLocalStorage();
        render();
        myShow("Thành Công", "is-valid");
      }
      inputId.value = "";
      inputProductName.value = "";
      inputActualPrice.value = "";
      inputDiscountPrice.value = "";
      inputStockAvailable.value = "";
      inputId.focus();
      setTimeout(function() {
        $(btnMySpinner).hide();
        $("label.error").remove();
      }, 200);
      setTimeout(function() {
        $(btnSaveProduct).show();
      }, 500);
    }
  });

  $("#addProduct").validate({
    rules: {
      id: {
        required: true
      },
      "name-product": {
        required: true,
        validateSpecialCharacters: true
      },
      "actual-price": {
        required: true
      },
      "discount-price": {
        required: true
      },
      "stock-vailable": {
        required: true
      }
    }
  });

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
    "Không nhập ký tự đặt biệt và số"
  );
});
