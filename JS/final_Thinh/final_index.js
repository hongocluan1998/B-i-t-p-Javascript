//
function LocalStore(){
    function getData(key){
        let data=localStorage.getItem(key);
        if(data) {
            data=JSON.parse(data)
        } else {
            data=[];
        }
        return data;
    }
    function setData(key,data){
        data=JSON.stringify(data);
        localStorage.setItem(key, data);
    }
    return {
        getData: getData,
        setData: setData
    }
}

(function indexPage(){
const Store=new LocalStore;

const newButton=document.getElementById('newButton');
const deleteButton=document.getElementById('deleteButton');
const downloadButton=document.getElementById('downloadButton');
const searchButton=document.getElementById('searchButton');
const table=document.querySelector('#indexTable');
const tableHeader=table.querySelector('thead');
const tableBody=table.querySelector('tbody');
const searchRow=document.getElementById('searchRow');
const checkboxAll=document.getElementById('choseAllChBox');
const cancelSearch=document.getElementById('cancel')
const searchSearch=document.getElementById('search')
let datatable=Store.getData('listCompany');

function rederBody(datatable){
    tableBody.innerHTML='';
    datatable.forEach( (element,index)=> {
        let row=document.createElement('tr');
        row.setAttribute('data-index',index);
        row.innerHTML=
        ' <td> <input type="checkbox" name="choseItermChBox" id=""> </td>'
        +' <td> <strong>'+ element.name+'</strong> </td>'
        +' <td>  <div class="display-color" style="background-color:'+element.color +';"></div> </td>'
        +'  <td>'+ element.maxWorking+' hour</td>'
        +'  <td>'+ element.whiltes.length+'Zone: ['+element.whiltes+']'+' </td>'
        +'  <td>'+ element.status+'</td>'
        + ' <td class="action-data-table">'
        +'<button type="button" id="editIterm">'
        +' <i class="fas fa-edit"></i>'
        +' </button>'
        +'<button type="button" id="deleteIterm">'
        +' <i class="fas fa-trash-alt"></i>'
        +'</button>'
        +'</td>';
        tableBody.appendChild(row);
    })
    
}
function deleteACompany(row){
    let index=parseInt(row.dataset.index);
    datatable.splice(index, 1);
    Store.setData('listCompany',datatable);
    rederBody(datatable);
}
function addNewCompany(){
    Store.setData('edit',datatable.length);
    window.open('final_edit.html','_self');
}
function editACompany(row){
    let index=parseInt(row.dataset.index);
    Store.setData('edit',index);
    window.open('final_edit.html','_self');
}

function displaySearchRow(){
    let classList= searchRow.classList.value;
    if(!classList.includes('display')){
        searchRow.classList.add('display');
    } else {
        searchRow.classList.remove('display');
    }
    
}
function   addAllCompany(){
    let checkAll=checkboxAll.checked;
    let allBodyCheckboxs=[...tableBody.querySelectorAll('[type="checkbox"]')];
    allBodyCheckboxs.forEach(checkbox =>checkbox.checked=checkAll);
    
}
function sortName(key){
    let sorttedData=datatable.sort( (companyA,companyB)=>{
        if(companyA[key] >= companyB[key]) {
            return 1;
        } else {
            return -1;
        }
    });
    return sorttedData;

}
function sortColum(obj){
    const id=obj.id;
    let sorttedData=datatable;
    switch(id) {
        case 'thComName':
          sorttedData=sortName(obj.dataset.colum);
          break;
        case 'thColorCode':
            sorttedData=sortName(obj.dataset.colum);
          break;
        case 'thWHour':
            sorttedData=sortName(obj.dataset.colum);
          break;
        case 'thWZone':
            sorttedData=sortName(obj.dataset.colum);
          break;
        case 'thStatus':
            sorttedData=sortName(obj.dataset.colum);
          break;
        default:
            console.log(obj);
      }
      rederBody(sorttedData);
    
}
function clickHeaderTable(event){
    const obj = event.target.parentNode;
    const id=obj.id;
    switch(id) {
        case 'thchoseAllChBox':
          addAllCompany();
          break;
        case 'thAction':
            console.log(obj);
          break;
        default:
          sortColum(obj);
      }

}
function clickBodyTable(event){
    const obj = event.target;
    const objParent = obj.parentNode;
    let deleteBt=(obj.id=='deleteIterm')?obj:(objParent.id=='deleteIterm')?objParent:null;
    let editBt=(obj.id=='editIterm')?obj:(objParent.id=='editIterm')?objParent:null;
    if(deleteBt){
        deleteACompany(deleteBt.parentNode.parentNode);
    }
    if(editBt){
        editACompany(editBt.parentNode.parentNode)
    }
    
}
function deleteComchecked(){
    if(confirm(' Bạn có chắc chắn muốn xóa !! ')){
        let allBodyCheckboxs=[...tableBody.querySelectorAll('[type="checkbox"]')];
    allBodyCheckboxs=allBodyCheckboxs.filter( (checkbox)=> checkbox.checked);
    let rows=allBodyCheckboxs.map( (checkbox) =>parseInt(checkbox.parentNode.parentNode.dataset.index))

    datatable=datatable.filter( (company,index)=> {
        return !rows.includes(index);
    })
    Store.setData('listCompany',datatable);
    rederBody(datatable);
    }
    
}
function searchRowFnc(){
    let name = document.querySelector('[name="searchCompany" ]')
    let color = document.querySelector('[name="searchColor" ]')
    let maxWorking = document.querySelector('[name="searchWorkHour" ]')
    let whiltes = document.querySelector('[name="searchZone" ]')
    let status = document.querySelector('[name="searchStatus" ]')

    console.log(name,maxWorking);
    
}

function init(){
    rederBody(datatable);
    newButton.addEventListener('click',addNewCompany);
    searchButton.addEventListener('click',displaySearchRow);
    deleteButton.addEventListener('click',deleteComchecked)
    tableHeader.addEventListener('click',clickHeaderTable);
    tableBody.addEventListener('click',clickBodyTable);
    cancelSearch.addEventListener('click',displaySearchRow)
    searchSearch.addEventListener('click',searchRowFnc)
}
init()

})();




// 



