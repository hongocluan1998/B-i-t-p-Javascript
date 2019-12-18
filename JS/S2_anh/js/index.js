let inputWidth = document.getElementById("inputWidth");
let inputHight = document.getElementById("inputHight");
let btnGennerate = document.getElementById("btnGennerate");
let selectColor = document.getElementById("selectColor");
let containerShowResult = document.getElementById("containerShowResult");

window.addEventListener("load", function() {
  inputIsEmty();
});
inputWidth.addEventListener("change", function() {
  validatePx(inputWidth, "1200");
  inputIsEmty();
  validateInput(inputWidth.value, inputWidth);
});
inputHight.addEventListener("change", function() {
  validatePx(inputHight, "600");
  inputIsEmty();
  validateInput(inputHight.value, inputHight);
});
selectColor.addEventListener("change", function() {
  inputIsEmty();
});
btnGennerate.addEventListener("click", function() {
  inputResult(inputWidth.value, inputHight.value, selectColor.value);
});

function validateInput(inputValue, nameInput) {
  if (inputValue <= 0) {
    alert("Nhập số lớn hơn 0");
    nameInput.value = "";
    btnGennerate.disabled = true;
  } else if (isNaN(Number(inputValue))) {
    alert("vui lòng không nhập chữ");
    nameInput.value = "";
    btnGennerate.disabled = true;
  }
}

function validatePx(available, numberPx) {
  if (Number(available.value) > Number(numberPx)) {
    alert(
      "Nhập lớn quá :D \n" + " max " + available.name + " = " + numberPx + "px"
    );
    available.value = numberPx;
  }
}

function inputIsEmty() {
  if (
    inputHight.value === "" ||
    inputWidth.value === "" ||
    selectColor.value === ""
  ) {
    btnGennerate.disabled = true;
  } else {
    btnGennerate.disabled = false;
  }
}

function inputResult(width, hight, color) {
  $("div").remove(".box-result");
  var node = document.createElement("div");
  node.setAttribute("class", "box-result mx-auto");
  node.setAttribute("id", "boxResult");
  node.setAttribute("style", "display: none");
  node.style.height = hight + "px";
  node.style.width = width + "px";

  containerShowResult.appendChild(node);

  $("#boxResult").css("background-color", color);
  $("#boxResult").slideDown(1000);
}
