let data = JSON.parse(localStorage.getItem('dataCompany')) || [];
let add = document.querySelector('button[data-target]');
const table = document.querySelector('table');
const delButton = document.querySelector('button[data-event="delete"]');
render(data,table);
function render(data = [], table){
	const heading = `<tr class="bg-success">
			<td><input type="checkbox" name="choose" value="" id="checkAll"></td>
			<th scope="col">Company Name</th>
			<th scope="col">Color Code</th>
			<th scope="col">Max working Hours</th>
			<th scope="col">Whitelisted Zone</th>
			<th scope="col">Status</th>
			<th scope="col">Action</th>
    		</tr>`;
	table.innerHTML = heading + data.map((company,index) => {
		return `<tr>
			<td><input type="checkbox" name="choose" value="" data-index=${index}></td>
			<th scope="row">${company.name}</th>
			<td><div class="colorCode" style="background-color:${company.color}"></div></td>
			<td>${company.hours}</td>
			<td>${company.whitelisted.split(',').length} Zones</td>
			<td>${company.status}</td>
			<td><a href="register.html" class="text-dark"><i class="fas fa-pencil-alt mr-3" data-editIndex=${index}></i></a><i class="far fa-trash-alt" data-delIndex=${index}></i></td></tr>`;
	}).join('');
	document.querySelector('#checkAll').addEventListener('change',checkedAll);
	document.querySelectorAll('i[data-delindex]').forEach(ele => ele.addEventListener('click',delElement));
	document.querySelectorAll('i[data-editindex]').forEach(ele => ele.addEventListener('click',editElement));
}
function delChecked(){
	let updateData = [];
	document.querySelectorAll('input[data-index]').forEach(ele => {
		if(ele.checked !== true) updateData.push(data[`${ele.dataset.index}`]);
	})
	data = updateData;
	localStorage.setItem('dataCompany',JSON.stringify(data));
	render(data,table);
}
function delElement(){
	data.splice(parseInt(this.dataset.delindex),1);
	localStorage.setItem('dataCompany',JSON.stringify(data));
	render(data,table);
}
function checkedAll(){
	document.querySelectorAll('input[data-index]').forEach(data => {
		data.checked = this.checked;
	})
}
function editElement(){
	let element = this.dataset.editindex;
	localStorage.setItem('action',JSON.stringify(element));
}
function createEle(){
	let element = false;
	localStorage.setItem('action',JSON.stringify(element));
}
add.addEventListener('click',createEle);
delButton.addEventListener('click',delChecked);