/* 
3. *Некая сеть фастфуда предлагает несколько видов гамбургеров:
### Маленький (50 рублей, 20 калорий).
### Большой (100 рублей, 40 калорий). 

### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
- С сыром (+10 рублей, +20 калорий);
- С салатом (+20 рублей, +5 калорий);
- С картофелем (+15 рублей, +10 калорий). 

### Дополнительно гамбургер можно:
- посыпать приправой (+15 рублей, +0 калорий);
- полить майонезом (+20 рублей, +5 калорий). 

### Напишите программу, рассчитывающую стоимость и калорийность гамбургера. 
Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.
 */

let btn = document.querySelector ('#okBtn')
let btn2 = document.querySelector ('#checkBtn')
let burgers = []
btn.addEventListener ('click', addBurger)
btn2.addEventListener ('click', checkBurgers)

function addBurger () {
    let burger = new Burger ()
    burgers.push (burger)
}

function checkBurgers () {
    console.log(burgers)
    if (burgers.length) {
        console.log(`Общая стоимость бургеров на странице: ${burgers[0].get_price(burgers)} $,
        суммарная калорийность - ${burgers[0].get_calory(burgers)} калорий.`)
    }
}

class Burger {
    constructor (s = 'size', st = 'stuffings', adds = 'additions', target = document.querySelector ('#burgers')) {
        this.size = this._check(s)
        this.stuffings = this._check(st)
        this.additions = this._getArray(adds)
        this.calories = this._get_calories()
        this.cost = this._get_cost()
        this.template = ''
        this.target = target // куда добавлять бургеры
        this._init()
    }

    _init () {
        console.log("Создан бургер:")
        console.log(this)
        this.template = `<div class="burger ${this.size.name}">
                            <img src="https://mverissimo.github.io/tweenslideshow/dist/assets/images/burger.png" width="300" height="300">
                            <span class="cost">${this.cost}</span>
                            <span class="calories">${this.calories}</span>
                        </div>`
                        this.target.insertAdjacentHTML('afterbegin', this.template) // новые бургеры добавляются вверху
    }
    _check (attrName) {
        let obj = document.querySelector (`input[name=${attrName}]:checked`)
        return {
            name: obj.value,
            cost: +obj.dataset.cost, 
            calories: +obj.dataset.calory
        }
    }
    _getArray (attrName) {
        let objArr = [...document.querySelectorAll (`input[name=${attrName}]:checked`)]
        let arr = []
        objArr.forEach (el => {
            arr.push ({
                name: el.value,
                cost: +el.dataset.cost,
                calories: +el.dataset.calory
            })
        })
        return arr
    }
    get_price(objects) {
        return objects.reduce((a, b) => +a + +b["cost"], 0)
    }
    get_calory(objects) {
        return objects.reduce((a, b) => +a + +b["calories"], 0)
    }
    _get_cost() {
        return this.size.cost + this.stuffings.cost + (this.additions.length ? this.get_price(this.additions) : 0)
    }
    _get_calories() {
        return this.size.calories + this.stuffings.calories + (this.additions.length ? this.get_calory(this.additions) : 0)
    }
}