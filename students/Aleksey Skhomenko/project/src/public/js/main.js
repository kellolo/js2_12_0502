let catalog = {
    items: [],
    container: '.products',
    cart: null,
    json_path: 'https://raw.githubusercontent.com/awesomesk1ll/js-level-1/develop/shop/json/response.json',

    init() {
        this.items = [];
        this.cart = cart;

        this.fetchData(this.json_path)
            .finally(() => {
                this._extendData();
                this._render();
            })

        document.querySelector(this.container).addEventListener('click', (evt) => {
            if (evt.target.name == 'buy') {
                let product = evt.target.dataset;
                let item = this.items.find(x => x.product_id === product.id);
                if (this.cart.items.indexOf(item) < 0) this.cart.items.push(item);
                item.quantity++;
                this.cart._render();
                console.log(`${product.name} добавлен в корзину.`);
            }
        })
    },
    fetchData(url) {
        return fetch(url)
            .then(data => data.json())
            .then((data2) => {
                this.items = data2
            })
    },
    _extendData() {
        this.items.forEach(item => {
            this.extendProduct(item);
        })
    },
    extendProduct(obj) {
        obj.quantity = 0;
        obj.catalog_template = function() {
            return `
                        <div class="product-item" data-id="${this.product_id}">
                            <img src="${this.img+'?225x311'}" alt="${this.product_name}">
                            <div class="desc">
                                <h3>${this.product_name}</h3>
                                <p>${this.price}$</p>
                                <button name="buy" class="btn"
                                    data-id="${this.product_id}"
                                    data-name="${this.product_name}"
                                    data-price="${this.price}">
                                    Купить
                                </button>
                            </div>
                        </div>
                    `
        };
        obj.cart_template = function() {
            return `
                        <div class="cart-item" data-id="${this.product_id}">
                            <img src="${this.img+'?69x93'}" alt="${this.product_name}">
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
        };
    },
    _render() {
        let container = document.querySelector(this.container);
        let domString = '';

        this.items.forEach(item => {
            domString += item.catalog_template();
        })
        container.innerHTML = domString;
    }
};

let cart = {
    items: [],
    container: '.cart-block',
    btn: '.btn-cart',

    init() {
        this._render();
        document.querySelector(this.btn).addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        });
        document.querySelector(this.container).addEventListener('change', (evt) => {
            if (evt.target.name == "remove" || evt.target.name == "count-modifier" || evt.target.name == "quantity") {
                let ds = evt.target.dataset;
                let item = this.items.find(x => x.product_id === ds.id);
                if (evt.target.name == 'quantity') {
                    item.quantity = +evt.target.value;
                    console.log(item.quantity == 0 ? `${item.product_name} удалён из корзины.` :
                        `Количество ${item.product_name} теперь равно ${item.quantity}.`);
                }

                if (item.quantity == 0) this.items.splice(this.items.indexOf(item), 1);
                this._render();
            }
            if (evt.target.name == "wipe") this.wipe();
        })
        document.querySelector(this.container).addEventListener('click', (evt) => {
            if (evt.target.name == "remove" || evt.target.name == "count-modifier" || evt.target.name == "quantity") {
                let ds = evt.target.dataset;
                let item = this.items.find(x => x.product_id === ds.id);
                if (evt.target.name == 'remove') {
                    item.quantity = 0;
                    this._render();
                    console.log(`${ds.name} удалён из корзины.`);
                }
                if (evt.target.name == 'count-modifier') {
                    item.quantity += +ds.modify;
                    console.log(item.quantity == 0 ? `${item.product_name} удалён из корзины.` :
                        `Количество ${item.product_name} ${ds.modify == "+1" ? "увеличено" : "уменьшено"} и теперь равно ${item.quantity}.`);
                }

                if (item.quantity == 0) this.items.splice(this.items.indexOf(item), 1);

                if (evt.target.name == 'quantity')
                    evt.target.select();
                else
                    this._render();
            }
            if (evt.target.name == "wipe") this.wipe();
        })
    },
    _get_price(items) {
        return items.reduce((a, b) => +a + +b["price"] * b["quantity"], 0)
    },
    _get_count(items) {
        return items.reduce((a, b) => +a + +b["quantity"], 0)
    },
    _do_wipe(items) {
        return items.reduce((a, b) => b["quantity"] = 0, 0)
    },
    _prepare(domstroke) {
        if (this.items.length == 0)
            return '<p>Корзина пуста.</p>';
        else
            return domstroke += `<hr>
						Товаров в корзине: ${this._get_count(this.items)} (стаков: ${this.items.length})<br>
						Общая стоимость: ${this._get_price(this.items)}$
						<button name="wipe" class="btn">Очистить корзину</button>
						`; //костыльчик
    },
    _render() {
        let container = document.querySelector(this.container);
        let domString = '';

        this.items.forEach(item => {
            domString += item.cart_template();
        });

        container.innerHTML = this._prepare(domString);
    },
    wipe() {
        this._do_wipe(this.items)
        this.items.splice(0, this.items.length);
        this._render();
        console.log('Корзина очищена.');
    }
};

cart.init();
catalog.init();