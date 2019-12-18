$(document).ready(function(){
    $("#email").focus(function(){
      $("span").css("display", "inline");
      setTimeout(() => {
        $("span").css("display", "none");
      },2000);
    });
    
  });
$("button").click(function() {
  var inPut1 = $("#email").val().trim();
  var inPut2 = $("#enter").val().trim();
  var inPut3 = $("#first").val().trim();
  if (inPut1 != "" && inPut2 != "" && inPut3 != "") {
    alert("Submit Ok");
  }
  else if(inPut1 == "" && inPut2 == "" && inPut3 == "")
  {
    $("#alertEmail").text("Vui long nhap");
    $("#alertEnter").text("Vui long nhap");
    $("#alertFirst").text("Vui long nhap");
  }
  else if (inPut1 == "" && inPut2 != "" && inPut3 != "")
  {
    $("#alertEmail").text("Vui long nhap");
  }
  else if (inPut1 != "" && inPut2 == "" && inPut3 != "")
  {
    $("#alertEnter").text("Vui long nhap");
  }
  else if (inPut1 != "" && inPut2 != "" && inPut3 == "")
  {
    $("#alertFirst").text("Vui long nhap");
  }
  else if (inPut1 != "" && inPut2 == "" && inPut3 == "")
  {
    $("#alertEnter").text("Vui long nhap");
    $("#alertFirst").text("Vui long nhap");
  }
  else if (inPut1 == "" && inPut2 == "" && inPut3 != "")
  {
    $("#alertEmail").text("Vui long nhap");
    $("#alertEnter").text("Vui long nhap");
  }
  else if (inPut1 == "" && inPut2 != "" && inPut3 == "")
  {
    $("#alertEmail").text("Vui long nhap");
    $("#alertFirst").text("Vui long nhap");
  }
});
