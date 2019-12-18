"use strict";

let formContainer = document.getElementById('formContainer');
let form = document.getElementById('form');
let formRow = document.getElementById('formRow');
let tbody = document.getElementById('tbody');
let allInputIterm = form.querySelectorAll('input');

let addButton = document.getElementById('addButton');
let cancelButton = document.getElementById('cancelButton');
let saveButton = document.getElementById('saveButton');
let deleteButton = document.getElementById('deleteButton');
let selectAll = document.getElementById('selectAll');

function Product() {

    this.itermId = allInputIterm[0].value;
    this.productName = allInputIterm[1].value;
    this.actualPrice = allInputIterm[2].value;
    this.discountPrice = allInputIterm[3].value;
    this.stockAvailable = allInputIterm[4].value;
};
function numberWithCommas(str) {
    if ((typeof str) == "number") {
        str = str.toString().split('.');
    }
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(str))
        str = str.replace(pattern, "$1,$2");
    return str;
}
function checkAll() {
    let inputCheckboxAll = tbody.querySelectorAll('input');
    if (this.checked) {
        for (let inputCheckbox of inputCheckboxAll) {
            inputCheckbox.checked = true;
        }
    } else {
        for (let inputCheckbox of inputCheckboxAll) {
            inputCheckbox.checked = false;
        }
    }

}


function validateinput(geregex, inputObj, message) {
    let samllElemnt=inputObj.parentNode.querySelectorAll('small');
        if(samllElemnt){
        samllElemnt.forEach(element => {
            element.outerHTML='';            
        });
    let newElement= document.createElement('small');    
    newElement.innerHTML=message;
    newElement.style.color='red';
    newElement.classList='w-100 p-0 m-0 text-right';
    
    if (!geregex.test(inputObj.value)) {
        inputObj.parentNode.insertBefore(newElement, inputObj.nextSibling);
        inputObj.style.border='2px solid red';
        inputObj.parentNode.parentNode.style.color='red';
        return false;
    } else {
        
        inputObj.style.border='1px solid black';
        inputObj.parentNode.parentNode.style.color='#212529';
        return true;
        }
    }
}

function validateAnInput(inputObj) {
    let message ='';
    switch (inputObj.name) {
        case "itermId":
            message ='Bạn nhập sai định dạng, Chỉ được nhập số, từ 1 đến 4 ký tự !'
            return (validateinput(/^[0-9]{1,4}$/, inputObj, message )) ? true : false;

        case "productName":
            message ='Bạn nhập sai định dạng, Không nhập ký tự đặc biết, từ 5 đến 20 ký tự !'
            return (validateinput(/^[0-9a-zA-Z\s()]{5,20}$/, inputObj, message )) ? true : false;

        case "discountPrice":
            message ='Bạn nhập sai định dạng, Chỉ được nhập số, từ 1 đến 20 ký tự !'
            return (validateinput(/^[0-9]{1,20}$/, inputObj, message )) ? true : false;

        case "actualPrice":
            message ='Bạn nhập sai định dạng, Chỉ được nhập số, từ 1 đến 20 ký tự !'
            return (validateinput(/^[0-9]{1,20}$/, inputObj, message )) ? true : false;

        case "stockAvailable":
            message ='Bạn nhập sai định dạng, Chỉ được nhập số, từ 1 đến 4 ký tự !'
            return (validateinput(/^[0-9]{1,4}$/,inputObj, message )) ? true : false;

        default:
            return false;
    }

}
function validate() {

    let arrvalid = [];
    for (let inputIterm of allInputIterm) {
        arrvalid.push(validateAnInput(inputIterm));
    }
    return (arrvalid.includes(false)) ? false : true;
}

function setFrom() {
    formRow.style.height = screen.height.toString() + 'px';
    let productInputLastTimeStr = sessionStorage.getItem("newProduct");
    if (productInputLastTimeStr) {
        let productInputLastTimeObf = JSON.parse(productInputLastTimeStr);
        allInputIterm[0].value = productInputLastTimeObf.itermId;
        allInputIterm[1].value = productInputLastTimeObf.productName;
        allInputIterm[2].value = productInputLastTimeObf.actualPrice;
        allInputIterm[3].value = productInputLastTimeObf.discountPrice;
        allInputIterm[4].value = productInputLastTimeObf.stockAvailable;
    }
}

function rederTable() {
    let listProduct = [];
    let listProductStr = [];
    axios.get('https://productlist1.herokuapp.com/productList')
        .then(function (response) {
            listProduct = response.data.productList;
            listProductStr = listProduct.map(function (product) {
                let str = "<tr>"
                    + "<td><input type='checkbox' value='checkedValue'  data-dbid='" + product.id + "'></td>"
                    + " <td scope='row'>" + numberWithCommas(product.itermId) + "</td>"
                    + "<td>" + numberWithCommas(product.productName) + " </td>"
                    + "<td>" + numberWithCommas(product.actualPrice) + " </td>"
                    + "<td>" + numberWithCommas(product.discountPrice) + " </td>"
                    + "<td>" + product.stockAvailable + " </td> </tr>"
                return str;
            });
            tbody.innerHTML = '';
            for (let str of listProductStr) {
                tbody.innerHTML = tbody.innerHTML + str;
            }
        })
        .catch(error => console.log(error));
}

function addEventInput() {
    for (let inputIterm of allInputIterm) {
        inputIterm.addEventListener('change', saveSectionStorage);
    }
}

function displayAddForm() {
    formContainer.setAttribute('class', 'container-fluid form-container-display');
}

function nodisplayAddForm() {
    formContainer.setAttribute('class', 'container-fluid form-container-nodisplay');
}

function saveSectionStorage() {
    let newProduct = new Product();
    validateAnInput(this);
    let newProductStr = JSON.stringify(newProduct);
    sessionStorage.setItem('newProduct', newProductStr);
    setFrom();

}

function saveNewProductToFile() {
    let newProduct = new Product();
    if (validate()) {
        axios({
            method: 'post',
            url: 'https://productlist1.herokuapp.com/productList/add',
            data: newProduct,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(function (response) {
                rederTable();
                setFrom();
                alert('Add done');
            })
            .catch(function (response) {
            });
    } else {
        alert('Nhập sai định dạng');
    }
}

function deleteRow() {
    let inputChecked = [];
    let inputCheckboxAll = tbody.querySelectorAll('input');
    for (let inputCheckbox of inputCheckboxAll) {
        if (inputCheckbox.checked) {
            if (inputChecked.indexOf(inputCheckbox.dataset.dbid) === -1) {
                inputChecked.push(inputCheckbox.dataset.dbid);
            }
        }
    };
    axios({
        method: 'post',
        url: 'https://productlist1.herokuapp.com/productList/delete',
        data: inputChecked,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
        .then(function (response) {
            console.log(response);
            rederTable();
        })
        .catch(function (response) {
            console.log(response);
        });
}

addEventInput();
rederTable();
setFrom();
selectAll.addEventListener('click', checkAll);
addButton.addEventListener('click', displayAddForm);
cancelButton.addEventListener('click', nodisplayAddForm);
saveButton.addEventListener('click', saveNewProductToFile);
deleteButton.addEventListener('click', deleteRow);


