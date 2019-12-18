function LocalStore() {
    function getData(key) {
        let data = localStorage.getItem(key);
        if (data) {
            data = JSON.parse(data)
        } else {
            data = [];
        }
        return data;
    }

    function setData(key, data) {
        data = JSON.stringify(data);
        localStorage.setItem(key, data);
    }
    return {
        getData: getData,
        setData: setData
    }
}
(function Edit() {
    const Store = new LocalStore;

    const companyName = document.getElementById('companyName');
    const operatingCompany = document.getElementById('operatingCompany');
    const maximumWorking = document.getElementById('maximumWorking');
    const status = document.getElementById('status');
    const clorCode = document.getElementById('clorCode');
    const zoneList = document.getElementById('zoneList');
    const addZoneIterm = document.getElementById('addZoneIterm');
    const removeZoneIterm = document.getElementById('removeZoneIterm');
    const whiltelistedZones = document.getElementById('whiltelistedZones');
    const saveEdit = document.getElementById('saveEdit');
    const undoEdit = document.getElementById('undoEdit');

    const zones = ['Zone1', 'Zone2', 'Zone3', 'Zone4', 'Zone5', 'Zone6', 'Zone7', 'Zone8', 'Zone9']
    let datatable = Store.getData('listCompany');
    let whiltes = [];
    let indexRow = parseInt(Store.getData('edit'));

    function validateInput() {
        let valid = [];
        if (companyName.value.length < 1) {
            companyName.style.border = '1px solid red';
            valid.push(false);
        } else {
            companyName.style.border = '1px solid black';
            valid.push(true);
        }
        if (maximumWorking.value.length < 1) {
            maximumWorking.style.border = '1px solid red';
            valid.push(false);
        } else {
            maximumWorking.style.border = '1px solid black';
            valid.push(true);
        }
        if (whiltes.length < 1) {
            whiltelistedZones.style.border = '1px solid red';
            valid.push(false);
        } else {
            whiltelistedZones.style.border = '1px solid black';
            valid.push(true);
        }
        return (valid.includes(false) ? false : true);

    }

    function addNewCompany(index) {
        whiltes = [];
        renderList(zones, zoneList);
        renderList(whiltes, whiltelistedZones);
        console.log(index);


    }

    function editACompany(index) {
        let newZones = zones;
        whiltes = datatable[index].whiltes;
        companyName.value = datatable[index].name;
        maximumWorking.value = datatable[index].maxWorking;
        status.selectedOptions = datatable[index].status;
        clorCode.value=datatable[index].color;
        companyName.disabled = true;
        status.disabled = true;

        newZones = newZones.filter((zone, index) => {
            return !whiltes.includes(zone);
        })
        renderList(newZones, zoneList);
        renderList(whiltes, whiltelistedZones);
    }

    function render() {
        datatable = Store.getData('listCompany');
        let dataLength = parseInt(datatable.length);
        if (indexRow == dataLength) {
            operatingCompany.checked = false;
            addNewCompany(indexRow)
        } else {
            operatingCompany.checked = true;
            editACompany(indexRow);
        }
    }

    function renderList(zones, select) {
        select.innerHTML = '';
        zones.forEach((zone) => {
            let node = document.createElement('option');
            node.innerHTML = zone;
            node.value = zone;
            select.appendChild(node);
        })
    }

    function addZones() {
        let newZones = zones;
        let options = [...zoneList.selectedOptions];

        options = options.map((option) => {
            if (!whiltes.includes(option.value)) {
                whiltes.push(option.value)
            }
            return option.value;
        })
        newZones = newZones.filter((zone, index) => {
            return !whiltes.includes(zone);
        })
        renderList(newZones, zoneList);
        renderList(whiltes, whiltelistedZones);
    }

    function removeZone() {
        console.dir(whiltelistedZones);
        let newZones = zones;
        let options = [...whiltelistedZones.selectedOptions];

        options = options.map((option) => {
            return option.value;
        })
        whiltes = whiltes.filter((whilte) => {
            return !options.includes(whilte);
        })
        newZones = newZones.filter((zone, index) => {
            return !whiltes.includes(zone);
        })

        renderList(newZones, zoneList);
        renderList(whiltes, whiltelistedZones);
    }

    function saveEditFnc() {
        if (validateInput()) {
            let company = {
                name: companyName.value,
                color: clorCode.value,
                maxWorking: maximumWorking.value,
                whiltes: whiltes,
                status: status.value
            }
            if (datatable[indexRow]) {
                datatable[indexRow] = company;
            } else {
                datatable.push(company);
            }
            Store.setData('listCompany', datatable);
            (!operatingCompany.checked) ? alert('Add value done'): alert('Edit value done');

        } else {
            alert(' Điển đủ tất cả các mục !');
        }


    }
    function undoEditFnc(){
        render();
        console.log(this);
        
        
    }
    function init() {
        render();
        addZoneIterm.addEventListener('click', addZones);
        removeZoneIterm.addEventListener('click', removeZone);
        saveEdit.addEventListener('click', saveEditFnc);
        undoEdit.addEventListener('click', undoEditFnc);
    }
    init()


})();