class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
            {id: 5, title: 'Chair', price: 150},
        ];
    }
    sumOfAllProducts() {
        let sumPrice = 0;
        for (let product2 of this.goods){
            sumPrice += product2.price;
        }
        console.log(sumPrice);
    }
    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150'){
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

class Cart {
    constructor(container = '.btn-cart') {
        this.container = container;
        this.goodsInCart = [];
        this.Amount = [];
        this.totalPrice = 0;
    }
}

class GoodsList{
    constructor() {
      this.goods=[];
    }
    fetchGoods() {
      this.goods=[
        { title: 'Notebook', price: 2000},
        { title: 'Mouse', price: 20},
        { title: 'Keyboard', price: 200},
        { title: 'Gamepad', price: 50},
        { title: 'Chair', price: 150},
      ];
    }
}

let list = new ProductsList();
list.render();
list.sumOfAllProducts();