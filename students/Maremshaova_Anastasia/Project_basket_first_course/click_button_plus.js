'use strict'; 

function clickButtonPlus(event, basket){
    let count = parseInt(event.target.parentNode.querySelector('.count').innerText);
    count++;
    let row = event.target.parentNode.parentNode.rowIndex;

    event.target.parentNode.querySelector('.count').innerText = count;
    let price = parseInt(event.target.parentNode.parentNode.cells[2].innerText);
    event.target.parentNode.parentNode.cells[2].innerHTML = price + price / (count - 1);

    basket.basketArray[row - 1].count = count; 
    basket.basketArray[row - 1].price = price + price / (count - 1); 

    addResultSumInBasketTable(basket);
}; 