'use strict'; 

function addProductsInBasketTable(basket){

    let header_row, header_cell; 

    for (let i = basket.current_row; i <= basket.basketArray.length; i++){
        header_row = basket.table.insertRow(i);
        for ( let j = 0; j < 4; j++){
            header_cell = header_row.insertCell(j);
            header_cell.className = 'cell';
        }
        header_row.cells[0].innerHTML = basket.basketArray[i - 1].id;
        header_row.cells[1].innerHTML = basket.basketArray[i - 1].name; 
        header_row.cells[2].innerHTML = basket.basketArray[i - 1].price;
        header_row.cells[3].innerHTML = `<div class='count'>${ basket.basketArray[i - 1].count}</div>
        <button class="button-plus"></button><button class="button-minus"></button><button class="button-delete"></button>`;
        //header_row.cells[4].innerHTML = `<div class='button-delete'></div>`;
    }

    basket.current_row = basket.basketArray.length + 1; 

    //проверка на изменение данных(увеличилось количество товара, который был добавлен ранее)
    changeProductsInBacketTable(basket); 


}