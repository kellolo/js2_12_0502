'use strict';

function clickButtonDelete(event, basket){
    let row = event.target.parentNode.parentNode.rowIndex;
    let id;
    
    if (confirm(`Вы действительно хотите удалить продукт - "${event.target.parentNode.parentNode.cells[1].innerText}"? `)) {
        id = parseInt(event.target.parentNode.parentNode.cells[0].innerText);
        basket.table.deleteRow(row);
        basket.basketArray.splice(row - 1, 1);
        basket.current_row = basket.basketArray.length + 1;

       checkForDeletingResultSum(basket); 
    }
};