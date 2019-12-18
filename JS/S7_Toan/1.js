function tinhTien() {
    let chonMon = document.getElementById("chonMon").value;
    //console.log(chonMon);
    let soLuong = Math.floor(document.getElementById("soLuong").value) ;
   // console.log(soLuong);
    let tongTien = 0;
    if(soLuong <= 0) 
    {
        alert("Vui lòng nhập số lượng lớn hơn hoặc bằng 0");
    }
    else if( isNaN(soLuong)  )
    {
        alert("Vui lòng nhập số");
    }
    else{
        switch (chonMon) {
            case "cafeSua":
                tongTien = 12000 * soLuong;
                break;
            case "cafeDen":
                tongTien = 10000 * soLuong;
                break;
            case "stringDau":
                tongTien = 8000 * soLuong;
                break;
            case "cafeSua":
                traDa = 2000 * soLuong;
                break;
            
        }
    }
    
    console.log("tổng tiền: "+tongTien);
    document.getElementById("tongTien").value = tongTien;
}