'use strict'

//Бургеры
const burgerTypes = [
  {
    id: 1,
    value: "smallsize",
    title: 'Малый размер',
    price: 50,
    calory: 20
  },
  {
    id: 2,
    value: "bigsize",
    title: 'Большой размер',
    price: 100,
    calory: 40
  }
]

//Начинка
const burgerStuff = [
  {
    id: 101,
    value: "cheese",
    title: 'Сыр',
    price: 10,
    calory: 20
  },
  {
    id: 102,
    value: "salad",
    title: 'Салат',
    price: 20,
    calory: 5
  },
  {
    id: 103,
    value: "potato",
    title: 'Картофель',
    price: 15,
    calory: 10
  }
]

//Приправы
const burgerSpice = [
  {
    id: 201,
    value: "spice",
    title: 'Приправа',
    price: 15,
    calory: 0
  },
  {
    id: 202,
    value: "sauce",
    title: 'Соус',
    price: 20,
    calory: 5
  },
]


class Burgers {
  constructor(container) {
    this.$container = document.querySelector(container);
    
    this._init();
    this._bindHandlers();
  }

  /**
   * Инициализация
   */
  _init() {
    this.typesBurger = burgerTypes
    this.typesBurgerName = 'burgerType'//name у инпутов группы
    this.stuffBurger = burgerStuff
    this.stuffBurgerName = 'burgerStuff'//name у инпутов группы
    this.spiceBurger = burgerSpice
    this.spiceBurgerName = 'burgerSpice'//name у инпутов группы

    this.$container.innerHTML = this._renderBurgers()
                              + this._renderStuffing()
                              + this._renderSpices()
                              + this._renderTotalWrapper()

    this.$totalPrice = this.$container.querySelector('#totalPrice');
    this.$totalCalorys = this.$container.querySelector('#totalCalorys');
  }

  /**
   * Навешиваем обработчики событий
   */
  _bindHandlers(){
    this._bindTypesHandlers()
    this._bindStuffHandlers()
    this._bindSpiceHandlers()
  }

  /**
   * Рендер блока с бургерами
   */
  _renderBurgers(){
    return `
      <fieldset class="burger-types">
        <legend>Выберите бургер</legend>
          `+
          this.typesBurger.map(types => this._renderLabelBox({
              type: 'radio',
              name: this.typesBurgerName,
              text: types.title,
              value: types.value,
              price:types.price,
              calory: types.calory,
              labelClass: 'ggg'
            })
          ).join('')
          +`
      </fieldset>
    `
  }

  /**
   * Рендер блока с Начинками
   */
  _renderStuffing(){
    return `
      <fieldset class="burger-stuff">
        <legend>Выберите Начинку бургера</legend>
          `+
          this.stuffBurger.map(types => this._renderLabelBox({
              type: 'radio',
              name: this.stuffBurgerName,
              text: types.title,
              value: types.value,
              price: types.price,
              calory: types.calory,
              labelClass: 'www'
            })
          ).join('')
          +`
      </fieldset>
    `
  }

  /**
   * Рендер блока с Приправами
   */
  _renderSpices(){
    return `
      <fieldset class="burger-spice">
        <legend>Добавьте Приправу бургера</legend>
          `+
          this.spiceBurger.map(types => this._renderLabelBox({
              type: 'checkbox',
              name: this.spiceBurgerName,
              text: types.title,
              value: types.value,
              price: types.price,
              calory: types.calory,
              labelClass: 'uuu'
            })
          ).join('')
          +`
      </fieldset>
    `
  }

  /**
   * Рендер отдельного инпута
   */
  _renderLabelBox(attr){
    return `<label class="${attr.labelClass}">
      <input 
          type="${attr.type}" 
          name="${attr.name}" 
          value="${attr.value}" 
          data-price="${attr.price}"
          data-calory="${attr.calory}"
      > ${attr.text}
    </label>`
  }

  /**
   * Вывод итогового блока
   */
  _renderTotalWrapper(){
    this.totalPrice = 0
    this.totalCalorys = 0

    return `<div class="totals">
      <p>Итоговая стоимость бургера: <strong><span id="totalPrice">${this.totalPrice}</span> руб.</strong></p>
      <p>Итоговая калорийность бургера: <strong><span id="totalCalorys">${this.totalCalorys}</span> калорий.</strong></p>
    </div>`
  }

  /**
   * Навешиваем событие change на Бургеры
   * (Можно было объединить в один метод)
   */
  _bindTypesHandlers(){
    document.querySelectorAll(`input[name="${this.typesBurgerName}"]`).forEach((input) => {
      input.addEventListener('change', (event) => {
        this.calc();
      });
    })
  }

  /**
   * Навешиваем событие change на Начинки
   */
  _bindStuffHandlers(){
    document.querySelectorAll(`input[name="${this.stuffBurgerName}"]`).forEach((input) => {
      input.addEventListener('change', (event) => {
        this.calc();
      });
    })
  }

  /**
   * Навешиваем событие change на Приправы
   */
  _bindSpiceHandlers(){
    document.querySelectorAll(`input[name="${this.spiceBurgerName}"]`).forEach((input) => {
      input.addEventListener('change', (event) => {
        this.calc();
      });
    })
  }

  /**
   * Подсчет цены и калорийности бургера
   */
  calc(){
    let inputs = [
      ...this._getCheckedInputs(this.typesBurgerName),
      ...this._getCheckedInputs(this.stuffBurgerName),
      ...this._getCheckedInputs(this.spiceBurgerName)
    ];
    
    this.totalPrice = inputs.reduce((sum, input) => sum + +input.dataset.price, 0)
    this.$totalPrice.textContent = this.totalPrice;
    
    this.totalCalorys = inputs.reduce((sum, input) => sum + +input.dataset.calory, 0)
    this.$totalCalorys.textContent = this.totalCalorys;
  }

  /**
   * получить прочеканые инпуты
   */
  _getCheckedInputs(name){
    return document.querySelectorAll(`input[name="${name}"]:checked`);
  }
}

const burgers = new Burgers('#app');