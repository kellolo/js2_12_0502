let cart ={
    change(req, cart){
        let id = +req.params.id
        let find = this._findItem(cart, id)
        find.quantity+=req.body.delta
        return cart
    },
    delete(req, cart){
        let id = +req.params.id
        let find = this._findItem(cart, id)
        cart.contents.splice(indexOf(find), 1)
        return cart
    },
    add(req, cart){
        let newItem = req.body//Обьект товара с фронта
        cart.contents.push(newItem)
        return cart
    },
    _findItem(cart, id){
        return cart.contents.find(el=>el.id_product==id)
    }
}

module.exports