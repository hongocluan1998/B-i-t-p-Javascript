// Declare variable
var myStorege = window.localStorage;
var table = document.getElementById("table");
var arrObj = JSON.parse(myStorege.getItem("listObj"));
var showAll = document.getElementById("showAll");
var view = document.getElementById("view");
var deleteSll = document.getElementById("deleteSll");

// Event registration
view.addEventListener("click", show);
deleteSll.addEventListener("click", deleteAll);


// Event handler function()
function show()
{  
    showAll.innerHTML = "";
    for(var i = 0; i < arrObj.length; i++)
    {
        var temp = arrObj[i];
        var x = 
        `
        <tr>
            <td> <input type="checkbox"> </td>
            <td>${temp.companyName}</td>
            <td><input type="color" value="${temp.colorCode}"></td>
            <td>${temp.hoursWork}</td>
            <td>${temp.zone} Zone</td>
            <td>${temp.statusValue}</td>
            <td><button><i class="fa fa-gear"></i></button>
                <button onclick="deleteRows(${i})"><i class="fa fa-trash"></i></button>
            </td>
        </tr>
        `
        showAll.innerHTML += x;
    }
}

function deleteRows(i)
{
    arrObj = arrObj.filter(result => result != arrObj[i]);
    show();
    
}

function deleteAll()
{
    var arr1 = [];
    for(var i = 0; i < arrObj.length; i++)
    {
        var x = showAll.rows[i].cells[i].children[i].checked;
        if(x == true)
        {
            arrObj = arrObj.filter(result => result != arrObj[i]);
            show();
        }
    }
    
}