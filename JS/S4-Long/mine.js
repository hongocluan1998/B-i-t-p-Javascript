var newEmail = document.getElementById('newEmail');
var boxEmail = document.getElementById('boxEmail');
var newPhone = document.getElementById('newPhone');
var boxPhone = document.getElementById('boxPhone');
var submitForm = document.getElementById('submitForm');
// add event create new Email
newEmail.addEventListener('click',function(){
	// create parent div
	let divParent = document.createElement('div');
	divParent.setAttribute('class','col-md-12 ml-5');
	// create new input form
	let createNewEmail = document.createElement('input');
	createNewEmail.setAttribute('class','itemsEmail form-control formInput');
	createNewEmail.setAttribute('type','email');
	createNewEmail.setAttribute('placeholder','Email');
	createNewEmail.setAttribute('required','true');
	divParent.appendChild(createNewEmail);
	// create delete button
	let delButton = document.createElement('button');
	delButton.setAttribute('class','btn btn-danger align-baseline ml-2');
	delButton.innerText = 'X';
	delButton.style.display = 'inline';
	divParent.appendChild(delButton);
	// create tag print message
	let printMessage = document.createElement('span');
	divParent.appendChild(printMessage);
	boxEmail.appendChild(divParent);
	addEventDelete(delButton);
})
// add event create new Phone
newPhone.addEventListener('click',function(){
	// create parent div
	let divParent = document.createElement('div');
	divParent.setAttribute('class','col-md-12 ml-5');
	// create new input form
	let createCode = document.createElement('span');
	createCode.innerText = '+';
	divParent.appendChild(createCode);
	let createNewPhoneCode = document.createElement('input');
	createNewPhoneCode.setAttribute('class','itemsPhone form-control formInputCode');
	createNewPhoneCode.setAttribute('type','text');
	createNewPhoneCode.setAttribute('placeholder','84');
	createNewPhoneCode.setAttribute('pattern','\\d*');
	createNewPhoneCode.setAttribute('required','true');
	divParent.appendChild(createNewPhoneCode);
	let createNewPhoneNumber = document.createElement('input');
	createNewPhoneNumber.setAttribute('class','itemsPhone form-control formInput');
	createNewPhoneNumber.setAttribute('type','text');
	createNewPhoneNumber.setAttribute('placeholder','Phone Number');
	createNewPhoneNumber.setAttribute('pattern','\\d*');
	createNewPhoneNumber.setAttribute('required','true');
	divParent.appendChild(createNewPhoneNumber);
	// create new delete button
	let delButton = document.createElement('button');
	delButton.setAttribute('class','btn btn-danger align-baseline ml-2');
	delButton.innerText = 'X';
	delButton.style.display = 'inline';
	divParent.appendChild(delButton);
	// create tag print message
	let printMessage = document.createElement('span');
	divParent.appendChild(printMessage);
	boxEmail.appendChild(divParent);
	addEventDelete(delButton);
	boxPhone.appendChild(divParent);
})
// add event check validate form after press submit button
submitForm.addEventListener('click',function(){
	// get values of form input
	var itemsEmail = document.getElementsByClassName('itemsEmail');
	var itemsPhone = document.getElementsByClassName('itemsPhone');
	// check validate form input Email
	// 1. check format Email
	checkFormatTypeInput(itemsEmail,1);
	// 2. check duplicate value
	var sttEmail = checkMessage(itemsEmail);
	if(sttEmail === true && itemsEmail.length !== 0){
		checkDuplicateValue(itemsEmail,1);
	}
	// check validate form input Phone
	// 1. check format Phone number
	checkFormatTypeInput(itemsPhone,2);
	// 2. check duplicate value
	var sttPhone = checkMessage(itemsPhone);
	if(sttPhone === true && itemsPhone.length !== 0){
		checkDuplicateValue(itemsPhone,2);
	}
	setTimeout(function(){submitData(itemsEmail,itemsPhone);},500);
})

// add event delete into new button
function addEventDelete(item){
	item.addEventListener('click',function(){
		item.parentElement.remove();
	})
}
function checkFormatTypeInput(data,numberTagInput){
	if(data.length !== 0){
		for(let pos = 0; pos<data.length; pos=pos+numberTagInput){
			if(!data[pos].checkValidity()){
				data[pos].style.borderColor = 'red';
				data[pos].parentElement.lastElementChild.innerText = data[pos].validationMessage;
			}
			else data[pos].style.borderColor = '#ced4da';
			if(!data[pos+numberTagInput-1].checkValidity()){
				data[pos+numberTagInput-1].style.borderColor = 'red';
				data[pos+numberTagInput-1].parentElement.lastElementChild.innerText = data[pos+numberTagInput-1].validationMessage;
			}
			else data[pos+numberTagInput-1].style.borderColor = '#ced4da';
			if(data[pos].checkValidity() && data[pos+numberTagInput-1].checkValidity()){
				data[pos].parentElement.lastElementChild.innerText = '';
			}
		}
	}
}
function checkDuplicateValue(data,numberTagInput){
	for(let pos = 0; pos<data.length; pos = pos+numberTagInput){
		for(let posCompare = pos; posCompare<data.length; posCompare= posCompare+numberTagInput){
			if(data[pos+numberTagInput-1].value === data[posCompare+numberTagInput-1].value
				&& pos !== posCompare
				&& data[posCompare+numberTagInput-1].style.borderColor !== 'red'){
				data[posCompare+numberTagInput-1].style.borderColor = 'red';
				data[posCompare+numberTagInput-1].parentElement.lastElementChild.innerText = 'Duplicate value';
			}
		}
	}
}
function checkMessage(data){
	for(let item of data){
		if(item.parentElement.lastElementChild.innerText !== '') return false;
	}
	return true;
}
function submitData(dataEmail,dataPhone){
	if(checkMessage(dataEmail) && checkMessage(dataPhone)){
		if (dataEmail.length !== 0) {
			if(dataPhone.length !== 0){
				alert('Successed');
			}
			else alert('Add at least 1 Phone number!!!');
		}
		else alert('Add at least 1 Email!!!');
	}
}

// code chưa tách ra function
	// 1. check format Email=
	// if(itemsEmail.length !== 0){
	// 	for(let item of itemsEmail){
	// 		if(!item.checkValidity()){
	// 			item.style.borderColor = 'red';
	// 			item.parentElement.lastElementChild.innerText = item.validationMessage;
	// 		}
	// 		else{
	// 			item.style.borderColor = '#ced4da';
	// 			item.parentElement.lastElementChild.innerText = '';
	// 		}
	// 	}
	// }
	// 2. check duplicate value
	// var sttEmail = checkMessage(itemsEmail);
	// if(sttEmail === true && itemsEmail.length !== 0){
	// for(let pos = 0; pos<itemsEmail.length; pos++){
	// 	for(let posCompare = pos; posCompare<itemsEmail.length; posCompare++){
	// 		if(itemsEmail[pos].value === itemsEmail[posCompare].value 
	// 			&& pos !== posCompare
	// 			&& itemsEmail[posCompare].style.borderColor !== 'red'){
	// 			itemsEmail[posCompare].style.borderColor = 'red';
	// 			itemsEmail[posCompare].parentElement.lastElementChild.innerText = 'Duplicate value';
	// 		}
	// 	}
	// }

	// }
	// 1. check format Phone number
	// if(itemsPhone.length !== 0){
	// 	for(let pos = 0; pos<itemsPhone.length; pos=pos+2){
	// 		if(!itemsPhone[pos].checkValidity()){
	// 			itemsPhone[pos].style.borderColor = 'red';
	// 			itemsPhone[pos].parentElement.lastElementChild.innerText = itemsPhone[pos].validationMessage;
	// 		}
	// 		else itemsPhone[pos].style.borderColor = '#ced4da';
	// 		if(!itemsPhone[pos+1].checkValidity()){
	// 			itemsPhone[pos+1].style.borderColor = 'red';
	// 			itemsPhone[pos+1].parentElement.lastElementChild.innerText = itemsPhone[pos+1].validationMessage;
	// 		}
	// 		else itemsPhone[pos+1].style.borderColor = '#ced4da';
	// 		if(itemsPhone[pos].checkValidity() && itemsPhone[pos+1].checkValidity()){
	// 			itemsPhone[pos].parentElement.lastElementChild.innerText = '';
	// 		}
	// 	}
	// }
	// 2. check duplicate value
	// var sttPhone = checkMessage(itemsPhone);
	// if(sttPhone === true && itemsPhone.length !== 0){
	// for(let pos = 0; pos<itemsPhone.length; pos = pos+2){
	// 	for(let posCompare = pos; posCompare<itemsPhone.length; posCompare= posCompare+2){
	// 		if(itemsPhone[pos+1].value === itemsPhone[posCompare+1].value
	// 			&& pos !== posCompare
	// 			&& itemsPhone[posCompare+1].style.borderColor !== 'red'){
	// 			itemsPhone[posCompare+1].style.borderColor = 'red';
	// 			itemsPhone[posCompare+1].parentElement.lastElementChild.innerText = 'Duplicate value';
	// 		}
	// 	}
	// }
	// }