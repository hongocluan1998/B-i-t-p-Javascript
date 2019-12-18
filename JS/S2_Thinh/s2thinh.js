let widthInphut = document.getElementById('widthInphut');
let heightInphut = document.getElementById('heightInphut');
let inputelement = document.getElementsByClassName('input');
let colorInphut = document.getElementById('colorInphut');
let gennerateBt = document.getElementById('gennerateBt');
let ouputElement = document.getElementById('ouputElement');

gennerateBt.addEventListener('click', genneratefunction);
widthInphut.addEventListener('keypress', validate);
heightInphut.addEventListener('keypress', validate);
colorInphut.addEventListener('change', validatecolor);

function genneratefunction() {
    let color = getColorInputvalue(colorInphut);
    let width = getNumberInputvalue(widthInphut);
    let height = getNumberInputvalue(heightInphut);
    if (width && height && color) {

        let str = 'width:' + width.toString() + 'px;'
            + 'height:' + height.toString() + 'px;'
            + 'background-color:' + color + ';';
        ouputElement.setAttribute('style', str);
    }
}
// check input object value is a number
// return value if true and not return false.
function getNumberInputvalue(input) {
    let inputvalue = parseInt(input.value);
    if (Number.isNaN(inputvalue)) {
        input.setAttribute('style', " border: 1px inset yellow");
        if (input.value != '') {
            input.placeholder = input.value + ' -không phải là số';
            input.value = '';
        } else {
            input.placeholder = 'Điền số vào ô này';
        }
        return false;
    } else {
        input.setAttribute('style', " border: 2px inset");
        input.placeholder = '';
        return inputvalue;
    }
}
function getColorInputvalue(input) {
    let color = input.value;
    let comment = document.getElementById('comment');
    if (color == 'empty') {
        comment.innerHTML = 'Chưa chọn màu';
        return false;
    } else {
        comment.innerHTML = '';
        return color;
    }
}
function validate(evt) {
    var theEvent = evt;
    var key = theEvent.keyCode;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        gennerateBt.disabled = true;
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
    else {
        gennerateBt.disabled = false;
    }
}
function validatecolor(evt) {
    var theEvent = evt;
    var color = theEvent.path[0].value;
    var elements = colorInphut.getElementsByTagName('option');
    console.log(elements);   
    if(elements.length==5){
        colorInphut.removeChild(elements[0])
    }
    if (color == 'empty') {
        gennerateBt.disabled = true;
    }
    else {
        gennerateBt.disabled = false;
    }
}