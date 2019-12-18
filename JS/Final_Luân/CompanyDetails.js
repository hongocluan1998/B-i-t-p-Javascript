// Declare variable
var myStorege = window.localStorage;
var companyName = document.getElementById("name");
var hoursWork = document.getElementById("hoursWork");
var statusValue = document.getElementById("status");
var colorCode = document.getElementById("color");
var zoneList = document.getElementById("zoneList");
var whiteListed = document.getElementById("whiteListed");

var arrObj = myStorege.getItem("listObj") === null ? [] :
    JSON.parse(myStorege.getItem("listObj"));

            // Variable event
var right = document.getElementById("right");
var left = document.getElementById("left");
var save = document.getElementById("save");
var canCel = document.getElementById("cancel");


// Event registration
right.addEventListener("click", turnRight);
left.addEventListener("click", turnLeft);
save.addEventListener("click", createUser);


// Event handler function()
function turnRight() 
{   
    var option = document.createElement("option");
    option.value = zoneList.value;
    option.text = zoneList.value;
    whiteListed.add(option);
}

function turnLeft()
{
    whiteListed.remove(whiteListed.selectedIndex);
}

function createUser()
{   var companyName = document.getElementById("name").value;
    var hoursWork = document.getElementById("hoursWork").value;
    var statusValue = document.getElementById("status").value;
    var colorCode = document.getElementById("color").value;
    var temp = document.getElementById("whiteListed").options;
    if(companyName == "" || 
        hoursWork == "" ||
        statusValue == "" ||
        colorCode == "")
        {
            alert("Vui lòng nhập đẩy đủ các thông số bắt buộc !");
        }
    else
    {
        var arrList = [];
        for(var i = 0; i < temp.length; i++)
        {
            arrList.push(temp[i].value);
        }
        var zone = parseInt(arrList.length);
        var obj = { companyName, hoursWork, statusValue, colorCode, zone};
        arrObj.push(obj);
        myStorege.setItem("listObj", JSON.stringify(arrObj));
        alert("Thành công");
    }
}
