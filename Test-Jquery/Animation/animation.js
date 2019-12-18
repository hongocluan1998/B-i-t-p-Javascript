$(document).ready(function(){
  var show = $("#animation");
  function run()
  {
    show.animate({"left": "+=700px"}, 3000, function(){
      show.animate({"top": "+=400px"}, 2000, function(){
        show.animate({"left": "-=700px"}, 3000, function(){
          show.animate({"top": "-=400px"}, 2000, function(){
            run();
          })
        })
      })
    });
  }
  $("#start").click(function(){
    var point = show.position();
    var x = point.left;
    var y = point.top;
    if(x == 274.5 && y == 29)
    {
      console.log("start");
      run();
    }
    else if(x > 274.5 && x < 974.5 && y == 29)
    {
      console.log("tren");
      console.log(x);
      console.log(y);
      var temp = 800 + 274.5 - x - 100;
      show.animate({"left": "+=" + temp}, 1500, function(){
        show.animate({"top": "+=400px"}, 1000, function(){
          show.animate({"left": "-=700px"}, 1500, function(){
            show.animate({"top": "-=400px"}, 1000, function(){
              run();
            })
          })
        })
      } )
    }
    else if(x == 974.5 && y > 29 && y < 429)
    {
      console.log("phai");
      console.log(x);
      console.log(y);
      var temp = 500 + 29 - 100 - y
      show.animate({"top": "+=" + temp}, 1000, function(){
        show.animate({"left": "-=700px"}, 1500, function(){
          show.animate({"top": "-=400px"}, 1000, function(){
            run();
          })
        })
      })
    }
    else if(y == 429 && x < 974.5 && x > 247.5)
    {
      console.log("duoi");
      console.log(x);
      console.log(y);
      var temp = x - 274.5;
      show.animate({"left": "-=" + temp}, 1500, function(){
        show.animate({"top": "-=400px"}, 1000, function(){
          run();
        })
      })
    }
    else if(x == 274.5 && y > 29 && y < 429)
    {
      console.log("trai");
      console.log(x);
      console.log(y);
      var temp = y - 29;
      show.animate({"top": "-=" + temp}, 1000, function(){
        run();
      })
    }
  })
  $("#stop").click(function(){
    show.stop(true, false);
  })
});