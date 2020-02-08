function checkForDeletingResultSum(basket){
    if (basket.table.rows.length === 1){
        basket.div_basket.removeChild(document.querySelector('.div_result'));  
    }
    else{
        addResultSumInBasketTable(basket); 
    }
};