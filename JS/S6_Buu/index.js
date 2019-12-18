function calcTime(city, offset) {
  // create Date object for current location
  d = new Date();

  // convert to msec
  // add local time zone offset
  // get UTC time in msec
  utc = d.getTime() + d.getTimezoneOffset() * 60000;

  // create new Date object for different city
  // using supplied offset
  nd = new Date(utc + 3600000 * offset);

  return nd.toLocaleString();
}

setInterval(function() {
  document.getElementById("VN").innerHTML = calcTime("Việt Nam: ", "+7");
}, 1000);

setInterval(function() {
  document.getElementById("Japan").innerHTML = calcTime(
    "Tokyo ,Nhật Bản ",
    "+9"
  );
}, 1000);

setInterval(function() {
  document.getElementById("aiCap").innerHTML = calcTime(
    "Ai Cập • Cairo ",
    "+2"
  );
}, 1000);

setInterval(function() {
  document.getElementById("Nga").innerHTML = calcTime("Nga • Moscow", "+3");
}, 1000);

setInterval(function() {
  document.getElementById("London").innerHTML = calcTime("London", "+3");
}, 1000);

setInterval(function() {
  document.getElementById("Dailoan").innerHTML = calcTime(
    "Đài Loan • Đài Bắc",
    "+8"
  );
}, 1000);

setInterval(function() {
  document.getElementById("NewYork").innerHTML = calcTime("New York", "-4");
}, 1000);

var setTimer = document.getElementById("setTimer");

var timer;
setTimer.addEventListener(
  "click",
  function setTimer() {
    clearInterval(timer);

    var timer_month = document.getElementById("month").value;
    var timer_day = document.getElementById("day").value;
    var timer_year = document.getElementById("year").value;
    var timer_hour = document.getElementById("hour").value;
    if (timer_hour == "") timer_hour = 0;
    var timer_min = document.getElementById("min").value;
    if (timer_min == "") timer_min = 0;

    //validate
    if (timer_month == "" || timer_day == "" || timer_year == "") {
      alert("vui lòng nhập đầy đủ");
    } else if (
      timer_month == "" ||
      isNaN(timer_month) ||
      parseInt(timer_month) < 0 ||
      parseInt(timer_month) > 13
    ) {
      alert("vui lòng nhập tháng từ 1-12");
    } else if (
      timer_day == "" ||
      isNaN(timer_day) ||
      parseInt(timer_day) < 0 ||
      parseInt(timer_day) > 31
    ) {
      alert("vui lòng nhập ngày từ 1-31");
    } else if (
      timer_year == "" ||
      isNaN(timer_year) ||
      parseInt(timer_year) < 2019
    ) {
      alert("vui lòng nhập năm lớn hơn hoặc bằng năm hiện tại");
    }else if(isNaN(timer_hour) || parseInt(timer_hour) <0 || parseInt(timer_hour) >23 ) {
alert ("vui lòng nhập số 0-23");
    }
    else if(isNaN(timer_min) || parseInt(timer_min) <0 || parseInt(timer_min) >59) {
      alert ("vui lòng nhập số 0 -59");
          }  else {
      var timer_date =
        timer_month +
        "/" +
        timer_day +
        "/" +
        timer_year +
        " " +
        timer_hour +
        ":" +
        timer_min;
      var end = new Date(timer_date); // Arrange values in Date Time Format
      var now = new Date(); // Get Current date time
      var second = 1000; // Total Millisecond In One Sec
      var minute = second * 60; // Total Sec In One Min
      var hour = minute * 60; // Total Min In One Hour
      var day = hour * 24; // Total Hour In One Day

      function showTimer() {
        var now = new Date();
        var remain = end - now; // Get The Difference Between Current and entered date time

        var days = Math.floor(remain / day); // Get Remaining Days
        var hours = Math.floor((remain % day) / hour); // Get Remaining Hours
        var minutes = Math.floor((remain % hour) / minute); // Get Remaining Min
        var seconds = Math.floor((remain % minute) / second); // Get Remaining Sec

        document.getElementById("timer_value").innerHTML = days + " Days ";
        document.getElementById("timer_value").innerHTML += hours + " Hours ";
        document.getElementById("timer_value").innerHTML += minutes + " Mins ";
        document.getElementById("timer_value").innerHTML += seconds + " Secs";
      }
      timer = setInterval(showTimer, 1000); // Display Timer In Every 1 Sec
    }
  },
  false
);
