var show = document.getElementById("click"); //get ID button Import.
var getValue = document.getElementById("inputValue"); //get ID input value.
var inputQuestion = document.getElementById("returnQuestion"); // get ID Information error.
var inputValue = document.getElementsByClassName("addInput"); //get ID input value compare.

//Information error in Input Length Array.
function validateInputArray() {
  if (
    getValue.value == "" ||
    isNaN(getValue.value) ||
    parseInt(getValue.value) <= 0
  ) {
    inputQuestion.style.color = "red";
    inputQuestion.textContent = "Input the Number and greater than 0 ";
    return true;
  } else {
    inputQuestion.textContent = "";
  }
}
//add tags and class
function addClass(number) {
  var divOne = document.createElement("div"); //create tags div.
  divOne.setAttribute("class", "labelInput"); //add class to the tag div.

  var para = document.createElement("label"); //create tag label.
  para.setAttribute("class", "range"); //add class to the tag label.
  var node = document.createTextNode("Input " + number.toString() + ": "); //create text to the tag label.
  para.appendChild(node);

  var input = document.createElement("input"); //create tag input.
  var element = document.getElementById("form");

  input.setAttribute("class", "addInput"); //add class to the tag input.
  input.setAttribute("id", "input" + number.toString());

  element.appendChild(divOne);
  divOne.appendChild(para);
  divOne.appendChild(input);
}
//add Button
function addButton() {
  var button = document.createElement("button");
  button.setAttribute("class", "btn btn-outline-warning");
  button.setAttribute("id", "check");
  var node = document.createTextNode("Check");
  button.appendChild(node);
  var element = document.getElementById("form");
  element.appendChild(button);
}
//show  out the number of cells you want.
function showForm() {
  for (var i = 0; i < getValue.value; i++) {
    addClass(i + 1);
  }
  if (getValue.value > 1) {
    addButton();
    var check = document.getElementById("check");
    check.onclick = function() {
      findNumber();
    };
  }
}

var array = []; //Create an extra array.

//Arrange the array in ascending order.
function swap(array) {
  for (var i = 0; i < inputValue.length; i++) {
    array.push(inputValue[i].value);
  }
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (Number(array[i]) > Number(array[j])) {
        var tempt = array[i];
        array[i] = array[j];
        array[j] = tempt;
      }
    }
  }
}
//find Number you want to add class color.
function findNumber() {
  swap(array);
  if (Number(array[0]) >= Number(array[1]) + Number(array[2])) {
    for (var t = 0; t < inputValue.length; t++) {
      if (inputValue[t].value == array[0]) {
        inputValue[t].classList.add("color");
      }
    }
  }
  if (Number(array[1]) >= Number(array[0]) + Number(array[2])) {
    for (var z = 0; z < inputValue.length; z++) {
      if (inputValue[z].value == array[1]) {
        inputValue[z].classList.add("color");
      }
    }
  }
  for (var i = 2; i < array.length; i++) {
    if (Number(array[i]) >= Number(array[0]) + Number(array[1])) {
      for (var j = 0; j < inputValue.length; j++) {
        if (inputValue[j].value == array[i]) {
          inputValue[j].classList.add("color");
        }
      }
    }
  }
}
//add event blur when error.
getValue.addEventListener("blur", validateInputArray, true);

//add event click for the tag button.
show.addEventListener(
  "click",
  function() {
    showForm();
  },
  false
);
