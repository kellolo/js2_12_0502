
// Имитация запроса
const goods = [
    {id:1, title: 'Shirt', price: 150, img:'https://via.placeholder.com/200x150'},
    {id:2, title: 'Socks', price: 50, img:'https://via.placeholder.com/200x150' },
    {id:3, title: 'Jacket', price: 350, img:'https://via.placeholder.com/200x150' },
    {id:4, title: 'Shoes', price: 250, img:'https://via.placeholder.com/200x150' },
]

//Общий класс для единицы товара
class GoodItem {
    constructor(good){
        this.id = good.id;
        this.title = good.title;
        this.price = good.price;
        this.img = good.img
    }
    render(){
        return `<div class="product-item">
                    <img src="${this.img}" alt="Some img">
                    <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price} $</p>
                        <button class="buy-btn" data-value="addToCart" data-id="${this.id}">Купить</button>
                    </div>
                </div>`
    }
}


//Общий класс для списка товаров
class GoodList  {
    constructor(container){
        this.container = document.querySelector(container); 
        this.goods=[];
    }
    initListeners(){//Универсальный листенер, будет работать как в каталоге так и вкорзине
       const buttons = [...this.container.querySelectorAll('button')];
        buttons.forEach((button)=>{
            button.addEventListener('click', (evt)=>{
               if(evt.target.dataset.value==='addToCart'){
                   this.addToCart(this.findElement(parseInt(evt.target.dataset.id, 10)))
               }else if(evt.target.dataset.value==='removeToCart'){
                   this.deleteGood(this.findElement(parseInt(evt.target.dataset.id, 10)))
               }
            })
        })
    }
    findElement(goodId){
       return this.goods.find(el=>el.id===goodId)  
    }
    totalCost(){
        let sum = 0;
        this.goods.forEach(good=>sum += good.price)
        return sum
    }
    
    fetchData(){
        this.goods = goods;
        this.render()
    }
    render(){
        let listHtml=''
        this.goods.forEach((good)=>{
            listHtml+=new GoodItem(good).render()
        })
        this.container.innerHTML = listHtml;
        this.initListeners()
        this.totalCost()
    }
}


//Наследуемся от класса GoodList
class GoodCatalog extends GoodList{
    addToCart(goodElem){//Здесь данные должны отправлятся на сервак, но т.к мы этого делать ещё не умеем пусть будет так
        cart.checkQuantity(goodElem)
    }
}


// Создаём каталог товара на базе класса GoodCatalog
const catalog = new GoodCatalog('.products')
catalog.fetchData();



class GoodItemCart {
    constructor(good){
        this.id = good.id;
        this.title = good.title;
        this.price = good.price;
        this.img = good.img;
        this.quantity =good.quantity;
    }
    render(){
        return  `<div class="cart-item" data-id="${this.id}">
                    <div class="product-bio">
                        <img src="${this.img}" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">${this.title}</p>
                            <p class="product-quantity">Quantity: ${this.quantity}</p>
                            <p class="product-single-price">$${this.price} each</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">${this.quantity * this.price}</p>
                        <button class="del-btn" data-id="${this.id}" data-value="removeToCart">&times;</button>
                    </div>
                </div>`
    }
}


//Наследуемся от класса GoodList
class GoodCart extends GoodList {
    constructor(...attrs){ //Собираем все элементы родительского конструктора
        super(attrs);      //Передаём все элементы в новый конструктор
    }
    checkQuantity(goodItem){ // Пока нет backand пусть будет так
        if(this.findElement(goodItem.id)){
            this.goods[this.findIndexGood(goodItem)].quantity++
            this.render()
        }else{
            goodItem.quantity=1
            this.goods.push(goodItem)
            this.render()
        }
    }
    findIndexGood(good){
        return this.goods.findIndex(el=>el===good)
    }
    incQuantity(){}
    decQuantity(){}
    deleteGood(goodRemoveId){
        this.goods.splice(this.findIndexGood(goodRemoveId), 1)
        this.render()
    }
    render(){
        let listHtml=''
        this.goods.forEach((good)=>{
            listHtml+=new GoodItemCart(good).render()
        })
        this.container.innerHTML = listHtml;
        this.initListeners()
    }
}
//Создаём корзину на базе класса GoodCart
const cart = new GoodCart('.cart-block');

document.querySelector('.btn-cart').addEventListener('click', () => {
    document.querySelector('.cart-block').classList.toggle('invisible');
});