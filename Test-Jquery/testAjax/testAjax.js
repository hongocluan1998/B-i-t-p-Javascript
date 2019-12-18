
// $(document).ready(function(){
//     callApi();
// });
// function callApi()
// {
//     var str = 1;
//     var http = new XMLHttpRequest();
//     http.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200)
//         {
//             console.log(this.responseText);
//             var show = JSON.parse(this.responseText);
//             document.getElementById("callApi").innerHTML = show.id;
//         }
//     };
//     http.open("GET", "http://localhost:1998/user/" + str, true);
//     http.send();
// };

const URL = "http://localhost:1998/";
$(document).ready(function(){
    $("#clickTest").click(function(){
        callApi("GET","user", true, null);
    });
});
function callApi(method = "GET", point, isAsync, data)
{
    
    var http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
            // var show = JSON.parse(this.responseText);
            // console.log(show);
            // var temp = "";
            // show.forEach(element => {
            //     temp += element.id + " " + element.name + "<br/>";
            // });
            // document.getElementById("callApi").innerHTML = temp;
            document.getElementById("callApi").innerHTML = this.responseText;
        }
    };
    http.open(method,URL+point, isAsync);
    if(data != null)
    {
        http.setRequestHeader()
    }
    http.send(data);
};