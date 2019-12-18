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
            arrays=arrays.reverse();
            
            this.body.innerHTML = '';
            arrays.forEach(element => {
                let node = document.createElement("tr");
                node.setAttribute('data-idTask',element.id);
                node.innerHTML = '<td>' + element.id + '</td><td>' + element.task + '</p>';
                this.body.appendChild(node);
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
           
            this.body.innerHTML = '';
            arrays.forEach(element => {
                let node = document.createElement("tr");
                node.setAttribute('data-idTask',element.id);
                node.innerHTML = '<td>' + element.id + '</td><td>' + element.task + '</p>';
                this.body.appendChild(node);
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
            this.myStorage = [];
            localStorage.setItem("taskList", JSON.stringify(this.myStorage));
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
        /^[0-9a-zA-Z\s]{5,20}$/,
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
let myStore = new Store();
let myTaskManager = new TaskManager();
myTaskManager.render(myStore.myStorage);
myTaskManager.idInput.addEventListener('change', newTask);
myTaskManager.taskInput.addEventListener('keyup', newTask);
myTaskManager.body.addEventListener('click',function(){
        let taskRow=event.target.parentNode;
        if(taskRow.localName === 'tr')   {
            let selected=  myStore.selectted.findIndex((element)=> element===taskRow.dataset.idtask);
            if(selected!=-1){
                taskRow.style.backgroundColor='';
                myStore.selectted=myStore.selectted.filter((element,index)=> index !==selected);
            } else{
                taskRow.style.backgroundColor='red';
                myStore.selectted.push(taskRow.dataset.idtask);
            }
        }     
        
        
})
myTaskManager.header.addEventListener('click', ()=> { myTaskManager.sort(myStore.myStorage ); myStore.selectted=[];});
myTaskManager.addButtton.addEventListener('click',  () => {
    if(newTask()) {
        myStore.addTask(newTask())
        myTaskManager.render(myStore.myStorage);
        myStore.selectted=[];
    }    
});
myTaskManager.resetButton.addEventListener('click', () =>  {
    myStore.delette();
    myTaskManager.render(myStore.myStorage);
    myStore.selectted=[];
});
myTaskManager.deleteButton.addEventListener('click', () =>  {
    myStore.deleteSomeRows(myStore.selectted);
    myTaskManager.render(myStore.myStorage);
    myStore.selectted=[];
});

