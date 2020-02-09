'use strict';

function init_table(basket){
 

    let width_table = basket.offsetWidth; 
    basket.table.width = width_table; 

    let header_row = basket.table.insertRow(0); // шапка таблицы 
    let header_cell;
    for ( let i = 0; i < 4; i++){
        header_cell = header_row.insertCell(i); 
        header_cell.className = 'header_cell';
        //header_cell.width = width_table / 5; 
    }

    header_row.cells[0].innerHTML = 'ID';
    header_row.cells[0].width = '10%'; 
    header_row.cells[1].innerHTML = 'Название продукта';
    header_row.cells[1].width = '20%';
    header_row.cells[2].innerHTML = 'Цена';
    header_row.cells[2].width = '10%'; 
    header_row.cells[3].innerHTML = 'Количество';
    //header_row.cells[4].innerHTML = 'Удалить продукт полностью';
    header_row.cells[3].width = '20%';

    basket.div_basket.appendChild(basket.table); 
};