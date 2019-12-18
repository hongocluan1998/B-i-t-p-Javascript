let arrayLength = document.getElementById("arrayLength");
let btnRender = document.getElementById("btnRender");
let arrayNumber = [];
let arrayNumberError = [];
let btnShowResult = document.getElementById("btnShowResult");

btnRender.addEventListener("click", function() {
  renderInput();
});
btnShowResult.addEventListener("click", function() {
  console.clear();
  arrayNumber = [];
  arrayNumberError = [];
  pushElementIntoArray();
  console.log(arrayNumber);
  findInputError();
  setCalssError();
});

//render input
function renderInput() {
  $("#showInput").empty();
  var i = 0;
  while (i < arrayLength.value) {
    var html =
      '<div class="row"><div class="col-sm-2 text-center mt-3">No.' +
      i +
      "</div>" +
      '<div class="col-sm-4 text-center mt-3 " >' +
      '<input type="number" class="form-control text-center elementArray " />' +
      "</div>" +
      "</div>";
    $("#showInput").append(html);
    // console.log(i);
    i++;
  }
}

//push element into array arrayNumber
function pushElementIntoArray() {
  $(".elementArray").each(function() {
    if ($(this).val() != "") arrayNumber.push($(this).val());
  });
}

function findInputError() {
  var i = 0;
  while (i < arrayNumber.length) {
    console.error(i, "value= " + arrayNumber[i]);
    sumNetIndex(i);
    i++;
  }
}

//sum 2 Number and  compare curent number
//push number error into numberError[]
function sumNetIndex(arryIndex) {
  // debugger;
  for (i = 0; i < arrayNumber.length; i++) {
    if (i != arryIndex) {
      for (j = i + 1; j < arrayNumber.length; j++) {
        if (j != arryIndex) {
          console.log(
            Number(arrayNumber[i]),
            Number(arrayNumber[j]),
            " = " + (Number(arrayNumber[i]) + Number(arrayNumber[j]))
          );
          if (
            Number(arrayNumber[arryIndex]) >=
            Number(arrayNumber[i]) + Number(arrayNumber[j])
          ) {
            console.error(
              Number(arrayNumber[arryIndex]) +
                " >= " +
                (Number(arrayNumber[i]) + Number(arrayNumber[j]))
            );
            if (!includesArray(arrayNumber[arryIndex])) {
              arrayNumberError.push(arrayNumber[arryIndex]);
              console.log(arrayNumberError);
            } else console.log("ko vao mảng");
            return;
          }
        }
      }
    }
  }
}

function includesArray(number) {
  return arrayNumberError.includes(number.toString());
}

// set calss element (boder red)
function setCalssError() {
  $(".elementArray").each(function(index) {
    $(this).removeClass("my-input-error");
    for (i = 0; i < arrayNumber.length; i++) {
      if (Number($(this).val()) == Number(arrayNumberError[i])) {
        $(this).hide();
        $(this).addClass("my-input-error");
        $(this).animate({ width: "show" }, index * 500);
      }
    }
  });
}
