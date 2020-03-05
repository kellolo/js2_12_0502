let basket = {
    change(req, cart) {
        let id = +req.params.id
        let find = this._findItem(cart, id);
        find.quantity += +req.body.delta; 
        return {newCart: cart, name: find.product_name}; 
    },

    add(req, cart) {
        let newItem = req.body;
        cart.contents.push(newItem);
        return {newCart: cart, name: req.body.product_name}; 
    },

    delete(req, cart) {
        let id = +req.params.id
        let find = this._findItem(cart, id);
        cart.contents.splice(cart.contents.indexOf(find), 1);
        return {newCart: cart, name: req.body.product_name}; 
    },

    _findItem(cart, id) {
        return cart.contents.find(item => item.id_product === id)
    } 
}



module.exports = basket