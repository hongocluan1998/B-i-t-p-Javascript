var hash = window.location.hash.split('#')[1]; //hash is mssv
var dataShow;
var isNew = (hash == 'new' || !hash);
if (!isNew) {
    dataShow = SV.getSV(hash);
    fillData(dataShow);
}

function fillData(sv) {
    let temp = 'Nam';
    $('#txtNameShow').val(sv.name);
    $('#boxKhoa').val(sv.khoa);
    $('#txtNgaySinh').val(sv.ngay_sinh);
    $('#txtDtb').val(sv.dtb);
    if (sv.gender === 'Nữ') temp = 'Nu';
    $(`#rad${temp}`).prop('checked', true);
}
function submitFunc() {
    let name = $('#txtNameShow').val();
    let khoa = $('#boxKhoa').val();
    let ngay_sinh = $('#txtNgaySinh').val();
    let dtb = $('#txtDtb').val();
    let gender = $("input[name='radGender']:checked").val();
    let sv = SV.create(listSV.length + 1, getUniqueString(), name, gender, khoa, ngay_sinh, dtb);
    if (isNew) {
        SV.add(sv);
    } else {
        SV.update(hash, sv);
    }
}