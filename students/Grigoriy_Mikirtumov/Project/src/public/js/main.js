// Запрос к бд

const URL_CATALOG = 'https://raw.githubusercontent.com/GrigoRASH6000v/js2_12_0502/master/students/Grigoriy_Mikirtumov/Project/src/public/Data%20base/catalogData.json'
const URL_CART = 'https://raw.githubusercontent.com/GrigoRASH6000v/js2_12_0502/master/students/Grigoriy_Mikirtumov/Project/src/public/Data%20base/getBasket.json'

/*
function makeGetRequest(url){
    return new Promise((resolve, reject)=>{
       let xhr;
       if(window.XMLHttpRequest){
           xhr = new window.XMLHttpRequest();
       }else{
           xhr = new window.ActiveXObject("Microsoft.XMLHTTP");
       };
       xhr.onreadystatechange = function(){ //Ловим момент ответа от сервера
           if(xhr.readyState===4){ // В redystate хранится статус запроса, цифра 4, означает что запрос выполнен
               if(xhr.status!==200){
                   reject(xhr.responseText)
               }
               let body = JSON.parse(xhr.responseText)
               resolve(body) //responseText возвращает строковое значение, содержащее ответ на запрос в виде текста, или null, если запрос был неудачным или еще не был отправлен.
           } 
       };
       xhr.open('GET', url);
       xhr.send();
    })
    
}
*/
//Общий класс для единицы товара
class GoodItem {
    constructor(good){
        this.id = good.id_product;
        this.title = good.product_name;
        this.price = good.price;
        this.img = good.img;
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
       return this.goods.find(el=>el.id_product===goodId)  
    }
    totalCost(){
        let sum = 0;
        this.goods.forEach(good=>sum += good.price)
        this.amount = sum;
    }
    
    
    render(){
        let listHtml='';
        this.goods.forEach((good)=>{
            listHtml+=new GoodItem(good).render()
        });
        this.container.innerHTML = listHtml;
        this.initListeners();
        this.totalCost();
    }
    
}


//Наследуемся от класса GoodList
class GoodCatalog extends GoodList{
    addToCart(goodElem){//Здесь данные должны отправлятся на сервак, но т.к мы этого делать ещё не умеем пусть будет так
        cart.checkQuantity(goodElem);
    }
    async fetchData(url){
        let response = await fetch(url);
        let datajson = await response.json();
        this.goods = datajson;
        this.render();
    }
};


// Создаём каталог товара на базе класса GoodCatalog
const catalog = new GoodCatalog('.products');
catalog.fetchData(URL_CATALOG);



class GoodItemCart {
    constructor(good){
        this.id = good.id_product;
        this.title = good.product_name;
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
    };
}


//Наследуемся от класса GoodList
class GoodCart extends GoodList {
    constructor(...attrs){ //Собираем все элементы родительского конструктора
        super(attrs); //Передаём все элементы в новый конструктор
        this.amount = 0;
        this.countGoods = 0;
    }
    checkQuantity(goodItem){ // Пока нет backand пусть будет так
        if(this.findElement(goodItem.id_product)){
            this.goods[this.findIndexGood(goodItem)].quantity++;
            this.render();
        }else{
            goodItem.quantity=1;
            this.goods.push(goodItem);
            this.render();
            this.countGoods++
        }
    }
    async fetchData(url){
        let response = await fetch(url);
        let dataJson = await response.json();
        this.goods = dataJson.contents;
        this.amount = dataJson.amount;
        this.countGoods = dataJson.countGoods
        this.render();
    }
    findIndexGood(good){
        return this.goods.findIndex(el=>el===good)
    }
    incQuantity(){};
    decQuantity(){};
    deleteGood(goodRemoveId){
        this.goods.splice(this.findIndexGood(goodRemoveId), 1);
        this.render();
        this.countGoods--
    }
    render(){
        let listHtml='';
        this.goods.forEach((good)=>{
            listHtml+=new GoodItemCart(good).render();
        })
        this.container.innerHTML = listHtml;
        this.initListeners();
        this.totalCost();
    }
}
//Создаём корзину на базе класса GoodCart
const cart = new GoodCart('.cart-block');
cart.fetchData(URL_CART);

document.querySelector('.btn-cart').addEventListener('click', () => {
    document.querySelector('.cart-block').classList.toggle('invisible');
});

let 