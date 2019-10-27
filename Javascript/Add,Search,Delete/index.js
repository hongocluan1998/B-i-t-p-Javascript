myStorage = window.localStorage;
var url = location.origin;
var SV = {
    create: (stt, mssv, name, gender, khoa, ngay_sinh, dtb) => {
        let sv = { stt: stt, mssv: mssv, name: name, gender: gender, khoa: khoa, ngay_sinh: ngay_sinh, dtb: dtb }
        return sv;
    },
    add: (sv) => {
        if (SV.validate(sv)) return;
        listSV.push(sv);
        myStorage.setItem('listSV', JSON.stringify(listSV));
    },
    remove: (mssv) => {
        listSV = listSV.filter(e => e.mssv !== mssv);
        myStorage.setItem('listSV', JSON.stringify(listSV));
    },
    update: (mssv, data) => {
        listSV.forEach((element, index) => {
            if (element.mssv === mssv) {
                listSV[index].name = data.name;
                listSV[index].gender = data.gender;
                listSV[index].khoa = data.khoa;
                listSV[index].dtb = data.dtb;
                listSV[index].ngay_sinh = data.ngay_sinh;
            }
        });
        myStorage.setItem('listSV', JSON.stringify(listSV));
    },
    getSV: (mssv) => {
        let value;
        listSV.forEach((element, index) => {
            if (element.mssv === mssv) {
                value = listSV[index];
            }
        });
        return value;
    },

    getFromLocal: () => {
        return JSON.parse(myStorage.getItem('listSV'));
    },
    clearAll: () => {
        myStorage.removeItem('listSV');
        myStorage.removeItem('lastIndex');
    },
    validate: (sv) => {
        return (!sv.stt || !sv.mssv || !sv.name || !sv.ngay_sinh || !sv.dtb || !sv.khoa);
    },
    getNewIndex: () => {
        let newIndex = 0;
        newIndex = myStorage.getItem('lastIndex');
        if (newIndex++ >= 0) {
            myStorage.setItem('lastIndex', newIndex)
            return newIndex;
        } else {
            myStorage.setItem('lastIndex', 0);
            return 0;
        }
    },

    // Edit view
    getRows: (list) => {
        let rows = '';
        list.forEach((e) => {
            rows += `<tr class="row"> <td class="col-md-1">${e.stt}</td><td class="col-md-2">${e.mssv}</td><td class="col-md-2">${e.name}</td><td class="col-md-1">${e.gender}</td><td class="col-md-1">${e.khoa}</td><td class="col-md-2">${e.ngay_sinh}</td><td class="col-md-1">${e.dtb}</td><td class="col-md-2"><a href="javascript:editSvByMssv('${e.mssv}');">Sửa </a>|<a href="javascript:deleteSvByMssv('${e.mssv}');"> Xóa </a>|<a href="javascript:viewSvByMssv('${e.mssv}');"> Xem</a></td></tr>`
        });
        return rows;
    },
    getEditRow: (mssv) => {
        let e = SV.getSV(mssv);
        let row = `<td class="col-md-1">${e.stt}</td><td class="col-md-2">${e.mssv}</td><td class="col-md-2"> <input class="form-control form-control-sm" id="txtName" type="text" value="${e.name}"></td><td class="col-md-1"> <select id="txtGender" class="form-control form-control-sm"> <option selected="">Nam</option> <option>Nữ</option> </select></td><td class="col-md-1"> <select id="txtKhoa" class="form-control form-control-sm"> <option selected="">CNTT</option> <option>Cơ khí</option> </select></td><td class="col-md-2"> <input class="form-control form-control-sm" id="txtNgaySinh" type="text" value="${e.ngay_sinh}"></td><td class="col-md-1"> <input class="form-control form-control-sm" id="txtDtb" type="text" value="${e.dtb}"></td><td class="col-md-2"> <button class="btn btn-sm btn-primary" onclick="submitSvByMssv('${e.mssv}');">Submit</button></td>`
        $(`#tableBody > tr:nth-child(${SV.where(mssv)})`).empty();
        $(`#tableBody > tr:nth-child(${SV.where(mssv)})`).append(row);
    },
    where: (mssv) => {
        return listSV.findIndex(i => i.mssv == mssv) + 1;
    }

}

// debug
// SV.clearAll();

var listSV = myStorage.getItem('listSV') === null ? [] : SV.getFromLocal();

function getUniqueString() {
    return [...Array(12)].map(i => (~~(Math.random() * 36)).toString(36)).join('');
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compareValues(key, order = 'asc') {
    return function (a, b) {
        if (!a.hasOwnProperty(key) ||
            !b.hasOwnProperty(key)) {
            return 0;
        }

        const varA = (typeof a[key] === 'string') ?
            a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ?
            b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order == 'desc') ?
                (comparison * -1) : comparison
        );
    };
}

function updateRows(list) {
    if (list.length >= 0) {
        $('#tableBody').empty();
        $('#tableBody').append(SV.getRows(list));
    }
}

function editSvByMssv(mssv) {
    updateRows(listSV);
    SV.getEditRow(mssv);
}

function deleteSvByMssv(mssv) {
    SV.remove(mssv);
    updateRows(listSV);
}

function submitSvByMssv(mssv) {
    var svEdit = {
        name: $('#txtName').val(),
        gender: $('#txtGender').val(),
        khoa: $('#txtKhoa').val(),
        ngay_sinh: $('#txtNgaySinh').val(),
        dtb: $('#txtDtb').val()
    }
    SV.update(mssv, svEdit);
    updateRows(listSV);
}

function viewSvByMssv(mssv) {
    let redirectUrl = url + `/show-sv.html#${mssv}`
    window.open(redirectUrl);
}

function searching() {
    let key = $('#searchBox').val().trim().toLowerCase();
    let result = listSV.filter(x => JSON.stringify(x).toLowerCase().includes(key));
    updateRows(result);
    return result;
}

function sorting() {
    let sortKey = $('#sortTable').val();
    let isDesc = $("input[name='radSort']:checked").val() == 'giam' ? 'desc' : 'asc';
    let result = searching().sort(compareValues(sortKey, isDesc));
    updateRows(result);
}

// for(var i = 0; i < 10; i++){
//     var sv = SV.create(i, getUniqueString(), 'Trần Phú Quy', 'Nam', 'CNTT', '18/02/1998', getRandomInt(1, 10));
//     SV.add(sv); 
// }
updateRows(listSV);

