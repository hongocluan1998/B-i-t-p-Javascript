// function validateForm() {
//   var user = document.forms["myForm"]["userName"].value;
//   if (user == "") { 
//     alert("Tên đăng nhập chưa có");
//     return false;
//   }

  
//   var passw = document.getElementById('Password').value;
//   	if (passw == ""){
//   		alert("Bạn phải nhập Password");
//   		return false;
//   	}
//   	// if (passw !== str.match(/^(?=.*[0-9])(?=.*[a-z])([a-zA-Z0-9]{8,})$/)){
//   	// 	alert("Password phải có ít nhất một số và nhiều hơn 8 ký tự")
//   	// 	return false;
//   	// }
// }
//  
function validateForm(){
	var inputs = document.getElementsByTagName("input");
	for(let input of inputs){
    if(input.value == ''){
      input.style.border = '1px solid red';
      return false;
    }
    else{
      input.style.border = '';
    }
	}

	//username
	if(!/^[a-zA-Z0-9]*$/.test(inputs[0].value)){
		// inputs[0].style.border = '1px solid red';
		alert('Tên đăng nhập không gồm ký tự đặc biệt');
	    return false;
	}
	// password
	if(inputs[1].value.length <8){
		// inputs[1].style.border = '1px solid red';
	    alert('Password phải trên 8 ký tự');
	    return false;
	  }
	// pass confirm
	if(inputs[1].value !== inputs[2].value){
		// inputs[2].style.border = '1px solid red';
	    alert('Nhập lại password chưa đúng');
	    return false;
  	}	
  	// name
	if(!/^[a-zA-Z]*$/.test(inputs[3].value) || !/^[a-zA-Z]*$/.test(inputs[4].value)){
		// inputs[3].style.border = '1px solid red';
		// inputs[4].style.border = '1px solid red';
	    alert('Họ và Tên của bạn không gồm ký tự đặc biệt');
	    return false;
	  }
	  // email
	if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs[5].value)){
		// inputs[5].style.border = '1px solid red';
	    alert('Email chưa đúng, "Example@mail.com"');
	    return false;
	  }
	  // phone
	// var twoFirstPhone = inputs[6].value.slice(0,2)
	// var location = ['07', '08', '09']
	  // if(!/[^0-9]/g.test(parseInt(inputs[6].value))
	  //    || !location.includes(twoFirstPhone)
	  //    || !inputs[6].value.length == 10){
	  //    alert('Phone gồm 10 số bắt đàu bằng 07,08,09');
	  //    return false;
	  // }
	  if(!/((09|07|08)+([0-9]{8})\b)/g.test(inputs[6].value)){
	  	// inputs[6].style.border = '1px solid red';
	  	alert('Phone gồm 10 số và đầu số bằng 07,08,09');
	    return false;
	  }

	
	  alert('Đăng ký thành công');
	  return true;
	
}

