"use strict";
function TaskManager() {
    this.addButtton = document.getElementById('add'),
        this.resetButton = document.getElementById('reset'),
        this.deleteButton = document.getElementById('delete'),
        this.taskInput = document.getElementById('task'),
        this.idInput = document.getElementById('id'),
        this.ouput = document.getElementById('ouput'),
        this.header= this.ouput.querySelector('thead');
        this.body = this.ouput.querySelector('tbody');
        this.render = function (arrays) {
           
            this.body.innerHTML = '';
            arrays.forEach((element,index) => {
                let node = document.createElement("tr");
                node.setAttribute('data-idtask',element.id);
                node.setAttribute('data-index',index);
                node.innerHTML = 
                '<td class="idTd">' + element.id + '</td>'
                +'<td class="taskTd text-left text-break"><span class="text-break text-left ">' + element.task + '</span></td>';              
                this.body.appendChild(node);             
                if(element.task.length>50){
                    let taskTdd=node.querySelector('.taskTd');    
                    let taskP=taskTdd.querySelector('span');    
                    let span= document.createElement('span');
                    taskP.textContent=element.task.substring(0,25) +'. . .';
                    span.innerHTML='Xem thêm';
                    span.style.color='blue';
                    span.classList.add('clickXemthem');
                    span.setAttribute('data-idTask',element.id);
                    taskTdd.appendChild(span);
                }
            });

        };
        this.sort =function(arrays){
            let header= this.ouput.querySelector('thead');
            if(header.dataset.sorted == '0'){
                header.dataset.sorted = '1';
                arrays=arrays.sort((a,b) =>{
                    if (a.id < b.id) {
                        return -1;
                      }
                      if (a.id > b.id) {
                        return 1;
                      }
                      return 0;               
                } );
            } else {
                arrays=arrays.sort((a,b) =>{
                    header.dataset.sorted = '0';
                    if (a.id < b.id) {
                        return 1;
                      }
                      if (a.id > b.id) {
                        return -1;
                      }
                      return 0;               
                } );

            }
            this.render(arrays);
           
           
        };
        this.smallFunction =function (stament,idtask,list) {
                let tasks=this.body.querySelectorAll('tr');
               
                tasks.forEach(task => {
                    if(task.dataset.idtask==idtask){

                        let index=parseInt(task.dataset.index);
                        let taskTd=task.querySelector('.taskTd');

                        if(stament==true)
                        {
                            taskTd.innerHTML='<span class="text-break text-left ">' + list[index].task+' ' + '</span >';
                            let span= document.createElement('span');
                            span.innerHTML='Rút gọn';
                            span.style.color='blue';
                            span.classList.add('clickXemthem');
                            span.setAttribute('data-idTask',list[index].id);
                            taskTd.appendChild(span);
                        }else 
                        {
                            taskTd.innerHTML='<span class="text-break text-left ">' + list[index].task.substring(0,25)+'. . .' + '</span>';
                            let span= document.createElement('span');
                            span.innerHTML='Xem thêm';
                            span.style.color='blue';
                            span.classList.add('clickXemthem');
                            span.setAttribute('data-idTask',list[index].id);
                            taskTd.appendChild(span);
                        }
                        
                    }
                });
            
        }

}

function Store() {
    let getStore = () => {
        if (localStorage.getItem("taskList")) {
            return JSON.parse(localStorage.getItem("taskList"));
        }
    };
    this.myStorage = getStore() || [];
    this.selectted =[];
    this.addTask = function (task) {
        task.id = task.id.toUpperCase();
        this.myStorage.push(task);
        localStorage.setItem("taskList", JSON.stringify(this.myStorage));
    },
        this.delette = function () {
            if(confirm('Bạn có muốn xóa hết ?!')){
                this.myStorage = [];
                localStorage.setItem("taskList", JSON.stringify(this.myStorage));
            }
           
        },
        this.deleteSomeRows= function (arr){
            this.myStorage=this.myStorage.filter(function(element){

                return !arr.includes(element.id) ;
            });
            localStorage.setItem("taskList", JSON.stringify(this.myStorage));
        }

}
function validateAnInput(geregex, inputElement, message) {
    let samllElemnt = inputElement.parentNode.parentNode.querySelectorAll('small');
    if (samllElemnt) {
        samllElemnt.forEach(element => { element.outerHTML = '';});
        let newElement = document.createElement('small');
        newElement.innerHTML = message;
        newElement.style.color = 'red';
        newElement.classList = 'w-100 p-0 m-0 text-left';
        let regexB = geregex.test(inputElement.value);
        if (!regexB) {
            inputElement.parentNode.parentNode.insertBefore(newElement, inputElement.parentNode.nextSibling);
            inputElement.style.border = '2px solid red';
            inputElement.parentNode.parentNode.style.color = 'red';
            return false;
        } else {

            inputElement.style.border = '1px solid black';
            inputElement.parentNode.parentNode.style.color = '#212529';
            return true;
        }
    }

};
function validate(idInput, taskInput, arrays) {
    let check = [];
    let containID = arrays.find((task) => task.id === idInput.value.toUpperCase());
    if (containID) {
        check.push(validateAnInput(
            /^[a-zA-Z][0-9a-zA-A]{0}$/,
            idInput,
            'Số Id bị trùng !!'))
    } else if (!validateAnInput(
        /^[a-zA-Z][0-9a-zA-A]{3}$/,
        idInput,
        'Nhập đúng định dạng 4 ký tự, bao gồm chử và số, bắt đầu bằng chử cái !!')) {

        check.push(false);
    }
    if (!validateAnInput(
        /^[0-9a-zA-Z\s]{5,3000}$/,
        taskInput,
        'Nhập đúng định dạng 4 ký tự, bao gồm chử và số !!')) {

        check.push(false);
    }
    return (check.includes(false)) ? false : true;
}
function newTask() {
    let validated = validate(myTaskManager.idInput, myTaskManager.taskInput, myStore.myStorage);
    if (validated) {
        return {
            id: myTaskManager.idInput.value,
            task: myTaskManager.taskInput.value,
        }
    }
}
function clickBody(event,myStorage){  
    let className=event.target.classList;
    if(className != 'clickXemthem'){
        let taskRow=event.target.parentNode;
        if(taskRow.localName === 'tr')   {
            let selected=  myStore.selectted.findIndex((element)=> element===taskRow.dataset.idtask);
            if(selected!=-1){
                taskRow.style.backgroundColor='';
                myStore.selectted=myStore.selectted.filter((element,index)=> index !==selected);
            } else{
                taskRow.style.backgroundColor='rgba(255, 0, 0, 0.42)';
                myStore.selectted.push(taskRow.dataset.idtask);
            }
        }
    } else {
        let content =event.target.textContent;
        if(content=='Xem thêm'){
            myTaskManager.smallFunction(true, event.target.dataset.idtask, myStorage);
        }
         if(content=='Rút gọn'){
            myTaskManager.smallFunction(false, event.target.dataset.idtask, myStorage);
        }
       
    }
 
 }    
let myStore = new Store();
let myTaskManager = new TaskManager();
myTaskManager.render(myStore.myStorage);
myTaskManager.idInput.addEventListener('change', newTask);
myTaskManager.taskInput.addEventListener('keyup', newTask);
myTaskManager.body.addEventListener('click',(e)=>{clickBody(e,myStore.myStorage); });
myTaskManager.header.addEventListener('click', ()=> { myTaskManager.sort(myStore.myStorage ); myStore.selectted=[];});
myTaskManager.addButtton.addEventListener('click',  () => {
    if(newTask()) {
        myStore.addTask(newTask())
         myTaskManager.render(myStore.myStorage.reverse());
        myStore.selectted=[];
    }    
});
myTaskManager.resetButton.addEventListener('click', () =>  {
    myStore.delette();
     myTaskManager.render(myStore.myStorage.reverse());
    myStore.selectted=[];
});
myTaskManager.deleteButton.addEventListener('click', () =>  {
    myStore.deleteSomeRows(myStore.selectted);
    myTaskManager.render(myStore.myStorage.reverse());
    myStore.selectted=[];
});


