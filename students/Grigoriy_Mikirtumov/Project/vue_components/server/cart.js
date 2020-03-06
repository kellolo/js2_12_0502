let cart = {
    change(req, cart) {
        let id = +req.params.id
        let find = this._findItem(cart, id)
        //console.log(req)
        find.quantity += +req.body.delta
        return {newCart: cart, name: find.product_name}
    },
    add(req, cart) {
        let newItem = req.body //req.body - объект товара с фронта
        cart.contents.push(newItem)
        return {newCart: cart, name: req.body.product_name}
    },
    delete(req, cart) {
        let id = +req.params.id
        let find = this._findItem(cart, id)
        cart.contents.splice(cart.contents.indexOf(find), 1)
        return {newCart: cart, name: find.product_name}
    },
    _findItem(cart, id) {
        return cart.contents.find(item => item.id_product === id)
    }
}

module.exports = cart
