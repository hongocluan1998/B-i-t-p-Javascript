$(document).ready(function() {
  $("#email").change(function() {
    var eMail = $("#email").val();
    function ValidateEmail(eMail) {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
         eMail
        )
      ) {
        return true;
      }
      else
      {
      alert("You have entered an invalid email address!");
      return false;
      }
    }
  });
});
