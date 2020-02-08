'use strict';

function addResultSumInBasketTable(basket){

    let sum = 0;

    for (let i = 0; i < basket.basketArray.length; i++){
        sum += basket.basketArray[i].price; 
    }

    if (document.querySelector('.div_result') === null){
        basket.table.insertAdjacentHTML('afterend', `<div class='div_result'>ИТОГО:     ${sum}  рублей</div>`);
    }
    else{
        document.querySelector('.div_result').innerText = `ИТОГО:     ${sum}  ${rubleDecline(sum)}`;
    }

};



function rubleDecline(sum){

        let count_10 = sum % 10;
        let count_100 = sum % 100;

        if (count_10 > 4 || count_10 == 0 || (count_100 > 10 && count_100 < 15)) {
            return 'рублей';
        } else if (count_10 == 1) {
            return 'рубль';
        } else {
            return 'рубля';
        }
}