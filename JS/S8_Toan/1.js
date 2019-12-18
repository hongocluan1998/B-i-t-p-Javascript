//input popup form
let id = document.getElementById("id");
let productName = document.getElementById("productName");
let actualPrice = document.getElementById("actualPrice");
let discountPrice = document.getElementById("discountPrice");
let stockAvailble = document.getElementById("stockAvailble");
let show = document.getElementById("show");

let table = document.getElementById("myTable");
let tbody = document.getElementById("tbody");
//show message error
let messErrorId = document.getElementById("messErrorId");
let messErrorName = document.getElementById("messErrorName");
let messErrorActualPrice = document.getElementById("messErrorActualPrice");
let messErrorDiscountPrice = document.getElementById("messErrorDiscountPrice");
let messErrorStock = document.getElementById("messErrorStock");
//arr save all produces
var arrProduces = [];
var dataProduces = localStorage.getItem("storageProduces");
if (dataProduces) {
    arrProduces = JSON.parse(dataProduces);
    render();
} else arrProduces = [];
//render();

function render() {
    for (let i = 0; i < arrProduces.length; i++) {
        //insert row add cell
        var row = tbody.insertRow(-1);
        var checkCell = row.insertCell(0);
        var idCell = row.insertCell(1);
        var nameCell = row.insertCell(2);
        var actualPriceCell = row.insertCell(3);
        var discountPriceCell = row.insertCell(4);
        var stoctCell = row.insertCell(5);
        //show info  to table
        idCell.innerHTML =  arrProduces[i].idProduce;
        nameCell.innerHTML = arrProduces[i].productNameProduce;
        actualPriceCell.innerHTML = formatNumber(arrProduces[i].actualPriceProduce) ;
        discountPriceCell.innerHTML = formatNumber(arrProduces[i].discountPriceProduce) ;
        stoctCell.innerHTML = arrProduces[i].stockAvailbleProduce;
        //add checkbox
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "check";
        checkCell.appendChild(checkbox);
    }

}

function save() {
    let produce = {
        idProduce: id.value,
        productNameProduce: productName.value,
        actualPriceProduce: actualPrice.value,
        discountPriceProduce: discountPrice.value,
        stockAvailbleProduce: stockAvailble.value
    };
    let isID = false;
    let isName = false;
    let isActualPrice = false;
    let isDiscountPrice = false;
    let isStockAvailble = false;
    let idReapeat = false;
    var filterNumber = /^[0-9,]{0,}$/;
    var filterID = /^\d{1,}$/;
   // var filterNumber = /^\d{0,}$/;
    //var filterNumber = /^\d{1,}$/;
    var filterString = /^[a-zA-Z0-9\s._-]{3,100}$/;
    //validat ID
    if (produce.idProduce == "") {
        messErrorId.innerHTML = "ID must be fill ";
        id.classList.add("border_err");
        isID = false
    }
    else if (!filterID.test(produce.idProduce)) {
        messErrorId.innerHTML = "Please enter the correct ID format: only number";
        id.classList.add("border_err");
        isID = false
    }
    
    else {
        messErrorId.innerHTML = "";
        id.classList.remove("border_err");
        isID = true;
    }
    //check ID reapeat
    if(isID){
        for( var h = 0; h < arrProduces.length; h++)
        {
            if( (produce.idProduce == arrProduces[h]["idProduce"]) )
            {
                console.log("false");
               // alert("false");
                messErrorId.innerHTML = "This ID is already in use" ;
                id.classList.add("border_err");
                idReapeat = false;
                break;
            }
    
            else{
                console.log("true");
                messErrorId.innerHTML = "";
                id.classList.remove("border_err");
                idReapeat = true;
                //alert("true");
    
            }
        }
    }
    
    //valide Name
    if (produce.productNameProduce == "") {
        messErrorName.innerHTML = "Product Name must be fill";
        productName.classList.add("border_err");
        isName = false
    }
    else if (!filterString.test(produce.productNameProduce)) {
        messErrorName.innerHTML = "Please enter the correct Product Name format";
        productName.classList.add("border_err");
        isName = false
    }
    else {
        messErrorName.innerHTML = "";
        productName.classList.remove("border_err");
        isName = true;
    }
    //validate Actual Price
    if (produce.actualPriceProduce == "") {
        messErrorActualPrice.innerHTML = "Actual Price must be fill";
        actualPrice.classList.add("border_err");
        isActualPrice = false
    }
    else if (!filterNumber.test(produce.actualPriceProduce)) {
        messErrorActualPrice.innerHTML = "Please enter the correct Actual Price format: only number";
        actualPrice.classList.add("border_err");
        isActualPrice = false
    }
    else {
        messErrorActualPrice.innerHTML = "";
        actualPrice.classList.remove("border_err");
        isActualPrice = true;
    }
    //validate Discount Price
    if (produce.discountPriceProduce == "") {
        messErrorDiscountPrice.innerHTML = "Discount Price must be fill";
        discountPrice.classList.add("border_err");
        isDiscountPrice = false
    }
    else if (!filterNumber.test(produce.discountPriceProduce)) {
        messErrorDiscountPrice.innerHTML = "Please enter the correct Discount Price format: only number";
        discountPrice.classList.add("border_err");
        isDiscountPrice = false
    }
    else if ((produce.discountPriceProduce - produce.actualPriceProduce) > 0) {
        messErrorDiscountPrice.innerHTML = " Discount Price must be less than Actual Price";
        discountPrice.classList.add("border_err");
        isDiscountPrice = false
    }
    else {
        messErrorDiscountPrice.innerHTML = "";
        discountPrice.classList.remove("border_err");
        isDiscountPrice = true;
    }
    //validate Stock Availble

    if (!filterNumber.test(produce.stockAvailbleProduce)) {
        messErrorStock.innerHTML = "Please enter the correct Stock Availble format: only number";
        stockAvailble.classList.add("border_err");
        isStockAvailble = false
    }
    else {
        messErrorStock.innerHTML = "";
        stockAvailble.classList.remove("border_err");
        isStockAvailble = true;
    }

    if (isID  && isName && isActualPrice && isDiscountPrice && isStockAvailble && idReapeat) {
        arrProduces.push(produce);
        localStorage.setItem("storageProduces", JSON.stringify(arrProduces));
        location.reload();
    }
    else {
        return false;
    }
}
function clearLocalStorage() {
    console.log("clear");
    arrProduces = [];
    localStorage.setItem("storageProduces", '');
    location.reload();
}
function deleteRow() {
    // console.log("delete");
    // var countRow = document.getElementById("myTable").rows.length;
    // console.log(countRow);
    var listCheckbox = document.getElementsByName('check');
    console.log(listCheckbox);
    var remove = [];

    for (let i = 0; i < listCheckbox.length; i++) {
        if (listCheckbox[i].checked == true) {
            remove.push(i);
            // console.log(i);
            //document.getElementById("myTable").deleteRow(i+1);

        }
    }
    console.log("những dòng dc chọn: " + remove);
    for (var i = remove.length - 1; i >= 0; i--) {
        arrProduces.splice(remove[i], 1);
        // console.log(arrProduces);
    }
    localStorage.setItem("storageProduces", '');
    localStorage.setItem("storageProduces", JSON.stringify(arrProduces));
    //render();
    location.reload();

    // console.log(listChecked);

}
function deleteError(){
    messErrorId.innerHTML = "";
    id.classList.remove("border_err");
    messErrorName.innerHTML = "";
    productName.classList.remove("border_err");
    messErrorActualPrice.innerHTML = "";
    actualPrice.classList.remove("border_err");
    messErrorDiscountPrice.innerHTML = "";
    discountPrice.classList.remove("border_err");
    messErrorStock.innerHTML = "";
    stockAvailble.classList.remove("border_err");
}
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
function formatInput(){
   var numactualPrice = actualPrice.value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
   actualPrice.value = numactualPrice;
   var numDiscountPrice = discountPrice.value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
   discountPrice.value = numDiscountPrice;
    
}