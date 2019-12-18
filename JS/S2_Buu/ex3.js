var submit = document.getElementById("createBlock");
var nextBlock = document.getElementById("nextBlock");
var bgColor = document.getElementsByClassName("color");
var animation = document.getElementById("x");
function notification() {
  var inputWidth = document.getElementById("inputWidth").value;
  var inputHeight = document.getElementById("inputHeight").value;
  if ((isNaN(inputWidth) || inputWidth == "") && (isNaN(inputHeight) || inputHeight == "")) {
    alert("Width and Height must be filled out");
  }
  else if (isNaN(inputWidth) || inputWidth == "") {
    alert("Width must be filled out");
  }
  else if (isNaN(inputHeight) || inputHeight == "") {
    alert("Height must be filled out");
  }
}
function drawBlock(x, y ,z) {
  if (x > 1350 || y > 600 ) {
    alert("nhập nhỏ thôi ! Cho dễ nhìn");
  }
  else {
  document.getElementById("x").style.width = x + "px";
  document.getElementById("x").style.height = y + "px";
  document.getElementById("x").style.border = "1px solid grey";
  document.getElementById("x").style.backgroundColor = z + "";
  }
}
function searchColor(){
  for (var i = 0; i < bgColor.length; i++){
      if (bgColor[i].selected){
        drawBlock(inputWidth.value, inputHeight.value, bgColor[i].value);  
      }
  }
}
submit.addEventListener(
  "click",
  function() {
    notification();
    var color = bgColor.value;
    drawBlock(inputWidth.value, inputHeight.value);
    searchColor();
    var y = 2;

    x.classList.toggle("animation");
    x.classList.remove("animationNext");
  },
  false
);
nextBlock.addEventListener("click",function(){
  x.classList.remove("animation");
  x.classList.toggle("animationNext");
  inputWidth.value ="";
  inputHeight.value ="";
},false);
