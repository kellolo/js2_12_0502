// Массив с товарами
const goods = [
    { name: 'Notebook', price: 1000, ids: 1, image: 'https://placehold.it/200x150', cartImage: 'https://placehold.it/100x80' },
    { name: 'Display', price: 200, ids: 2, image: 'https://placehold.it/200x150', cartImage: 'https://placehold.it/100x80' },
    { name: 'Keyboard', price: 20, ids: 3, image: 'https://placehold.it/200x150', cartImage: 'https://placehold.it/100x80' },
    { name: 'Mouse', price: 10, ids: 4, image: 'https://placehold.it/200x150', cartImage: 'https://placehold.it/100x80' },
    { name: 'Phones', price: 25, ids: 5, image: 'https://placehold.it/200x150', cartImage: 'https://placehold.it/100x80' },
    { name: 'Router', price: 30, ids: 6, image: 'https://placehold.it/200x150', cartImage: 'https://placehold.it/100x80' },
    { name: 'USB-camera', price: 18, ids: 7, image: 'https://placehold.it/200x150', cartImage: 'https://placehold.it/100x80' },
    { name: 'Gamepad', price: 24, ids: 8, image: 'https://placehold.it/200x150', cartImage: 'https://placehold.it/100x80' },
]

// Класс товара
class Product {
    constructor (good) {
        this.name = good.name
        this.price = good.price
        this.id = good.ids
        this.image = good.image
    }

    render () {
        return `<div class="product-item" data-id="${this.id}">
                    <img src="${this.image}" alt="Some img">
                        <div class="desc">
                            <h3>${this.name}</h3>
                            <p>${this.price} $</p>
                            <button class="buy-btn"
                            data-id="${this.id}"
                            data-name="${this.name}"
                            data-image="${this.image}"
                            data-price="${this.price}">Купить</button>
                        </div>
                    </div>`
    }
}

// Класс каталога товаров
class Catalog {
    constructor (container) {
        this.goods = []
        this.container = container
    }

    init () {
        this.goods = goods
        this._render ()
    }
    _render () {
        let str = ''
        this.goods.forEach (good => {
            str += new Product(good).render ()
        })
        document.querySelector(this.container).innerHTML = str
    }

}
// Создаем каталог и выводим в div с классом "products"
const catalog = new Catalog('.products')
catalog.init()


// Далее не хатило времени разобраться, нужно будет расписать класс корзины и элементов карзины

class CartProduct {

}

class Cart {

}
