
let addBox = document.getElementById('addBox');
let deleteBox = document.getElementById('deleteBox');
let calculateMax = document.getElementById('calculateMax');
let Reset = document.getElementById('Reset');
let inputElemet = document.querySelector('.inputnumber');

// onclick 'thêm' buttom
addBox.addEventListener('click', addOnebox);

// onclick 'xóa' buttom
deleteBox.addEventListener('click', deleteOneBox);

// onclick 'tính số lớn nhất' buttom
calculateMax.addEventListener('click', calculateAllMax);

// onclick 'reset' buttom
Reset.addEventListener('click', ResetAllBox);

// add one inphut box
function addOnebox() {
    let number1 = document.getElementsByClassName('inputNumner');
    if (number1.length < 12) {
        renderInputElemet(number1.length + 1, true);

    }
    else {
        alert('Bạn thêm tối đa 12 ô');
    }

}
// delete one input box
function deleteOneBox() {
    let number1 = document.getElementsByClassName('inputNumner');
    if (number1.length > 1) {
        renderInputElemet(number1.length + 1, false);
    }
    else {
        alert('Bạn xóa tối thiểu 1 ô');
    }

}
// get input value, checkit and caculte max number.
function calculateAllMax() {
    let number1 = document.getElementsByClassName('inputNumner');
    let outputMax = document.getElementById('outputMax');
    let arr = [];
    for (let valuee of number1) {
        if (testInput(valuee)) {
            arr.push(parseFloat(valuee.value));
        }
    }
    outputMax.innerHTML = maxOfnumberArrray(arr).toString();




}
// delete all input and output value
function ResetAllBox() {
    let number1 = document.getElementsByClassName('inputNumner');
    let outputMax = document.getElementById('outputMax');
    outputMax.innerHTML = '';
    for (let valuee of number1) {
        valuee.value = '';
        valuee.placeholder = '';
        valuee.setAttribute('style', " border: 2px inset initial initial");

    }
}
// re render input element, after: add or delete one child.
function renderInputElemet(length1, add) {
    if (add) {
        let str = "<span>No." + length1.toString() + "</span>  <input type='text'  class='inputNumner  m-2'  id='inputNumner" + length1.toString() + "'> <br>";
        let node = document.createElement("div");
        node.innerHTML = str;
        node.setAttribute('class', 'inputNumberChild');
        inputElemet.appendChild(node);
    }
    else {
        inputElemet.removeChild(inputElemet.childNodes[length1]);
    }

}
// calculate max nuber of array 
function maxOfnumberArrray(arr) {
	console.log(arr);
    if (arr.length > 0) {
        let max = arr[0];
        for (value of arr) {
            if (value > max) {
                max = value;
            }
        }
        return max;
    } else {
        return NaN;
    }

}
// check value input is number or not number.
function testInput(obj) {
    let b = parseFloat(obj.value);
    if (Number.isNaN(b)) {
        obj.setAttribute('style', " border: 1px inset yellow");
        if (obj.value != '') {
            obj.placeholder = obj.value + ' -không phải là số';
            obj.value = '';
        } else {
            obj.placeholder = 'Điền số vào ô này';
        }
        return false;
    } else {
        obj.setAttribute('style', " border: 2px inset initial initial");
        return true;
    }
}

