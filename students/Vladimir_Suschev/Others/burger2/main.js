let checkIn = document.querySelector('#checkIn')
// let checkOut = document.querySelector('#chekOut')
checkIn.addEventListener('click', checkBurg)
function checkBurg() {
  new Burger
}
class Burger {
  constructor(s = 'sizeBurg', fi = 'fills', st = 'stuff') {
    this.size = this._check(s)
    this.fill = this._check(fi)
    this.co = 0
    this.ca = 0
    this.stufStr = ' '
    this.stuffAll = this._getStuffAll(st)
    this.len = this.stuffAll.length
    this.cost = this._getCost()
    this.calories = this._getCalories()
    this.viewer = document.querySelector('#viewBurg')
    this._init()
    console.log(this.cost)
  }
  _init() {
    console.log("Создан бургер:")
    console.log(this)
    this.template = `<div> 
                        <img src="https://raw.githubusercontent.com/azazel87/js2_12_0502/master/students/Vladimir_Suschev/Others/burg.png" width="64" height="64">
                        ${this.size.name} бургер ${this.fill.name} ${this.stufStr}
                    </div>
                    <div> 
                    Стоимость ${this.cost}$   Калорийность ${this.calories}Kkall
                    </div>`
    this.viewer.insertAdjacentHTML('afterbegin', this.template)
  }
  _check(item) {
    let el = document.getElementById(item)
    let ind = el.options.selectedIndex
    let sel = el.options[ind]
    return {
      name: sel.value,
      cost: +sel.dataset.pay,
      calories: +sel.dataset.cals
    }
  }
  _getStuffAll(attrName) {
    let obj = [...document.querySelectorAll(`input[name=${attrName}]:checked`)]
    console.log(obj)
    let arr = []
    obj.forEach(el => {
      this.co += +el.dataset.pay
      this.ca += +el.dataset.cals
      this.stufStr += ', ' + el.value
    })
    return arr
  }

  _getCost() {
    return this.size.cost + this.fill.cost + this.co
  }
  _getCalories() {

    return this.size.calories + this.fill.calories + this.ca
  }
}

