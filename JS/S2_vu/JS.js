function validate(){
	var width = document.getElementById("widthInput").value;
		if (isNaN(width)) {
			alert("Width phải là số")
		}
	var height = document.getElementById("heightInput").value;
		if (isNaN(height)) {
			alert("Height phải là số")
		}
	var color = document.getElementById("colorInput").value;
	if(width && height && color){
    	document.getElementsByTagName("button")[0].disabled = false;
    }
}

function generateObject() {
	var width = document.getElementById("widthInput").value;
    var height = document.getElementById("heightInput").value;
    var color = document.getElementById("colorInput").value;
 
  	document.getElementById("object").style.backgroundColor = document.getElementById("colorInput").value;
  	document.getElementById("object").style.width = document.getElementById("widthInput").value + "px";
  	document.getElementById("object").style.height = document.getElementById("heightInput").value + "px";
 	
 	$("#object").hide();
  	$("#object").slideDown("slow");

}

