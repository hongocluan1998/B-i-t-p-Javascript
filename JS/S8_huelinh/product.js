
$(document).ready(function () {
    $('#formInput').validate({
        rules:{
            id: {
                required: true,
                number: true,
                minlength: 2,
                maxlength: 10
            },
            name: {
                required: true,
                minlength: 3
            },
            price: {
                required: true,
                number: true,
            },
            discount: {
                required: true,
                number: true,
            },
            stock: {
                number: true
            }
        },
        messages: {
            id: {
                required: "Please enter ID of product",
                number: "ID must be a number!",
                minlength: "ID must be at least 2 characters!",
                maxlength: "ID no more than 10 characters!"
            },
            name: {
                required: "Please enter name of product!",
                minlength: "Name must be at least 3 characters!"
            },
            price: {
                required: "Please enter price of product!",
                number: "Price must be a number!"
            },
            discount: {
                required: "Please enter discount of product!",
                number: "Discount must be a number!"
            },
            stock: {
                number: "Stock must be a number!"
            }
        }
    });

    // Declare button
    let $add = $('#add');
    let $del = $('#del');
    let $saveBtn = $("#save");


    // Declare table
    let table = document.getElementById('table');

    // Declare form
    let $form = $('#formInput');

    // Declare form Input
    let $idProduct = $('#id');
    let $nameProduct = $('#name');
    let $price = $('#price');
    let $discount = $('#discount');
    let $stock = $('#stock');

    // Event
    $add.on('click', function () {
        $form[0].reset();
        $("#formInput").clearValidation();

    })

    $saveBtn.on("click", addProduct);
    $del.on('click', delData);

    // Create array contain value of product
    let arrProduct = [];

    // Check data of localstorage
    let dataString = localStorage.getItem('listProduct');
    if(dataString) {
        arrProduct = JSON.parse(dataString)
    } else arrProduct = [];

    // Constructor function of product
    function Product(id, name, price, dis, stock) {
        this.idProduct = id;
        this.nameProduct = name;
        this.price = price;
        this.dis = dis;
        this.stock = stock;
    }

    // Function reset validate message
    $.fn.clearValidation = function(){
        let v = $(this).validate();
        $('[name]',this).each(function(){
            v.successList.push(this);
            v.showErrors();});
        v.resetForm();
        v.reset();
    };

    // block enter number < 0
    $idProduct.keyup(function(){
        if ($(this).val() < 0){
            $(this).val('');
        }
    });

    $price.keyup(function(){
        if ($(this).val() < 0){
            $(this).val('');
        }
    });

    $discount.keyup(function(){
        if ($(this).val() < 0){
            $(this).val('');
        }
    });

    $stock.keyup(function(){
        if ($(this).val() < 0){
            $(this).val('');
        }
    });

    function addProduct() {
        for(let item of arrProduct) {
            if($idProduct.val() == item.idProduct) {
                alert('This ID already exists, please enter again!');
                return false;
            }
        }

       if($idProduct.attr("aria-invalid") == 'false'
           && $nameProduct.attr("aria-invalid") == 'false'
           && $price.attr("aria-invalid") == 'false'
           && $discount.attr("aria-invalid") == 'false'
           && $stock.attr("aria-invalid") == 'false'){
           // get value
           let idValue = $idProduct.val();
           let nameValue = $nameProduct.val();
           let priceValue = $price.val();
           let discountValue = $discount.val();
           let stockValue = $stock.val();
           // Get product object of the input
           let product = new Product(idValue, nameValue, priceValue, discountValue, stockValue);
           console.log(product);
           // Add product to array
           arrProduct.push(product)
           // render
           renderData(arrProduct[arrProduct.length - 1]);
           // Add to localstorage
           localStorage.setItem('listProduct', JSON.stringify(arrProduct));
        }
   }

    function renderData(item) {
        let tr = document.createElement('tr');
        tr.setAttribute('id', `data`);
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');

        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('name', `product`);

        td1.appendChild(input);
        td2.innerText = item.idProduct;
        td3.innerText = item.nameProduct;
        td4.innerText = item.price;
        td5.innerText = item.dis;
        td6.innerText = item.stock;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        console.log('tr....', tr);
        table.appendChild(tr);
        console.log('table...', table);
    }

    function renderAll() {
        for(let product of arrProduct) {
            renderData(product);
        }
    }

    function delData(){
        let tr = table.children;
        console.log('show tr.length...', tr.length);
        for(let i = 0; i < tr.length; i++) {
            while ( tr[i] && tr[i].children[0].children[0].checked) {
                arrProduct.splice(i-1, 1);
                localStorage.setItem('listProduct', JSON.stringify(arrProduct));
                table.removeChild(tr[i]);
            }
        }
    }

    renderAll();
});

