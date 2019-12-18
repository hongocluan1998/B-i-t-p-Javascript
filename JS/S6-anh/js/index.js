$(document).ready(function() {
  let run = document.getElementById("run");
  let inputTime = document.getElementById("inputTime");
  let x;
  run.addEventListener("click", function() {
    if (inputTime.value == "") {
      alert("ko để trống nhé");
    } else countDownDate();
  });

  function countDownDate() {
    // Set the date we're counting down to
    var countDownDate = new Date(inputTime.value).getTime();
    console.log(inputTime.value);
    clearInterval(x);
    // Update the count down every 1 second
    x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      if(distance<0){
        alert("Quá khứ rồi");
        clearInterval(x);
      }
      console.log(distance);

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Bùm";
      }
    }, 1000);
  }
});
