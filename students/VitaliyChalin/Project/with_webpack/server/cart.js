let cart = {
	change(req, cart) {
		let id = +req.params.id
		let find = this._findItem(cart, id)
		find.quant += req.body.delta
		return {newCart: cart, name: find.name}
	},
	add(req, cart) {
		let newItem = req.body
		cart.contents.push(newItem)
		return {newCart: cart, name: req.body.name}
	},
	delete(req, cart) {
		let id = +req.params.id
		let find = this._findItem(cart, id)
		cart.contents.splice(cart.contents.indexOf(find), 1)
		return {newCart: cart, name: find.name}
	},
	_findItem(cart, id) {
		return cart.contents.find(item => item.id === id)
	}
}

module.exports = cart