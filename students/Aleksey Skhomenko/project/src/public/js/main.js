const API = 'https://raw.githubusercontent.com/awesomesk1ll/js2_12_0502/master/students/Aleksey%20Skhomenko/project/src/public/json'

class ItemList {
    constructor(path, container) {
        this.items = []
        this.url = path
        this.container = container
        this._init()
    }
    _init() {
        return false
    }
    getData(url) {
        return fetch(url)
            .then(d => d.json())
    }
    _render() {
        let DOM_target = document.querySelector(this.container)
        let htmlString = ''
        if (this.items.length > 0)
            this.items.forEach((item) => {
                let t = new proto[this.constructor.name](item)
                t.quantity = item.quantity
                htmlString += t.render()
            })
        if (this.price != undefined && this.quantity != undefined) {
            if (this.items.length > 0) {
                htmlString += `<hr>
                Товаров в корзине: ${this.quantity} (стаков: ${this.items.length})<br>
                Общая стоимость: ${this.price}$
                <button name="wipe" class="btn">Очистить корзину</button>
                `
            } else {
                htmlString = `<p>Корзина пуста.</p>`
            }
        }
        DOM_target.innerHTML = htmlString
    }
}

class Catalog extends ItemList {
    constructor(cart, url = '/catalogDataResponse.json', container = '.products') {
        super(url, container)
        this.cart = cart
    }
    _init() {
        this.getData(API + this.url)
            .then(parsedData => { this.items = parsedData })
            .then(() => { this._render() })
            .finally(() => { this._addListeners() })
    }

    _addListeners() {
        document.querySelector(this.container).addEventListener('click', (evt) => {
            if (evt.target.name == 'buy') {
                this.cart.addProduct(evt.target)
                console.log(`${evt.target.dataset.name} добавлен в корзину.`)
            }
        })
    }
}

class Cart extends ItemList {
    constructor(url = '/cartDataResponse.json', container = '.cart-block', btn = '.btn-cart') {
        super(url, container)
        this.price = 0
        this.quantity = 0
        this.btn = btn
    }

    _init() {
        this.getData(API + this.url)
            .then(parsedData => {
                this.items = parsedData.items
                this.price = parsedData.price
                this.quantity = parsedData.quantity
            })
            .then(() => { this._render() })
            .finally(() => {
                this._addListeners()
            })
    }

    _addListeners() {
        //кнопка скрытия и показа корзины
        document.querySelector(this.btn).addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible')
        })
        //кнопки удаления товара (добавляется один раз)
        document.querySelector(this.container).addEventListener('click', (evt) => {
            if (evt.target.name == "remove") this.removeProduct(evt.target, true)
            if (evt.target.name == "wipe") this.wipe()
            if (evt.target.name == "count-modifier") this.setCount(evt.target)

        })
        //при изменении количества товаров через прямой ввод в input
        document.querySelector(this.container).addEventListener('change', (evt) => {
            if (evt.target.name == 'quantity') this.setCount(evt.target)
        })
    }
    addProduct(prod) {
        let find = this.items.find(x => x.product_id === prod.dataset.id)
        if (!find) {
            this.items.push(new CartItem({
                img: prod.dataset.img,
                product_name: prod.dataset.name,
                price: +prod.dataset.price,
                product_id: prod.dataset.id,
                quantity: 1
            }))
        } else {
            find.quantity++
        }
        this._calculate()
        this._render()

    }
    //удаляет одну единицу товара в корзине, если второй параметр true, то удаляет всю связку этого товара
    removeProduct(prod, all = false) {
        let find = this.items.find(item => item.product_id === prod.dataset.id)
        if (all || find.quantity <= 1) {
            this.items.splice(this.items.indexOf(find), 1)
        } else {
            find.quantity--
        }
        this._calculate()
        this._render()
    }
    //прописывает количество товару в корзине, используется на кнопках (+|- 1) и для инпута (любое число)
    setCount(elem) {
        let item = this.items.find(x => x.product_id === elem.dataset.id)
        if (elem.name == "quantity") {
            item.quantity = +elem.value
            console.log(item.quantity == 0 ? `${item.product_name} удалён из корзины.` :
                `Количество ${item.product_name} теперь равно ${item.quantity}.`)
        } else if (elem.name == "count-modifier") {
            item.quantity += +elem.dataset.modify
            console.log(item.quantity == 0 ? `${item.product_name} удалён из корзины.` :
                `Количество ${item.product_name} ${elem.dataset.modify == "+1" ? "увеличено" : "уменьшено"} и теперь равно ${item.quantity}.`)
        }
        if (item.quantity == 0) this.items.splice(this.items.indexOf(item), 1)
        this._calculate()
        this._render()
    }
    //пересчитывает стоимость всех товаров в корзине и количество всех товаров (колво связок this.items.length)
    _calculate() {
        let p = 0, q = 0
        this.items.forEach(elem => {
            p += elem.price * elem.quantity
            q += elem.quantity
        })
        this.price = p
        this.quantity = q
    }
    //стирает данные в корзине
    wipe() {
        delete this.items
        this.items = []
        this._calculate()
        this._render()
        console.log('Корзина очищена.')
    }
}

class Item {
    constructor(obj) {
        this.product_name = obj.product_name
        this.price = obj.price
        this.product_id = obj.product_id
        this.img = obj.img
    }
    render() {
        return `
            <div class="product-item" data-id="${this.product_id}">
                <img src="${this.img + '?225x311'}" alt="${this.product_name}">
                <div class="desc">
                    <h3>${this.product_name}</h3>
                    <p>${this.price}$</p>
                    <button name="buy" class="btn"
                        data-id="${this.product_id}"
                        data-name="${this.product_name}"
                        data-price="${this.price}"
                        data-img="${this.img}">
                        Купить
                    </button>
                </div>
            </div>
        `
    }
}

class CatalogItem extends Item { }

class CartItem extends Item {
    constructor(obj) {
        super(obj)
        this.quantity = 1
    }

    render() {
        return `
            <div class="cart-item" data-id="${this.product_id}">
                <img src="${this.img + '?69x93'}" alt="${this.product_name}">
                <div class="product-bio">
                    <p class="cart-item-name">${this.product_name}</p>
                    <p class="product-price right-block"> ${this.price}$</p>
                    <div class="quantity">
                        <button name="count-modifier" class="btn" data-id="${this.product_id}" data-modify="-1">-</button>
                        <input name="quantity" type="number" onclick="event.target.select()" data-id="${this.product_id}" value="${this.quantity}">
                        <button name="count-modifier" class="btn" data-id="${this.product_id}" data-modify="+1">+</button>
                    </div><br>
                <button name="remove" class="btn"
                    data-id="${this.product_id}"
                    data-name="${this.product_name}"
                    data-price="${this.price}">
                </button>
                </div>
            </div>
        `
    }
}

let proto = {
    Cart: CartItem,
    Catalog: CatalogItem
}

let cart = new Cart()
let catalog = new Catalog(cart)

console.timeEnd('Loading')