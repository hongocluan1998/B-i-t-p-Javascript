function renderA(number, callback) {
  let thisNumber = Number(number);
  for (let i = 0; i < thisNumber; i++) {
    if (i % 100 == 0) $("#render").append("<br><span>a</span>");
    if (i % 100 != 0) $("#render").append("<span>a</span>");
  }
  callback();
}
function redColor() {
  $("span").each(function() {
    $(this).css("color", "red");
  });
}

let run = document.getElementById("run");
let inputNumber = document.getElementById("inputNumber");

run.addEventListener("click", function() {
  $("#render").empty();
  renderA(inputNumber.value, redColor);
});
