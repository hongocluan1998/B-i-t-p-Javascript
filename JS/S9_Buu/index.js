$(document).ready(function() {
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

  var Task = [];
  var dataString = localStorage.getItem("listObj");
  if (dataString) {
    Task = JSON.parse(dataString);
  } else Task = [];

  var $addTask = $("#addTask");
  var $clearTask = $("#clearTask");
  var $getIdTask = $("#idTask");
  var $getDescription = $("#description");

  var form = $("form");
  $($getIdTask).on("focus", function() {
    $getIdTask.val("");
  });
  $($getDescription).on("focus", function() {
    $getDescription.val("");
  });

  $($addTask).on("click", function(e) {
    if (form.valid() == true) {
      for (var i = 0; i < Task.length; i++) {
        if ($getIdTask.val().toUpperCase() == Task[i].idTask) {
          alert("duplicate ID");
          return false;
        }
      }
      var object = new addObject($getIdTask.val().toUpperCase(), $getDescription.val());
      Task.push(object);
      localStorage.setItem("listObj", JSON.stringify(Task));
      $(".addText").append(
        "<div class='row animated flipInX'" +
          "id='id" +
         object.idTask +
          "'>" +
          "<div class='col-md-3 col-lg-2 span delete'" +
          "id=" +
          object.idTask +
          ">" +
          "Delete </div> <div class='col-md-9 col-lg-10'>ID: " +
          object.idTask +
          "</div> <div class='col-md-12 offset-md-3 offset-lg-2'>  Description: " +
         object.description +
          " </div></div>"
      );
    }
  });
  function render() {
    for (let i = 0; i < Task.length; i++) {
      $(".addText").append(
        "<div class='row animated flipInX'" +
          "id='id" +
         Task[i].idTask +
          "'>" +
          "<div class='col-md-3 col-lg-2 span delete'" +
          "id=" +
          Task[i].idTask +
          ">" +
          "Delete </div> <div class='col-md-9 col-lg-10'>ID: " +
          Task[i].idTask +
          "</div> <div class='col-md-12 offset-md-3 offset-lg-2'>  Description: " +
         Task[i].description +
          " </div></div>"
      );
    }
    
  };
  render();
  $($clearTask).on("click", function() {
    if(Task.length > 0) {
   var result =  confirm("Do you want Clear All.");
        if(result) {
          localStorage.clear();
          location.reload();
        }
      } else {
       confirm("Please Input");
      }
  });
  function addObject(idTask, description) {
    this.idTask = idTask;
    this.description = description;
  }

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
});
