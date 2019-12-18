let companyName = document.querySelector('input[name="company"]');
let status = document.querySelector('select[name="status"]');
let operateCompany = document.querySelector('input[name="operate"]');
let colorCode = document.querySelector('input[name="colorCode"]');
let workHours = document.querySelector('input[name="workHours"]');
let zoneList = document.querySelector('select[name="zoneList"]');
let zoneWhite = document.querySelector('select[name="zoneWhite"]');
let addZone = document.querySelector('button[name="add"]');
let removeZone = document.querySelector('button[name="remove"');

let index = JSON.parse(localStorage.getItem('action'));

const zonesDefault = createDefault();
let zonesWhiteListed = [];
if(index === false) {
	render();
	localStorage.setItem('company',JSON.stringify([]));
}
else isExist();

// define functions
function whiteListed(){
	let company = JSON.parse(localStorage.getItem('company')) || [];
	const listId = company.map(zone => zone.id);
	if(listId.includes(zoneList.value)) return;
	else if(zoneList.value !== '')
	company.push(zonesDefault[parseInt(zoneList.value) - 1]);
	company = company.sort((a,b) => parseInt(a.id) - parseInt(b.id));
	localStorage.setItem('company',JSON.stringify(company));
	render(company);
	zonesWhiteListed = company;
}

function removeWhiteListed(){
	let company = JSON.parse(localStorage.getItem('company')) || [];
	if(company.length === 0) return;
	company = company.filter(zone => zone.id !== zoneWhite.value);
	localStorage.setItem('company',JSON.stringify(company));
	render(company);
	zonesWhiteListed = company;
}	

function createDefault(){
	let zones = [];
	for(let i = 1; i <= 12; i++){
		zones = zones.concat([{"id": `${i}`, "name": `Zone ${i}`}]);
	}
	localStorage.setItem('zoneList',JSON.stringify(zones));
	return zones;
}

function isExist(){
	let company = JSON.parse(localStorage.getItem('dataCompany'))[index];
	companyName.value = company.name;
	status.value = company.status;
	operateCompany.checked = (company.operate === 'true');
	colorCode.value = company.color;
	workHours.value = parseInt(company.hours);
	let arrZones = company.whitelisted.split(',')
			.map(ele =>`<option value="${ele}">Zone ${ele}</option>`);
	zoneWhite.innerHTML = arrZones;	
	const zones = company.whitelisted.split(',')
			.map(ele => ({'id': `${ele}`, 'name': `Zone ${ele}`}));
	localStorage.setItem('company',JSON.stringify(zones));
}

function render(list = []){
	const zones = list
		.map(zone => `<option value="${zone.id}">${zone.name}</option>`)
	zoneWhite.innerHTML = zones;
}

function createCompany(){
	console.log(zonesWhiteListed);
	if(!index){
		let data = JSON.parse(localStorage.getItem('dataCompany')) || [];
		let newCompany = {
			name : `${companyName.value}`,
			status : `${status.value}`,
			operate : `${operateCompany.checked}`,
			color : `${colorCode.value}`,
			hours : `${workHours.value}`,
			whitelisted : `${zonesWhiteListed.map(zone => zone.id)}`,
		}
		data.push(newCompany);
		localStorage.setItem('dataCompany',JSON.stringify(data));
	}
	else{
		let data = JSON.parse(localStorage.getItem('dataCompany'));
		data = data.map((ele,i) => {
			if(i === index){
				ele.whitelisted = zonesWhiteListed.map(zone => zone.id).join(',');
			}
			console.log(ele.whitelisted);
			return ele;
		})
		localStorage.setItem('dataCompany',JSON.stringify(data));
	}
}



// add event
addZone.addEventListener('click', whiteListed );
removeZone.addEventListener('click', removeWhiteListed );

// validate form
$('#create').submit(function(e){
	e.preventDefault();
}).validate( {
	rules: {
		company: {
			required: true,
			formatName: true
		},
		// status: {
		// 	required: true
		// },
		colorCode: {
			required : true
		},
		workHours: {
			required: true,
			formatHours: true,
			limitHours: true
		}
	},
	messages: {
		company: {
			required: "Please enter Company's name",
			formatName: "Company's name only contain character"
		},
		// status: {
		// 	required: "Please choose status"
		// },
		colorCode: {
			required: "Please choose color code"
		},
		workHours: {
			required: "Please enter maximum working hours for this company",
			formatHours: "This field only allow numbers",
			limitHours: "The limit working hours is 24"
		}
	},
	submitHandler: function() {
		// if(!create()) alert('This company\'s name already exist!!!');
		createCompany();
		$('#create')[0].reset();
	}
});
$.validator.addMethod('formatHours',function(value){
	return /^[0-9]+$/.test(value);
});
$.validator.addMethod('formatName',function(value){
	return /^[A-Za-z]+$/.test(value);
});
$.validator.addMethod('limitHours',function(value){
	return /^([1-9]{1}|1[0-9]{1}|2[0-4]{1})$/.test(value);
});