$(document).ready(function() {
  let numberMax = null;
  let indexNumberMax = null;
  let isChange = false;
  $("#showResult").click(function() {
    isNotEmty();
    deleteClass("big-number"); //xóa calss cua bigNumber cũ
    console.log("#number" + indexNumberMax);
    //   cho vao mang
    var arrayNumber = [];
    for (i = 1; i <= 10; i++) {
      // arrayNumber.push(Number(document.getElementById("number" + i).value));
      console.log(document.getElementById("number" + i).value);
      if (document.getElementById("number" + i).value == "") {
        arrayNumber.push(-9007199254740992);
      } else
        arrayNumber.push(Number(document.getElementById("number" + i).value));
    }
    console.log(arrayNumber);

    // dùng thư  viện
    numberMax = Math.max.apply(Math, arrayNumber);
    //--//
    // duyệt mảng
    // numberMax = arrayNumber[0];
    // arrayNumber.forEach(function(item, index, array) {
    //   if (item > numberMax) {
    //     numberMax = item;
    //   }
    // });
    //   end duyệt mảng
    indexNumberMax = arrayNumber.indexOf(numberMax) + 1; //vị trí trong mảng
    // in ra
    console.log(isChange);
    if (isChange != true || isNaN(numberMax)) {
      document.getElementById("numberMax").innerHTML = "Vui lòng nhập số";
      isChange = false;
      $("#modalHidenHeader").hide();
    } else {
      $("#modalHidenHeader").show();
      document.getElementById("numberMax").innerHTML =
        numberMax + " <p>vị trí số(" + indexNumberMax + ")</p>";
      addClass("big-number");
    }
    console.log("#number" + indexNumberMax);
    $("#showResult-m").modal();
  });
  // fix tào lao :D
  //check thay dổi
  $("input").on("change", function() {
    isChange = true;
  });
  //check "" nếu 10 ô đề "" <=> ko bị  thay đổi
  function isNotEmty() {
    var indexEmty = 0;
    for (i = 1; i <= 10; i++) {
      if (document.getElementById("number" + i).value == "") {
        indexEmty++;
        console.log(indexEmty);
        // return (isChange = false);
      }
    }
    if (indexEmty == 10) {
      return (isChange = false);
    } else return (isChange = true);
  }
  // add calss  big-number
  function addClass(nameClass) {
    $("#number" + indexNumberMax).addClass(nameClass);
  }
  // delete calss
  function deleteClass(nameClass) {
    $("#number" + indexNumberMax).removeClass(nameClass);
  }
  //
  // btn-xóa
  $("#deleteNumber").click(function() {
    for (i = 1; i <= 10; i++) {
      document.getElementById("number" + i).value = "";
    }
    isChange = false; //thay đổi thành chưa thây đổi
    deleteClass("big-number"); //xóa class big number  cũ  khi đặt lại
  });
});
window.onload = function() {
  function renderInput(i) {
    return (
      '<div class="col-sm"><input class="box-number text-center" type="number" name="number' +
      i +
      '" id="number' +
      i +
      '"></input></div>'
    );
  }
  $("#input-warp").append(
    '<div class="col-sm"><input class="box-number text-center" type="number" name="number' +
      1 +
      '" id="number' +
      1 +
      '" autofocus="true"></input></div>'
  );
  for (i = 2; i <= 5; i++) {
    $("#input-warp").append(renderInput(i));
  }
  for (i = 6; i <= 10; i++) {
    renderInput(i);
    $("#input-warp2").append(renderInput(i));
  }
};
