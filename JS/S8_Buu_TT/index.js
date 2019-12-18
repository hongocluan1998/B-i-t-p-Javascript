$(document).ready(function() {
  $("#formValidate").validate({
    rules: {
      id: {
        required: true,
        number: true,
        minlength: 2,
        maxlength: 10
      },
      productName: {
        required: true,
        validateProductName: true,
        minlength: 3
      },
      actualPrice: {
        required: true,
        number: true
      },
      discountPrice: {
        required: true,
        number: true
      },
      stockAvailable: {
        required: true,
        number: true
      }
    },
    messages: {
      id: {
        required: "Please Input ID",
        minlength: "Please enter at least 2 characters.",
        maxlength: "Please enter no more than 10 characters."
      },
      productName: {
        required: "Please Input Product Name",
        minlength: "Please enter at least 3 characters."
      },
      actualPrice: {
        required: "Please Input Actual Price"
      },
      discountPrice: {
        required: "Please Input Discount Price"
      },
      stockAvailable: {
        required: "Please Input Stock Available"
      }
    }
  });

  $.validator.addMethod(
    "validateProductName",
    function(value, element) {
      return (
        this.optional(element) ||
        /^([A-Za-z _ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]{3,15})$/i.test(
          value
        )
      );
    },
    "Please enter the letter characters"
  );

  var $addTable = $("#saveTable");
  var $deleteTable = $("#delete");
  var $getId = $("#idNumber");
  var $getName = $("#productName");
  var $getActualPrice = $("#actualPrice");
  var $getDiscountPrice = $("#discountPrice");
  var $getStockAvailable = $("#stockAvailable");

  var ArrObj = [];
  var dataString = localStorage.getItem("listObj");
  if (dataString) {
    ArrObj = JSON.parse(dataString);
  } else ArrObj = [];


  var form = $("form");
  $addTable.on("click", function() {
    for (let z = 0; z < ArrObj.length; z++) {
      if ($getId.val() == ArrObj[z].id) {
        alert("This id is already in used");
        return false;
      }
    }
    if (form.valid() == true) {
      var object_name = new addLocal(
        $getId.val(),
        $getName.val(),
        $getActualPrice.val(),
        $getDiscountPrice.val(),
        $getStockAvailable.val()
      );
      ArrObj.push(object_name);
      localStorage.setItem("listObj", JSON.stringify(ArrObj));
    }

  });

  function addLocal(
    id,
    productName,
    actualPrice,
    discountPrice,
    stockAvailable
  ) {
    this.id = id;
    this.productName = productName;
    this.actualPrice = actualPrice;
    this.discountPrice = discountPrice;
    this.stockAvailable = stockAvailable;
  }

  function render() {
    for (let i = 0; i < ArrObj.length; i++) {
      if (i % 4 == 0) {
        $(".insertTable").append(
          "<tr class='table-warning checkbox'> <td> <input class='check' type='checkbox' id="+ ArrObj[i].id +">"+" </td> <td>" +
            ArrObj[i].id +
            "</td> <td>" +
            ArrObj[i].productName +
            "</td> <td>" +
            formatNumber(parseInt(ArrObj[i].actualPrice)) +
            "</td> <td>" +
            formatNumber(parseInt(ArrObj[i].discountPrice)) +
            "</td> <td>" +
            formatNumber(parseInt(ArrObj[i].stockAvailable)) +
            "</td> </tr>"
        );
      }
      if (i % 4 == 1) {
        $(".insertTable").append(
          "<tr class='table-success checkbox'> <td> <input class='check' type='checkbox' id="+ ArrObj[i].id +">"+" </td> <td>" +
            ArrObj[i].id +
            "</td> <td>" +
            ArrObj[i].productName +
            "</td> <td>" +
            formatNumber(parseInt(ArrObj[i].actualPrice)) +
            "</td> <td>" +
            formatNumber(parseInt(ArrObj[i].discountPrice)) +
            "</td> <td>" +
            formatNumber(parseInt(ArrObj[i].stockAvailable)) +
            "</td> </tr>"
        );
      }
      if (i % 4 == 2) {
        $(".insertTable").append(
          "<tr class='table-danger checkbox'> <td> <input class='check' type='checkbox' id="+ ArrObj[i].id +">"+" </td> <td>" +
            ArrObj[i].id +
            "</td> <td>" +
            ArrObj[i].productName +
            "</td> <td>" +
            formatNumber(parseInt(ArrObj[i].actualPrice)) +
            "</td> <td>" +
            formatNumber(parseInt(ArrObj[i].discountPrice)) +
            "</td> <td>" +
            formatNumber(parseInt(ArrObj[i].stockAvailable)) +
            "</td> </tr>"
        );
      }
      if (i % 4 == 3) {
        $(".insertTable").append(
          "<tr class='table-primary checkbox'> <td> <input class='check' type='checkbox' id="+ ArrObj[i].id +">"+" </td> <td>" +
            ArrObj[i].id +
            "</td> <td>" +
            ArrObj[i].productName +
            "</td> <td>" +
            formatNumber(parseInt(ArrObj[i].actualPrice)) +
            "</td> <td>" +
            formatNumber(parseInt(ArrObj[i].discountPrice)) +
            "</td> <td>" +
            formatNumber(parseInt(ArrObj[i].stockAvailable)) +
            "</td> </tr>"
        );
      }
    }
  }
  render();

  
  $deleteTable.on("click", function() {
    var j ;
    debugger
    if ($(".checkbox input:checked").parent().length == ArrObj.length) {
        confirm("Do you want Clear All.");
        localStorage.clear();
      }
     else if ($(".checkbox input:checked").parent().length > 0) {
      var answer = confirm("Are you sure you want to delete ?");
      if (answer) {
        for (j = 0; j < ArrObj.length; j++) {
          var checkDelete = $("#" + ArrObj[j].id).is(":checked");
          if (checkDelete == true) {
            ArrObj.splice(j, 1);
            j--;
          }
          localStorage.setItem("listObj", JSON.stringify(ArrObj));
        }
      }
    }
      location.reload();
  });

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

});