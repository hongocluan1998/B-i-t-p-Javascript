$(document).ready(function() {
    $(".clickk1").click(function(){
        var image1 = $(".clickk1").attr("src");
        $("#show").attr("src", image1);
    });
    $(".clickk2").click(function(){
        var image1 = $(".clickk2").attr("src");
        $("#show").attr("src", image1);
    });
    $(".clickk3").click(function(){
        var image1 = $(".clickk3").attr("src");
        $("#show").attr("src", image1);
    })
});