 function addIpEmail() {
 	
  	var showupE = document.getElementById('showupE');
  	var divemail = document.createElement('div');
  	divemail.setAttribute('class','row my-2');
  	var divcol2 = document.createElement('div');
  	divcol2.setAttribute('class','col-2');
  	divemail.appendChild(divcol2);
  	var divcol8 = document.createElement('div');
  	divcol8.setAttribute('class','col-8');
  	divemail.appendChild(divcol8);
  	var inputemail = document.createElement('input');
  	inputemail.setAttribute('type','email');
  	inputemail.setAttribute('name','email');
  	inputemail.setAttribute('class','form-control errEmail');
  	inputemail.setAttribute('id','testemail');
  	inputemail.setAttribute('aria-describedby','emailHelp');
  	inputemail.setAttribute('placeholder','Enter email');
  	// inputemail.setAttribute('onkeypress','validate()');
  	divcol8.appendChild(inputemail);
  	// var divbtn = document.createElement('div');
  	// divbtn.setAttribute('class','col-2');
  	// divemail.appendChild(divbtn);
  	var btn = document.createElement('button');
  	btn.setAttribute('class','btn btn-danger ml-3');
  	btn.innerText = '-';
  	divemail.appendChild(btn);
  	showupE.appendChild(divemail);
  		deleteIp(btn);
    // console.log(divemail);

}

function addIpPhone(){
	var showupP = document.getElementById('showupP');
  	var divph = document.createElement('div');
  	divph.setAttribute('class','row my-2');
  	var divcol2 = document.createElement('div');
  	divcol2.setAttribute('class','col-2');
  	divph.appendChild(divcol2);
  	var inputcol2 = document.createElement('input');
  	inputcol2.setAttribute('type','phone');
  	inputcol2.setAttribute('id','testphone');
  	inputcol2.setAttribute('class','form-control errPhone');
  	inputcol2.setAttribute('placeholder','+84');
  	inputcol2.disabled = true;
  	divcol2.appendChild(inputcol2);
  	var divcol8 = document.createElement('div');
  	divcol8.setAttribute('class','col-8');
  	divph.appendChild(divcol8);
  	var inputph = document.createElement('input');
  	inputph.setAttribute('type','text');
  	inputph.setAttribute('name','phone');
  	inputph.setAttribute('class','form-control');
  	inputph.setAttribute('aria-describedby','phonelHelp');
  	inputph.setAttribute('placeholder','Enter phone');
  	// inputph.setAttribute('onkeypress','validate()');
  	divcol8.appendChild(inputph);
  	var btn = document.createElement('button');
  	btn.setAttribute('class','btn btn-danger ml-3');
  	btn.innerText = '-';
  	btn.style.display = 'inline'
  	divph.appendChild(btn);
  	showupP.appendChild(divph);
  	deleteIp(btn);
  	// console.log(showupP);
}

// 
function deleteIp(item){
	item.addEventListener('click',function(){
		item.parentElement.remove();
	})
}

// function submitForm(){
// 	document.getElementById("form").submit();
// }

function validate(){
	var phone = document.getElementsByClassName(errPhone).value;
	var email = document.getElementsByClassName(errEmail).value
	if (phone.value ==''|| phone.value !== isNaN) {
			alert("Please enter your telephone number."); 
        	phone.focus(); 
        	return false; 
        	// console.log(phone);
		}
	// for (var i=0;i<phone.length;i++){
 //    if (phone[i].value == ''|| phone[i].value !== NaN){
 //        alert("Please enter your telephone number."); 
 //        phone.focus(); 
 //        return false; 
 //    }
 //    i++;
  
}
