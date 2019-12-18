var event = document.getElementById("eventName");
var titile = document.getElementById("title");
var result  = document.getElementById("result");
var distance,refresh;
function showTime(){
  clearInterval(refresh);
    result.innerHTML = event.value;
    titile.innerHTML = event.value;
    //titile.innerHTML = event.value.toUpperCase();
    var days, hours, minutes, seconds;
    var timeEvent = document.getElementById("timeEvent").value;
    var countDown = new Date(timeEvent).getTime();
   // console.log("countDown: "+ countDown);
   // console.log(timeEvent);
    refresh = setInterval( function() {
    var now = new Date().getTime();
     
     if( now >= countDown)
     {
         stopCountDown();
        alert("Welcome to "+event.value);
        $('.container').fireworks({ 
            sound: true, // sound effect
            opacity: 0.9, 
            width: '100%', 
            height: '100%' 
          });
          var audio = new Audio("audio_file.mp3");
            audio.play();
        
     }
     else{
        distance = countDown - now;
        //console.log("distance: "+ distance);
       // console.log("Now: "+ now);
         days = Math.floor(distance / (1000 * 60 * 60 * 24));
         hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         seconds = Math.floor((distance % (1000 * 60)) / 1000);
         result.innerHTML = event.value + " will happen in "+ days + " days " + hours +" hours " + minutes +" minutes "+ seconds +" seconds";
     }
     
   }, 1000 );
   function stopCountDown(){
    clearInterval(refresh);
}
}
//     var now = new Date().getTime();
//    // console.log("Now: "+ now);
    
//     var distance = countDown - now;
//     //console.log("distance: "+ distance);
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // console.log("day :  " + days);
    // console.log("hours :  " + hours);
    // console.log("minutes :  " + minutes);
    // console.log("seconds :  " + seconds);
  // result.innerHTML = event.value + " will happen in "+ days + " days " + hours +" hours " + minutes +" minutes "+ seconds +" seconds";





   
