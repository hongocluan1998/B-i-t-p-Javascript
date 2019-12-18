function Nhapso(){
	var length = parseInt(document.getElementById("nhap").value);

	var i = 0;
 	var x = '';
 	for (i = 0; i < length; i++) {
 		x += '<div class="row"><div class="col-sm-2 text-center mt-3">No.' +
			      i +
			      "</div>" +
			      '<div class="col-sm-4 text-center mt-3 " >' +
			      '<input type="number" class="form-control text-center elementArray numInput"id="" />' +
			      "</div>" +
			      "</div>";
      	   	}
  	document.getElementById("object").innerHTML = x;
}
function check(){
	var arr= []
	var inputs = document.getElementsByClassName('numInput')
	for(let input of inputs){
		arr.push(parseInt(input.value))
	}
	arr.sort()
	var errElements = []
	for(var i =2;i<arr.length;i++){
		if(arr[0]+arr[1] <= arr[i]){
			errElements.push(arr[i])
		}
		// console.log(errElements);
	}
	for(let input of inputs){
		let index= errElements.indexOf(parseInt(input.value))
		if(index >=0){
			input.style.backgroundColor='red';

		}
	}
}
