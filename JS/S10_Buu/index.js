$(document).ready(function() {
  
  var $addTask = $("#addTask");                   // get id Button add Task. 
  var $clearTask = $("#clearTask");               // get id Button Clear Task. 
  var $getIdTask = $("#idTask");                  // get id of the input ID-Task.
  var $getDescription = $("#description");        // get id of the input Description.
  var form = $("form");                           // get Tag Form.
  var Task = [];                                  //create Array empty.

  validate();      // call function validate form
  addTask();       // call function Add local storage in the Array Task.
  render();        // call function render in the page. 
  read();          // call function read more or read less.

  //focus clear input ID-Task.
  $($getIdTask).on("focus", function() {
    $getIdTask.val("");
  });

  //focus clear input description.
  $($getDescription).on("focus", function() {
    $getDescription.val("");
  });

  //add one or more ID and Description.
  $($addTask).on("click", function() {
    if (form.valid() == true) {
      for (var i = 0; i < Task.length; i++) {
        if ($getIdTask.val().toUpperCase() == Task[i].idTask) {
          alert("duplicate ID");
          return false;
        }
      }
      var j = 0;
      var object = new addObject(
        $getIdTask.val().toUpperCase(),
        $getDescription.val()
      );
      Task.push(object);
      localStorage.setItem("listObj", JSON.stringify(Task));
      $(".addText").append(
        "<div class='row'" +
          "id='id" +
          object.idTask +
          "'>" +
          "<div class='col-md-3 col-lg-2 span delete animated fadeInRight'" +
          "id=" +
          object.idTask +
          ">" +
          "Delete </div> <div class='col-md-9 col-lg-10 animated rotateInDownLeft'>ID: " +
          object.idTask +
          "</div> <div class='col-md-12 offset-md-3 offset-lg-2 animated rotateInDownLeft'>" +
           "<span> Description:  </span>" 
          + "<span class='more'>" +
          object.description + 
          "</span> </div></div>"
      );
      readNotLoadPage(j);
      j++;
  }
  });
  
  //Clear all ID and Description.
  $($clearTask).on("click", function() {
    if (Task.length > 0) {
      var result = confirm("Do you want Clear All.");
      if (result) {
        localStorage.clear();
        location.reload();
      }
    } else {
      confirm("Please Input");
    }
  });

  //delete one or more tags id and Description when you click.
  $(document).on("click", ".delete", function() {
    var get_id = $(this).attr("id");
    for (var j = 0; j < Task.length; j++) {
      if (get_id == Task[j].idTask) {
        Task.splice(j, 1);
        console.log(Task);
        $("#id" + get_id + "").remove();
        localStorage.setItem("listObj", JSON.stringify(Task));
      }
    }
  });

  //function Constructor Object.
  function addObject(idTask, description) {
    this.idTask = idTask;
    this.description = description;
  }
  
  //validate form.
  function validate() {
    $("#validateForm").validate({
      rules: {
        id: {
          required: true,
          minlength: 4,
          validateId: true
        },
        description: {
          required: true
        }
      },
      messages: {
        id: {
          required: "Please Enter",
          minlength: "length = 4"
        },
        description: {
          required: "Input description"
        }
      }
    });
    $.validator.addMethod(
      "validateId",
      function(value, element) {
        return this.optional(element) || /^[A-Z0-9]+$/i.test(value);
      },
      "Number & Text"
    );
  }
  //add local storage on Arr. 
  function addTask() { 
    var dataString = localStorage.getItem("listObj");
    if (dataString) {
      Task = JSON.parse(dataString);
    } else Task = [];
    }

  //function Print out the web page ID and Description.
  function render() {
    for (let i = 0; i < Task.length; i++) {
      $(".addText").append(
        "<div class='row'" +
          "id='id" +
          Task[i].idTask +
          "'>" +
          "<div class='col-md-3 col-lg-2 span delete animated rubberBand'" +
          "id=" +
          Task[i].idTask +
          ">" +
          "Delete </div> <div class='col-md-9 col-lg-10 animated zoomIn'>ID: " +
          Task[i].idTask +
          "</div> <div class='col-md-12 offset-md-3 offset-lg-2 animated zoomIn'>  <span> Description:  </span>" + "<span class='more'>" +
          Task[i].description + 
          "</span> </div></div>"
      );
    }
  }
 
  //function read more and read less description.
  function read() {
    var showChar = 10; // How many characters are shown by default
    var ellipsesText = "...";
    var moreText = "See more";
    var lessText = "See less";
  
    $('.more').each(function() {
      var content = $(this).html();

      if(content.length > showChar) {
  
          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);
  
          var html = c + '<span class="moreEllipses">' + ellipsesText + '</span><span class="moreContent"><span>'
           + h + '</span><a href="" class="moreLink">' + moreText + '</a></span>';
          $(this).html(html);
      }
  });
  
  $(".moreLink").click(function(){
      if($(this).hasClass("less")) {
          $(this).removeClass("less");
          $(this).html(moreText);
      } else {
          $(this).addClass("less");
          $(this).html(lessText);
      }
      $(this).parent().prev().toggle();
      $(this).prev().toggle();
      return false;
  }); 
  }

  //function read more and read less not reset page.
  function readNotLoadPage() {
    var showChar = 10; // How many characters are shown by default
    var ellipsesText = "...";
    var moreText = "See more";
    var lessText = "See less";
  
    $('.more').each(function(i) { 
      var content = Task[i].description;
      console.log(content);
      if(content.length > showChar) {
  
          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);
  
          var html = c + '<span class="moreEllipses">' + ellipsesText + '</span><span class="moreContent"><span>'
           + h + '</span><a href="" class="moreLink">' + moreText + '</a></span>';
          $(this).html(html);
      }
  });
  
  $(".moreLink").click(function(){
      if($(this).hasClass("less")) {
          $(this).removeClass("less");
          $(this).html(moreText);
      } else {
          $(this).addClass("less");
          $(this).html(lessText);
      }
      $(this).parent().prev().toggle();
      $(this).prev().toggle();
      return false;
  }); 
  }
});
