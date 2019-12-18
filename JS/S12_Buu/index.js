$(document).ready(function() {
  var $delete = $("#delete");
  var $checkAll = $("#checkAll");
  addLocalStorage();
  addTask();
  render();
  $delete.attr("disabled", "disabled");

  $checkAll.on("click", checkAll);
  $delete.on("click", deleteAll);

  $(document).on("click", ".del", function() {
    var id = $(this).attr("id");
    $("#row" + id + "").remove();
    Task.splice(id, 1);
    localStorage.setItem("listObj", JSON.stringify(Task));
    location.reload();
  });

  function deleteAll() {
    localStorage.clear();
    $(".addTable").remove();
  }

  function checkAll() {
    $(this)
      .closest("table")
      .find("tbody :checkbox")
      .prop("checked", this.checked)
      .closest("tr")
      .toggleClass("selected", this.checked);

    var check = $("#checkAll").is(":checked");
    if (check) {
      $delete.removeAttr("disabled");
    } else {
      $delete.attr("disabled", "disabled");
    }
  }

  function addLocalStorage() {
    var Arr = [];
    if (localStorage.length == 0) {
      var object1 = new addObject(
        "Company A",
        "#FFB97A",
        "8",
        "All Zones",
        "Enabled"
      );
      Arr.push(object1);
      var object2 = new addObject(
        "Company B",
        "#EB00A3",
        "9",
        "3 Zones",
        "Enabled"
      );
      Arr.push(object2);
      var object3 = new addObject(
        "Company C",
        "#9B4DFF",
        "10",
        "6 Zones",
        "Enabled"
      );
      Arr.push(object3);
      var object4 = new addObject(
        "Company D",
        "#7EBEEB",
        "12",
        "2 Zones",
        "Enabled"
      );
      Arr.push(object4);
      var object5 = new addObject(
        "Company E",
        "#24EBA5",
        "4",
        "13 Zones",
        "Enabled"
      );
      Arr.push(object5);
      localStorage.setItem("listObj", JSON.stringify(Arr));
    }
  }

  function addTask() {
      
    var dataString = localStorage.getItem("listObj");
    if (dataString) {
      Task = JSON.parse(dataString);
    } else Task = [];
  }

  function render() {
    for (let i = 0; i < Task.length; i++) {
      if (i == Task.length - 1) {
        $(".addTable").append(
          "<tr class='last' id='row" +
            i +
            "'><th scope='row'><input type='checkbox' id='" +
            i +
            "'/></th>" +
            "<td>" +
            Task[i].companyName +
            "</td>" +
            "<td><div class='square' style='background-Color:" +
            Task[i].colorCode +
            ";'></div>" +
            "</td>" +
            "<td>" +
            Task[i].maxWHours +
            "</td>" +
            "<td>" +
            Task[i].whiteZone +
            "</td>" +
            "<td>" +
            Task[i].status +
            "</td>" +
            "<td><i class='fas fa-pencil-alt mr-3 hover' id='"+ i +"'>" +
            "</i> <i class='far fa-trash-alt hover1 del' id='"+ i +"'>" +
            "</i></td></tr>"
        );
      } else {
        $(".addTable").append(
          "<tr id='row" +
            i +
            "'><th scope='row'><input type='checkbox' id='" +
            i +
            "' /></th>" +
            "<td>" +
            Task[i].companyName +
            "</td>" +
            "<td><div class='square' style='background-Color:" +
            Task[i].colorCode +
            ";'></div>" +
            "</td>" +
            "<td>" +
            Task[i].maxWHours +
            "</td>" +
            "<td>" +
            Task[i].whiteZone +
            "</td>" +
            "<td>" +
            Task[i].status +
            "</td>" +
            "<td><i class='fas fa-pencil-alt mr-3 hover' id='"+ i +"'>" +
            "</i> <i class='far fa-trash-alt hover1 del' id='"+ i +"'>" +
            "</i></td></tr>"
        );
      }
    }
  }

  function addObject(companyName, colorCode, maxWHours, whiteZone, status) {
    this.companyName = companyName;
    this.colorCode = colorCode;
    this.maxWHours = maxWHours;
    this.whiteZone = whiteZone;
    this.status = status;
  }
});
