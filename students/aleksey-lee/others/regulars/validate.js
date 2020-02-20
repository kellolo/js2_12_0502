'use strict'

class Validate {
  constructor(form, inputsClassSelector = '.valid'){
    this.form = form
    this.inputsClassSelector = inputsClassSelector
    this.inputsClassName = this.inputsClassSelector.slice(1)
    this.inputs = this.form.querySelectorAll(this.inputsClassSelector)

    this.regName = /^[a-zA-Zа-яА-Я]+$/;  //регулярка для имени
    this.regPhone = /^\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/i;  //регулярка для телефона формат +7(000)000-0000
    this.regEmail = /^[0-9a-z_\-]+@[0-9a-z_^\.]+\.[a-z]{2,3}$/i;  //регулярка для телефона формат +7(000)000-0000
    this.regText = /.+/i;  //регулярка для текста

    this._validateForm()
  }

  //Вешаем валидацию на событие отправки формы
  _validateForm() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      if ( this._validateInputs() ) {
        console.log('Форма отправлена')
      } else {
        console.log('Форма НЕ отправлена')
      }
      
    })
  }

  //Валидация инпута
  _validInput(input, reg) {
    let value = input.value
    let isSending = false;
    if ( reg.test(value) ) {
      this._addRemoveError(input)
      isSending = true;
    } else {
      this._addClassError(input)
    }
    return isSending
  }

  //Валидация всех инпутов
  _validateInputs() {
    let inputsValid = [];

    this.inputs.forEach( input => {
      if( input.classList.contains( this._getClassName('name') ) ){
        inputsValid.push( this._validInput(input, this.regName) ? true : false )
      } else if( input.classList.contains( this._getClassName('phone') ) ){
        inputsValid.push( this._validInput(input, this.regPhone) ? true : false)
      } else if( input.classList.contains( this._getClassName('email') ) ){
        inputsValid.push( this._validInput(input, this.regEmail) ? true : false)
      } else if( input.classList.contains( this._getClassName('text') ) ){
        inputsValid.push( this._validInput(input, this.regText) ? true : false)
      }
    })

    return inputsValid.every(res => res )
  }

  /**
   * Получаем название класса, по которому происходит валидация
   * *-text, *-name, *-phone, *-email
   * @param {string} text 
   */
  _getClassName(text) {
    return (this.inputsClassName+'-'+text)
  }

  /**
   * Удаляем класс *-error у инпута
   * @param {dom-element} input 
   */
  _addRemoveError(input){
    input.classList.remove( (this.inputsClassName+'-error') )
  }

  /**
   * Добавляем класс *-error инпуту
   * @param {dom-element} input 
   */
  _addClassError(input){
    input.classList.add( (this.inputsClassName+'-error') )
  }
}

const form = document.getElementById('form');
let valid = new Validate(form);

