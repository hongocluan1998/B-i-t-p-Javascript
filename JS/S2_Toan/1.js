
function validateInput(){
    var widthResult = document.getElementById("widthInput").value;
    var isWidthResult=false;
    var heightResult = document.getElementById("heightInput").value;
    var isHeightResult=false;
    var colorResult = document.getElementById("color").value;
    var isColorResult = false;

    if(widthResult <= 0 || widthResult >1200)
    {
        alert("Please enter a width greater than 0 and less than 1200");
        isWidthResult = false;
    }
    else{
        isWidthResult=true;
    }

    if(heightResult <= 0 || heightResult >1200)
    {
        alert("Please enter a height greater than 0 and less than 1200");
        isHeightResult = false;
    }
    else{
        isHeightResult=true;
    }
    if(colorResult != "empty")
    {
        isColorResult = true;
    }
    else{
        isColorResult = false;
    }

    if( isWidthResult && isHeightResult && isColorResult)
    {
        document.getElementById("gennerateBtn").disabled = false;
    }
    else{
        document.getElementById("gennerateBtn").disabled = true;
    }
    
}
// Genetate Object
function generateObject(){
   
    var widthResult = document.getElementById("widthInput").value;
    var heightResult = document.getElementById("heightInput").value;
    var colorResult = document.getElementById("color").value;
    

    document.getElementById("result").style.width = widthResult +"px";
    document.getElementById("result").style.height = heightResult + "px";
    document.getElementById("result").style.backgroundColor = colorResult;
    

}
/*
//Khai báo thông số
//var widthResult = document.getElementById("widthInput").value;
var isWidthResult;
//var heightResult = document.getElementById("heightInput").value;
var isHeightResult=false;
// colorResult = document.getElementById("color").value;
var isColorResult = false;

//Validate Width
 function validateWidth(){
    var widthResult = document.getElementById("widthInput").value;
    //var isWidthResult=false;
    if(widthResult <= 0 || widthResult >1200)
    {
        alert("Please enter a width greater than 0 and less than 1200");
       isWidthResult = false;
      
    }
    else{
        isWidthResult=true;
    }
    console.log("trong ham",isWidthResult);
}
console.log("ngoài hàm",isWidthResult);

//Validate height
function validateHeight(){
    var heightResult = document.getElementById("heightInput").value;
    //var isHeightResult=false;
    if(heightResult <= 0 || heightResult >1200)
    {
        alert("Please enter a height greater than 0 and less than 1200");
        isHeightResult = false;
    }
    else{
        isHeightResult=true;
    }
}

//Validate color
function validateColor(){
    var colorResult = document.getElementById("color").value;
   // var isColorResult = false;
    if(colorResult != "empty")
    {
        isColorResult = true;
    }
    else{
        isColorResult = false;
    }
}

//console.log(isColorResult);
 //console.log(isWidthResult);
 //console.log(isHeightResult);
//validate button
if( isWidthResult && isHeightResult && isColorResult)
{
    document.getElementById("gennerateBtn").disabled = false;
}
// else{
//     document.getElementById("gennerateBtn").disabled = true;
// }
*/

