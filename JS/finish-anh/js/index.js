const Companys = {
  init: function(
    nameCompany,
    codeColor,
    workingHours,
    whitelistedZone,
    status
  ) {
    this.idCompany = Date.now();
    this.nameCompany = nameCompany;
    this.codeColor = codeColor;
    this.workingHours = workingHours;
    this.whitelistedZone = whitelistedZone;
    this.status = status;
  },
  addDataRamDome: function() {
    arrayCompanyName = [
      "FPT",
      "Sun*",
      "Axon",
      "ThaCo",
      "Thành Công",
      "BMW",
      "BAP",
      "Vin"
    ];
    arraycodeColor = ["#ab2525", "#2570ab", "#f5f41c"];
    listCompanys.push(
      new Companys.init(
        arrayCompanyName[Math.floor(Math.random() * arrayCompanyName.length)],
        arraycodeColor[Math.floor(Math.random() * arraycodeColor.length)],
        Math.floor(Math.random() * 8),
        ["zone 1", "zone 2", "zone 3", "zone 4"],
        "Enabled"
      )
    );
    localStorage.setItem("dataCompany", JSON.stringify(listCompanys));
  },
  clear: function() {
    localStorage.clear();
    listCompanys = [];
  },
  add: function(company) {
    listCompanys.push(
      new Companys.init(
        company.nameCompany,
        company.codeColor,
        company.workingHours,
        company.whitelistedZone,
        company.status
      )
    );
    localStorage.setItem("dataCompany", JSON.stringify(listCompanys));
  },
  delete: function(idCompany) {
    for (let i = 0; i < listCompanys.length; i++) {
      if (listCompanys[i].idCompany == idCompany) {
        listCompanys.splice(i, 1);
        localStorage.setItem("dataCompany", JSON.stringify(listCompanys));
        return true;
      }
    }
    return false;
  },
  edit: function(
    idCompany,
    nameCompany,
    codeColor,
    workingHours,
    whitelistedZone,
    status
  ) {
    for (let i = 0; i < listCompanys.length; i++) {
      if (listCompanys[i].idCompany == idCompany) {
        listCompanys[i].nameCompany = nameCompany;
        listCompanys[i].codeColor = codeColor;
        listCompanys[i].workingHours = workingHours;
        listCompanys[i].whitelistedZone = whitelistedZone;
        listCompanys[i].status = status;
        localStorage.setItem("dataCompany", JSON.stringify(listCompanys));
        return true;
      }
    }
    return false;
  }
};

let listCompanys = [];
let selectedAll = document.getElementById("selectedAll");
let selectedRemove = document.getElementsByClassName("selectedRemove");
let deltete = document.getElementById("deltete");
let ramdomData = document.getElementById("ramdomData");

ramdomData.addEventListener("click", function() {
  Companys.addDataRamDome();
  initPage();
});

deltete.addEventListener("click", function() {
  deleteSelected();
});

selectedAll.addEventListener("click", function() {
  if ($(selectedAll).is(":checked")) {
    $(selectedRemove).each(function() {
      $(this).prop("checked", true);
    });
  } else {
    $(selectedRemove).each(function() {
      $(this).prop("checked", false);
    });
  }
});

initPage();

function initPage() {
  readLocalstoge();
  renderTable();
}

function checkSelected() {
  let selectedRemove = document.getElementsByClassName("selectedRemove");
  for (let i = 0; i < selectedRemove.length; i++) {
    if ($(selectedRemove[i]).is(":checked")) return true;
  }
  return false;
}

function deleteSelected() {
  let selectedRemove = document.getElementsByClassName("selectedRemove");
  if (!checkSelected()) {
    alert("Vui lòng chọn ít nhất 1 ");
    return false;
  }
  if (confirm("Bạn chắc chắn muốn xóa")) {
    $(selectedRemove).each(function() {
      if ($(this).is(":checked")) {
        Companys.delete(this.id);
        $("tr#" + this.id).remove();
      }
    });
  }
  $(selectedAll).prop("checked", false);
}

function readLocalstoge() {
  listCompanys = localStorage.getItem("dataCompany")
    ? JSON.parse(localStorage.getItem("dataCompany"))
    : [];
}

function renderTable() {
  $(contentTable).empty();
  let content = listCompanys
    .map(
      (item, index) =>
        `<tr id="${item.idCompany}"` +
        `><td scope="row" class="text-center"><input id="${item.idCompany}"` +
        ` class="selectedRemove" type="checkbox" /></td><td scope="row"` +
        ` class="text-center">${item.nameCompany}` +
        `</td><td scope="row" class="text-center"><div data-colorcode="${item.codeColor}"` +
        ` id="${item.idCompany}"` +
        ` class="container-color-code border border-dark"></div></td><td scope="row" class="text-center">${item.workingHours}` +
        `</td><td scope="row" class="text-center">${item.whitelistedZone.length}` +
        ` zone</td><td scope="row" class="text-center">${item.status}` +
        `</td><td scope="row" class="text-center"><a href="#EDIT"class="mr-3 "id="editCompany" data-index="${index}"` +
        `><i class="fas fa-pen"></i></a><a href="#DELETE"class="mr-3 text-danger"id="deleteCompany" data-tagetdeletecompany="${item.idCompany}"` +
        ` data-index="${index}"><i class="fas fa-trash"></i></a></td></tr>`
    )
    .join("");
  $(contentTable).append(content);
  document
    .querySelectorAll(
      "div[data-colorcode].container-color-code.border.border-dark"
    )
    .forEach(item => (item.style.backgroundColor = item.dataset.colorcode));

  document
    .querySelectorAll("a[data-index]#deleteCompany")
    .forEach(item => item.addEventListener("click", deleteOneRow));
}
function deleteOneRow() {
  if (confirm("bạn chắc chắn Muốn xóa")) {
    listCompanys.splice(this.dataset.index, 1);
    $("tr#" + this.dataset.tagetdeletecompany).remove();
    localStorage.setItem("dataCompany", JSON.stringify(listCompanys));
    renderTable();
    return true;
  }
  return false;
}
