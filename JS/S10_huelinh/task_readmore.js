// Declare
let addTask = document.getElementById('addTask');
let clearTask = document.getElementById('clearTask');
let clearAll = document.getElementById('clearAll');
let input = document.getElementById('inputTask');
let idTask = document.getElementById('idTask');
let thead = document.getElementById('thead');
let tbody = document.getElementById('tbody');

// Event
addTask.addEventListener('click', addTasks);
clearTask.addEventListener('click', clearTasks);
clearAll.addEventListener('click', clearAllTasks);
idTask.addEventListener('change', upperCaseID);


// Main
let TaskArr = [];
let dataString = localStorage.getItem('listTask');
if(dataString) {
    TaskArr = JSON.parse(dataString)
    console.log(dataString);
} else TaskArr = [];

renderAll();


// Constructor function
function TaskList(id, des) {
    this.id = id;
    this.des = des;
}

// Function AddTask
function addTasks() {
    let task = new TaskList(idTask.value, input.value);
    let check = validateAll(task);
    console.log(check);
    if(check) {
        TaskArr.push(task);
        idTask.value = '';
        input.value = '';
        localStorage.setItem('listTask', JSON.stringify(TaskArr));
        render(TaskArr[TaskArr.length - 1]);
        location.reload();
    }

}

// Function clearAllTask
function clearAllTasks() {
    TaskArr = [];
    renderAll();
    localStorage.setItem('listTask' ,'');
    //showTHead(TaskArr);
    location.reload()
}

// Function clear task
function clearTasks() {
    let tr = tbody.children;
    console.log('show tr.length...', tr.length);
    for(let i = 0; i < tr.length; i++) {
        while ( tr[i] && tr[i].children[0].children[0].checked) {
            TaskArr.splice(i, 1);
            localStorage.setItem('listTask', JSON.stringify(TaskArr));
            tbody.removeChild(tr[i]);
        }
    }
    location.reload();
    //showTHead(TaskArr);
}

// Function check All
function toggle(source) {
    let checkboxes = document.getElementsByName('check');
    length = checkboxes.length;
    for(let i = 0; i < length; i++) {
        checkboxes[i].checked = source.checked;
    }
}

// Function upperCaseID
function upperCaseID() {
    console.log('uppercase', idTask.value); console.log(typeof idTask.value);
    idTask.value = idTask.value.toUpperCase();
    console.log(idTask.value);
}

// Function validate All
function validateAll(task) {
    if(!validateEmpty(task)) {
        return  false;
    }
    if(!validateID(task)) {
        return false;
    }
    if (!validateIDSame(task)) {
        return false;
    }
    else return true;
}

// Function validate iD
function validateID(taskObject) {
    if(taskObject.id.length !== 4) {
        alert('ID must have 4 character!');
        taskObject.id = '';
        return false;
    }

    if(!/^[0-9a-zA-Z]+$/.test(taskObject.id)) {
        alert('ID can only contain letters and numbers, please enter again!');
        return false;
    }
    return true;
}

// Function validate duplicate ID
function validateIDSame(taskObject) {
    for(let item of TaskArr) {
        if(taskObject.id === item.id) {
            alert('This ID already exists, please enter another ID!!');
            return false;
        }
    }
    return true;
}

// Function validate empty
function validateEmpty(taskObject) {
    if(taskObject.id === '') {
        alert('Please enter ID of task!');
        return false
    }
    if(taskObject.des === '') {
        alert('Please enter description of task!');
        return false
    }
    return  true;
}

// Function render
function render(taskObject) {
    let temporaryObject = new TaskList();
    temporaryObject.id = taskObject.id;
    temporaryObject.des = taskObject.des;
    let lengthTask = temporaryObject.des.length;
    if (lengthTask > 10) {
        temporaryObject.des = `${temporaryObject.des.substring(0, 10)}<span id="dots${temporaryObject.id}">...</span><span id="more${temporaryObject.id}" style="display: none">${temporaryObject.des.substring(10)}</span><a id="myBtn${temporaryObject.id}" href="#">Read more</a>`;
    }
    let content = `<tr><td><input type="checkbox" class="check" name="check"></td><td>${temporaryObject.id}</td><td>${temporaryObject.des}</td></tr>`
    tbody.insertAdjacentHTML("beforeend", content);
    readMore(temporaryObject);
}

function readMore(temporaryObject) {
    if (temporaryObject.des.length > 10) {
        document.getElementById(`myBtn${temporaryObject.id}`).addEventListener('click', function () {
            let dots = document.getElementById(`dots${temporaryObject.id}`);
            let moreText = document.getElementById(`more${temporaryObject.id}`);
            if (dots.style.display === "none") {
                dots.style.display = "inline";
                this.innerHTML = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                this.innerHTML = "Read less";
                moreText.style.display = "inline";
            }
        });
    }
}

// Function show thead
function showTHead(arr) {
    let table;
    if (arr.length != 0) {
        table = `<tr><th><input type="checkbox" class="check" onClick="toggle(this)"></th><th>ID</th><th>Task List</th></tr>`;
    } else {
        table = `Nothing to do`;
    }
    thead.innerHTML = table;
}

// Function render All
function renderAll() {
    showTHead(TaskArr);
    for (let item of TaskArr) {
        render(item);
    }
}