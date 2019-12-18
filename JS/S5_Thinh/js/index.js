function validateForm() {

    let arrvalid = [];
    arrvalid.push(validateinput(/[0-9a-zA-Z_-]{5,20}/, 'nameLongin'));
    arrvalid.push(validateinput(/[0-9a-zA-Z!@#$%^&*]{5,20}/, 'inputPassword'));
    arrvalid.push(validaterePasswork());
    arrvalid.push(validateinput(/[a-zA-Z_-ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]{5,20}/,'firstName'));
    arrvalid.push(validateinput(/[a-zA-Z_-ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]{5,20}/,'lastName'));
    arrvalid.push(validateinput(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm, 'inputEmail'));
    arrvalid.push(validateinput(/[0-9]{9,11}/, 'phoneNumber'));
    console.log(arrvalid);
    return (arrvalid.includes(false)) ? false : true;
}
function validateinput(geregex, inputid) {
    let inputObject = document.getElementById(inputid);
    if (!geregex.test(inputObject.value)) {
        inputObject.style.border='1px solid red';
        return false;
    } else {
        inputObject.style.border='1px solid';
        return true;
    }
}
function validaterePasswork() {
    let password = document.getElementById('inputPassword');
    let reInputPassword = document.getElementById('reInputPassword');
    if (password.value == reInputPassword.value) {
        reInputPassword.style.border='1px solid red';
        return true;
    } else {
        reInputPassword.style.border='1px solid';
        return false;
    }
}
