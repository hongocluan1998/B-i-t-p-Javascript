//thêm các input
function addFields(){
  
  var number = document.getElementById("member").value;
  var box = document.getElementById("box");
  if(number < 3)
  {
    alert("Mời bạn nhập số lớn hơn hoặc bằng 3");
  }
  else{
  
    while (box.hasChildNodes()) {
      box.removeChild(box.lastChild);
    }
    for (i=0;i<number;i++){
        box.appendChild(document.createTextNode("Number " + (i+1)+ "  "));
        var input = document.createElement("input");
        input.type = "text";
        input.name = "member" + i;
        input.className = "btn btn-outline-info inputNumber";
        box.appendChild(input);
        box.appendChild(document.createElement("br"));
        box.appendChild(document.createElement("br"));
    }
  }
  
}

//tìm số theo yêu cầu
function findNumber(){
  var arrNumber = document.getElementsByClassName("inputNumber");
  var valueNumber=[];// chứa giá trị của input nhập vào
  var arrsort = [];//mảng chứa giá trị sau khi sắp xếp input theo thứ tự tăng dần
  var sumMin;//Tổng của 2 số nhỏ nhất
  // đưa input vào mảng valueNumber
  for(var i = 0;i< arrNumber.length;i++)
  {
    valueNumber[i] =(arrNumber[i].value);
  }
  //sắp xếp mảng valueNumber theo thứ tự lớn dần và đưa vào mảng arr
  arrsort = valueNumber.sort(function(a,b){return a-b});
  sumMin = parseInt(arrsort[0]) +parseInt(arrsort[1]); 
  for(var i = 0;i< arrNumber.length;i++){
    if((arrNumber[i].value) >=  sumMin)
    {
      arrNumber[i].classList.add("btn-outline-danger");
    }
  }
}


/*
//tìm số theo yêu cầu
function findNumber(){
  var arrNumber = document.getElementsByClassName("inputNumber");
  // for(var i = 0; i< arrNumber.length;i++)
  // {
  //   if(arrNumber[i] == "")
  //   {
  //     document.getElementById('find').disable = true;
  //     break;
  //   }
  // }
  var valueNumber=[];// chứa giá trị của input nhập vào
  var arr1 = [];//mảng chứa giá trị sau khi sắp xếp input theo thứ tự tăng dần
  var sumMin;//Tổng của 2 số nhỏ nhất
  for(var i = 0;i< arrNumber.length;i++)
  {
    //console.log(arrNumber[i].value);
    // if(arrNumber[i].value < 10)
    // {
    //   arrNumber[i].classList.add("btn-outline-danger");
    // }
    // arrNumber.value.sort();
    // console.log(arrNumber[i].value);
    valueNumber[i] =(arrNumber[i].value);

  }
 // console.log(valueNumber);
  // minNumber1 = Math.min.apply(Math,valueNumber);
  // console.log(minNumber1);
  arr1 = valueNumber.sort(function(a,b){return a-b});
  sumMin = parseInt(arr1[0]) +parseInt(arr1[1]); 
  for(var i = 0;i< arrNumber.length;i++){
    if((arrNumber[i].value) >=  sumMin)
    {
      arrNumber[i].classList.add("btn-outline-danger");
    }
  }
 
 // console.log(sumMin);
}

*/