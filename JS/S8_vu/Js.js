$(function(){


	 $("#validateForm").validate({
            rules: {
		      	ID: {
			        required: true,
			        number: true,
			        maxlength: 3
			      },
			    name: {
			        required: true,
			        minlength: 3
			      },
			    Actual: {
			        required: true,
			        number: true
			      },
			    Discount: {
			        required: true,
			        number: true
			      },
			    Stock: {
			        required: true,
			        number: true,
			        maxlength: 4
			      }
            },
            messages: { 
                ID: {
			        required: "Chưa nhập ID", 
			        maxlength: "ID phải là số và nhiều nhất 3 ký tự"
			        // number: "Phải là số"
			      },
			    name: {
			        required: "Chưa nhập Tên sản phẩm",			        
			        minlength: "Tên sản phẩm ít nhất 3 ký tự"
			      },
			    Actual: {
			        required: "Chưa nhập Giá",
			        // number: "Phải là số"
			      },
			    Discount: {
			        required: "Chưa nhập Giảm giá",
			        // number: "Phải là số"
			      },
			    Stock: {
			        required: "Chưa nhập Hàng có sẵn",
			        // number: "Phải là số",
			        maxlength: "Không quá 4 ký tự"
			      }
            }
        });

	var operation = "A";
	var selected_index = -1;
	var tbClients = localStorage.getItem("tbClients");
	tbClients = JSON.parse(tbClients);
	if(tbClients == null)
		tbClients = [];
	// debugger
function Add(){ 
	var client = JSON.stringify({ 
		ID : $("#idItems").val(), 
		name : $("#produceName").val(), 
		Actual : formatNumber($("#actualPrice").val()),
		Discount : formatNumber($("#discountPrice").val()), 
		Stock : $("#stockAvailable").val() }); 
	tbClients.push(client); 
	localStorage.setItem("tbClients", JSON.stringify(tbClients)); 
	// alert("Data đã được lưu"); 
	return true; 
}

function Delete(){
	tbClients.splice(selected_index, 1); 
	localStorage.setItem("tbClients", JSON.stringify(tbClients)); 
	// alert("Bạn muốn xóa data này"); 

}

function List(){
	// $("#employeeList tbody").find("tr").remove();
	    for(var i in tbClients){
	        var cli = JSON.parse(tbClients[i]);
	        $("#employeeList tbody").append("<tr>"+
	        	"  <td><input type='checkbox' id='action' alt='Delete"+i+"' class='btnDelete'></td>" + 
	            "  <td>"+cli.ID+"</td>" +
	            "  <td>"+cli.name+"</td>" +
	            "  <td>"+formatNumber(cli.Actual)+"</td>" +
	            "  <td>"+formatNumber(cli.Discount)+"</td>" +
	            "  <td>"+formatNumber(cli.Stock)+"</td>" +
	            "</tr>");
	        // console.log(typeof i);
	    }
	}

	$(".form-signin").bind("submit", function(){
		if (operation == "A")
			return Add();
	});
	List();



	$("#employeeList tbody").on("click", ".btnDelete", function(){     
	// location.reload();
	selected_index = parseInt($(this).attr("alt").replace("Delete", "")); 
	Delete(); 
	// location.reload();
	// List(); 
	});

	$("#Del").bind("click", function(){
		alert("Bạn muốn xóa data này")
		location.reload();
	});

	function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
});
