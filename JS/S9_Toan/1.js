document.addEventListener("DOMContentLoaded", function () {
    let idInput = document.getElementById("id");
    let descriptionInput = document.getElementById("description");
    let btnAdd = document.getElementById("btnAdd");
    let btnClear = document.getElementById("btnClear");
    let tbody = document.getElementById("tbody");
    let arrTask = [];
    let isID =false;
    let messError = document.getElementById("messError");
    let fiterID = /^[A-Z0-9]{4}$/;
    let dataLocal = localStorage.getItem("localTask");
    if (dataLocal) {
        arrTask = JSON.parse(dataLocal);
        render();
    }
    else {
        arrTask = [];
    }
    
    function creatTask(id, description) {
        //console.log("id: "+ id.value);
        // console.log("des: "+ description.value);
        this.id = id;
        this.description = description;
    }
    //Function of Button Add
    btnAdd.onclick = function () {
        //check format ID
        if(!fiterID.test(idInput.value)){
            isID = false;
            idInput.classList.remove("border-secondary");
            idInput.classList.add("border-danger");
            messError.innerHTML = "ID is incorrect format";
           
        }
        else
        {
            idInput.classList.remove("border-danger");
            idInput.classList.add("border-secondary");
            isID =true;
            
        }
        //check ID repeat
        if(isID == true){
            for(let i = 0;i<arrTask.length;i++){
                if(idInput.value== arrTask[i].id){
                    idInput.classList.remove("border-secondary");
                    idInput.classList.add("border-danger");
                    messError.innerHTML = "This ID is already used";
                    isID = false;
                    console.log("trùng id");
                    break;
                }
            }
        }
        //Creat new Task
        if(isID ==true){
            let newTask = new creatTask(idInput.value, descriptionInput.value);
            arrTask.push(newTask);
            localStorage.setItem("localTask", JSON.stringify(arrTask));
            location.reload();
        }
        
    }

    function render() {
        for (let i = 0; i < arrTask.length; i++) {
            let row = tbody.insertRow(-1);
            let delCell = row.insertCell(0);
            let idCell = row.insertCell(1);
            let descriptionCell = row.insertCell(2);

            idCell.innerHTML = arrTask[i].id;
            descriptionCell.innerHTML = arrTask[i].description;
            let btnDel = document.createElement("button");
            btnDel.setAttribute("class", "btn btn-outline-danger btnDel");
            btnDel.setAttribute("id", arrTask[i].id);
            btnDel.innerHTML = "Delete";
            delCell.appendChild(btnDel);
            //Function to delete a Task
            btnDel.onclick = function () {
                arrTask.splice(i,1);
                localStorage.clear()
                localStorage.setItem("localTask", JSON.stringify(arrTask));
                location.reload(); 
            }
        }
    }
   
    //Function of Button Clear
    btnClear.onclick = function () {
        localStorage.clear()
       // render();
        location.reload();
    }
    //UpperCase ID
    idInput.onkeyup = function(){
       idInput.value= idInput.value.toUpperCase();
    }
    //Validate ID
    function checkID(id){
        let fiterID = /^[a-zA-Z0-9]{4}$/;
        if(id==""){
            isID == false;
            alert("bn chua nhap ID");
        }
        else{
            isID ==true;
        }
        
    }
}, false)

