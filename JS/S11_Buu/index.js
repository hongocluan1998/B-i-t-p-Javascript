$(document).ready(function() {
  var $getNumber = $('#number');
   
   $('#run').on('click',function(){
    if ($getNumber.val() == "" || $getNumber.val() < 0 ) {
      alert("Please input Value > 0");
      return false;
    }

    printColor($getNumber.val(),changeColor);   
   });

  function printColor(number,callback) {
   
    var content = "";
    $('.more').remove();
      for (var i = 0 ; i < number ; i++) {
         content +="A"; 
      }
    $('.inner').append("<p class='more'>"+ content + "</p>");
    callback();
};
  function changeColor(){
    $(".more").addClass("rainbow");
    $(".more").addClass("rainbow_text_animated");
    
}
});
