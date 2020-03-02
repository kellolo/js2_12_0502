let basket = {
    change(req, basket) {
        let id = +req.params.id;
        let find = this._findItem(basket, id);
        find.quantity += +req.body.delta;
        basket.amount += find.price * +req.body.delta;
        basket.countGoods += 1 * +req.body.delta;
        return {newBasket: basket, name: find.product_name};
    },
    add(req, basket) {
        let newItem = req.body;
        basket.contents.push(newItem);
        basket.amount += req.body.price;
        basket.countGoods += 1;
        return {newBasket: basket, name: req.body.product_name};
    },
    delete(req, basket) {
        let id = +req.params.id;
        let find = this._findItem(basket, id);
        basket.contents.splice(basket.contents.indexOf(find), 1);
        basket.amount -= find.price;
        basket.countGoods -= 1;
        return {newBasket: basket, name: find.product_name};
    },
    _findItem(el, id) {
        return el.contents.find(elem => elem.id_product === id); 
    },
}

module.exports = basket;