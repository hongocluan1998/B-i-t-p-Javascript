$(document).ready(function() {
   var $getCompanyName = $('#companyName');
   var $getMaxWorkingHours = $('#maxWorkingHours');
   var $getStatus = $("#selectStatus");
   var $getColor = $("#favColor");
   var $getOperatingCompany = $("#operatingCompany");
   var $getZoneList = $("#selectZoneList");
   var $returnZoneList = $("#returnZoneList");
   var $save = $("#save"); 
   var $clickNext = $("#next");
   var $clickBack = $("#back");
   $save.on("click",addCompany);


   addTask();
    $clickNext.on("click",next);
    $clickBack.on("click",back);

    function next() {
        $returnZoneList.append(
         "<option>"+ $getZoneList.val() +"</option>"
        );
        $("#selectZoneList option:selected").remove(); 
    }
    function back() {
        $getZoneList.append(
         "<option>"+ $getZoneList.val() +"</option>"
        );
        $("#returnZoneList option:selected").remove();    


        
        
    }
   function addTask() {
    var dataString = localStorage.getItem("listObj");

    if (dataString) {
     Task = JSON.parse(dataString);
    } else Task = [];
  }

  function addObject(companyName, colorCode, maxWHours, whiteZone, status) {
    this.companyName = companyName;
    this.colorCode = colorCode;
    this.maxWHours = maxWHours;
    this.whiteZone = whiteZone;
    this.status = status;
  }
  function addCompany() {
    var name = "Company " + $getCompanyName.val(); 
    for (let i = 0 ;i< Task.length ; i++) {
        if (($getCompanyName.val() == Task[i].companyName) || (name == Task[i].companyName)) {
            alert("The name you entered is duplicate, please enter it again");
            return false;
        }
    }

   if($getCompanyName.val()=="") {
       alert("Please Input Company Name");
   } else if($getMaxWorkingHours.val() <= 0 || $getMaxWorkingHours.val() =="") {
    alert("Please Input Max Working Hours > 0 ");
   }
 else {
    var whiteZone;
     if ($returnZoneList.length == 14) {
        whiteZone = "All Zones";
     } else {
      whiteZone = $('#returnZoneList > option').length;
         whiteZone += " Zones" 
     }
     if ($getOperatingCompany.is(":checked")) {
         var nameCompany = "Company " + $getCompanyName.val();  
    var object = new addObject(nameCompany,$getColor.val(),$getMaxWorkingHours.val(),whiteZone,$getStatus.val());
      Task.push(object);
      localStorage.setItem("listObj", JSON.stringify(Task));
     } else {
        var object = new addObject($getCompanyName.val(),$getColor.val(),$getMaxWorkingHours.val(),whiteZone,$getStatus.val());
        Task.push(object);
        localStorage.setItem("listObj", JSON.stringify(Task));
  }
  location.reload();
}
  }
});