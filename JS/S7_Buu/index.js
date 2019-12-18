

$(document).ready(function(){
    $("select#chooseFood").change(function(){
        var $show = $('.show');
        $('.value').remove();
        var selectFood = $(this).children("option:selected").val();

        $show.append(
          "<i class='value'>"+  '<span>' + selectFood + 'đ'+'</span>' + "</i>"
        );
        
        $('#getValue').on('click',function(e){
            var $add = $('.add');
            $('.result').remove();
            var number = $('#chooseNumber').val();
            console.log(number);
           
               $add.append(
               '<i class="result">'+ 'Price: '  + number * parseInt(selectFood) + 'đ'+ '</i>'
               );
               
        });
    });
     $('#chooseNumber').on('blur',function(){
          var value = $('#chooseNumber').val();
          if (parseInt(value)< 0 || value =="") {
              alert("Please input value > 0");
          }
     });
});

