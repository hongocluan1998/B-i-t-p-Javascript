var recGenerator = document.getElementById('recGenerator');
var showResult = document.getElementById('showResult');
var valHeight = document.getElementById('valHeight');
var valWidth = document.getElementById('valWidth');
var chooseColor = document.getElementById('chooseColor');
var valColor = document.getElementById('valColor');
var colorPicker = document.getElementById('colorPicker');
var formInput = document.getElementById('formInput');
var bgColor;
recGenerator.addEventListener('click',generator);

function generator(){
	showResult.removeAttribute("style");
	showResult.style.width = valWidth.value + 'px';
	showResult.style.height = valHeight.value + 'px';
	showResult.style.backgroundColor = bgColor;
anime({
  targets: showResult,
  translateX: {
    value: '*=2.5', 
    duration: 1000
  },
  translateY:{
  	value: '100px',
  },
  width: {
    value: '*=0.5',
    duration: 1800,
    easing: 'easeInOutSine'
  },
  rotate: {
    value: '+=2turn', 
    duration: 1800,
    easing: 'easeInOutSine'
  },
  direction: 'alternate'
});
	valWidth.value = '';
	valHeight.value = '';
	chooseColor.value = '';
	checkStatus();
}	

chooseColor.addEventListener('change',selectOpt);
function selectOpt(){
	if(chooseColor.value === 'picker') valColor.click();
	else bgColor = chooseColor.value;
}
valColor.addEventListener('change',selectColor);
function selectColor(){
	colorPicker.style.backgroundColor = valColor.value;
	bgColor = valColor.value;
}

valHeight.addEventListener('keyup',checkStatus);
valWidth.addEventListener('keyup',checkStatus);
chooseColor.addEventListener('change',checkStatus);
function checkStatus(){
	if((valWidth.value !== '') && (valHeight.value !== '') && (chooseColor.value !== '')){
		recGenerator.disabled = false;
		console.log(valWidth.value);
		console.log(valHeight.value);
		console.log(chooseColor.value);
	}
	else recGenerator.disabled = true;
}
