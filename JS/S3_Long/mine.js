



var dataList = document.getElementById('dataList');
var lenArray = document.getElementById('lenArray');
var renderArray = document.getElementById('renderArray');
var checkFault = document.getElementById('checkFault');

renderArray.addEventListener('click',function(){
	var removeItems = dataList.childElementCount;
	for(var remove = 0; remove < removeItems; remove++)
	dataList.children[0].remove();
	for(var items = 0; items < parseInt(lenArray.value); items++){
		var item = document.createElement('tr');		// create row
		var key = document.createElement('th');			// create key name
		key.style.color = getRandomColor();
		key.innerText = 'Number ' + (items+1);
		var value = document.createElement('td');		// create form input
		var input = document.createElement('input');
		input.setAttribute("type","number");
		input.setAttribute("class","items form-control formInput");
		value.appendChild(input);
		item.appendChild(key);
		item.appendChild(value);
		dataList.appendChild(item);
	}
	lenArray.value = '';
})

checkFault.addEventListener('click',function(){
	var items = document.getElementsByClassName('items');
	var statusEmpty = false;
	var sourceArray = [];
	var exportFault = [];
	for(var item of items){
		if(item.value === ''){
			alert('Làm việc phải có tâm!\nNhập đủ dữ liệu đi nào!');
			status = true;
			break;	
		} 
	}
	if(statusEmpty === false){
		for(var item of items){
			sourceArray.push(parseInt(item.value)); 
			item.setAttribute("class","items form-control formInput");
			anime({
			  targets: item.parentElement.parentElement,
			  translateX: 0,
			  autoplay: true,
			  easing: 'easeInOutSine'
			});
		}
		sourceArray = sourceArray.sort((a,b) => (a-b));
		filterArray(sourceArray,exportFault,items);
	}
})

function filterArray(srcArray,desArray,items){
	var temp = srcArray[0] + srcArray[1];
	for(var src = 2; src <srcArray.length; src++){
		if(srcArray[src] >= temp) desArray.push(srcArray[src]);
	}
	console.log(desArray);
	for(var des of desArray){
		for(var pos = 0; pos<items.length; pos++){
			if(items[pos].value == des){
				items[pos].setAttribute("class","items form-control formInput fault");
				anime({
				  targets: items[pos].parentElement.parentElement,
				  translateX: 300,
				  autoplay: true,
				  easing: 'easeInOutSine'
				});
			}
		}
	}
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 16)];
  }
  return color;
}