'use strict';

function addProductInBasketArray(id, price, name_product, basketArray){

    let product = {};
    let flag = false; 

    product.id = id;
    product.name = name_product;
    product.price = price;
    product.count = 1; 

    for (let i = 0; i < basketArray.length; i++){
        if (product.id === basketArray[i].id){
            basketArray[i].count++;
            basketArray[i].price =  basketArray[i].count * product.price;
            flag = true; 
            break;
        }
    }

    if (!flag){
        basketArray.push(product); 
    }

    addResultSumInBasketTable(basket); 
};