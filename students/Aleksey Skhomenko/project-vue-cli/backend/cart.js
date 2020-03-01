let cart = {
    change(req, cart) {
        let id = req.params.id
        let find = this._findItem(cart, id)
        find.quantity = req.body.set
        return {newCart: cart, name: find.product_name}
    },
    add(req, cart) {
        let newItem = req.body //req.body - объект товара с фронта
        cart.items.push(newItem)
        return {newCart: cart, name: req.body.product_name}
    },
    delete(req, cart) {
        let id = req.params.id
        if (id === 'all') {
            return {newCart: { "items": [] }, name: "all products"}
        } else {
            let find = this._findItem(cart, id)
            cart.items.splice(cart.items.indexOf(find), 1)
            return {newCart: cart, name: find.product_name}
        }
    },
    _findItem(cart, id) {
        return cart.items.find(item => item.product_id === id)
    }
}

module.exports = cart
