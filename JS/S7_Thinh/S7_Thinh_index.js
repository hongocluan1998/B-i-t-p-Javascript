"use strict";
let menu = [
    {
        monan: 'Canh chua cá lóc',
        gia: '10000'
    },
    {
        monan: 'Bún đậu mắm tôm',
        gia: '25000'
    },
    {
        monan: 'Cháo chờ Nam ô',
        gia: '15000'
    },
    {
        monan: 'Bánh xèo tôm nhảy',
        gia: '10000'
    },
]

let inputMon=document.getElementById('mon');
let inputSoLuong=document.getElementById('soLuong');
let output=document.getElementById('output');
let buttonTinhTien=document.querySelector('button');

function Valedate(input){

    let Regex=/^[0-9]/;
    console.log(Regex.test(input.value));
    if(Regex.test(input.value)){   
     return true;
    }else {
        return false;
    }
}

function renderSelect(){
    inputMon.innerHTML='';
    let newMenu=menu.map(function(obj){
        return "<option value='"+obj.gia+"'>"+obj.monan+"( Giá:" + obj.gia+"đ)</option>"
    });
    for(let valuee of newMenu){
        inputMon.innerHTML=inputMon.innerHTML+valuee;
    }
}
function tinhTien(){
    if(Valedate(inputSoLuong)){
        output.innerHTML='Số tiền phải trả là :'
    let sotien=parseInt(inputMon.value)*parseInt(inputSoLuong.value);
    let stringOutput= sotien.toString()+'đ';
    output.innerHTML=output.innerHTML+stringOutput;
    } else {
        output.innerHTML='Nhập vào một số dương !!';
        inputSoLuong.value='';
    }
}

renderSelect()
output.innerHTML='Số tiền phải trả là :'
buttonTinhTien.addEventListener('click',tinhTien);


