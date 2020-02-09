'use strict'; 

function changeProductsInBacketTable(backet){
    for(let i = 1; i < basket.current_row; i++){
        if (basket.table.rows[i].cells[3].count != basket.basketArray[i - 1].count){
            basket.table.rows[i].cells[2].innerHTML = basket.basketArray[i - 1].price; 
            basket.table.rows[i].cells[3].innerHTML = `<div class='count'>${ basket.basketArray[i - 1].count}</div><button class="button-plus"></button><button class="button-minus"></button><button class="button-delete"></button>`;

        addResultSumInBasketTable(basket);
        }
    }
}