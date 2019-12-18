$(document).ready(function() {
  let btnAdd = document.getElementById("btnAdd");
  let btnClear = document.getElementById("btnClear");
  let inputContent = document.getElementById("inputContent");
  let inputId = document.getElementById("inputId");
  let arrayObject = [];
  

  init();

  $(inputId).keyup(function() {
    inputId.value = inputId.value.trim().toUpperCase();
    // if ($(inputId).val().length >= 4) myShow("4 Ký Tự hôi nhá", "is-invalid");
  });

  btnAdd.addEventListener("click", function(e) {
    let form = $("#addTask");
    if (!checkIdDuplicate(inputId.value)) {
      myShow("Trùng ID  ><", "is-invalid");
    }
    if (form.valid() == true && checkIdDuplicate(inputId.value)) {
      addtask(new task(inputId.value, inputContent.value));
      readLocalStorage();
      pagination(Math.ceil(arrayObject.length / 4));
      renderTasks(Math.ceil(arrayObject.length / 4));
      inputContent.value = "";
      inputId.value = "";
    }
    e.preventDefault();
	console.log(arrayObject);
  });

  btnClear.addEventListener("click", function(e) {
    if (!ObjIsEmpty()) {
      deleteAllTask();
    } else myShow("Data Empty", "is-invalid");
    e.preventDefault();
  });

  // btnRenderAuto.addEventListener("click", function() {});

  function init() {
    readLocalStorage();
    if (arrayObject.length > 0) {
      pagination(1);
      renderTasks(1);
    } else {
      $("p#content").empty();
      $("p#content").append("Data Empty");
    }
  }

  function checkIdDuplicate(newId) {
    for (let i = 0; i < arrayObject.length; i++) {
      if (arrayObject[i].id == newId) return false;
    }
    return true;
  }

  function renderTasks(pagination) {
    let intoFrom = Number(pagination) * 4 - 4;
    let end;
    $("p#content").empty();
    // console.log(intoFrom+4);
    arrayObject.length < intoFrom + 4
      ? (end = arrayObject.length)
      : (end = intoFrom + 4);

    for (let i = intoFrom; i < end; i++) {
      $("p#content").append(
        "<p class='elementTask border-bottom' id='" +
          arrayObject[i].id +
          "'><a href='#' class='mr-3' data-index='" +
          i +
          "'>Delete</a><span class=' d-inline-block mr-1 contenrtIdW'>" +
          arrayObject[i].id +
          "</span> <span class='d-inline-block w-50 pl-2  pr-3' id='taskContent' data-idContent='" +
          arrayObject[i].id +
          "'>" +
          arrayObject[i].content +
          "</span><span id='" +
          arrayObject[i].id +
          "' class='contentDots' style='display: none;'>...</span><span id='" +
          arrayObject[i].id +
          "' class='contentMore' style='display: none;'></span><a href='#Readmore' id='" +
          arrayObject[i].id +
          "' class='contentContinue' style='position: absolute;right: 20px;display: none;'>Read more</a></p>"
      );
    }
    $(document.querySelectorAll("a[data-index]")).each(function() {
      // console.log(this);
      this.addEventListener("click", function() {
        deleteOneTask(this);
      });
    });
    checkReadMore();
  }

  function deleteOneTask(obj) {
    if (confirm("Bạn chắc chắn muốn xóa task ?")) {
      arrayObject.splice(obj.dataset.index, 1);
      localStorage.setItem("task", JSON.stringify(arrayObject));
      // console.log(arrayObject.length);
      if (arrayObject.length == 0) {
        $("#pagination-here").empty();
        init();
      } else {
        if (
          Math.ceil(arrayObject.length / 4) <
          Number($("ul.pagination.bootpag li.active")[0].dataset.lp)
        ) {
          renderTasks(Math.ceil(arrayObject.length / 4));
          pagination(Math.ceil(arrayObject.length / 4));
        } else {
          renderTasks(
            Number($("ul.pagination.bootpag li.active")[0].dataset.lp)
          );
          pagination(
            Number($("ul.pagination.bootpag li.active")[0].dataset.lp)
          );
        }
      }
      myShow("Xóa Thành Công :D", "is-valid");
    }
  }

  function pagination(star) {
    let total;

    arrayObject.length / 4 < 1
      ? (total = 1)
      : (total = Math.ceil(arrayObject.length / 4));
    $("#pagination-here")
      .bootpag({
        total: parseInt(total),
        page: star,
        maxVisible: 3,
        leaps: true,
        firstLastUse: true,
        first: "←",
        last: "→",
        wrapClass: "pagination",
        activeClass: "active",
        disabledClass: "disabled",
        nextClass: "next",
        prevClass: "prev",
        lastClass: "last",
        firstClass: "first"
      })
      .on("page", function(event, num) {
        renderTasks(num);
      });
  }

  function ObjIsEmpty() {
    if (arrayObject.length <= 0) return true;
    else return false;
  }

  function deleteAllTask() {
    if (confirm("Bạn chắc chắn muốn xóa?")) {
      localStorage.clear();
      $("#pagination-here").empty();
      init();
      myShow("Clear ok", "is-valid");
    }
  }

  function readLocalStorage() {
    var dataString = localStorage.getItem("task");
    if (dataString) {
      arrayObject = JSON.parse(dataString);
    } else arrayObject = [];
  }

  function task(id, content) {
    this.id = id;
    this.content = content;
  }

  function addtask(object) {
    arrayObject.push(object);
    localStorage.setItem("task", JSON.stringify(arrayObject));
    myShow("Thêm task Thành Công :D", "is-valid");
  }
  $("#addTask").validate({
    rules: {
      id: {
        required: true,
        maxlength: 4,
        minlength: 4,
        validateSpecialCharacters: true
      },
      content: {
        required: true
      }
    }
  });
  $.validator.addMethod(
    "validateSpecialCharacters",
    function(value, element) {
      return (
        this.optional(element) ||
        /^[1-9a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/.test(
          value
        )
      );
    },
    "Không nhập ký tự đặt biệt"
  );
});
function checkReadMore() {
  $(".elementTask.border-bottom #taskContent").each(function() {
    let dataContent = this.textContent;
    if (dataContent.length > 10) {
      let myid = this.dataset.idcontent;
      $(this).attr("data-contentStatus", "contentDots");
      $(this)[0].textContent = readMore(myid, dataContent);
      if (this.dataset.contentstatus == "contentDots") {
        $("a#" + myid + ".contentContinue")[0].addEventListener(
          "click",
          function() {
            handerEvenClickReadmore(this.id);
          }
        );
      }
    }
  });
}
function readMore(myid, dataContent) {
  console.log("#" + myid + ".contentMore");
  $("#" + myid + ".contentMore")[0].textContent = dataContent;
  $("a#" + myid + ".contentContinue").show();
  return ($("#" + myid + ".contentDots")[0].textContent =
    dataContent.slice(0, 10) + "...");
}
function handerEvenClickReadmore(id) {
  if (
    $("[data-idcontent=" + id + "]")[0].dataset.contentstatus == "contentDots"
  ) {
    $("[data-idcontent=" + id + "]")[0].textContent = $(
      "#" + id + ".contentMore"
    )[0].textContent;
    $("[data-idcontent=" + id + "]").attr("data-contentStatus", "contentMore");
    $("a#" + id + ".contentContinue")[0].textContent = "Hiden";
  } else {
    $("[data-idcontent=" + id + "]")[0].textContent = $(
      "#" + id + ".contentDots"
    )[0].textContent;
    $("[data-idcontent=" + id + "]").attr("data-contentStatus", "contentDots");
    $("a#" + id + ".contentContinue")[0].textContent = "Read More";
  }
}
