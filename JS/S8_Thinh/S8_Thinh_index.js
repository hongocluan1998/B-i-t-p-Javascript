"use strict";
let addButtton=document.getElementById('add');
let resetButton=document.getElementById('reset');
let taskInput=document.getElementById('task')
let helpId=document.getElementById('helpId');
let myStorage = window.localStorage;
    console.log(myStorage);
function addTaskFunction(){
   if(validate(taskInput)){
    helpId.style.display='none' // Không hiển thị hướng dẫn

    localStorage.setItem(myStorage.length.toString(), taskInput.value); 
    location.reload();
    myStorage=window.localStorage;
//    console.log(myStorage);
    Render(myStorage);
    
   } else{
    helpId.innerHTML='Bạn không được nhập ký tự đặc biệt !'
    }
}
function resetAllTaskFunction(){
    localStorage.clear();
    location.reload();
}

function Render(arr){
    let ouput=document.getElementById('ouput');
    ouput.innerHTML="<h3>Tasks List</h3>";
    for(let i=0;i<arr.length;i++){
        let key=i.toString();
        ouput.innerHTML=ouput.innerHTML+ "<p>" + i.toString()+ ": "+arr[key]+"</p>";
        console.log(arr[key]);
    }
    

}

function validate(input){
    let Regex=/[0-9a-zA-Z_-ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ@#\s]/;
    console.log(Regex.test(input.value));
    if(Regex.test(input.value)){   
     return true;
    }else {
        return false;
    }
}

Render(myStorage);
addButtton.addEventListener('click',addTaskFunction);
resetButton.addEventListener('click', resetAllTaskFunction);











