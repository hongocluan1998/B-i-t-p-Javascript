document.addEventListener("DOMContentLoaded",
  function() {
    var listInput = document.getElementsByClassName("nhap");
    var clickMe = document.getElementById("click");
    var show = document.getElementById("show");
    clickMe.onclick = function() {
      var bigNumber  = listInput[0].value;
      for (var i = 1 ;i <= 9 ;i++){
        if (parseInt(listInput[i].value) > parseInt(bigNumber)){
          var bigNumber = listInput[i].value;
        }
      }
    show.classList.toggle("move");
    document.getElementById("show").innerHTML = "Hế Lô :" + parseInt(bigNumber);
    }
  },false);
