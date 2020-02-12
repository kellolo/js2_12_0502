'use strict';

let buttons_buy = document.querySelectorAll('.button-buy');

let basket = {
    button_basket: document.querySelector('.button-basket'),
    basketArray: [],
    flag: true,
    div_basket: document.querySelector('.basket'),
    table: document.createElement('table'),
    current_row: 1
};

buttons_buy.forEach(function (button_buy) {
    button_buy.addEventListener('click', function (event) {

        if (!basket.flag) {
            basket.div_basket.style.display = 'none';
        }

        //basket.flag = !basket.flag; 
        let id = parseInt(event.target.id);
        let price = parseInt(event.target.dataset.price);
        let name = event.target.dataset.name;

        alert(`Товар "${name}" добавлен в корзину!`);
        addProductInBasketArray(id, price, name, basket.basketArray); //заполнение массива новыми добавленными продуктами

    })
});

basket.button_basket.addEventListener('click', function (event) {

        if (basket.flag) {
            this.style.backgroundColor = 'orange'; 
            this.style.color = 'white'; 
            addProductsInBasketTable(basket); //отображение продуктов в корзине
            basket.div_basket.style.display = 'block';
            let buttons_plus = document.querySelectorAll('.button-plus');
            let buttons_minus = document.querySelectorAll('.button-minus');
            let buttons_delete = document.querySelectorAll('.button-delete');


            buttons_plus.forEach(function (button_plus) {
                button_plus.addEventListener('click', function (event) {
                    clickButtonPlus(event, basket); 
                })
            });

            buttons_minus.forEach(function (button_minus) {
                button_minus.addEventListener('click', function (event) {
                    clickButtonMinus(event, basket); 
                })
            });

            buttons_delete.forEach(function (button_delete){
                button_delete.addEventListener('click', function(event){
                    clickButtonDelete(event, basket);
                })
            });



        } else {
            this.style.backgroundColor = 'white'; 
            this.style.color = 'brown'; 
            basket.div_basket.style.display = 'none';
        }
        basket.flag = !basket.flag;

    });

init_table(basket); //отрисовка шапки таблицы корзины